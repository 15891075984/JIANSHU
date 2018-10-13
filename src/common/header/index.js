import React from 'react'
import{HeaderWrapper,Logo,Nav,Nav_Item,Nav_Search,Addition,Button,SearchWrapper} from './style.js'
import { CSSTransition } from 'react-transition-group';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            focused:false
        }
        this.handleInputBlur=this.handleInputBlur.bind(this);
        this.handleInputFocus=this.handleInputFocus.bind(this)
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
                       <CSSTransition in={this.state.focused}
                                      timeout={200}
                                      className="slide">
                            <SearchWrapper>
                                    <Nav_Search 
                                        className={this.state.focused?"focus":""}
                                        onFocus={this.handleInputFocus} 
                                        onBlur={this.handleInputBlur}>
                                    </Nav_Search>
                                    <i className={this.state.focused?"focus iconfont":"iconfont"}>&#xe634;</i>
                            </SearchWrapper>
                       </CSSTransition>
                   </Nav>
                    <Addition>
                        <Button className='writting'>写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                 </HeaderWrapper>
            </div>
        )
    }
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
}
export default Header