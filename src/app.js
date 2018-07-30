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

const user = {
    name: 'Shane',
    gender: 'male',
    age: 24,
    location: 'Boston'
};

function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
//ternary operator
const templateTwo = (
    <div>
    
    <h1>{user.name ? user.name : 'Anonymous'} </h1>
    
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    
    {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);  