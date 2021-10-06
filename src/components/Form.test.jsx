import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import MainScreen from "../screens/MainScreen";

test("Renders name input field", () => {
  render(
    <RecoilRoot>
      <MainScreen />
    </RecoilRoot>
  );
  const inputName = screen.getByPlaceholderText(/sofa/i);
  expect(inputName).toBeInTheDocument();
});

test("Renders price input field", () => {
  render(
    <RecoilRoot>
      <MainScreen />
    </RecoilRoot>
  );
  const inputPrice = screen.getByPlaceholderText(/1250/i);
  expect(inputPrice).toBeInTheDocument();
});

test("Renders add  button", () => {
  render(
    <RecoilRoot>
      <MainScreen />
    </RecoilRoot>
  );
  const button = screen.getByRole("button", { name: /add/i });
  expect(button).toBeInTheDocument();
});

test("Fill form and add to list", () => {
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

  const renderedName = screen.getByText("Table");
  expect(renderedName).toBeInTheDocument();
});
