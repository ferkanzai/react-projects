import { render, screen } from '@testing-library/react';
import Header from './Header';

// Testearemos que el componente Header es visible
// Testearemos que tenemos una lista, y que la lista tiene 4 elementos dentro
// Testearemos que tenemos un botón que dice Toggle dark mode
// Testearemos que tenemos una imagen con el mismo src que hay en el HTML

describe('Header', () => {
  it('Header component is visible', () => {
    render(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toBeVisible();
  });

  it('list exists with 4 elements', () => {
    render(<Header />);

    const listParent = screen.getByTestId('list');
    expect(listParent).toBeVisible();
    expect(listParent.children.length).toBe(4);
    const listElements = screen.queryAllByTestId('list-element');
    expect(listElements.length).toBe(4);
  });

  it('button with "Toggle dark mode" text', () => {
    render(<Header />);

    const button = screen.queryByTestId('button');
    expect(button).toBeVisible();
    expect(button).toHaveTextContent('Toggle dark mode');
  });

  it('image has valid src', () => {
    render(<Header />);

    const img = screen.queryByAltText('logo');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute(
      'src',
      'https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png'
    );
  });
});
