import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>Valid component 3, id: {props.match.params.id}</div>
    );
};

export default EditExpensePage;