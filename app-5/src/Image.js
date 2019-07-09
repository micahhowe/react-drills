import React, {Component} from 'react'

export default class Image extends Component {

    render(){
        return(
            <div>
                <img src={this.props.pizza} />
                <caption>Ummm why is this floating to the left</caption>
            </div>
        )
    }
}