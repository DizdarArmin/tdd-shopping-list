import { useRecoilState } from "recoil";
import { listState } from "../store/List";

import Toggle from "react-toggle";

export default function Task({ item }) {
  const [list, setList] = useRecoilState(listState);
  const { key, name, price, isFinished } = item;

  function handleChange(key) {
    const index = list.findIndex((i) => i.key === key);
    const clonedList = [...list];
    clonedList[index].isFinished = !clonedList[index].isFinished;
    setList(clonedList);
  }

  return (
    <div className="task" key={key}>
      <Toggle
        alt="checkbox"
        data-testid="checkbox"
        defaultChecked={isFinished}
        onChange={() => handleChange(key)}
      />
      <div className="task-item">
        <h5>{name}</h5>
      </div>
      <div className="task-item">
        <h5>{price} SEK</h5>
      </div>
    </div>
  );
}
