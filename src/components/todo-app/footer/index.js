import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <span className='todo-count'></span>
        <ul className='filters'>
            <li>
                <a href="">All</a>
            </li>
            <li>
                <a href="">Active</a>
            </li>
            <li>
                <a href="">Completed</a>
            </li>
        </ul>
        <button className='clear-completed'>Clear completed</button>

    </div>
  )
}

export default Footer
