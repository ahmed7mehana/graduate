import React, { useState } from 'react'
import {db}from '../firebaseConfig'
import 'firebase/firestore';
import {  addDoc,collection } from 'firebase/firestore'


function Form({showbtn,show}) {
 const[name ,setName]=useState()
 const[Details ,setDetails]=useState() 
 const [showmsg, setShowmsg] = useState(false);




 const handle=(e)=>{
   e.preventDefault()
   setShowmsg(!showmsg)
   setName("")
   setDetails("")
    addDoc(userCollectionRef,{
        name:name,
        Details:Details,
       
    })
 }

 
//get data from firebase
const userCollectionRef=collection(db,"graduation")


    return (
<>
{show?"":(
    <div className='mt-[100px]'>
    <button className='btn' onClick={()=>{
        setShowmsg(!showmsg)
    }}>Add comment</button>
{showbtn || showmsg?(
<div className='Aform'>
<div className='counter'>
<form className='Form'>

<label className='titQ'>Full name</label>
<input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}} className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder=' اسمك '/>


<label className='titQ'>Details</label>
<textarea  className="input" type='text'   value={Details}  onChange={(e)=>{setDetails(e.target.value)}}  placeholder="اكتب العدد التي تريد واي تفاصيل اخري"   />



<button onClick={handle} className='btn'>submit</button>

<p>موسيقي لسهوله تدفق الافكار</p>
<audio controls autoplay className='Mus'>
  <source src="/music/Love-Me-Again---John-Newman(PagalWorld).mp3" type="audio/mpeg" />
</audio>

</form>
<h5 className='w-fit text-center m-auto border-b-2 border-[#f78da7] font-[Satisfy] text-[#f78da7] text-[30px]'> Welcome to the most beautiful person in the universe</h5>

</div>
</div>
):""}


    </div>

)}
</>
  )
}

export default Form