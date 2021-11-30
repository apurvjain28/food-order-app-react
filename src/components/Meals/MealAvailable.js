import React, { useState, useEffect, useCallback } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./MealAvailable.module.css";
import Card from "../UI/Card";

import useHttp from "../../hooks/use-http";

const MealAvailable = () => {
  const [meals, setMeals] = useState([]);

  const transformMeal = useCallback((mealObj) => {
    const loadedMeals = [];

    for (const mealKey in mealObj) {
      loadedMeals.push({
        id: mealKey,
        description: mealObj[mealKey].description,
        name: mealObj[mealKey].name,
        price: mealObj[mealKey].price,
      });
    }

    setMeals(loadedMeals);
  }, []);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp(transformMeal);

  useEffect(() => {
    fetchMeals({
      url: "https://food-order-app-52e74-default-rtdb.firebaseio.com/foodDB.json",
    });
  }, [fetchMeals]);

  let mealList = <h2>No meals found.</h2>;

  if (meals.length > 0) {
    mealList = (
      <ul>
        {meals.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            ></MealItem>
          );
        })}
      </ul>
    );
  }

  let content = mealList;

  if (error) {
    content = "Menu cannot be loaded. Menu unavailable.";
  }

  if (isLoading) {
    content = "Loading meals...";
  }

  // const DUMMY_MEALS = [
  //   {
  //     id: "m1",
  //     name: "Sushi",
  //     description: "Finest fish and veggies",
  //     price: 22.99,
  //   },
  //   {
  //     id: "m2",
  //     name: "Schnitzel",
  //     description: "A german specialty!",
  //     price: 16.5,
  //   },
  //   {
  //     id: "m3",
  //     name: "Barbecue Burger",
  //     description: "American, raw, meaty",
  //     price: 12.99,
  //   },
  //   {
  //     id: "m4",
  //     name: "Green Bowl",
  //     description: "Healthy...and green...",
  //     price: 18.99,
  //   },
  // ];

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default MealAvailable;
