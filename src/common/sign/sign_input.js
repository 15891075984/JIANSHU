import React from 'react';
import './style';
import { Button, version,Input,Checkbox,message} from "antd";
import axios from 'axios'
export default class SignInput extends React.Component{
    state={
        username:"",
        password:""
    }
    render(){
        return (
            <div>
                <Input type="text" placeholder="账号" onChange={this.getUsername.bind(this)} />
                <Input type="password" placeholder="密码"  onChange={this.getPassword.bind(this)} />
                <Button type="primary"  className="btn" onClick={this.handleSignBtn.bind(this)}>注册</Button>
            </div>
        )
    }
    getUsername=(e)=>{
        this.setState({username:e.target.value});
    }
    getPassword=(e)=>{
        this.setState({password:e.target.value});
    }
    hanleSign=()=>{
        window.localStorage.setItem(this.state.username,this.state.password);
    }
    handleSignBtn=()=>{
        message.loading("正在注册，请稍等。。。",1.0)
        axios({
            method:"post",
            url:"https://easy-mock.com/mock/5baa15726d85f81e16ad4847/example/sign",
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            data:{
                username:this.username,
                message:this.message
            }})
            .then(res=>{
                message.success(`恭喜${res.data.data.username}注册成功`)
            })
            .catch(error=>{
                message.error("网络错误")
        })
    }
}