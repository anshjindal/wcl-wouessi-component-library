import "./Text.module.scss";
import { ReactNode } from 'react';


const Text = ({ children }: TextProps) => {
  return <p className="text">{children}</p>;
};

export type TextProps = {
  children: ReactNode;
}

export default Text;
