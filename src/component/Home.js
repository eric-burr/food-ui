import React, {Component} from 'react'
import { Link } from "react-router-dom"
import Display from './Display'
import { pathToFileURL } from 'url';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            newUser: '',
            
        }
     }
    

    componentDidMount() {
        const headers = {'Content-Type': 'application/json'}
            fetch("http://localhost:4000/users", {
            method: "GET",
            headers
        })
        .then(data => data.json())
        .then(data => data.map((data) => <Display info={data}/> //info is being passed to display
            
        )).then(data => {
            this.setState({newUser: data})
        })
       
    }   
    
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
                <Link to="Recipe">Recipe Guide</Link> <br />
                <br />
                
                <form onSubmit={this.createUser}> 
                    <label for="name">Name</label>
                    <input type="text" placeholder="Username" name="name" onChange={this.userChange}/><br/>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={this.userChange}/><br/>
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="email" onChange={this.userChange}/><br/><br/>
                    <label for="submit">Enter</label>
                    <button type="submit" name="submit">Submit</button>
                </form>  

                <div>
                <br/>
                <br/>
                    <form onSubmit={this.formLogin}> Login      
                        <input type="text" placeholder="Username" name="loginUsername"/>
                        <input type="password" placeholder="Password" name="loginPassword" />
                        <button type="submit">Log In</button>
                    </form>
                </div>
                
                <div>is there anything here: {this.state.newUser}</div>
            </div>
        )
    }
}


export default Home