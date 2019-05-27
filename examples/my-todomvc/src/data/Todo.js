import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  complete: false,
  text: '',
  editing: false
});

export default Todo;