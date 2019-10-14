import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as fetch from 'axios';
import AsyncPage from '../AsyncPage';

jest.mock('axios');

describe('<AsyncPage /> tests', () => {
  afterEach(() => {
    fetch.mockRestore()
  })

  it('should render the page by default', async () => {
    const text = 'No data found';
    fetch.get.mockResolvedValue({ data: [] });

    const { container, getByText } = render(<AsyncPage />);

    await wait()

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText(text)).toBeInTheDocument();
  });

  it('should fetch data successfully', async () => {
    const posts = [{ id: 1, title: 'sample title', body: 'sample body' }];
    fetch.get.mockResolvedValue({ data: posts });

    const { getByText, container } = render(<AsyncPage />);

    expect(getByText('Loading...')).toBeInTheDocument();

    await wait()
    expect(getByText('sample title')).toBeInTheDocument();
    expect(container).toMatchSnapshot()
  });

  it('should show an error message', async () => {
    const text = 'Something went wrong'
    fetch.get.mockImplementation(() => Promise.reject('Some error'))

    const { getByText, container } = render(<AsyncPage />);

    await wait()

    expect(getByText(text)).toBeInTheDocument(0)
    expect(container).toMatchSnapshot()
  })
});
