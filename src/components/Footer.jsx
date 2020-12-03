import React from 'react';

const Footer = () => {
  return (
    <div className="container mb-5">
      <div className="row top-lang-row">
        <div>
          <ul className="list-group list-group-horizontal languages">
            <li>English (US)</li>
            <li>Español</li>
            <li>Portugués (Brasil)</li>
            <li>Francais (France)</li>
            <li>Deutch</li>
            <li>Italiano</li>
            <li>日本語</li>
            <li>العربية</li>
            <li>हिन्दी</li>
            <li>中文(简体)</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div>
          <small style={{ color: '#94979E' }}>Facebook © 2020</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
