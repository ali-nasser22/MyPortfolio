// import React from 'react'
import PropTypes from 'prop-types';
const WorksItems = ({item}) => {
  return (
   <div className="work-card" key={item.id}>
     <img src={item.image} alt="" className="work-image" />
     <h3 className="work-title">{item.title}</h3>
     <a href={item.link}className="work-button">Go <i className="bx bx-right-arrow-alt work-button-icon"></i></a>
   </div>
  
  )
}
WorksItems.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  };
export default WorksItems

