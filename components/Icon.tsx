import { FontAwesome } from "@expo/vector-icons";
import React, { FC } from "react";

interface Props {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number
}

const Icon: FC<Props> = ({
  size = 30,
  ...props
}) => {
  return <FontAwesome size={size} style={{ marginBottom: -3 }} {...props} />;
}

export default Icon;