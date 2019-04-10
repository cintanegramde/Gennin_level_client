import React, { Component } from 'react'
import { Link, Redirect, withRouter} from 'react-router-dom';

import gql from 'graphql-tag'
import { resolve } from 'url';

const LOGIN_USER = gql`
mutation LOGIN($email:String!,$password:String!){
    login(email:$email, password:$password)
}
`

class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        console.log(props.client)
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // this.props.client
        //     .mutate({mutation: LOGIN_USER, variables:{ email: this.state.email, password: this.state.password }})
        //     .then(result => console.log(result));

        this.props.client
            .mutate({mutation: LOGIN_USER, variables:{ email: this.state.email, password: this.state.password }})
            .then(result => {
                console.log(result.data.login)
                // this.props.history.push(result.data.login)
                // return <Link to={result.data.login} />
                // <Redirect to={result.data.login} />
                this.props.history.push(`/home/${result.data.login}`)

            })
    }

    render(){
        return(
            <div>
                <div className="container mt-3">
                    <div className="row-login">
                        <div className="col-4 offset-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginView)