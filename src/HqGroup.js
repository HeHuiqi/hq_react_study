// eslint-disable-next-line to the line before.
import React from 'react';
import './HqGroup.css'

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
//以组合方式来扩展组件
function Dialog(props) {
    return (
        <FancyBorder color='red'>
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    );
}
//定制话组件
function WelcomeDialog() {
    return (
        <Dialog title='欢迎' message='谢谢你的访问'/>
    );
}
//-------------------------------------------------------------------
function HqChat() {
    return (
        <div className='Chat'>
            <h1>聊天界面</h1>
        </div>
    );

}
function HqCenter() {
    return (
        <div className='Center'>
            <h1>中心页面</h1>
        </div>
    )
}

function HqContact() {
    return (
        <div className='Contact'>
            <h1>我的页面</h1>
        </div>
    )
}
//以组合方式来扩展组件
function SplitPane(props) {

    return (
        <div className='SplitPane'>
            <div className='SplitPane-left'>
                {props.left}
            </div>
            <div className='SplitPane-center'>
                {props.center}
            </div>
            <div className='SplitPane-right'>
                {props.right}
            </div>
        </div>
    );

}
function HqTab() {
    return (
        <SplitPane left={<HqChat/>} center={<HqCenter/>} right={<HqContact/>}/>
    );
}
class HqGroup extends React.Component{

    render(){
        return (
            <div>
                <WelcomeDialog/>
                <input className="money-p" placeholder='输入' type="month" name="month"  />
                <HqTab/>
            </div>
        );
    }
}
export default HqGroup