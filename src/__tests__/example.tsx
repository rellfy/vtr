import React from 'react';
import { render } from '@testing-library/react';
import { Main } from "../components/Main";

test("Main says 'hello world'", () => {
    const { container } = render(<Main />);
    expect(container).toHaveTextContent("hello world");
});

test("Main has a button", () => {
    const { getByTestId } = render(<Main />);
    const button = getByTestId("main.button");
    expect(button).not.toBeNull();
});