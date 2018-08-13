let Visibility = false;

const toggleVisibilty = () => {
   Visibility = !Visibility;
   render(); 
}

const render = () => {
    const jsx =(
       <div>
        <h1>Visibility Toggle</h1>
          <button onClick={toggleVisibilty}>
           {Visibility ? 'Hide details' : 'Show details'}
          </button>
          {Visibility && (
              <div>
              <p>Hey these are some are details </p>
              </div>
          )}
       </div> 
    );
    ReactDOM.render(jsx, document.getElementById('app'))
};
render();