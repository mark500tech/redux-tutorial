import { findIndex, set } from 'lodash/fp';

let index = 0;

const todos = (state = {
  filterBy: 'SHOW_ALL',
  todos: []
}, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        filterBy: 'SHOW_ALL',
        todos: [...state.todos, {
          text: action.payload.todo,
          checked: false,
          id: index++
        }]
      };

    case 'TOGGLE':
     return {
       filterBy: 'SHOW_ALL',
       todos: state.todos.map(todo => {
         let newTodo = {...todo};

         if (newTodo.id === action.payload.id) {
           newTodo.checked = !newTodo.checked;
         }

         return newTodo;
       })
     };

    case 'FILTER':
      return {
        filterBy: action.payload.filterString,
        todos: state.todos
      };

    default:
      return state;
  }
};

export default todos;