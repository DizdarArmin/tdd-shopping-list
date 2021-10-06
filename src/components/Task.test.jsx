import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import MainScreen from "../screens/MainScreen";

test("Checkbox is false and sets to true on click", () => {
  render(
    <RecoilRoot>
      <MainScreen />
    </RecoilRoot>
  );
  const name = screen.getByPlaceholderText(/sofa/i);
  const price = screen.getByPlaceholderText(/1250/i);

  fireEvent.input(name, { target: { value: "Table" } });
  fireEvent.input(price, { target: { value: 2500 } });

  const button = screen.getByRole("button", { name: /add/i });
  fireEvent.click(button);

  const checkbox = screen.getByTestId("checkbox");
  expect(checkbox.checked).toEqual(false);

  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
