// import React, { useState } from 'react';
// import {
//   Container,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Checkbox,
//   IconButton,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// const App = () => {
//   const [name, setName] = useState('');
//   const [names, setNames] = useState([]);
//   // const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);


//   console.log(artists, "artist")
//   let nextId = 0;
//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!name.trim()) return; // Prevent adding empty names
//     setNames([...names, { name, completed: false }]);
//     setName(''); // Clear input field after submission
//   };

//   const handleDelete = (indexToDelete) => {
//     setNames(names.filter((_, index) => index !== indexToDelete));
//   };

//   const handleToggle = (indexToToggle) => {
//     setNames((prevNames) =>
//       prevNames.map((name, index) =>
//         index === indexToToggle ? { ...name, completed: !name.completed } : name
//       )
//     );
//   };



  


//   return (
//     <>
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit} style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
//         <TextField
//           label="Enter Name"
//           variant="outlined"
//           fullWidth
//           value={name}
//           onChange={handleChange}
//         />
//         <Button variant="contained" color="primary" type="submit">
//           Add
//         </Button>
//       </form>
//       <List>
//         {names.map((nameObj, index) => (
//           <ListItem
//             key={index}
//             secondaryAction={
//               <>
//                 <Checkbox
//                   checked={nameObj.completed}
//                   onChange={() => handleToggle(index)}
//                   color="primary"
//                 />
//                 <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </>
//             }
//             style={nameObj.completed ? { textDecoration: 'line-through' } : {}}
//           >
//             <ListItemText primary={nameObj.name} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
// <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {names.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.name}</TableCell>
           
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>






//       <h1>Array List</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}  <button onClick={() => {
//             setArtists(
//   artists.filter(a => a.id !== artist.id)
// );
//             }}>
//               Delete
//             </button></li>
//         ))}
//       </ul>
//     </>
  
// )};

// export default App;


import React, { useState } from 'react';
import './FormPage.css'; // Import CSS file for styling

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [list, setList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, formData]);
    setFormData({
      name: '',
      phone: '',
      email: '',
      password: ''
    });
  }

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <div>
      <h1><center>Register Form</center></h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br/>

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          /><br/>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br/>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br/>

          <button type="submit">Submit</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={handleClick}>
          Reverse
        </button>
      </div>
    </div>
  );
}
