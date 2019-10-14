import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('<Button /> tests', () => {
  it('should render as default button', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    const variant = 'primary';
    const { container } = render(<Button variant={variant}></Button>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveClass(`button-${variant}`);
  });

  it('should render a secondary button', () => {
    const variant = 'secondary';
    const { container } = render(<Button variant={variant}></Button>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveClass(`button-${variant}`);
  });

  it('should render the button with some text', () => {
    const text = 'I am a button, I can be clicked';

    const { getByText, container } = render(<Button>{text}</Button>);

    expect(container).toMatchSnapshot();
    expect(getByText(text)).toBeInTheDocument();
  });

  it('should call the click callback handler', () => {
    const content = 'Hello, world!'
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>{content}</Button>)

    fireEvent.click(getByText(content))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
});
