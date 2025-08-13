import { render, screen } from "@testing-library/react";
import Hello from "../../components/Hello";
import { describe, expect, it } from "vitest";

describe("renders a greeting", () => {
  it("should render a greeting", () => {
    render(<Hello name="John" />);
    expect(screen.getByText(/hello, john!/i)).toBeInTheDocument();
  });
});
