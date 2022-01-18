import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 350 ||
        document.body.scrollTop > 350
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              id="navbar-brand"
              className='navbar_brand'
            >
              Kokan
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Yeva aploch asa!!!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/about"
                >
                  <i className="now-ui-icons business_badge d-lg-none d-xl-none text_all_bold"></i>
                  <text className='text_all_bold'>About Us</text>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1 d-lg-none d-xl-none text_all_bold"></i>
                  <text className='text_all_bold'>Pages</text>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="/login"
                >
                  <i className="now-ui-icons gestures_tap-01 d-lg-none d-xl-none text_all_bold"></i>
                  <text className='text_all_bold'>Login</text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/contact"
                >
                  <i className="now-ui-icons ui-1_email-85 d-lg-none d-xl-none text_all_bold"></i>
                  <text className='text_all_bold'>Contact Us</text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/partners"
                >
                  <i className="now-ui-icons emoticons_satisfied d-lg-none d-xl-none text_all_bold"></i>
                  <text className='text_all_bold'>Partners</text>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="/profile"
                  id="profile-tooltip"
                >
                  <i className="now-ui-icons users_single-02 text_all_bold"></i>
                  <text className="d-lg-none d-xl-none text_all_bold">Profile</text>
                </NavLink>
                <UncontrolledTooltip target="#profile-tooltip">
                  Profile
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
