class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handeleAddOption = this.handeleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options) {
            this.setState(() => ({ options }));
        }
    } catch(e) {

    }
    }

        
       
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }
    // handleDeleteOptions
    handleDeleteOptions() {
    
        this.setState(() => ({ options: [] }));
    }
     handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handeleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
        } 

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
}

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        // const options = ['Thing one' , 'Thing two' , 'Thing three'];

        return (
            <div>
            <Header subtitle={subtitle} />
            <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
            />
            <Options
             options={this.state.options}
             handleDeleteOptions={this.handleDeleteOptions}
             handleDeleteOption={this.handleDeleteOption}
             />
            <AddOption
                handeleAddOption={this.handeleAddOption}
            />
            </div>
        );
    }
} 

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
};
    Header.defaultProps = {
        title: 'Indecision App!'
    };


const Action = (props) => {
    return (
        <div>
            <button
                 onClick={props.handlePick}
                 disabled={!props.hasOptions}
                 >
                    What should i do magic computer?
            </button>            
        </div>   
    );
};

const Options = (props) => {
    return (
        <div> 
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length === 0  && <p>Please add options to get started!</p>}
        {
            props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
                />
            )) 
        }
    </div>
    );
};


const Option = (props) => {
    return ( 
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            Remove
            </button>
        </div>
    );
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));