import React, { useState } from 'react'

function HookCounterThree() {
const [name,setName] = useState({firstName:"",lastName:""})

  return (
    <div>
       First Name : {name.firstName} and Last Name : {name.lastName}
        <br/><br/>
        {/*imp copy the values and change the one property of object*/}
        <input value={name.firstName} onChange={(e) => setName({...name,firstName:e.target.value})}></input>
        <br/><br/>
        <input value={name.lastName} onChange={(e) => setName({...name,lastName:e.target.value})} ></input>
    </div>
  )
}

export default HookCounterThree