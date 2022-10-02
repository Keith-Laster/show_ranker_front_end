import React, { FC, ReactNode } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import colors from "../../constants/Colors";
import Paragraph from "../Text/Paragraph";

interface Props {
  options: Record<string, ReactNode>[]
}

interface TableCellProps {
  children: JSX.Element | JSX.Element[];
}


// Local Variables
const Container = styled.View({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '90%'
});

const TableRow = styled.View({
  alignSelf: 'stretch',
  flexDirection: 'row',
  border: '2px solid grey',
  height: '70px'
})

const TableCell = styled.View({
  flex: 1,
  alignSelf: 'stretch',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px'
})


const Table: FC<Props> = (props) => {
  return (
    <Container {...props}>
      <TableRow>
        {Object.keys(props.options[0]).map(header => (
          <TableCell key={header}>
            <Text style={{ color: 'white' }}>
              {header.toUpperCase()}
            </Text>
          </TableCell>
        ))}
      </TableRow>

      {props.options.map((option, index) => (
        <TableRow key={index}>
          {Object.values(option).map(cellData => (
            <TableCell>
              <Paragraph color="white">
                {cellData}
              </Paragraph>
            </TableCell>
          ))}
        </TableRow>
      ))}

    </Container>
  );
};


export default Table;