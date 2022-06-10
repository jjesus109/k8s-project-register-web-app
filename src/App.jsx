import React, { Fragment } from "react";
import UserForm  from './components/UserForm';

export function App(){
   
    return (
    <Fragment>
        <section class="hero is-link">
            <div class="hero-body has-text-centered">
                <p class="title">
                Welcome to registration form app!
                </p>

            </div>
        </section>
        <br></br>
        <div class="container">
            <UserForm/>
        </div>
            
        
    </Fragment>
    );
}