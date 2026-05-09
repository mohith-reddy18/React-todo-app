import { useState , useEffect} from 'react'
import List from '@mui/material/List';
import {v4 as uuid} from 'uuid'

import Input from './input.jsx'
import Todos from './todos.jsx'
import './app.css'

const initialtodo = ()=>{
    const data = JSON.parse(localStorage.getItem('todos')) 
    if(!data){
        return []
    }
    return data
}

export default function Todo(){
    const [todos,settodos] = useState(initialtodo)
    
    useEffect(()=> {
        localStorage.setItem('todos' , JSON.stringify(todos)),[todos]
    })

    const removetodo = (id) => {
        settodos(todos.filter((todo)=> todo.id !==id))
    }

    const removed = (id) => {
        settodos((prev) => prev.map((todo) => {
            if(todo.id === id){
                todo.status = !todo.status
                return {...todo}
            }
            else{
                return todo
            }
        }))
    }

    const add = (newr) => {
        settodos([...todos,{id:uuid(),title:newr,status:false}])
    }

    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="list">
            {todos.map((todo) => {
                return <Todos  key={todo.id} todo={todo} removetodo={removetodo} removed={removed} />
            })}
            <Input add={add} />
        </List>
    )

}