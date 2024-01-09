import logoImage from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logoImage} alt="logo image" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
