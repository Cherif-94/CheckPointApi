import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cocktail.css";
const Cocktail = ({ cocktail }) => {
  return (
    <div className="card">
      <img src={cocktail.strDrinkThumb} alt="Cocktail" />
      <div className="desc">
        <h4>{cocktail.strDrink}</h4>
        <p>{cocktail.strInstructions}</p>
        <p>Categorie : {cocktail.strCategory}</p>
      </div>
      <Link to={`/Cocktails/DetailCocktail/${cocktail.idDrink}`}>
        <Button variant="success">Details</Button>{" "}
      </Link>
    </div>
  );
};

export default Cocktail;
