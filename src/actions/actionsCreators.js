import firebase from '../config/firebase';

export const addToDo = (text) => {
  return function () {
    let todo = {
      text,
      created_at: new Date().toLocaleString()
    };

    const newTodoRef = firebase.database().ref('todos').push()
    todo.id = newTodoRef.key
    newTodoRef.set(todo)
  }
}

export const fetchToDo = () => {
  return function (dispatch) {
    firebase.database().ref('todos').on('value', (snapshot) => {
      setTimeout(() => {
        const data = snapshot.val() || []
        let todos = []
        Object.values(data).forEach((todo) => {
          todos.push(todo)
        })
        dispatch({
          type: 'FETCH_TODO',
          payload: todos
        })
      }, 0)
    })
  }
}

export const deleteToDo = (id) => {
  return function () {
    firebase.database().ref(`todos/${id}`).remove();
  }
}