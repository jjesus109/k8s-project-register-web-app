import React from "react";

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Fulanito",
            lastname: "Perez",
            age: 0, 
            position: "person",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }
        );
    }
    handleSubmit(event) {
        alert('Heybro, your form has been submitted ' + this.state.name + '_' +this.state.lastname)
        console.log('state:' +this.state);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input 
                    name="name"
                    type="text"
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                </label>
                <label>
                    Last name:
                    <input 
                    name="lastname"
                    type="text"
                    value={this.state.lastname} 
                    onChange={this.handleChange}/>
                </label>
                <label>
                    Age:
                    <input 
                    name="age"
                    type="text"
                    value={this.state.age} 
                    onChange={this.handleChange}/>
                </label>
                <label>
                    Position:
                    <input 
                    name="position"
                    type="text"
                    value={this.state.position} 
                    onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }

}

export default UserForm ;