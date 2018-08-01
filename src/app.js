console.log('app.js is running ok!')

// JSX Javascript XML
const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a robot',
    options: ['One','Two']   
};

const template = (
    <div>
        <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.lenght > 0 ? 'Here are your options' :'No options'}</p> 
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
    </div>
);
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne =() => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const someId = 'myidhere'
const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>   
);
console.log(templateTwo); 

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>  
    );
    ReactDOM.render(templateTwo, appRoot);  
};
renderCounterApp();