import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let token = localStorage.getItem("token")
        if (token) {
            this.setState({
                isLoading: false
            }
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ? <div>Loading...</div> : <div>Hola usuario</div>
                }
            </div>
        )
    }
}