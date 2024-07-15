import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const RealTimeUpdater = ({ setDishes }) => {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:5000');

    socket.on('dishStatusChanged', (updatedDish) => {
      setDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish._id === updatedDish._id ? updatedDish : dish
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [setDishes]);

  return null;
};

export default RealTimeUpdater;
