import React from 'react';
import './FoodDetails.css';
const FoodDetails = ({meal}) => {
    const {strMeal,strMealThumb,strArea}= meal;
    return (
        <div  className="foodDetails">
            <div>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h5>{strArea}</h5>
        </div>
        </div>
    );
};

export default FoodDetails;