import { FC, ReactNode } from "react";
import BaseLayout from "../BaseLayout";

const PrivateLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseLayout children={children} />;
};

export default PrivateLayout;
