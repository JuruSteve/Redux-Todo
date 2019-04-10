import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

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
    addTodo(this.state.task)
  }
  handleChange = (e) =>{
    this.setState({task: e.target.value})
  }

  render () {
    const todos = this.props.todos
    return (
      <div>
        <fieldset>
          <input type='text' onChange={this.handleChange}/>
          <button type='submit' onClick={(e)=>this.handleSubmit(e)}>Add Task</button>
        </fieldset>

        <ul>

          {
            todos.map((item, i) => {
              return <li key={i}>{item}</li>
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
