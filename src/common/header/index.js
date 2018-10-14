import React from 'react'
import {connect} from 'react-redux'
import{HeaderWrapper,
    Logo,Nav,Nav_Item,
    Nav_Search,Addition,
    Button,SearchWrapper,
    SearchInfo,SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,

    } from './style.js'
import {actionCreators} from './store'
import { CSSTransition } from 'react-transition-group';
const search_info=(show)=>{
    if(!show)return null;
    else{
    return (<SearchInfo>
        <SearchInfoTitle>
            热门搜索
        </SearchInfoTitle>
        <SearchInfoSwitch>
            换一批
        </SearchInfoSwitch>
        <SearchInfoItem>行距杯2018征文</SearchInfoItem>
        <SearchInfoItem>区块链</SearchInfoItem>
        <SearchInfoItem>react</SearchInfoItem>
        <SearchInfoItem>vue</SearchInfoItem>
        <SearchInfoItem>anglare</SearchInfoItem>
        <SearchInfoItem>j's</SearchInfoItem>
    </SearchInfo>)
}
}
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
                                    >
                                    <div>
                                            <Nav_Search 
                                                className={props.focused?"focus":""}
                                                onFocus={props.handleInputFocus} 
                                                onBlur={props.handleInputBlur}>
                                            </Nav_Search>
                                            <i className={props.focused?"focus iconfont":"iconfont"}>&#xe634;</i>
                                    </div>
                                    </CSSTransition>
                                    {search_info(props.focused)}
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
        focused:state.get("header").get("focused")
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)