import React from 'react';
import close from '../assets/close.svg';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import algorithms from '../assets/algorithms.png';
import devnotes from '../assets/devnotes.png';
import oscs from '../assets/oscs.png';

const YourComponent = () => {
  return (
    <div>

      <a href="https://github.com/rafiulislam89" target="_blank" rel="noopener noreferrer">
        <img src={devnotes} alt="Dev Notes" />
      </a>

      <a href="https://rafiulislam.rf.gd" target="_blank" rel="noopener noreferrer">
        <img src={oscs} alt="OSCS" />
      </a>

      <a href="https://example.com/algorithms" target="_blank" rel="noopener noreferrer">
        <img src={algorithms} alt="Algorithms" />
      </a>


    </div>
  );
};

export default YourComponent;

