import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

const initialMockProps = {
  name: 'Pawnshop Clerk',
  status: 'Alive',
  species: 'Alien',
  location: {
    name: 'Pawn Shop Planet',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/258.jpeg',
};

let mockProps;

describe('CharacterCard', () => {
  beforeEach(() => {
    mockProps = { ...initialMockProps };
  });

  it('character card is visible', () => {
    render(<CharacterCard {...mockProps} />);
    mockProps.image = null;

    const characterCard = screen.getByTestId('character-card');
    expect(characterCard).toBeVisible();
  });

  it('name and status are visible', () => {
    render(<CharacterCard {...mockProps} />);

    const name = screen.queryByText(mockProps.name, { exact: false });
    expect(name).toBeVisible();

    const status = screen.queryByText(mockProps.status, { exact: false });
    expect(status).toBeVisible();
  });

  it('image to be visible and with correct src', () => {
    render(<CharacterCard {...mockProps} />);

    const image = screen.queryByAltText(`${mockProps.name}`);
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', mockProps.image);
  });

  it('location and species are visible', () => {
    render(<CharacterCard {...mockProps} />);

    const location = screen.queryByText(mockProps.location.name, { exact: false });
    expect(location).toBeVisible();

    const species = screen.queryByText(mockProps.species, { exact: false });
    expect(species).toBeVisible();
  });
});
