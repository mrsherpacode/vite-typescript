import Heading from "./components/Heading";
import Sections from "./components/Sections";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  return (
    <>
      <Heading title={"Hellow"} />
      <Sections>This is my sections </Sections>
      <Counter />
      <List
        items={["ktm 🗺️", "po 😭", "np 👍"]}
        render={(item) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
