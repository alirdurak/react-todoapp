import {useState} from 'react'


    
function Header({addTodo,todos}) {
    const [todo, changeTodo] = useState({text:"", done:"false"})
    
    // todo item add
    const onChange = (e) => {
        changeTodo({...todo, [e.target.name]: e.target.value.toLowerCase()});

    }
    // todo item added to todo list
    const  onSubmit =  (e) => {
        e.preventDefault();
        addTodo([...todos,todo]);
        console.log(todos,todo);
    }
  return (
    <div className='header'>
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
            <input name='text' onChange={onChange} className='new-todo' placeholder='What needs to be done?'  />
        </form>
    </div>
  ) 
}

export default Header
