import React from 'react';
import ReactDOM from 'react-dom';

import {Congratulation} from './Congratulation.jsx';
import {Hello} from './Hello.jsx';
import {ToDoHeader} from './ToDoHeader.jsx';


export class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: false,
            taskInput: '',
            tasksToDo: [],
            tasksInProgress: [],
            tasksDone: [],
            isDone: false,

            band: this.props.band,
        };
    }

    handleCreateClick = event => {
        this.setState({
            input: true,
        })
    };

    handleInput = event => {
        this.setState({
            taskInput: event.target.value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        let taskToDo = this.state.taskInput;
        this.setState({
            tasksToDo: [...this.state.tasksToDo, taskToDo],
            input: false,
            taskInput: '',
        })
    };

    handleProgressClick = event => {
        let taskInProgress = event.target.dataset.task;
        this.setState ({
            tasksInProgress: [...this.state.tasksInProgress, taskInProgress],
            tasksToDo: this.state.tasksToDo.filter(item => item !== taskInProgress),
            tasksDone: this.state.tasksDone.filter(item => item !== taskInProgress),
        })
    };

    handleDeleteClick = event => {
        let taskToDelete = event.target.dataset.task;
        this.setState ({
            tasksToDo: this.state.tasksToDo.filter(item => item !== taskToDelete),
            tasksInProgress: this.state.tasksInProgress.filter(item => item !== taskToDelete),
        })
    };

    handleDoneClick = event => {
        let taskDone = event.target.dataset.task;
        this.setState ({
            tasksToDo: this.state.tasksToDo.filter(item => item !== taskDone),
            tasksInProgress: this.state.tasksInProgress.filter(item => item !== taskDone),
            tasksDone: [...this.state.tasksDone, taskDone],
            isDone: true,
        })
    };

    handleTodoClick = event => {
        let taskToDo = event.target.dataset.task;
        this.setState ({
            tasksToDo: [...this.state.tasksToDo, taskToDo],
            tasksInProgress: this.state.tasksInProgress.filter(item => item !== taskToDo),
        })
    };

    handleTodoReturn = event => {
        this.setState({
            isDone: false,
        })
    };


    render() {
        let el;
        if(this.state.input) {
            el = <form onSubmit={this.handleSubmit}>
                <input
                    style={{width: '200px'}}
                    value={this.state.taskInput}
                    onChange={this.handleInput}
                    type="text"
                    placeholder="Nowe zadanie"/>
                <input type="submit" value="OK"/>
            </form>
        }
        if(this.state.isDone) {
            return (
                <div className="container congrats">
                    <Congratulation
                        userName={this.props.userName}
                        band={this.state.band} />
                    <input
                        className="btn btn-primary btn-lg btn-return"
                        type="submit"
                        value="Wróć"
                        onClick={this.handleTodoReturn}/>
                </div>
            );
        } else {
            return <div>
                <div className="list">
                    <ToDoHeader userName={this.props.userName} />
                </div>
                <div className="list-of-all">
                    <div className="col-1-3">
                        <h2>TO DO
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={this.handleCreateClick}> +
                            </button>
                            <div>{el}</div>
                        </h2>
                        <ul className="tasks" style={{listStyleType: 'none'}}>
                            {this.state.tasksToDo.map ((task,i) => {
                                return <li
                                           key={i}>
                                    {i+1}. {task}
                                    <br/>
                                    <button
                                        data-task={task}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-warning btn-task"
                                        onClick={this.handleProgressClick}>
                                        In Progress
                                    </button>
                                    <button
                                        data-task={task}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-danger btn-task"
                                        onClick={this.handleDeleteClick}>
                                        Delete
                                    </button>
                                    <button
                                        data-task={task}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-success btn-task"
                                        onClick={this.handleDoneClick}>
                                        Done
                                    </button>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="col-1-3" >
                        <h2>IN PROGRESS</h2>
                        <ul
                            className="tasks-inprogress"
                            style={{listStyleType: 'none'}}>
                            {this.state.tasksInProgress.map((taskInprogress,i) => {
                                return <li key={i}>
                                    {i+1}. {taskInprogress}
                                    <br/>
                                    <button
                                        data-task={taskInprogress}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-primary btn-task"
                                        onClick={this.handleTodoClick}>
                                        To Do
                                    </button>
                                    <button
                                        data-task={taskInprogress}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-danger btn-task"
                                        onClick={this.handleDeleteClick}>
                                        Delete
                                    </button>
                                    <button
                                        data-task={taskInprogress}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-success btn-task"
                                        onClick={this.handleDoneClick}>
                                        Done
                                    </button>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="col-1-3">
                        <h2>DONE</h2>
                        <ul className="tasks-done" style={{listStyleType: 'none'}}>
                            {this.state.tasksDone.map((taskDone,i) => {
                                return <li key={i}>
                                    {i+1}. {taskDone}
                                    <br/>
                                    <button
                                        data-task={taskDone}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-warning btn-task"
                                        onClick={this.handleProgressClick}>
                                        In progress
                                    </button>
                                    <button
                                        data-task={taskDone}
                                        data-index={i}
                                        type="button"
                                        className="btn btn-danger btn-task"
                                        onClick={this.handleDeleteClick}>
                                        Delete
                                    </button>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        }
    }
}
