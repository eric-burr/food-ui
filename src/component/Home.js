import React, {Component} from 'react'
import { Link } from "react-router-dom"
import Display from './Display'
// import { pathToFileURL } from 'url';
// export const baseUrl = "http://localhost:4001"
export const baseUrl = "https://foodapi2.herokuapp.com"

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            newUser: ''
            
        }
     }
    
    componentDidMount() {
        const headers = {'Content-Type': 'application/json'}
            fetch(`${baseUrl}/users`, {
            method: "GET",
            headers
        })
        .then(res => res.json())
        .then(data => data.map((data) => <Display key={data._id} info={data}/> //info is being passed to display
            
        ))
        
        .then(data => {
            this.setState({newUser: data})
        });
       
    };   
    
createUser = e => {
    e.preventDefault();
    //the 'state' of the values i want to send to db from the input field
const body = {
    name : this.state.name,
    password: this.state.password,
    email: this.state.email
};
console.log(body)
    fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
    // gives submit button the submit feel
    .then(res => res.json())
    .then(data => console.log("does this show in he console", data))
    // .then((res) => console.log(res.body))
    .then(() => window.location.reload(false)); //is this reloading the broswer?
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
                    <label >Name</label>
                    <input type="text" placeholder="Username" name="name" onChange={this.userChange}/><br/>
                    <label >Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={this.userChange}/><br/>
                    <label >Email</label>
                    <input type="email" name="email" placeholder="email" onChange={this.userChange}/><br/><br/>
                    <label >Enter</label>
                    <button type="submit" name="submit">This is the button!</button>
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