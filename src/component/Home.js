import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Home extends Component{
    
createUser = e => {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
    })
}


userChange = ({target}) => {
    this.setState({ [target.name]: target.value});
}

    render(){
        return(
            <div>
                <iframe src="https://giphy.com/embed/dIxkmtCuuBQuM9Ux1E" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-mrw-weight-dIxkmtCuuBQuM9Ux1E"></a></p>
                <Link to="Recipe">Recipe Guide</Link> <br />
                <br />
                <form onSubmit={this.createUser}> Create User
                    <input type="text" placeholder="Username" name="username" onChange={this.userChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={this.userChange}/>
                    <button type="submit">Create</button>
                </form> <br />

                <form onSubmit={this.formLogin}> Login      
                    <input type="text" placeholder="Username" name="loginUsername"/>
                    <input type="password" placeholder="Password" name="loginPassword" />
                    <button type="submit">Log In</button>
                </form>

            </div>
        )
    }
}


export default Home