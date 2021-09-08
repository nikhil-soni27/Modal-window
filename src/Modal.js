import { useState } from "react/cjs/react.development";


function Modal(props) {
const [name,setName]=useState('');
const [date,setDate]=useState('');


const submitHandler=(e)=>{
e.preventDefault();
props.changeTitle(name)
props.changeDate(date)
props.onClose()

}

    return (
      <div className='modal'>
        <p>{props.text}</p>
        <div>
        <form className="windowform" onSubmit={submitHandler} >
          <input type="text" onChange={(e)=>{setName(e.target.value)}} required name="username" />
          <input type="date" id="birthday" onChange={(e)=>{setDate(e.target.value)}} required name="birthday" placeholder="mm/dd/yyyy"/>
        <button type="submit" value="submit" className="btn3">Submit</button>
        </form>
        </div>
        <button className='button2' onClick={props.onClose}>
          nhi krna hai?
        </button>
        <button className='btn' onClick={props.onClose}>
          Haa krna hai!
        </button>
      </div>
    );
    }
  
  export default Modal;