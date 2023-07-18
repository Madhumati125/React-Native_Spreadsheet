import React, { FunctionComponent, ReactNode } from "react";

export type RowProps = {
  [x: string]: ReactNode;
};

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
};

export default Row;