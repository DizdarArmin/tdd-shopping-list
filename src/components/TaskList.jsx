import Task from "./Task";
export default function TaskList({ list }) {
  return (
    <div data-testid="container">
      {list.map((item) => (
        <Task key={item.key} item={item} />
      ))}
    </div>
  );
}
