import React, { Component } from "react";
import "../styles/recipe.css";
import { Link } from "react-router-dom";
// import { pathToFileURL } from "url";
import { baseUrl } from "./Home";

// const url = "http://localhost:4000/"
class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompletedRecipe: [],
      Feedback: [],
      NewRecipe: []
      // Pantry: []
    };
  }

  fetchData = () => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${baseUrl}/ingredients`, {
      method: "GET",
      headers
    })
      .then(data => data.json())
      .then(data => console.log("and the loser is", data))
      .then(data =>
        this.setState({
          CompletedRecipe: data
        })
      );
  };

  pantrySend = () => {
    // e.preventDefault();
    const pantry = { ingredient: this.state.ingredient };
    fetch(`${baseUrl}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pantry)
    });
  };

getRecipe = e => {
  e.preventDefault();
  const body = {
    name: this.state.recipeitem
  };
  fetch(`${baseUrl}/recipe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(data => console.log("wut about tis chikin salad", data))
  .then(data => this.setState({NewRecipe: data}))
};
//onSubmit works, be CAREFUL!!! 
  onSubmit = e => {
    e.preventDefault();
    fetch(`${baseUrl}/ingredients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => this.setState({CompletedRecipe: data})) 
  };

  handlechange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div> 
        <form onSubmit={this.onSubmit}>
          <h1>What's for Dinner?</h1>
          <p>Here is where you put what items you have 
            in the kitchen right now
          </p>

          <input
            type="text"
            placeholder="ingredient"
            name="ingredient"
            onChange={this.handlechange}
          />
          <br />
          
          <br />
          <button type="submit">crack that egg!</button>
        </form>

        <h1 className="recipe">
          You still need:{" "}
          {this.state.CompletedRecipe.map((item, index) => 
            <li key={item+1}>{item}</li>
          )}
        </h1>
        <div>
              <form onSubmit={this.getRecipe}>
              Getting a recipe based off of ingredients coming back..
              <input type="text" name="recipeitem" onChange={this.handlechange}/>
              <button>Stir the egg</button>
              </form>
          </div>
          
          {/* <div> why isnt this working
            {this.state.Feedback.map((item) =>
             <li key={item+1}>{item}</li> 
              )}
          </div> */}

        <Link className="link" to="/">
          Back Home
        </Link>
      </div>
    );
  }
}

export default Recipe;
