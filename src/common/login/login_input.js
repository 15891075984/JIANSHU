import React from 'react'
export default class LoginInput extends React.Component{
    render(){
        return (
            <div>
                <input type="text" placeholder="账号"/>
                            <input type="password" placeholder="密码"/>
                            <button onClick={()=>{
                                console.log(window.location.replace("http://localhost:3000/"))}}>登陆</button>
            </div>
        )
    }
}