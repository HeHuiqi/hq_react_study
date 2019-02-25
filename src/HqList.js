import React from 'react'

function ListItem(props) {
    const value = props.value;
    return (
        <li>{value}</li>
    );
}
//元素的key只有在它和它的兄弟节点对比时才有意义
//元素的key在他的兄弟元素之间应该唯一
class HqList extends React.Component{

    constructor(props){
        super(props)
    }

    // 当你在map()方法的内部调用元素时，你最好随时记得为每一个元素加上一个独一无二的key
    render(){
        // const listItems = this.props.numbers.map((index,number) =>{
        //     return <ListItem key={index.toString()} value={number}/>
        // });
        //{}中可以嵌入任何表达式
        return (
            <div>
                <ul>
                    { this.props.numbers.map((number,index) =>{
                        var  value = index.toString()+'------->'+number;
                        return <ListItem key={index.toString()} value={value}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default HqList