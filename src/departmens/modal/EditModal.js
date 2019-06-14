import React from 'react';
import './modal.css';

class Modal extends React.Component  {

    state = {
        department: {
            id: '',
            internal:'',
            name: ''
        }
    };

    componentDidMount(){
        this.setState({
            department: this.props.department ?
                this.props.department
                :
                {
                    internal:'',
                    name: ''
                }
        });
        
    }

    handleChange = (e) =>{
        const formControls = {...this.state.department};
        formControls[e.target.name] = e.target.value;
        
        this.setState({
            department: formControls
        });
        console.log(this.state);
    }

    

    sendform = (e) => {
        e.preventDefault();

        if(this.props.department){
            console.log('edit');
        }
        else {
            console.log('create');
        }
        
        //отправка формы
    }

    render(){
        return (
            <div className="modal">
                <div className="modal-body">
                    <button onClick={this.props.closeModal}>Close Modal</button>
                    <form onSubmit={this.sendform}>
                        <p>Edit department:</p>
                        <input
                            type="text"
                            value={this.state.department.name}
                            placeholder="name"
                            name="name"
                            onChange={ e => this.handleChange(e) }
                        />
                        <select
                            value={this.state.department.name}
                            name="internal"
                            onChange={ e => this.handleChange(e) }
                            
                            >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        <p></p>
                        <button onClick={ this.sendform } type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;