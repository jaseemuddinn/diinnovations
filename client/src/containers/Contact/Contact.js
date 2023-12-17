import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import classNames from '../../utils/classNames';

const Contact = () => {
  const isLarge = window.innerWidth > 768;

  let width = 300,
    height = 300;

  if (isLarge) {
    width = 600;
    height = 500;
  }

  return (
    <div className={classNames('flex-row a-c contact', { isLarge })}>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width={width}
            height={height}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=savita%20vihar%20market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
      <div className="address">
        <div className="head">
          <span>Studio</span>
        </div>
        <p>
          D Innovations <br />
          101, Ajnara Tower <br />
          LSC, Savita Vihar <br />
          Delhi, 110092
        </p>
        <div className="contactItem">
          T:
          <a href="tel:+919911405689">+91 9911405689</a>
        </div>
        <div className="contactItem">
          E:
          <a href="mailto:info@dinnovations.in">info@dinnovations.in</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
