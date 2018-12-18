import React from 'react'

class HqForm extends React.Component{

    constructor(props){
        super(props)
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value.toUpperCase()});

    }
    handleSubmit(e){
        alert('Name:'+this.state.value);
        console.log(this.state.value);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type='submit' value='submit'/>
                </form>
                <fieldset>
                    <legend>Enter temperature in Celsius:</legend>


                </fieldset>

            </div>
        );
    }
}
export default HqForm;