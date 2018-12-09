import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: ''
    }
    handleChange = (e) => {
        this.setState({
            support: e.target.value
        })
    }
    handleClick = () => {
        if (this.state.feeling < 0 || this.state.feeling > 5) {
            alert('Please enter a value between 1 & 5.');
            this.setState({
                feeling: ''
            })
            return;
        }
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.support });
        this.props.history.push('/4')
    }


    render() {
        return (
            <div>
                <p>How well are you being supported? </p>
                <input type="number" onChange={this.handleChange}
                    value={this.state.support} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Support);