import { FC, ReactNode } from "react";
import BaseLayout from "../BaseLayout";

const PublicLayout: FC<{ children: ReactNode, withHeader?: boolean }> = ({ children, withHeader }) => {
  return <BaseLayout withHeader={withHeader} children={children} />;
};

export default PublicLayout;
