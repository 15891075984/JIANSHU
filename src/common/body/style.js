import styled from 'styled-components'
import img from '../../statics/Img_content.jpg'
export const Content=styled.div`
    width:960px;
    margin:0 auto;
    `
export const HomeLeft=styled.div`
    float:left;
    margin-top:30px;
    width:625px;
    margin-left:-18px;
    .banner-img{
       width:625px;
       height:270px;
       border-radius:10px
    }`

export const Topic=styled.div`
    overflow:hidden;
    width:625px;
    margin-top:30px;
    padding-bottom:30px;
    border-bottom:1px solid #dcdcdc;
    .more{
        display:block;
        float:left;
        line-height:32px;
        color: #787878;
    }`

export const TopicItem=styled.div`
    float:left;
    padding-right:10px;
    height:32px;
    line-height:32px;
    font-size:14px;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    color: #333;
    background-color: #f7f7f7;
    margin: 0 20px 20px 0;
    .topic-img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }`
export const List=styled.div`
    padding:20px 0 25px 0;
    border-bottom:1px solid #dcdcdc;
    .img{
        float:right;
        width:125px;
        height:100px;
    }
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        color:#333;
        line-height: 1.5;
        text-decoration:none
    }
    .describe{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .actor{
        color:rgb(180, 180, 180);
        font-size:10px;
        margin-right:15px;
    }
    .message{
        text-decoration:none;
        font-size:9px;
        color:rgb(180, 180, 180);
        margin-right:15px;
    }
    .love{
        text-decoration:none;
        font-size:9px;
        color:rgb(180, 180, 180);
        margin-right:15px;
    }`
export const HomeRight=styled.div`
width:280px;
float:right;
margin-top:30px;
.nav_li{
    margin-bottom:8px;
    list-style:none;

}
.img_style{
    width:280px;
    height:50px;
    border-radius:7px;
}
`
export const Recommend=styled.div`
    margin-top:40px;
    .actor_recom{
        font-size: 14px;
        color: #969696;
    }
    .change{
        float: right;
        display: block;
        font-size: 14px;
        color: #969696;
        text-decoration:none;
        line-height:25px;
    }
    .transform{
        -ms-transform: perspective(500px);
    -moz-transform: perspective(500px); /*重要*/
    transform-style: preserve-3d; 
    }
    .li_recom{
        width:280px;
        overflow:hidden;
        line-height:58px;
    }
    .img_style{
        float:left;
        width:48px;
        height:48px;
        margin-top:18px;
        border-radius:24px;
        margin-right:10px;
        
    }
    .name{
        height:20px;
        display:block
        text-decoration:none;
        color: #333;
        font-size:14px;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        }
    .info{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        .info_write{
        margin-right:10px;
    }
    }`
export const Button=styled.button`
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    `