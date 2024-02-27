// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-asia', date.getFullYear(2024).currentMonth,
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import TodoList from './Curly';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) return;
    setNames([...names, name]);
    setName('');
  };

  // Function to delete an item from the list
  const handleDelete = (indexToDelete) => {
    setNames(names.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Name Submission
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <TextField label="Name" variant="outlined" value={name} onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      <TodoList names={names} onDelete={handleDelete} />
    </Container>
  );
};

export default App;

  

 