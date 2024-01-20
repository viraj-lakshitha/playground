'use client'
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>;
};

export default Wrapper;