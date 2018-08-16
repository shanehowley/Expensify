import React from 'react';

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handeleAddOption = this.handeleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
   handeleAddOption(e) {
       e.preventDefault();

       const option = e.target.elements.option.value.trim();
       const error = this.props.handeleAddOption(option);
       
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
}
    
    render() {

        return (
           <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handeleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>   
                </form>                
           </div>   
        );
    }
}

export default AddOption;