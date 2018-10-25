import React from 'react'
import axios from 'axios'
import {Content,HomeLeft,HomeRight,Topic,TopicItem,List,Recommend,Button}from './style';
import {connect} from 'react-redux'
import '../../statics/font_4/iconfont.css'
class Body extends React.Component{
    componentDidMount(){
        axios.get("https://easy-mock.com/mock/5baa15726d85f81e16ad4847/example/getBodyData").then((res)=>{
            const action={
                type:"changBodyData",
                allList_things:res.data.data.allList_things,
                nav_List_Right:res.data.data.nav_List_Right,
                actor_recom_Lists:res.data.data.actor_recom_Lists,
                topicList:res.data.data.topicList
            }
            this.props.changeBodyData(action)
        })
    }
    render(){
        return (<div>
            <Content>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        <Topic>
                        {
                            this.props.List.map((item)=>{
                                return(
                                    <TopicItem key={item.get("id")}>
                                        <img className="topic-img" src={item.get("imgUrl")} alt=""/>{item.get("title")}
                                    </TopicItem>
                                )
                            })
                        }
                        <span  className="more">
                            <a>更多热门主题</a>
                            <i className="iconfont">&#xe602;</i>
                        </span>  
                    </Topic>
                    {
                        this.props.List_things.map((item)=>{
                            let img=item.get("imgUrl")? <img className="img" src={item.get("imgUrl")}alt=""/>:null;
                            return(
                                <List key={item.get("id")}>
                                    {img}
                                    <div className="list" >
                                        <a className="title" href="#">{item.get("title")}</a>
                                        <p className="describe">{item.get("describe")}</p>
                                        <a className="actor">{item.get("actor")}</a>
                                        <a href="#" className="message">
                                            <i className="iconfont">&#xe624;</i>{item.get("message_number")}
                                        </a>
                                        <span className="love">
                                            <i className="iconfont">&#xe755;</i>{item.get("love_number")}
                                        </span>
                                    </div>
                                </List>
                            )})
                    }
                    
                </HomeLeft>
                <HomeRight>
                    <div>
                        {
                            this.props.nav_Lists.map((item)=>{
                                return(
                                    <li className="nav_li" key={item.get("id")}>
                                        <a href={item.get("href")}>    
                                            <img className="img_style"src={item.get("imgUrl")} alt=""/>
                                        </a>
                                     </li>
                                )})
                        }
                    </div>
                    <Recommend>
                        <span className="actor_recom">推荐作者</span>
                        <a href="#" className="change">
                            <i className="iconfont" onClick={(e)=>{console.log(e.target.className="iconfont transform")}}>&#xe6a9;</i>
                            <span>换一批</span>
                        </a>
                        <ul>
                            {
                                this.props.actor_recom_Lists.map((item)=>{
                                    return (
                                        <li className="li_recom" key={item.get("id")}>
                                            <img className="img_style"src={item.get("imgUrl")} alt=""/>
                                            <a href="#" className="name">{item.get("name")}
                                                <span className="follow"> +关注</span>
                                            </a>
                                            <span className="info">
                                                <span className="info_write">写了{item.get("info_write")}字</span>
                                                <span className="info_love">{item.get("info_love")}喜欢</span>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        <Button>
                            查看全部
                            <i className="iconfont">&#xe602;</i>
                        </Button>
                    </Recommend>
                </HomeRight>
            </Content>
        </div>)
    }
}   
const mapStateToProps=state=>({
    List:state.get('body').get("topicList"),
    List_things:state.get('body').get("allList_things"),
    nav_Lists:state.get('body').get("nav_List_Right"),
    actor_recom_Lists:state.get('body').get("actor_recom_Lists")
});
const mapDispatch=(dispatch)=>({
    changeBodyData(action){
        dispatch(action)
    }

})
export default connect(mapStateToProps,mapDispatch)(Body)