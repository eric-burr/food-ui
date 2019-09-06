import React, {Component} from "react"

class Form extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="email" />
                </form>
            </div>
        )
    }
}





export default Form