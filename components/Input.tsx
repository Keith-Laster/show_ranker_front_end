import React, { FC } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { useTextField, UseTextFieldProps } from "../hooks/strings";

interface Props extends TextInputProps{
  textField: UseTextFieldProps
}

// Local Variables
const StyledTextInput = styled.TextInput({
  borderColor: "gray",
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
})

const Input: FC<TextInputProps> = (props) => {
  return (
    <StyledTextInput
      {...props}
    />
  );
};


export default Input;