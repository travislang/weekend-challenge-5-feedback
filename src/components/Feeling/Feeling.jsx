import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import { withRouter } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

class Home extends Component {

    state = {
        feeling: ''
    }
    handleChange = (e) => {
        this.setState({
            feeling: e.target.value
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
        this.props.dispatch({ type: 'ADD_INPUT', payload: this.state.feeling });
        this.props.history.push('/2')
    }


    render() {
        console.log(this.props.history.location);
        
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                </header>
                <ProgressBar />
                <p>How are you feeling today?</p>
                <input type="number" onChange={this.handleChange}
                    value={this.state.feeling} />
                <button onClick={this.handleClick}>Next</button>
                <Review />
            </div>
        );
    }
}

export default connect()(withRouter(Home));