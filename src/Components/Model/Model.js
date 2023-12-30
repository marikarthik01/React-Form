// Modal.js
import React, { useState, useEffect } from 'react';
import './Model.css'
import { TiMinus } from "react-icons/ti";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Modal = ({ onClose }) => {
  const initialOptions = ["First Name", "Last Name", "Gender", "Age", "Account Name", "City", "State"];
  const [dropdowns, setDropdowns] = useState([{ id: 1, selectedOption: '', availableOptions: initialOptions }]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    // Update selected options whenever dropdowns change
    const allSelectedOptions = dropdowns.map(dropdown => dropdown.selectedOption);
    setSelectedOptions(allSelectedOptions);
  }, [dropdowns]);

  const addNewDropdown = () => {
    // Check if there are available options left
    if (selectedOptions.length < initialOptions.length) {
      const availableOptions = initialOptions.filter(option => !selectedOptions.includes(option));
      setDropdowns(prevDropdowns => [
        ...prevDropdowns,
        { id: prevDropdowns.length + 1, selectedOption: '', availableOptions }
      ]);
    }
  };

  const handleDropdownChange = (index, value) => {
    setDropdowns(prevDropdowns => {
      const updatedDropdowns = prevDropdowns.map((dropdown, i) => {
        if (i === index) {
          return { ...dropdown, selectedOption: value };
        }
        return dropdown;
      });

      // Remove the selected option from availableOptions for subsequent dropdowns
      const selectedOptions = updatedDropdowns.map(dropdown => dropdown.selectedOption);
      const updatedDropdownsWithOptions = updatedDropdowns.map((dropdown, i) => {
        if (i > index) {
          return { ...dropdown, availableOptions: initialOptions.filter(option => !selectedOptions.includes(option)) };
        }
        return dropdown;
      });

      return updatedDropdownsWithOptions;
    });
  };

  const handleDeleteDropdown = (index) => {
    setDropdowns(prevDropdowns => prevDropdowns.filter((_, i) => i !== index));
  };

  const handleSaveSegment = async () => {
    const segmentData = {
      segment_name: "last_10_days_blog_visits",
      schema: dropdowns.map(dropdown => ({
        [dropdown.selectedOption]: dropdown.selectedOption
      }))
    };
  
    console.log('Selected Options Format:', segmentData);
  
  };
        
  
  return (
    <>
    <div className="modal">
    <Navbar head={'Saving Segment'} />
    <p className='title'>Enter the Name of the Segment</p>
    <input type='text' className='inpt' placeholder='Name of the Segment'></input>
    <p className='title-2'>To save your segment, You need to add schemas to build the query</p>
    <div className='container'>
      <div className='txt'><span class="dot-1"></span> - User Traits</div>
      <div className='txt'><span class="dot-2"></span> - Group Traits</div>
    </div>
    <div>
      {dropdowns.map((dropdown, index) => (
        <div key={dropdown.id} className='drp-down'>
          <div className='form-inp'>
            <span className="dot-1"></span>
            <select
              name={`cars${index}`}
              id={`cars${index}`}
              className='inpt-2'
              value={dropdown.selectedOption}
              onChange={(e) => handleDropdownChange(index, e.target.value)}
            >
              <option value="" disabled>Add Schema to The Segment</option>
              {dropdown.availableOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='delete' onClick={() => handleDeleteDropdown(index)}>
              <TiMinus className='minus-icon' />
            </div>
          </div>
        </div>
      ))}
      
      <button className='add-new' onClick={addNewDropdown} disabled={selectedOptions.length === initialOptions.length}>
        + Add New Schema
      </button>
    </div>
     {/* Footer Module */}

    <Footer  handleSaveSegment={handleSaveSegment} onClose={onClose} />
    </div>

    </>
  );
};

export default Modal;
