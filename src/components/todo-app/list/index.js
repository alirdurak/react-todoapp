import {useState}from 'react'

function List({todos, addTodo}) {
  const array = todos.map((item)=> item.done)
  const [checkedStatus,changeChecked] = useState(array)
  console.log(checkedStatus)
  const changeCheckedStatus = (e)=>{
    
    changeChecked(checkedStatus.map((item, index) => index === e ? !item : item ));
  }
  const deleteListItem = (e) => {
    const index = e.target.name
    const filtered = todos.filter((i)=> i.text !== index);
    console.log(index,filtered)
    addTodo(filtered)
    } 
  const toggle = (e) =>{
   changeChecked( checkedStatus.map((element, index) => checkedStatus.includes(false) ? element = true : element = false
    )     
   ) 
   
  }
  
  return (
    <div className='main'>
       <input
       onChange={toggle}        type="checkbox" />

        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className='todo-list'>
            {todos.map((item, key) => {
              
              return <li key={key} className="list-item"> 
              <div className={checkedStatus[key]? "completed" : " not-completed"}>
                  <label htmlFor={item.text}>
                    <input 
                    name={item.text} 
                    onChange= {() =>changeCheckedStatus(key)}
                    checked={checkedStatus[key]}
                    type="checkbox"/>
                   {item.text}
                   </label>
                  <button name={item.text} onClick={deleteListItem}className='destroy'>Delete</button>

              </div>
          </li>
            })}
        </ul>
      
    </div>
  )
}

export default List
