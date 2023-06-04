import React, { useEffect, useState } from 'react'
import {db}from '../firebaseConfig'
import 'firebase/firestore';
import { collection, onSnapshot, query } from 'firebase/firestore'



function Result({show}) {


 const[data ,setdata]=useState([])


 useEffect(()=>{
  const q =query(collection(db,"graduation"))
  const unsub=onSnapshot(q,(querySnapshot)=>{
     let todoarry=[]
     querySnapshot.forEach((doc)=>{
        todoarry.push({...doc.data(),id:doc.id})
     })
     setdata(todoarry)
  })
  return ()=>unsub()
},[])

console.log(show)
  return (
<div>


{show?(
  <div className='Boss'>
  <div className='DataR'>
  {data.map((item)=>(
      <div key={item.id} className='counerR'>
      <div className='info'>
      <p className='name'>{item.name}</p>
      <p  className='Det'>{item.Details}</p>
      </div>

      </div>
))}
  </div>
</div>
):""}


</div>
 
 )
}
export default Result