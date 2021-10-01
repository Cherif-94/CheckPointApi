import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailCocktail = () => {
  const [cocktaill, setcocktaill] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const { data } =
      await (axios.get = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    setcocktaill(data.drinks[0]);
  };
  return <div> {cocktaill.strDrink} </div>;
};

export default DetailCocktail;
