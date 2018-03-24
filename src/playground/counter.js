console.log('App.js is running!');

let counter = 0;
const id = 1;
const increment = () => {
    console.log('+1');
    ++counter;
    renderCounter();
};
const decrement = () => {
    console.log('-1');
    --counter;
    renderCounter();
};
const reset = () => {
    console.log('reset');
    counter = 0;
    renderCounter();
};

const appRoot = document.getElementById('app');

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {counter}</h1>
            <button id={`btn-${id}`} className="btn" onClick={increment}>
                +1
            </button>
            <button id={`btn-decrement`} className="btn" onClick={decrement}>
                -1
            </button>
            <button id={`btn-reset`} className="btn" onClick={reset}>
                Reset
            </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();




