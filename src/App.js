import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) return; // Prevent adding empty names
    setNames([...names, { name, completed: false }]);
    setName(''); // Clear input field after submission
  };

  const handleDelete = (indexToDelete) => {
    setNames(names.filter((_, index) => index !== indexToDelete));
  };

  const handleToggle = (indexToToggle) => {
    setNames((prevNames) =>
      prevNames.map((name, index) =>
        index === indexToToggle ? { ...name, completed: !name.completed } : name
      )
    );
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
        <TextField
          label="Enter Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
      <List>
        {names.map((nameObj, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <Checkbox
                  checked={nameObj.completed}
                  onChange={() => handleToggle(index)}
                  color="primary"
                />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
            style={nameObj.completed ? { textDecoration: 'line-through' } : {}}
          >
            <ListItemText primary={nameObj.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
