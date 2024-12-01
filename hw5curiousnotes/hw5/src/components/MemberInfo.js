import React from 'react';
import PropTypes from 'prop-types';
import './MemberInfo.css';

const MemberInfo = ({ name, image, bio }) => {
  return (
    <div className="member-container">
      <header className="member-header">
        <h1 className="member-title">{name}</h1>
        <h4 className="member-subtitle">Member Facts</h4>
      </header>
      <div className="member-content">
        <img src={image} alt={name} className="member-image" />
        <p className="member-bio">{bio}</p>
        <p className="wikipedia-note">From Wikipedia</p>
      </div>
    </div>
  );
};

MemberInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default MemberInfo;
