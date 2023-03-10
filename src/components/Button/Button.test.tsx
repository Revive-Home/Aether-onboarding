import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button test", () => {
  it("renders children", () => {
    const { getByText } = render(<Button variant="primary">Click!</Button>);
    const button = getByText("Click!");
    expect(button).toBeTruthy();
  });

  it("renders disabled state when disabled prop is passed", () => {
    const { getByText } = render(
      <Button disabled variant="primary">
        Disabled Button
      </Button>
    );
    const button = getByText("Disabled Button");
    expect(button.closest("button")).toBeDisabled();
  });
});
