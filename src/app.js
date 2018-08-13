console.log('app.js is running ok!')

// JSX Javascript XML
const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a robot',
    options: []   
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
       render(); 
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const  onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

const numbers = [ ]
 
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
              {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here are your options' :'No options'}</p> 
               <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
               <button onClick={onRemoveAll}>Remove All</button>
                {
                    numbers.map((number) => {
                        return <p key={number}>number: {number}</p>        
                    })
                }
                <ol>
                    {
                        app.options.map((option) => {
                            return <li key={option}>{option}</li>;
                        })
                    }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                    

                </form>      
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
