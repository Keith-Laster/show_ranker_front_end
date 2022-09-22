import React, { FC } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { UseTextFieldProps } from "../../hooks/strings";

interface Props extends TextInputProps {
  textField: UseTextFieldProps
}

// Local Variables
const StyledTextInput = styled.TextInput({
  borderColor: "gray",
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
  marginTop: 22,
  height: '52px',
  fontSize: '26px',
  color: Colors.primary.light,
  backgroundColor: Colors.secondary.dark
})

const Input: FC<TextInputProps> = (props) => {
  return (
    <StyledTextInput
      {...props}
    />
  );
};


export default Input;