import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./Form.js";
import userEvent from "@testing-library/user-event";
const formTestConstants = {
  npass: {
    id: "f",
    password: "12",
  },
  pass: {
    id: "correct",
    password: "1234567890",
  },
};
//it describe
test("failed case: showing password error", async () => {
  //const handleSubmit = jest.fn();
  render(<Form />);
  const idInput = screen.getByLabelText("ID");
  const passwordInput = screen.getByLabelText("Password");

  userEvent.type(idInput, formTestConstants.npass.id);
  userEvent.type(passwordInput, formTestConstants.npass.password);
  const button = screen.getByLabelText("LoginButton");
  fireEvent.click(button);
  await waitFor(() => {
    const idError = screen.getByLabelText("idError");
    const passwordError = screen.getByLabelText("passwordError");
    //expect(idError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
test("failed case: showing id error", async () => {
  //const handleSubmit = jest.fn();
  render(<Form />);
  const idInput = screen.getByLabelText("ID");
  const passwordInput = screen.getByLabelText("Password");
  userEvent.type(idInput, formTestConstants.npass.id);
  userEvent.type(passwordInput, formTestConstants.pass.password);
  const button = screen.getByLabelText("LoginButton");
  fireEvent.click(button);
  await waitFor(() => {
    const idError = screen.getByTestId("id-Error-Message");
    // const passwordError = screen.getByLabelText('passwordError');
    expect(idError).toBeInTheDocument();
  });
});
test("successful case: showing No error", async () => {
  //const handleSubmit = jest.fn();
  render(<Form />);
  const idInput = screen.getByLabelText("ID");
  const passwordInput = screen.getByLabelText("Password");
  userEvent.type(idInput, formTestConstants.pass.id);
  userEvent.type(passwordInput, formTestConstants.pass.password);
  const button = screen.getByLabelText("LoginButton");
  fireEvent.click(button);
  await waitFor(() => {
    //const idError = screen.getByTestId('id-Error-Message');
    //const passwordError = screen.getByLabelText('passwordError');
    //expect(idError).toBeNull();
    expect(screen.queryByTestId("id-Error-Message")).not.toBeInTheDocument();
  });
});

test("renders MyComponent correctly", () => {
  const { asFragment } = render(<Form />);
  expect(asFragment()).toMatchSnapshot();
});
