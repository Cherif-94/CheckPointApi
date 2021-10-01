import axios from "axios";
import { MDBIcon } from "mdbreact";

import React, { useEffect, useState } from "react";
import Filter from "../Component/Filter";
import Cocktail from "./Cocktail";
import "./Cocktails.css";

const Cocktails = () => {
  const [cocktail, setCocktail] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    getCocktail();
  }, [text]);
  const getCocktail = async () => {
    try {
      setLoad(true);
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      setCocktail(result.data.drinks);
      setLoad(false);
    } catch (error) {
      setError(true);
      setLoad(false);
    }
  };
  return (
    <div>
      <Filter text={text} setText={setText} />
      <h1> this is the Cocktails List Page</h1>

      {load ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <h1>Error to get the data</h1>
      ) : cocktail == null ? (
        <h1>
          There is no cocktail with this name <br />{" "}
          <MDBIcon icon="glass-cheers" />
        </h1>
      ) : (
        <div className="listCocktail">
          {cocktail.map((el) => (
            <Cocktail cocktail={el} key={el.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cocktails;
