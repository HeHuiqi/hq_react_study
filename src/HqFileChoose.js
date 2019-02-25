// eslint-disable-next-line to the line before.

import React from 'react';

class HqFileChoose extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(this);
        event.preventDefault();//阻止提交
        var files = this.fileInput.files[0];
        if (files){
            //注意这里模版语法引用变量${}
            var fileName = `你选的文件是:${files.name}`;
            alert(fileName);
        }else {
            alert('请选择文件');
        }


    }
    render(){
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        上传文件：
                        <input type='file' ref={input => {
                            this.fileInput=input;
                        }}/>
                    </label>
                    <br/>
                    <input type={'submit'} value={'提交'}/>
                </form>

            </div>
        );
    }
}
export default HqFileChoose;