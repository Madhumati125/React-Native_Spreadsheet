import React, { FunctionComponent, ReactNode } from "react";
import classes from "./Column.module.css";

export type ColumnProps = {
  [x: string]: ReactNode;
};

const Column: FunctionComponent<ColumnProps> = (props) => {
  return <td className={classes.Column}>{props.children}</td>;
};

export default Column;