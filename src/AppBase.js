import React from 'react';

class Clock extends React.Component{
    //构造方法
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    //渲染组件方法
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是：{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
    tick() {
        this.setState({
            date:new Date()
        });
    }
    //组件加载完成
    componentDidMount(){
        this.timerID =  setInterval(
            () => this.tick(),
            1000);
    }
    //组件将要销毁
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
}
// function AppBase(){
//     function handleClick(e) {
//         //通过这种方式来阻止事件的发生
//         e.preventDefault();
//         console.log('The link was clicked.');
//     };
//     return (
//         <div>
//             <Clock/>
//             <a href='https://www.baidu.com' onClick={handleClick}>百度</a>
//         </div>
//     );
// }
//注意这里和上面AppBase的写法
class AppBase extends React.Component {

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    // e 事件参数要放在最后
    handleClick = (link,e) => {
        console.log('link=',link);

        console.log('this=',this);

        //通过这种方式来阻止事件的发生
        e.preventDefault();
    };
    render(){
        return (
            <div>
                <Clock/>
                {/*这里需要绑定事件在传递参数*/}
                <Toggle/>
                <a href='https://www.baidu.com' onClick={this.handleClick.bind(this,'https://www.baidu.com')}>百度</a>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候
        // this 的值会是 undefined。
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default AppBase