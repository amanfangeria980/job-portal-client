import React from 'react'
import InputField from './../components/InputField';

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-mediumb-2'>Type of employment</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}
                />
                <span className='checkmark'></span>Any
            </label>

            <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
            <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
            <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
        </div>
    </div>
  )
}

export default EmploymentType