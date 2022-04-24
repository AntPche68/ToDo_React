import React, {useState} from 'react'
import AddToDo from '../AddToDo';
import ToDoList from '../ToDoList';
import s from './ToDos.module.sass';

export default function ToDos() {

  const [todo, setTodo] = useState([
    {
        id:1, 
        title: 'велосипед', 
        description: 'люблю'
    },
    {
        id:2,
        title: 'бег', 
        description: 'не очень люблю' 
    },
    {
        id:3, 
        title: 'лыжи', 
        description: 'очень люблю'
    }
  ]);


  const addToDo = (id, title, description)=>{
    setTodo(prev => [...prev, {id, title, description}]);
  };
  const deleteTodo = id => {
      setTodo(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className={s.todos}>
        <h1>Дела на сегодня!</h1>
        <p>Терпение и  труд все, я устал!</p>
        <AddToDo addToDo={addToDo} />
        <ToDoList todo={todo} deleteTodo={deleteTodo} />
    </div>
  )
}
