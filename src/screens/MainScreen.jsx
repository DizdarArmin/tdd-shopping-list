import { useState } from "react";

import Form from "../components/Form";
import Sorter from "../components/Sorter";
import Tasks from "../components/Tasks";
import ToggleCompleted from "../components/ToggleCompleted";

export default function MainScreen() {
  const [showCompleted, setShowCompleted] = useState(false);
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>Shopping list</h1>
        <Form />
        <ToggleCompleted
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
        />
        <Sorter />
        <Tasks showCompleted={showCompleted} />
      </div>
    </div>
  );
}
