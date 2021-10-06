import { sortByPrice, sortByName } from "../scripts/Sorter";
import { useRecoilState } from "recoil";

import { listState } from "../store/List";
import { useState } from "react";

export default function Sorter() {
  const [list, setList] = useRecoilState(listState);
  const [isAtoZ, setIsAtoZ] = useState(true);
  const [nameSortIcon, setNameSortIcon] = useState("down");
  const [isFromLowest, setIsFromLowest] = useState(true);
  const [priceSortIcon, setPriceSortIcon] = useState("down-alt");

  function SortByName(list) {
    if (isAtoZ) {
      setList(sortByName(list));
      setNameSortIcon("down-alt");
      setIsAtoZ(false);
    } else {
      setList(sortByName(list).reverse());
      setNameSortIcon("down");
      setIsAtoZ(true);
    }
  }

  function SortByPrice(list) {
    if (isFromLowest) {
      setList(sortByPrice(list));
      setPriceSortIcon("down");
      setIsFromLowest(false);
    } else {
      setList(sortByPrice(list).reverse());
      setPriceSortIcon("down-alt");
      setIsFromLowest(true);
    }
  }
  return (
    <div className="sorter">
      <div>
        Sort by:&nbsp;&nbsp;
        <button
          data-testid="byName"
          onClick={() => SortByName(list)}
          className="link-button"
        >
          <i className={`fas fa-sort-alpha-` + nameSortIcon}></i>
        </button>{" "}
        <button
          data-testid="byPrice"
          onClick={() => SortByPrice(list)}
          className="link-button"
        >
          <i className={`fas fa-sort-numeric-` + priceSortIcon}></i>
        </button>
      </div>
    </div>
  );
}
