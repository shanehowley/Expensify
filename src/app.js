console.log('app.js is running ok!')

// JSX Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1> 
            <p>this is some info</p>
            
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM .render(template, appRoot); 