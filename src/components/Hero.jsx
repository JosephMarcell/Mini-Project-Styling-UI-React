function Hero({ 
  title, 
  description,
  image }) {
  return (
    <div
      className="h-[512px] flex justify-center items-center bg-cover bg-center bg-no-repeat px-[13px] md:px-0"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url('${image}')` }}
    >
      <div className="text-center text-[#f5f5f5]">
        <h1 className="text-3xl font-bold mb-4">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Hero
