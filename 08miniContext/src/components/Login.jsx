import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
        // setUser(
        // {username:username,
        // password:password}
        //)
    }
  return (
    <div >
      <h2>
            Login
            <input 
            value={username}
            onChange={(e)=>{ setUsername(e.target.value)}}
            type="text" placeholder='username' />

            <input 
            value={password}
            onChange={(e)=>{ setPassword(e.target.value)}}
            type="text" placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
      </h2>
    </div>
  )
}

export default Login
