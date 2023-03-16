import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ShowPage from './components/Show';
import AddPage from './components/Add';
import loginService from './action/login.js';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');

  const login = () => {
    dispatch(loginService.login(username));
  }

  return (
    <div className="App">
      <ShowPage />
      <AddPage />

      {user.isLogin ? (
        <div>{ user.information.name }</div>
      ) : (
        <div>
          <p>Login</p>
          <input type="text" value={username} onChange={(e) =>{ setUsername(e.target.value)}} />
          <button onClick={() => { login() }}>Sumbit</button>

          <p style={{ color: 'red' }}>{user.err?.message}</p>
        </div>
      )}
    </div>
  )
}

export default App
