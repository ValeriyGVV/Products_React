import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {
  const location = useLocation();
  const products = useSelector((state) => state.products.value);

  return <Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/" className={'navbar-brand'}>Home</Link>
      <Nav className="me-auto">
        <Link to="/products"
              className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}>
          Products
          <span className={'text-danger ml-2'}>({products.filter(el => el.addedToCart).length})</span></Link>
        <Link to="/registration" className={location.pathname === '/registration' ? 'nav-link active' : 'nav-link'}>Log In</Link>
        <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'nav-link active' : 'nav-link'}>Contact us</Link>
      </Nav>
    </Container>
  </Navbar>
}

export default Header;