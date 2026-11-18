function ItemCard({ 
  image, 
  alt, 
  title, 
  description }) {

  
  return (
    <div className="w-full max-w-[280px] md:max-w-none md:w-[176px] text-center md:text-left">
      <img src={image} alt={alt} width="176" height="176" className="w-full h-auto block" />
      <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default ItemCard
