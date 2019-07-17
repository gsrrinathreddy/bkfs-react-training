import React,{Component} from 'react';

class Login extends Component{
    componentDidMount(){
        console.log(" Hi I am mounted to the browser")
    }
    render(){
        return(
            <div>
                I am a login component
            </div>
        )
    }
}

export default Login;