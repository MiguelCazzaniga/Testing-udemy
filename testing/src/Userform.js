import React, { useState } from "react"

const Userform = ({onUserAdd}) => {
  const [email, seteMail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit=(e)=>{
        e.preventDefault()
        
        onUserAdd({name,email})
        
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={(e)=>seteMail(e.target.value)} type="email"/>
      </div>
      <button type="submit" >Add User</button>
    </form>
  )
}

export default Userform
