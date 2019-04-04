import React, { Component } from 'react'

class TitleComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            times : 2
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                times : this.state.times + 1
            })
        }, 500)
    }

    render(){
        return(
            <div>{this.props.data.title} {this.state.times} memes</div>
        )
    }
}

export default TitleComponent;
