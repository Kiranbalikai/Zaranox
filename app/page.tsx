import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Products from "../components/products";
import Contact from "../components/contact";
import Footer from "../components/footer";

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
      <section
        id="careers"
        className="py-24 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Info & Contact */}
            <div className="flex flex-col justify-center h-full bg-black/60 backdrop-blur-md border border-yellow-400/20 rounded-3xl shadow-2xl p-12 md:p-16">
              <div className="mb-8">
                <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase font-inter">
                  Join Our Team
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-yellow-400 mb-8">
                Careers at Zaronox
              </h2>
              <p className="text-lg text-gray-300 mb-10 font-inter leading-relaxed">
                At Zaronox, we’re always on the lookout for passionate and
                driven individuals to join our growing team. If you’re looking
                to build a career where innovation, growth, and learning go hand
                in hand, you’ve come to the right place.
              </p>
              <div className="mb-6 text-lg text-gray-300 font-inter">
                <span className="font-bold text-yellow-400">
                  📩 Send your CV & Cover Letter to:
                </span>{" "}
                <a
                  href="mailto:info@zaronox.com"
                  className="underline text-yellow-400"
                >
                  info@zaronox.com
                </a>
              </div>
              <div className="text-lg text-gray-300 font-inter">
                <span className="font-bold text-yellow-400">📞 Contact:</span>{" "}
                <a
                  href="tel:+917042594516"
                  className="underline text-yellow-400"
                >
                  +91 70425 94516
                </a>
              </div>
            </div>
            {/* Right: Job Openings */}
            <div className="flex flex-col justify-center h-full bg-black/40 border border-yellow-400/10 rounded-3xl shadow-xl p-10 md:p-14">
              <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
                Current Openings
              </h3>
              <ul className="space-y-6 text-lg text-gray-200 font-inter">
                <li className="flex items-center gap-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-8 py-5">
                  <span className="bg-yellow-400 text-black rounded-full px-4 py-2 text-lg font-bold">
                    1
                  </span>{" "}
                  Marketing Analyst
                </li>
                <li className="flex items-center gap-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-8 py-5">
                  <span className="bg-yellow-400 text-black rounded-full px-4 py-2 text-lg font-bold">
                    2
                  </span>{" "}
                  Data Controller
                </li>
                <li className="flex items-center gap-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-8 py-5">
                  <span className="bg-yellow-400 text-black rounded-full px-4 py-2 text-lg font-bold">
                    3
                  </span>{" "}
                  Data Entry Administrator
                </li>
                <li className="flex items-center gap-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-8 py-5">
                  <span className="bg-yellow-400 text-black rounded-full px-4 py-2 text-lg font-bold">
                    4
                  </span>{" "}
                  Art Director
                </li>
                <li className="flex items-center gap-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-8 py-5">
                  <span className="bg-yellow-400 text-black rounded-full px-4 py-2 text-lg font-bold">
                    5
                  </span>{" "}
                  Data Uploader
                </li>
                <li className="flex items-center gap-5 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-8 py-5">
                  <span className="bg-yellow-400 text-black rounded-full px-4 py-2 text-lg font-bold">
                    6
                  </span>{" "}
                  Distributor Roles{" "}
                  <span className="text-yellow-400">
                    (Contact us for details)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
