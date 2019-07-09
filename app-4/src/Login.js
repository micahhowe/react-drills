import React, {Component} from 'react'

export default class Login extends Component{
    constructor(){
       super()

        this.state = {
            username: '',
            password: ''

        }
        this.alert2 = this.alert2.bind(this)
    }
    handleChangeUser(value){
        this.setState({username: value})
      }
    handleChangePass(value){
        this.setState({password: value})
    }
    alert2(){
        alert(`username: ${this.state.username} password: ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input type="text" onChange={e => this.handleChangeUser(e.target.value)} />
                <input type="text" onChange={e => this.handleChangePass(e.target.value)}/>
                <button onClick={this.alert2}>Login</button>
            </div>
        )
    }
}