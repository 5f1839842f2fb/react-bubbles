import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const Login = props => {
  const [login, setLogin] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)

    axios.post("http://localhost:5000/api/login", login)
    .then(response => {
      setIsLoading(false)
      console.log(response)
      localStorage.setItem('token', response.data.payload)
      props.history.push('./bubbles')
    })
    .catch(error => {
      setIsLoading(false)
      console.log(error)
    })
  }

  return (
    <div>
      {!isLoading 
      ? <form onSubmit={handleSubmit}>
          <input placeholder="Username" onChange={event => setLogin({...login, username: event.target.value})}/>
          <input placeholder="Password" onChange={event => setLogin({...login, password: event.target.value})}/>
          <button>Submit</button>
        </form>
      : <h1>Loading</h1>}
    </div>
  )
}

export default withRouter(Login)