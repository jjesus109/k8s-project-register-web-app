import React from "react";

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            last_name: "",
            age: "", 
            position: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    makeCallAPI(){
        let createdBody = JSON.stringify(this.state);
        console.log(createdBody)
        fetch('http://localhost:8000/app/v1/forms',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: createdBody
        })
        .then( res => {
            var response = res.json();
            console.log(response)
            return response
        })
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
        alert('Hey, bro! Your form has been submitted ')
        console.log('state:' +this.state);
        this.makeCallAPI();
        event.preventDefault();
    }
    render() {
        return (
            <form class="box" onSubmit={this.handleSubmit}>
                <p class="subtitle">Please complete the form</p>
                    <div class="field">
                            <label class="label">Name:</label>
                        <div class="control">
                            <input 
                                class="input"
                                placeholder="Your name"
                                name="name"
                                type="text"
                                value={this.state.name} 
                                onChange={this.handleChange}/>

                        </div>
                    </div>
                <div class="field">
                    <label class="label">Last name:</label>
                    <div class="control">
                        <input 
                            class="input"
                            placeholder="Your last name"
                            name="last_name"
                            type="text"
                            value={this.state.last_name} 
                            onChange={this.handleChange}/>

                    </div>
                </div>

                <div class="field">
                    <label class="label">Age</label>
                    <div class="control">
                        
                        <input 
                            placeholder="Your age"
                            class="input"
                            name="age"
                            type="number"
                            value={this.state.age} 
                            onChange={this.handleChange}/>
                   
                    </div>
                </div>


                <div class="field">
                    <label class="label">Job position</label>
                    <div class="control">

                        <input 
                        placeholder="Your job position"
                        class="input"
                        name="position"
                        type="text"
                        value={this.state.position} 
                        onChange={this.handleChange}/>

                    </div>

                </div>
                    <div class="container has-text-centered">
                        <input class="button is-light" type="submit" value="Submit response"/>
                    </div>
                    
                </form>

        )
    }

}

export default UserForm ;