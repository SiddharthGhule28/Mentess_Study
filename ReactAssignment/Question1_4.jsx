import React from "react";
import { useState } from "react";

const Updatelist=(props)=>{
    const [userId, setuserId]=useState('');
    const [id,setid]=useState('');
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const updatedata1=(i)=>{
        setuserId(i.target.value);
    }
    const updatedata2=(i)=>{
        setid(i.target.value);
    }
    const updatedata3=(i)=>{
        settitle(i.target.value);
    }
    const updatedata4=(i)=>{
        setbody(i.target.value);
    }
    const onsaveuserdata=(i)=>{
        i.preventDefault();
        const Userdata={userId: userId,
            id: id,
            title: title,
            body: body,
            };
  props.saveDataHandler(Userdata);
         setuserId("");
         setid("");
         settitle("");
         setbody("");
            };

 return(
    <form onSubmit={onsaveuserdata}>
    <div>
<input type="text" placeholder="userId" value={userId} onChange={updatedata1}/>
<input type="text" placeholder="id" value={id} onChange={updatedata2}/>
<input type="text" placeholder="title" value={title} onChange={updatedata3}/>
<input type="text" placeholder="body" value={body} onChange={updatedata4}/>
<button type="submit">SUBMIT</button>

    </div>
    </form>
)}

export default Updatelist;