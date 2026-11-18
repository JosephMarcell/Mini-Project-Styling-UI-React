function Hero({ 
  title, 
  description }) {
  return (
    <div className="h-[512px] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-hero-pattern px-[13px] md:px-0">
      <div className="text-center text-[#f5f5f5]">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Hero
