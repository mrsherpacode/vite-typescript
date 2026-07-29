import { type ReactNode } from "react";
type SectionsProps = {
  title?: string;
  // here children is ReactNode because it can receive any values like strings, numbers, JSX elements etc
  children: ReactNode;
};

const Sections = ({ children, title = "My section title" }: SectionsProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{children}</h3>
    </div>
  );
};

export default Sections;
