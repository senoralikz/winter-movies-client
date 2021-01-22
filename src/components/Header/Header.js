import React, { Fragment } from 'react'
// import the Nav and NavBar components from react bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Add some bootstrap links that will only be shown when the user is signed in (authenticated)
const authenticatedOptions = (
  <Fragment>
    {/* Bootstrap Nav.Links are different than react router links. Note that they
        have an `href` prop instead of a `to` prop */}
    <Nav.Link href="#movies">Movies</Nav.Link>
    <Nav.Link href="#create-movie">Create Movie</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

// These links will be shown when the user is not signed in (unauthenticated)
const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// Show these links at all times, whether you or signed in or signed out
const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  // bg=primary uses our primary color as our navbar's background
  // variant=dark means that our background is dark, so the links should be white
  // expand=md, when the screensize is medium, show the links in the bar instead of the
  // hamburger menu
  <Navbar bg="primary" variant="dark" expand="md">
    {/* The Navbar.Brand styles the name of your application.
        href=# means that if you click on your apps name, it will redirect you to the home page */}
    <Navbar.Brand href="#">
      Winter Movies 🍿
    </Navbar.Brand>
    {/* The Navbar.Toggle is the button that will show our nav links on smaller screen sizes.
        The aria-controls should match the Navbar.Collapse component. */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    {/* The Navbar.Collapse contains the links that will only show up when the hamburger
        menu is clicked on. */}
    <Navbar.Collapse id="basic-navbar-nav">
      {/* The Nav component contains our navigation links.
          ml=auto means margin-left should be set automatically (which takes up the remaining space)
          ml=auto is what forces the links to the right side of the screen. */}
      <Nav className="ml-auto">
        {/* If we haev a user: render a span that says Welcome and their email address
            navbar-text, uses the same styling as Nav.Links
            mr-2 adds margin to the right of this span */}
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        {/* Always render the alwaysOptions links */}
        { alwaysOptions }
        {/* If we have a user, show the authenticatedOptions otherwise show the unauthenticatedOptions */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
