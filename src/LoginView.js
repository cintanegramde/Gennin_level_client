import React, { Component } from 'react'

export default class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
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
        console.log("submit")
        // if (this.state.email !== "" && this.state.password !== "") {
        //     this.setState({
        //         email: '',
        //         password: ''
        //     });
        // }
        e.preventDefault();
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