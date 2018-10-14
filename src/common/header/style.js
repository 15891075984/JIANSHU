import styled from 'styled-components'
import img from '../../statics/logo.png'
const HeaderWrapper=styled.div`
            position:relative;
            height:56px;
            border-bottom:1px solid #f0f0f0`
const Logo=styled.a.attrs({
    href:"/"
    })`
            display:block;
            position:absolute;
            top:0;
            left:0;
            height:56px;
            width:100px;
            background:url(${img});
            background-size:contain;`
const Nav=styled.div`
            width:960px;
            height:100%;
            margin:0 auto;
            box-sizing:border-box;
            padding-right:70px;
            `
const Nav_Item=styled.div`
            line-height:56px;
            padding:0 15px;
            font-size:17px;
            &.left{
                float:left
            }
            &.right{
                float:right;
                color:#969696;
            }
            `
const SearchWrapper=styled.div`
            float:left;
            border:none;
            position:relative;
            margin-top:2px;
            
            &.slide-enter{
                transition: all 200ms ease-out;
            }
            &.slide-enter-active{
                width:300px;
            }
            &.slide-exit{
                transition: all 200ms ease-out;
            }
            &.slide-exit-active{
                width:200px;
            }
            .iconfont{
                position:absolute;
                top:13px;
                right:15px;
                width:30px;
                border-radius:19px;
                line-height:30px;
                text-align:center;
                color:#969696;
                &.focus{
                    background:#969696;
                    color:#fff;
                }
            }`
const SearchInfo=styled.div`
            position:absolute;
            top:60px;
            width:240px;
            left:20px;
            box-shadow:0 0 8px rgba(0,0,0,.2);
            padding:0 20px;
            line-height:20px;
            overflow:hidden;
            padding-bottom:10px;
            `
const SearchInfoTitle=styled.div`
            margin-top:17px;
            line-height:20px;
            margin-bottom:15px;
            font-size:14px;
            color:#969696;`
const SearchInfoSwitch=styled.span`
            float:right;
            color:#969696;
            margin-top:-32px;
            font-size:13px;`
const SearchInfoItem=styled.a`
            line-height:20px;
            color:#969696;
            padding:0 5px;
            border-radius:3px;
            display:block;
            float:left;
            font-size:12px;
            border:1px solid #ddd;
            margin-right:10px;
            margin-bottom:10px;
            `
const Nav_Search=styled.input.attrs({
            placeholder:"搜索"
    })`     
            width:200px;
            height:38px;
            padding:0px 48px 0px 20px;
            margin-left:20px;
            margin-top:9px;
            border-radius:19px;
            border:none;
            background:#eee;
            font-size:14px;
            &::placeholder{
                color:#999
            }
            &.focus{
                width:280px;
                border:0px;
            }`
const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
const Button=styled.div`
    float:right;
    padding:0 20px;
    margin-top:9px;
    margin-right:20px;
    box-sizing:border-box;
    border:1px solid #ec6149;
    line-height:38px;
    border-radius:19px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`     
export {
    Logo,
    HeaderWrapper,
    Nav,
    Nav_Item,
    Nav_Search,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
}