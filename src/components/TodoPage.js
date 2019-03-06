import React, { Component } from 'react';
import InputTodo from "./InputTodo";

import { connect } from 'react-redux';
import { addToDo, fetchToDo, deleteToDo } from '../actions/actionsCreators';

import { bindActionCreators } from 'redux';

class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetchToDo();
        this.state = {
            text: ''
        }
    }

    onChange = (event) => {
        const text = event.target.value;
        this.setState({ text });
    }

    onSubmit = () => {
        this.props.addToDo(this.state.text);
        this.setState({ text: '' });
    }

    hapus = (id) => {
        this.props.deleteToDo(id);
    }


    render() {
        return (
            <div>
                <h3>ToDo App Firebase</h3>
                <InputTodo
                    placeholder={'What you want to do ?'}
                    buttonLabel={'Submit'}
                    value={this.state.text}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <br />
                {this.props.todos.todos.map(todo => {
                    return <div key={todo.id}>{todo.text} - Created At : {todo.created_at} - <button onClick={() => this.hapus(todo.id)}>Hapus</button></div>

                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToDo,
        fetchToDo,
        deleteToDo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);