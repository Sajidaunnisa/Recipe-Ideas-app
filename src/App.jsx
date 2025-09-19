// src/App.jsx
import React, { useState } from "react";
import NavbarComponent from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Recipes from "./components/Recipes";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchMeals = async ({ ingredient, category, exclude }) => {
    try {
      let url = "";
      if (ingredient) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      } else if (category) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`; // default
      }

      const res = await fetch(url);
      const data = await res.json();
      let mealsData = data.meals || [];

      // Exclude filter
      if (exclude) {
        mealsData = mealsData.filter(
          (meal) => !meal.strMeal.toLowerCase().includes(exclude.toLowerCase())
        );
      }

      setMeals(mealsData);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const fetchMealDetails = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setSelectedMeal(data.meals[0]);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <>
      <NavbarComponent />
      <SearchBar onSearch={fetchMeals} />
      <Recipes meals={meals} onSelect={fetchMealDetails} />
      <RecipeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        recipe={selectedMeal}
      />
    </>
  );
}

export default App;
