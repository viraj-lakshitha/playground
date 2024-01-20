import { FC, ReactNode } from "react";
import Header from "@/component/Header";

const BaseLayout: FC<{ children: ReactNode; withHeader?: boolean }> = ({
  children,
  withHeader,
}) => {
  return (
    <div className="grid min-h-screen min-w-screen bg-slate-300">
      {withHeader && <Header />}
      {children}
    </div>
  );
};

export default BaseLayout;
