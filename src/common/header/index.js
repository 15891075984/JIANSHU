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

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    search_info(show){
        if(!this.props.focused)return null;
        else{
        return (<SearchInfo>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    {
                        this.props.list.map((item)=>{
                        return (<SearchInfoItem key={item}>{item}</SearchInfoItem> )
                    })
                    }
                </SearchInfo>)
    }
    }
    render(){
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
                                        in={this.props.focused}
                                        timeout={200}
                                        classNames="slide"
                                    >
                                    <div>
                                            <Nav_Search 
                                                className={this.props.focused?"focus":""}
                                                onFocus={this.props.handleInputFocus} 
                                                onBlur={this.props.handleInputBlur}>
                                            </Nav_Search>
                                            <i className={this.props.focused?"focus iconfont":"iconfont"}>&#xe634;</i>
                                    </div>
                                    </CSSTransition>
                                    {this.search_info(this.props.focused)}
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
}
const mapStateToProps=(state)=>{
    return {
        focused:state.get("header").get("focused"),
        list:state.get("header").get("list")
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)