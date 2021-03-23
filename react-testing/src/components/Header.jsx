function Header() {
  return (
    <header data-testid='header'>
      <ul data-testid='list'>
        <li data-testid='list-element'>Home</li>
        <li data-testid='list-element'>Courses</li>
        <li data-testid='list-element'>Contact</li>
        <li data-testid='list-element'>About</li>
      </ul>

      <img
        width='200'
        height='200'
        src='https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png'
        alt='logo'
      />
      <button data-testid='button'>Toggle dark mode</button>
    </header>
  );
}

export default Header;
