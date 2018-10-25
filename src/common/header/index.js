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
import {actionCreators} from './store';
import {Link} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import "../../statics/font_5/iconfont.js"

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    search_info(show){
        const newList=[];
        const list=this.props.list.toJS();
        const page=this.props.page;
        for(let i=(page-1)*10;i<page*10;i++){
            newList.push(
                <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>
            )
        }
        if(this.props.focused||this.props.mouseIn){return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter}
            onMouseLeave={this.props.handleMouseLeave}>
            <SearchInfoTitle onClick={()=>{console.log(this.props.page)}}>热门搜索</SearchInfoTitle>
            <SearchInfoSwitch onClick={()=>this.props.handleChangePage(this.props.page,this.props.totalPage)}>换一批</SearchInfoSwitch>
            {newList}
        </SearchInfo>)};
    }
    render(){
        return (
            <div>
                <HeaderWrapper>
                   <Logo/>
                   <Nav>
                       <Link to={"/"}><Nav_Item className="left active">首页</Nav_Item></Link>
                       <Link to={"/download"}><Nav_Item className="left">下载App</Nav_Item></Link>
                       <Link to={"/login"}><Nav_Item className="right">登陆</Nav_Item></Link>
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
        list:state.get("header").get("list"),
        page:state.get("header").get("page"),
        totalPage:state.get("header").get("totalPage"),
        mouseIn:state.get("header").get("mouseIn")
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
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)