import React from 'react';

class btnWithState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        };
        this.loginInHander = this.loginInHander.bind(this);
        this.loginOutHander = this.loginOutHander.bind(this);
    }

    loginInHander(e){
        this.setState({
            isLogin: true
        })
    }
    loginOutHander(e){
        this.setState({
            isLogin: false
        })
    }
    render(){
        const isLoginedIn = this.state.isLogin;
        let button = null;
        if (!isLoginedIn) {
            button = <LoginButton onClick={this.loginInHander} />;
        } else {
            button = <LogoutButton onClick={this.loginOutHander }/>;
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoginedIn} />
                {button}
            </div>
        )
    }
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export default btnWithState;