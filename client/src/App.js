import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DishList from './components/DishList';
import RealTimeUpdater from './components/RealTimeUpdater';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeSlider from './WelcomeSlider';

const App = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const togglePublishStatus = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/dishes/${id}/toggle`);
      setDishes(dishes.map(dish => dish._id === id ? response.data : dish));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomeSlider />} />
          <Route path="/dish-management" element={
            <div className='main-content'>
              <h1 className='Dish1'>Dish Dashboard Management</h1>
              <DishList dishes={dishes} togglePublishStatus={togglePublishStatus} />
              <RealTimeUpdater setDishes={setDishes} />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
