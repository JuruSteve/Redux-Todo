import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './TodoApp.css'
export class TodoApp extends Component {
  constructor(){
    super()
    this.state = {
      task: ''
    }
  }
  
  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(this.state.task)
    this.props.addTodo(this.state.task)
    // this.setState({task: ''})
  }
  handleChange = (e) =>{
    this.setState({task: e.target.value})
  }

  render () {
    const todos = this.props.todos
    return (
      <div className="todos">
      <h3>Tasks To Do</h3>
        <fieldset>
          <input type='text' onChange={this.handleChange}/>
          <button className="add" type='submit' onClick={(e)=>this.handleSubmit(e)}>Add Task</button>
        </fieldset>
        <ul>

          {
            todos.map((item, i) => {
              return <li key={i}>{item.task}</li>
            })
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
