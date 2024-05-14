import React from 'react'
import { Link } from 'react-router-dom'

export default function Underdev() {
  return (
    <div>
        <img  src='https://cdn.cssauthor.com/wp-content/uploads/2023/05/Coming-Soon-HTML-Template-and-Countdown.jpg?strip=all&lossy=1&ssl=1' alt='no project is given'/><br />
        <Link className='btn btn-lg my-font btn-primary rounded' to='/'>Go back to home</Link>
    </div>
  )
}
