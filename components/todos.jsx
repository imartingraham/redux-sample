import React from 'react';
import {connect } from 'react-redux';

import NewTodo from './newTodo';
import {addTodo } from '../actions'

import $ from 'jquery';

function handleCheckbox(e){
  $(e.target).parent().toggleClass('complete');
}

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    <ul>
    {todos.map((todo) => {
       return <li key={todo}>
          <input type="checkbox"  onChange={handleCheckbox} />&nbsp;
          <span>{todo}</span>
        </li>
      })
    }
    </ul>
  </div>
)
function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)