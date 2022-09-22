import React, { FC } from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

// Local Typings
interface Props {
  children: any;
}

// Local Variables
const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  padding: '20px',
  border: `solid 2px ${Colors.primary.light}`,
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, .15)',
  backdropFilter: 'blur(5px)',
  margin: '10px 30px 70px',
})

const FormContainer: FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledView {...props}>
      {children}
    </StyledView>
  );
}

export default FormContainer;
