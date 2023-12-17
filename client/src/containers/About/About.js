import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="head">
        <span>STUDIO PROFILE</span>
      </div>
      <div className="profile flex-row a-c">
        <p className="profileDesc">
          D Innovations is a multidisciplinary architecture, interior design and landscaping firm.

          Vijay&nbsp;Kapoor & M&nbsp;J&nbsp;Naseem are the Joint Principal Architects of D Innovations.

          The firm works at multiple scales and with various organizations right from private clients to corporates. This allows us to experiment and diversify our work: architectural & interior projects such as luxury villas, high-end residences, and unique offices.

          D Innovations' design approach is to re-connect architecture with nature, make optimum use of space, natural materials, lighting & landscape to reinvent and transform living environments and urban spaces.

          The firm strives to create design that inspires, approaching each project, regardless of size & scale, with an understanding that architecture has a unique power to influence lifestyle and society.

          Our forte is attention to details and customization. Honesty to design, client satisfaction, and sustainability are the driving forces, along with the ability to constantly explore & evolve.

          We are dedicated to unique design approaches adapted to each project, and achieving a balance between functionality & aesthetics, context, climate, material, cost & time-frame.
        </p>
        <div className="imageContainer">
          <img src="https://www.imexgulf.com/wp-content/uploads/2018/02/businesspartners.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
