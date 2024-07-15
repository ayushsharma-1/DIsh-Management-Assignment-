import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes, togglePublishStatus }) => {
  return (
    <div>
      {
      dishes.map(dish => (
        <DishCard key={dish.dishId} dish={dish} togglePublishStatus={togglePublishStatus} />
      ))}
    </div>
  );
};

export default DishList;
