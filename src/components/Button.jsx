function Button({ 
  href, 
  children }) {
  return (
    <a
      href={href}
      className="inline-block text-white rounded-full bg-brand font-medium py-2 px-5 text-sm hover:bg-brand-hover"
    >
      {children}
    </a>
  )
}

export default Button
