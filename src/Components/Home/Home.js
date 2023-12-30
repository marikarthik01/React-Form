import React, { useState } from 'react';
import Modal from '../Model/Model.js'
import './Home.css'
import Navbar from '../Navbar/Navbar.js';

const Home = ({ onClose }) => {


  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
    
   
return (
    <>
    <Navbar head={'View Audience'} />
  <div className={`home ${isModalOpen ? 'modal-active' : ''}`}>
   
  <div>

    <button className='save-btn' onClick={openModal}>Save Segment</button>

    {isModalOpen && <Modal onClose={closeModal} />}
  </div>

    </div>
    </>
  );
};

export default Home;
