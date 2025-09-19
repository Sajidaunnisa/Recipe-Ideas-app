// src/components/RecipeModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

function RecipeModal({ show, onHide, recipe }) {
  if (!recipe) return null;

  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ing) ingredients.push(`${ing} - ${measure}`);
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{recipe.strMeal}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-5">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="img-fluid mb-3 rounded"
          />
        </div>
        <h5>Ingredients:</h5>
        <ul>
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h5>Instructions:</h5>
        <p>{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <p>
            🎥{" "}
            <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal;
