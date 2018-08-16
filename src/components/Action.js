import React from 'react';

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

export default Action;