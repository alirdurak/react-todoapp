import React from 'react'

function List() {
  return (
    <div className='main'>
        <input type="checkbox" className='toggle-all' />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className='todo-list'>
            <li className=''> 
                <div className='view'>
                    <input className='toggle' type="checkbox" />
                    <label ></label>
                    <button className='destroy'></button>

                </div>
            </li>
        </ul>
      
    </div>
  )
}

export default List
