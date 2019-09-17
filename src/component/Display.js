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

    // openModal() {
    //     this.setState({modalIsOpen: true});
    //   }
     
    //   afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    //   }
     
    //   closeModal() {
    //     this.setState({modalIsOpen: false});
    //   }

    updateUser = e => {
        fetch("http://localhost:4000/update/", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
        })
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
                            <input type="text" name="name"/>
                            <button onclick={this.updateUser}>update</button>
                            <br />
                            <label for="name">Delete Me</label>
                            <button onclick={this.deleteUser}>update</button>
                            <br />
                            <button onClick={this.closeModal}>close</button>
                        </form>
                     </Modal>
            </div>
        )
    }
}



export default Display;