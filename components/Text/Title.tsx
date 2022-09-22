import React, { FC } from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

// Local Typings
interface Props {
  children: any;
}

// Local Variables
const StyledText = styled.Text({
  flex: 1,
  fontSize: '36px',
  color: Colors.primary.light,
  margin: '50px auto 0'
})

const Title: FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  );
}

export default Title;
