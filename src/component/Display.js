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
                    <button onClick={() => this.setState({modalOpen: true})}>Update</button>
                    <Modal
                    isOpen={this.state.modalOpen}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.setState({modalOpen: false})}
                    style={customStyles}
                    contentLabel="Example Modal"
                     >
                          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
                     </Modal>
            </div>
        )
    }
}



export default Display;