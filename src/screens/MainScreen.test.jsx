import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import MainScreen from "./MainScreen";

test("Renders title", () => {
  render(
    <RecoilRoot>
      <MainScreen />
    </RecoilRoot>
  );
  const title = screen.getByText(/shopping list/i);
  expect(title).toBeInTheDocument();
});
