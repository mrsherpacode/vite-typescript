import type { ReactNode } from "react";
//  Generic typescript <T>
interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}
// here, < T ,> the comma after T is a quick fix to let typescript know its a generic type
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
