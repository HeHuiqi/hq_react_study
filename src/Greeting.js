import React from 'react';

class UserGreeting extends React.Component{

    render(){
        return (
            <div>
                <h1>Welcome back!</h1>
            </div>
        );
    }
}

function GuestGreeting(props) {
    return (
        <h1>
            Please sign up.
        </h1>
    );
}

class Greeting extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const  isLogin = this.props.isLogin;
        if (isLogin){
            return <UserGreeting/>
        }
        return <GuestGreeting/>
    }
}

function LoginButton(props) {
    return  (
        <button onClick={props.onClick}>Login</button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}
class LoginControl extends React.Component{
    constructor (props){
        super(props)
        this.state = {isLogin:true}
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    handleLoginClick() {
        console.log('login');
        this.setState({isLogin:true});
    }
    handleLogoutClick(){
        console.log('logout');

        this.setState({isLogin:false});
    }

    render (){
        const  isLogin = this.state.isLogin;
        console.log(isLogin);
        let  button = null;
        if (isLogin){
            button = <LogoutButton onClick={this.handleLogoutClick}/>

        }else {
            button = <LoginButton onClick={this.handleLoginClick}/>

        }
        return (
            <div>
                <Greeting isLogin = {isLogin}/>
                {button}
            </div>
        );
    }

}
export default LoginControl