import React, { FC } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import colors from "../constants/Colors";


// Local Variables
const StyledView = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.secondary.dark,
})

const ScreenContainer: FC<TextInputProps> = (props) => {
  return (
    <StyledView
      {...props}
    >
      {props.children}
    </StyledView>
  );
};


export default ScreenContainer;