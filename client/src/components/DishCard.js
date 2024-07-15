import React from 'react';
import './DishCard.css';

const DishCard = ({ dish, togglePublishStatus }) => {
  const buttonStyle = {
    backgroundColor: dish.isPublished ? '#000000' : '#dc3545',
    border: 'none',
    padding: '10px 20px',
    margin: '30px 0',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff'
  };

  return (
    <div className="List">
      <img src={dish.imageUrl} alt={dish.dishName} />
      <h2>{dish.dishName}</h2>
      <button style={buttonStyle} onClick={() => togglePublishStatus(dish._id)}>
        {dish.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default DishCard;
