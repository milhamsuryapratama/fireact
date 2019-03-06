import React, { Component } from 'react';
import styles from '../styles/InputStyle';

class InputTodo extends Component {
    render() {
        return (
            <div style={styles.container}>
                <input
                    style={styles.textInput}
                    type={'text'}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange} />
                <input
                    type="button"
                    style={styles.submitButton}
                    value={this.props.buttonLabel}
                    onMouseDown={this.props.onSubmit} />
            </div>
        );
    }
}

export default InputTodo;