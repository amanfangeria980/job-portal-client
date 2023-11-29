import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "./../components/Card";
import Jobs from "./Jobs";
const Home = () => {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // Filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filteredItems)

  // Radio Filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // Button based Filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  // Main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // filter input items
    if (query) {
      filteredJobs = filteredItems;
    }

    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => {
          jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selected) ||
            salaryType.toLowerCase() == selected.toLowerCase() ||
            employmentType.toLowerCase() === selected.toLowerCase();

          console.log(filteredJobs);
        }
      );
    }
    return filteredJobs.map((data, i) => <Card data={data} key={i} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main Content */}

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left side */}
        <div className="bg-white p-4 rounded">Left </div>

        {/* Job cards */}
        <Jobs result={result} className="bg-white p-4 rounded-sm" />

        {/* Right Side */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
