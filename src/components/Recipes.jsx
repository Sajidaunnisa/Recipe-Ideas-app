// src/components/Recipes.jsx
import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

function Recipes({ meals, onSelect }) {
  return (
    <Container>
      <Row>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <Col
              key={meal.idMeal}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
            >
              <Card
                className="h-100 shadow-sm"
                onClick={() => onSelect(meal.idMeal)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {meal.strMeal}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center mt-4">
            No recipes found. Try another search.
          </p>
        )}
      </Row>
    </Container>
  );
}

export default Recipes;
