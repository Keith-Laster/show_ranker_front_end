import React, { FC } from 'react';
import styled from 'styled-components/native';
import Colors, { ColorsProp } from '../../constants/Colors';

// Local Typings
interface Props extends StyledProps {
  children: any;
}

interface StyledProps {
  color?: string
}

// Local Variables
const StyledText = styled.Text<StyledProps>((styledProps) => ({
  // flex: 1,
  fontSize: '24px',
  color: styledProps.color ?? Colors.primary.light,
  margin: 'auto 0'
}))

const Paragraph: FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  );
}

export default Paragraph;
