import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './common/login'
import Sign from './common/sign'
import'./style.js';
import './statics/iconfont/iconfont.js'
import './statics/font_2/iconfont.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class All extends React.Component{
    render(){
        return(
            <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={App}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/sign" exact component={Sign}/>
                    </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<All />, document.getElementById('root'));
