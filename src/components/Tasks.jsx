import { useRecoilState } from "recoil";
import { listState } from "../store/List";

import TaskList from "./TaskList";

export default function Tasks({ showCompleted }) {
  const [list] = useRecoilState(listState);
  const completedList = list.filter((item) => item.isFinished === true);
  const notCompletedList = list.filter((item) => item.isFinished === false);

  return (
    <>
      {list.length === 0 && (
        <p className="text-center mt-4">Start by adding items</p>
      )}
      <TaskList list={notCompletedList} />
      {showCompleted && <TaskList list={completedList} />}
    </>
  );
}
