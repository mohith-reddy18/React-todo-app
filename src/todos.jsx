import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todos({todo,removetodo,removed}){
    const labelId = `checkbox-list-label-${todo.id}`;
                return (
                    <ListItem secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => removetodo(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                    disablePadding >

                    <ListItemButton role={undefined}  dense>
                        <ListItemIcon>
                        <Checkbox edge="start" checked={todo.status} onClick={()=> removed(todo.id)} tabIndex={-1} disableRipple slotProps={{ input: { 'aria-labelledby': labelId } }} />
                        </ListItemIcon>
                    <ListItemText id={labelId} primary={todo.title} />
                    </ListItemButton>
          </ListItem>
        );
}