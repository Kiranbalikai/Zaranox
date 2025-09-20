import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import Products from "../components/products"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}