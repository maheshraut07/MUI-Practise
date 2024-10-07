import  { ChangeEvent, useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData); // You can process the form data here
  };

  return (
    <Stack spacing={2} maxWidth={400} mx="auto">
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        variant="outlined"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
}

export default UserForm;
