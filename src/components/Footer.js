import React from 'react';

const Footer = () => (
    <footer className="footer">
      <button className="btn btn-word">
        <div>
          <i className="fab fa-wikipedia-w" />
          <p className="font-title">Words</p>
        </div>
      </button>
      {/* <button className="btn">
        <div>
          <i className="fas fa-home" />
          <p className="font-title">Home</p>
        </div>
      </button> */}
      <div className="verticalLine" />
      <button className="btn btn-list">
        <div>
          <i className="fas fa-list" />
          <p className="font-title">My List</p>
        </div>
      </button>
    </footer>
  );

export default Footer;
