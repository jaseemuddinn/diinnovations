import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './Projects.scss';

// Importing images
import work7 from '../../Img/work7.jpg';
import work8 from '../../Img/work8.jpg';
import work9 from '../../Img/work9.jpg';
import work10 from '../../Img/work10.png';
import work11 from '../../Img/work11.jpg';
import work12 from '../../Img/work12.jpg';
import work13 from '../../Img/work13.jpg';
import work14 from '../../Img/work14.jpg';
import work15 from '../../Img/work15.jpg';
import work16 from '../../Img/work16.jpg';
import work17 from '../../Img/work17.jpg';
import work18 from '../../Img/work18.jpg';
import work19 from '../../Img/work19.jpg';
import work20 from '../../Img/work20.jpg';
import work21 from '../../Img/work21.jpg';
import work22 from '../../Img/work22.jpg';
import work23 from '../../Img/work23.jpg';
import work24 from '../../Img/work24.jpg';
import work25 from '../../Img/work25.jpg';
import work26 from '../../Img/work26.jpg';
import work27 from '../../Img/work27.jpg';
import work28 from '../../Img/work28.jpg';
import work29 from '../../Img/work29.jpg';
import work30 from '../../Img/work30.jpg';
import work31 from '../../Img/work31.jpg';
import work32 from '../../Img/work32.jpg';
import work33 from '../../Img/work33.jpg';
import work34 from '../../Img/work34.jpg';
import work35 from '../../Img/work35.jpg';
import work36 from '../../Img/work36.jpg';
import work37 from '../../Img/work37.jpg';
import work38 from '../../Img/work38.jpg';
import work39 from '../../Img/work39.jpg';
import work40 from '../../Img/work40.jpg';
import work41 from '../../Img/work41.jpg';
import work42 from '../../Img/work42.jpg';


const Projects = () => {
  // Array of project image names
  const projectImages = [work7, work8, work9, work10, work11, work12, work13, work14, work15, work16, work17, work18, work19, work20, work21, work22, work23, work24, work25, work26, work27, work28, work29, work30, work31, work32, work33, work34, work35, work36, work37, work38, work39, work40, work41, work42];

  return (
    <div className="projectsPage">
      <div className="head">
        <span>PROJECTS</span>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={5}>
          {projectImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>  
    </div>
  );
};

export default Projects;
