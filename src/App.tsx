import React, { useState } from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-text-field/dist/text-field.css';

const App = () => {
  const [username, setUsername] = useState('');

  const handleValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  };

  return (
    <div>
      <TextField
        outlined
        label='Username'
        trailingIcon={<MaterialIcon role="button" icon="face" initRipple={null}/>}
        helperText={<HelperText>Kindly fill in the username</HelperText>}
      >
        <Input
          value={username}
          required={true}
          onChange={handleValueChange}/>
      </TextField>
    </div>
  );
}

export default App;
