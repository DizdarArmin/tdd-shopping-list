import "./styles/base.scss";
import { Save, Load } from "./scripts/LocalStorage";
import { listState } from "./store/List";

import { useEffect } from "react";
import { useRecoilState } from "recoil";

import MainScreen from "./screens/MainScreen";
export default function App() {
  const [list, setList] = useRecoilState(listState);
  
  //prettier-ignore
  useEffect(() => {setList(Load("list"));}, [setList]);

  //prettier-ignore
  useEffect(() => {Save(list);}, [list]);

  return (
    <>
      <MainScreen />
    </>
  );
}
