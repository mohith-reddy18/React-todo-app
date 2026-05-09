import Todo from './todolist.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'


function App() {
  
  return(
    <div className="outer">
      <div className="app">
       <CssBaseline />
       <h1 style={{color:"black"}}>Todo List</h1>
       <Todo/>
      </div>
    </div>
  )
}

export default App





