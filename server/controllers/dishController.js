const Dish = require('../models/dishModel');

const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).send(err);
  }
};

const toggleDishStatus = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (dish) {
      dish.isPublished = !dish.isPublished;
      await dish.save();
      req.io.emit('dishStatusChanged', dish);
      res.json(dish);
    } 
    else {
      res.status(404).send('Dish not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getDishes, toggleDishStatus };
