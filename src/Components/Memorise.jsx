import React from 'react'

function memorise({show}) {

  return (
    <div className='img'>
  {show?(
    <img src='../img/graduation.jpg' alt='img' />
  ):""}
    </div>
  )
}

export default memorise