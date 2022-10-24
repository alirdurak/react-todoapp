import {useState}from 'react'

function List({todos}) {
  const array = todos.map((item)=> item.done)
  const [checkedStatus,changeChecked] = useState(array)
  console.log(checkedStatus)
  const changeCheckedStatus = (e)=>{
    
    changeChecked(checkedStatus.map((item, index) => index === e ? !item : item ));
  }
  return (
    <div className='main'>
        <input type="checkbox"
         className='toggle-all'          
         />

        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className='todo-list'>
            {todos.map((item, key) => {
              
              return <li key={key} className={checkedStatus[key]}> 
              <div className='view'>
                  <label htmlFor={item.text}><input 
                   name={item.text} 
                   onChange= {() =>changeCheckedStatus(key)}
                   checked={checkedStatus[key]}
                   type="checkbox"/>
                   {item.text}
                   </label>
                  <button className='destroy'></button>

              </div>
          </li>
            })}
        </ul>
      
    </div>
  )
}

export default List
