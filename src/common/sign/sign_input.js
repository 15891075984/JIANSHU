import React from 'react';
import './style';
export default class SignInput extends React.Component{
    render(){
        return (
            <div>
                <input type="text" placeholder="账号"/>
                <input type="password" placeholder="密码"/>
                <input type="" placeholder="手机号"/>
                <button>注册</button>
            </div>
        )
    }
}