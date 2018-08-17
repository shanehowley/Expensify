import React from 'react';

const Action = (props) =>  (
        <div>
            <button
                 onClick={props.handlePick}
                 disabled={!props.hasOptions}
                 >
                    What should i do magic computer?
            </button>            
        </div>   
    );


export default Action;