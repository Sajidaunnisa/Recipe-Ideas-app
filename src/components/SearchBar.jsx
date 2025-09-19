// src/components/SearchBar.jsx
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");
  const [category, setCategory] = useState("");
  const [exclude, setExclude] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories(data.categories || []);
    };
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ ingredient, category, exclude });
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <Form onSubmit={handleSubmit} className="d-flex flex-wrap gap-2">
            <Form.Control
              type="text"
              placeholder="Enter an ingredient (e.g., chicken)"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.idCategory} value={c.strCategory}>
                  {c.strCategory}
                </option>
              ))}
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Exclude ingredient (e.g., dairy)"
              value={exclude}
              onChange={(e) => setExclude(e.target.value)}
            />
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
