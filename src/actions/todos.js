export const addTodo = (text) => ({
  type: 'ADD',
  payload: {
    todo: text
  }
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE',
  payload: {
    id: id
  }
});

export const filterAction = (filterString) => ({
  type: 'FILTER',
  payload: {
    filterString: filterString
  }
});
