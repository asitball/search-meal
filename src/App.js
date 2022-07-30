import React, { useEffect } from 'react';
import { useState } from 'react';
import FoodDetails from './components/FoodDetails/FoodDetails';

const App = () => {
const [searchText, setSearchText] =  useState('');
const [meals, setMeals] = useState([]);
useEffect(() => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => setMeals(data.meals))
},[searchText])
const handleSearchFood = (e)=>{
  setSearchText(e.target.value)
}
  return (
    <div>
      <h1>Search your food you want</h1>
      <input onChange={handleSearchFood} placeholder="search food" type="text" />
      <h3>meals items: {meals.length}</h3>
      {
        meals?.map(meal=> <FoodDetails
        meal={meal}
        ></FoodDetails>)
      }
    </div>
  );
};

export default App;