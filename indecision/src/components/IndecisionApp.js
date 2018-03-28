import React from 'react';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';
import Action from './Action';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }));
    };
    handlePick = () => {
        const randomPick = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[randomPick]
        }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Duplicate entry';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // invalid data
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default IndecisionApp;
