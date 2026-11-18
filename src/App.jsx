import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ItemSection from './components/ItemSection.jsx'
import FeaturedProduct from './components/FeaturedProduct.jsx'
import Footer from './components/Footer.jsx'
import {
  navLinks,
  categories,
  featuredProduct,
  trending,
  footerLinks,
  socialIcons,
} from './data/marketplace.js'

function App() {
  return (
    <>
      <Header logo="/assets/logo.svg" navLinks={navLinks} loginHref="#" />

      <main className="max-w-[960px] mx-auto px-8 md:px-0">
        <Hero
          title="Find the Digital Products You Need"
          description= "E-books, templates, source code, UI kits, and presets in one place."
        />

        <ItemSection id= "categories" title="Categories" items={categories} className="mb-12" />

        <FeaturedProduct id= "featured-product" {...featuredProduct} />

        <ItemSection title= "Trending" items={trending} className="mb-12" />
      </main>

      <Footer links= {footerLinks} socialIcons={socialIcons} />
    </>
  )
}

export default App
