import React, {Component} from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#root')


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  class Display extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.info._id,
            name: this.props.info.name,
            modalOpen: false

        }
    }


    updateUser = id => {
        const body = {
            name: this.state.name
        }
        fetch(`http://localhost:4000/update/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
        })
        .then(this.closeModal)
        .then(() => {window.location.reload(false)})
    }

    deleteUser = id => {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "appplication/json"}
        })
        .then(this.closeModal)
        .then(() => {window.location.reload(false)})
    }
    updateChange = ({target}) => {
        this.setState({ [target.name]: target.value});
}


    render(){
        
        return (
            <div>
                    {/* {this.state.id} */}
                    {this.state.name}
                    <button onClick={() => this.setState({modalOpen: true})}>Edit</button>
                    <Modal
                    isOpen={this.state.modalOpen}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.setState({modalOpen: false})}
                    style={customStyles}
                    contentLabel="Example Modal"
                     >
                        
                        <form>
                            <label for="name">Update</label>
                            <input type="text" name="name" onChange={this.updateChange} />
                            <input type="button" onclick={() => this.updateUser(this.state.id)} value="update"/>
                            <br />
                            <label for="name">Delete Me</label>
                            <input type="button" onClick={() => this.deleteUser(this.state.id)} value="delete" />
                            <br />
                            <button onClick={this.closeModal}>close</button>
                        </form>
                     </Modal>
            </div>
        )
    }
}



export default Display;