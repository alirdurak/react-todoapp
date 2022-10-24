import {useState} from 'react'
import List from './list'
import Header from './header'
import Footer from './footer'
function TodoApp() {
  const [todos, addTodo] = useState([{
    text:"yemek yap",
    done:"false"
  },
  {
    text: "ödevi bitir",
    done: "true"
  }
  ]
  )
  
  return (
    <div>
        <Header addTodo={addTodo} todos={todos}/>
        <List/>
        <Footer/>
      
    </div>
  )
}

export default TodoApp
