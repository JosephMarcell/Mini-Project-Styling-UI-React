import ItemCard from './ItemCard.jsx'

function ItemSection({ 
  id, 
  title, 
  items, 
  className = '' }) {
  return (
    <section id={id} className={className}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-5 flex-wrap justify-center md:justify-start">
        {items.map(
          (item) => (
          <ItemCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default ItemSection
