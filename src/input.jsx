import ListItem from '@mui/material/List';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import Button from '@mui/material/Button';
import './App.css'

export default function Input({add}){
    const [inputValue, setInputValue] = useState('')

    const handlechange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim() !== ''){
            add(inputValue)
            setInputValue('')
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            if(inputValue.trim() !== ''){
                add(inputValue)
                setInputValue('')
            }
        }
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit} className = "input">
                <TextField id="outlined-basic" label="Add a new todo..." variant="outlined" value={inputValue} onChange={handlechange} onKeyPress={handleKeyPress} />
                <Button variant="contained" onClick={() => {
                    if(inputValue.trim() !== ''){
                        add(inputValue)
                        setInputValue('')
                    }
                }} >
                    Contained
                </Button>
            </form>
        </ListItem>
    )
}
