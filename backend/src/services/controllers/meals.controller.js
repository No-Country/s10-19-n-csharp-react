const { Category } = require('../db/models/category.model');
const { Meals } = require('../db/models/meal.model');
const { Restaurant } = require('../db/models/restaurant.model');

const getMeals = async (req, res) => {
  try {
    const meals = await Meals.findAll({
      include: [{ model: Category, attributes: ['name']}, {model: Restaurant, attributes:['name']}]
    });
    res.status(200).json(meals);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const getMealsByQuery = async (req, res) => {
  const key = Object.keys(req.query);
  const value = Object.values(req.query);
  try {
    const meals = await Meals.findAll({
      where: { [key]: value },

      include: [{ model: Category, attributes: ['name']}, {model: Restaurant, attributes:['name']}]
    });
    res.status(200).json(meals);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const getMeal = async (req, res) => {
  const { id } = req.params;
  try {
    const meal = await Meals.findByPk(id, {
      include: [{ model: Category, attributes: ['name']}, {model: Restaurant, attributes:['name']}]
    });

    meal ? res.status(200).json(meal) : res.status(404).send('Meal not found');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const createMeal = async (req, res) => {
  const {
    id,
    name,
    price,
    image,
    description,
    category_id,
    restaurant_id,
    is_vegan,
    is_glutenfree,
    is_proteinplus,
    role_id,
  } = req.body;

  if (role_id !== 2) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const newMeal = await Meals.create({
      id,
      name,
      price,
      category_id,
      restaurant_id,
      image,
      description,
      is_vegan,
      is_glutenfree,
      is_proteinplus,
    });
    newMeal;
    res.status(201).json({ error: false, meal: newMeal });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const updateMeal = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const meal = await Meals.findOne({
      where: {
        id,
      },
    });
    if (!meal) {
      return res.status(404).send('Meal not found');
    }

    await meal.update(body);

    res.status(201).json({ message: 'Meal update', meal: meal });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const deleteMeal = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Meals.findOne({ where: { id: id } });
    if (meal) {
      await Meals.destroy({ where: { id: id } });
      return res.status(202).send('Platillo eliminado');
    } else {
      return res.status(404).send('Platillo no encontrado');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getMeals,
  getMeal,
  updateMeal,
  createMeal,
  deleteMeal,
  getMealsByQuery,
};
