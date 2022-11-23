import React from 'react';
import '../Card/Card.css'
//import './Carousel.css';
import Card from "../Card/Card"

function Carousel(props) {
  console.log(props.title)
  return (
    //   <div className="carousel-container">
    //       <div className="carousel-wrapper">
    //           <div className="carousel-content-wrapper">
    //               <div className="carousel-content">
                      <Card key={props.link_id}
                            subjectIcon={props.subjectIcon}
                            title={props.title}
                            description={props.description}
                            link={props.link}/>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
  )
}

export default Carousel
