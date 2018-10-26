import React from 'react'
import axios from 'axios'
import { Button, version,Input,Checkbox,message } from "antd";
import "antd/dist/antd.css";
export default class LoginInput extends React.Component{
    state={
        username:"",
        password:"",
        rememberpwd:true
    };
    render(){
        return (
            <div>
                <Input type="text"  placeholder="账号" onChange={this.getUsername.bind(this)} value={this.state.username} required="true"/>
                <Input type="password" placeholder="密码" onChange={this.getPassword.bind(this)} value={this.state.password}/>
                <Checkbox onClick={this.rememberPwd.bind(this)} checked={this.state.rememberpwd}>记住密码</Checkbox>
                <a href="#">登陆遇到问题</a><br/>
                <Button  type="primary" onClick={this.handleClick.bind(this)} className="btn">登陆 </Button>
            </div>
        )
    }
    getUsername=(e)=>{
        this.setState({username:e.target.value});
    }
    getPassword=(e)=>{
        this.setState({password:e.target.value});
    }
    rememberPwd=(e)=>{
        this.setState({rememberpwd:!this.state.rememberpwd})
    }
    getFirstAttr(obj) {
        for (var k in obj) return k;
    }
    componentWillMount (){
        if(window.localStorage.length>=1){
            let username=this.getFirstAttr(window.localStorage);
            if(username=="length"){
                username=""
            }
            this.setState({username:username,password:localStorage[username]});
        }else{
            this.setState({rememberpwd:false})
        } 
    }
    handleClick(){
        message.loading("正在登陆，请稍等。。。",0.5)
        axios.get("https://easy-mock.com/mock/5baa15726d85f81e16ad4847/example/login")
        .then(res=>{  
            if(res.data.success===true){
                if(this.state.rememberpwd){
                        window.localStorage.setItem(this.state.username,this.state.password)
                    }else{
                        window.localStorage.clear();
                    }
                window.location.replace("http://localhost:3000/")
            }
        })
        .catch(error=>{
                message.error("网络错误")
        })
    }
}