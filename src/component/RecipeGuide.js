import React, {Component} from "react"
import '../styles/recipe.css'
import { Link } from "react-router-dom"


// const url = "http://localhost:4000/"
class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CompletedRecipe: [],
            Pantry: []
            
        }
    }

    fetchData = () => {
        const headers = {'Content-Type': 'application/json'}
        fetch("http://localhost:4000/", {
            method: "GET",
            headers
        })
        .then(data => data.json())
        .then(data => this.setState ({
            CompletedRecipe: data
        })
        )
    }   

//     componentDidMount() {
//         this.fetchData()
// }

    onSubmit = e => {     //i am trying to send the inputted string to the api so the api can look at it and then look at the 
        e.preventDefault();
        fetch("http://localhost:4000/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(data => data.json())
        .then(data => this.setState ({
            CompletedRecipe: data
        }))  

        this.state.Pantry.push(this.state.ingredient);
        
    }

    handlechange = ({target}) => {
        this.setState({ [target.name]: target.value});
    }


    render() {
        return(
            
                <div>
                    <form onSubmit={this.onSubmit}>
                        <h1>What's for Dinner?</h1>
                        <p></p>
                       
                        <input id="cheese" type="text" placeholder="ingredient" name="ingredient" onChange={this.handlechange} />
                        <br />
                        <input type="text" placeholder="ingredient" name="ingredient1" onChange={this.handlechange} />
                        <br />
                        <input type="text" placeholder="ingredient" name="ingredient2" onChange={this.handlechange}/>
                        <br />
                        <input type="text" placeholder="ingredient" name="ingredient3" onChange={this.handlechange}/>
                        <br />
                        <button type="submit">crack that egg!</button>

                    </form> 
                    
                    <h1 className="recipe">
                        You still need: {this.state.CompletedRecipe.map((ingredient, index) => {
                             console.log(ingredient)
                            return (
                               <div>{ingredient} </div> 
                                )}
                            )}
                       
                    </h1>

                    <Link className="link" to="/">Back Home</Link>
                </div>
            
        )
    }
}


export default Recipe