import React from 'react'
import {connect} from 'react-redux'
import{HeaderWrapper,Logo,Nav,Nav_Item,Nav_Search,Addition,Button,SearchWrapper} from './style.js'
import { CSSTransition } from 'react-transition-group';
const Header =(props)=>{
        return (
            <div>
                <HeaderWrapper>
                   <Logo/>
                   <Nav>
                       <Nav_Item className="left active">首页</Nav_Item>
                       <Nav_Item className="left">下载App</Nav_Item>
                       <Nav_Item className="right">登陆</Nav_Item>
                       <Nav_Item className="right">
                           <i className="iconfont">&#xe636;</i>
                       </Nav_Item>
                       
                        <SearchWrapper>
                                    <CSSTransition
                                        in={props.focused}
                                        timeout={200}
                                        classNames="slide"
                                    ><div>
                                    <Nav_Search 
                                        className={props.focused?"focus":""}
                                        onFocus={props.handleInputFocus} 
                                        onBlur={props.handleInputBlur}>
                                    </Nav_Search>
                                    <i className={props.focused?"focus iconfont":"iconfont"}>&#xe634;</i>
                                    </div>
                                    </CSSTransition>
                        </SearchWrapper>
                   </Nav>
                    <Addition>
                        <Button className='writting'>写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                 </HeaderWrapper>
            </div>
        )
    }
const mapStateToProps=(state)=>{
    return {
        focused:state.header.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            const action={
                type:"search_focus"
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action={
                type:"search_blur"
            };
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)