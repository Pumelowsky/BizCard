import { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './App.css'
import { Form } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  const title = 'BizCard';
  return (
    <div className="App">
      <div>
        <a href="/">
          <img src="vite.svg" className="logo " alt="" />
        </a>
      </div>
      <h1>Welcome to <span className='coolText'>{title}</span>!</h1>
      <div className="card">
      <Form action="form">
        <Button type='submit' variant="contained" endIcon={<SendIcon />} color="error" className='nextStep'>
          Get started
        </Button>
      </Form>
      <p>
        Click on the button to start creating your <span className='coolText'>Business Card</span>
      </p>
      </div>

    </div>
  )
}

export default App
