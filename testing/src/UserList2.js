import React from "react"

const UserList2 = ({ users }) => {
  return (
    <>
      <p>Name email</p>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              {user.name} {user.email}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UserList2
