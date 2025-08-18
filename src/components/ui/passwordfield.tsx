import { useState, type ComponentProps } from 'react';
import TextField from './field/textfield';
import IconButton from './icon-button';
import { Eye, EyeClosed } from 'lucide-react';

type PasswordFieldProps = Omit<ComponentProps<typeof TextField>, 'endAdornment' | 'type'>;

const PasswordField = (props: PasswordFieldProps) => {
  const [showsPassword, setShowsPassword] = useState(false);

  const handleButtonPress = () => {
    setShowsPassword((prev) => !prev);
  };

  return (
    <TextField
      type={showsPassword ? 'text' : 'password'}
      endAdornment={
        <IconButton
          onPress={handleButtonPress}
        >
          {showsPassword ?
          <Eye size={18}/>
          :
          <EyeClosed size={18}/>
          }
        </IconButton>
      }
      {...props}
    />
  );
};

export default PasswordField;