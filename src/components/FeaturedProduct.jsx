import Button from './Button.jsx'

function FeaturedProduct({ id, 
  image, 
  title, 
  description, 
  ctaLabel, 
  ctaHref }) {
  return (
    <section id={id} className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-12">
      <div className="w-full md:w-[410px] shrink-0 h-auto md:h-[256px]">
        <img src={image} alt="featured product" className="w-full h-auto md:h-[256px] object-cover block" />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <article className="mb-4">{description}</article>
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </section>
  )
}

export default FeaturedProduct
