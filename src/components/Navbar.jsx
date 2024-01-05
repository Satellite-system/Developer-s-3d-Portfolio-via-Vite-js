import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        <p>AH</p>
      </NavLink>
      <nav>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar