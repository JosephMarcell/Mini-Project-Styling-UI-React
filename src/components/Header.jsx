import { useState } from 'react'
import Button from './Button.jsx'

function Header({ logo, navLinks, loginHref }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex justify-between items-center mb-9 py-5 px-10 z-50 sticky top-0 bg-[#f5f5f5]">
      <div className="logo flex items-center">
        <img src={logo} alt="Digilapak Logo" className="block" />
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="md:hidden block ml-auto text-[28px] cursor-pointer select-none bg-transparent border-0"
      >
        &#9776;
      </button>

      <nav className="flex items-center">
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#f5f5f5] md:bg-transparent py-5 md:py-0 px-0 gap-5 md:gap-8 items-center list-none m-0 shadow-[0_4px_6px_rgba(0,0,0,0.1)] md:shadow-none`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-medium">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button href={loginHref}>Login</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
