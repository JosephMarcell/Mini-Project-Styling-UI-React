function Footer({ 
  links, 
  socialIcons }) {
  return (
    <footer className="mt-16">
      <nav>
        <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-around gap-x-6 gap-y-4 md:gap-0 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center gap-4 my-6">
        {socialIcons.map((icon) => (
          <img key={icon.alt} src={icon.image} alt={icon.alt} className="max-w-[24px] max-h-[24px]" />
        ))}
      </div>
      <p className="text-center mb-10">&copy; 2026 Digilapak. All rights reserved.</p>
    </footer>
  )
}

export default Footer
