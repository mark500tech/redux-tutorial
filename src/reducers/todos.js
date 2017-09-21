import { findIndex, set } from 'lodash/fp';

let index = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        text: action.payload.todo,
        checked: false,
        id: index++
      }];

    case 'TOGGLE':
     return state.map(todo => {
       let newTodo = { ...todo };

       if (newTodo.id === action.payload.id) {
         newTodo.checked = !newTodo.checked;
       }

       return newTodo;
     });

    case 'FILTER':
      switch (action.payload.filterString) {
        case 'SHOW_ALL':
          return state;
        case 'SHOW_CHECKED':
          return state.filter((todo) => todo.checked);
        case 'SHOW_UNCHECKED':
          return state.filter((todo) => !todo.checked);

      }

    default:
      return state;
  }
};

export default todos;