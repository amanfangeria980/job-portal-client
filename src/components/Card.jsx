import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin,FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi';
const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
    jobTitle,
  } = data;
  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col  sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h1 className="text-primary mb-1">{companyName}</h1>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="flex gap-2 text-primary/70 text-base flex-wrap mb-2">
            <span className="flex items-center gap-2"><FiMapPin/> {jobLocation}</span>
            <span className="flex items-center gap-2"><FiClock /> {employmentType}</span>
            <span className="flex items-center gap-2"><FiDollarSign/> {minPrice}-{maxPrice}k</span>
            <span className="flex items-center gap-2"><FiCalendar/> {postingDate}</span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
