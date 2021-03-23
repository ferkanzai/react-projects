import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('test element showing', () => {
    render(<App />);

    const testElement = screen.queryByText('test', { exact: false });
    // console.log(testElement)
    expect(testElement).toBeInTheDocument();
  });

  it('Elements with The Bridge showing', () => {
    render(<App />);

    const allElements = screen.queryAllByText('The Bridge', { exact: false });
    allElements.forEach((el) => expect(el).toBeVisible());
  });
});
