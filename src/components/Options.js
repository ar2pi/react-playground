import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Add an option to get started</p>}
        {props.options.map((option, i) => {
            return (
                <Option
                    key={i}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            );
        })}
    </div>
);

export default Options;
