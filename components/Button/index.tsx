import React, { FC } from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Paragraph from '../Text/Paragraph';

// Local Typings
interface Props {
  onPress: () => void;
  children: any;
}

// Local Variables
const StyledButton = styled.TouchableOpacity({
  border: `solid 2px ${Colors.primary.dark}`,
  borderRadius: '8px',
  backgroundColor: Colors.primary.light,
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '280px',
})


const Button: FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      <Paragraph color="white">
        {children}
      </Paragraph>
    </StyledButton>
  );
}

export default Button;
