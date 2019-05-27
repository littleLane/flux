import React from "react";

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
      <input type="text" id="new-todo" onKeyUp={(e) => {
        if (e.keyCode === 13) {
          props.onAddTodo(e.target.value);
          e.target.value = '';
        }
      }} />
    </header>
  );
}

function Main(props) {
  if (props.todos.size === 0) {
    return null;
  }

  return (
    <section id="main">
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <li key={todo.id} className={todo.editing ? 'editing' : ''} onDoubleClick={() => {
            if(!todo.editing){
              props.onToggleEditing(todo.id);
            }
          }}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.complete}
                onChange={() => props.onToggleTodo(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => props.onDeleteTodo(todo.id)}
              />
            </div>
            <input className="edit" defaultValue={todo.text} onKeyUp={(e) => {
              if (e.keyCode === 13) {
                props.onUpdateTodo(todo.id, e.target.value);
                props.onToggleEditing(todo.id);
              }
            }} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  if (props.todos.size === 0) {
    return null;
  }

  const remaining = props.todos.filter(todo => !todo.complete).size;
  const phrase = remaining === 1 ? ' item left' : ' items left';

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {remaining}
        </strong>
        {phrase}
      </span>
    </footer>
  );
}

export default AppView;