import React from 'react'
import LoginInput from './login_input'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import {Logo,
        Login_Sign,
        Public,Input} from './style'
export default class Login extends React.Component{
    render(){
        return(
            <div>
            
                <Logo>
                     <img ClassName="img_logo"src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                </Logo>
                <Login_Sign>
                    <Public>
                        <Link to={"/login"} className="login_button">登陆</Link>
                        <Link to={"/sign"} className="sign_button">注册</Link>
                    </Public>
                    <Input>
                    <LoginInput/>
                    </Input>
                </Login_Sign>
            </div>
        )
    }
}