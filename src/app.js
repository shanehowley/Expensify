console.log('app.js is running ok!')

// JSX Javascript XML
var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a robot'
    
};


var template = (
    <div>
        <h1>{app.title}</h1> 
            <p>{app.subtitle}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
    </div>
);

var user = {
    name: 'Shane',
    age: 24,
    location: 'Dublin'
};

var userName = 'shane';
var userAge = 24;
var userLocation = 'Ireland';

var templateTwo = (
    <div>
    <h1>{user.name} </h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);  