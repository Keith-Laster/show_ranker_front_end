import React, { FC } from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import { Button as NativeButton } from 'react-native';

// Local Typings
interface Props {
  title: any;
  onPress: () => void;
}

// Local Variables
const StyledButton = styled.Button({
  border: `solid 2px ${Colors.primary.light}`,
  borderRadius: '8px',
  backgroundColor: Colors.primary.dark,
  color: 'red'
})

const Button: FC<Props> = (props) => {
  return (
    <StyledButton {...props} />
  );
}

export default Button;
