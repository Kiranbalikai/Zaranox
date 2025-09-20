import {
  Phone,
  Globe,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      value: "9838896679",
      link: "tel:9838896679",
      description: "Call us for immediate assistance",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Website",
      value: "www.zaranoxelectricals.com",
      link: "https://www.zaranoxelectricals.com",
      description: "Explore our complete product range",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Manufacturing Hub",
      value: "Bawana Industrial Area, Delhi - 110039",
      link: null,
      description: "State-of-the-art production facility",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@zaranox_electrical",
      link: "https://instagram.com/zaranox_electricals",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      platform: "Facebook",
      handle: "Zaranox Electrical Solutions",
      link: "https://facebook.com/zaranox.electricals",
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      platform: "YouTube",
      handle: "@Zaranox Electrical",
      link: "https://youtube.com/@apswitches",
      icon: <Youtube className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/flowing-gold-background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase font-inter">
              Connect With Us
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8 text-balance leading-tight">
            Let's Create
            <br />
            <span className="text-yellow-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-inter leading-relaxed">
            Ready to transform your space with premium electrical solutions? Our
            experts are here to guide you every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-md border border-yellow-400/30 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:border-yellow-400/50 transition-colors duration-300">
                    <div className="text-yellow-400">{info.icon}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-yellow-400 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 font-inter">
                  {info.description}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-white hover:text-yellow-400 transition-colors font-inter font-medium"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white font-inter">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-poppins font-bold text-white mb-8">
              Follow Our Journey
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/10 rounded-2xl blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                    <div className="relative bg-black/40 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-6 group-hover:border-yellow-400/50 transition-colors duration-300">
                      <div className="text-center">
                        <div className="text-yellow-400 mb-3 flex justify-center">
                          {social.icon}
                        </div>
                        <div className="text-yellow-400 font-poppins font-bold text-lg mb-2">
                          {social.platform}
                        </div>
                        <div className="text-gray-300 font-inter text-sm">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 rounded-[3rem] blur-xl" />
              <div className="relative bg-black/40 backdrop-blur-md border border-yellow-400/20 rounded-[3rem] p-12 lg:p-16">
                <div className="mb-6">
                  <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase font-inter">
                    Need Expert Guidance?
                  </span>
                </div>

                <h4 className="text-4xl font-poppins font-bold text-white mb-6">
                  Speak with Our
                  <br />
                  <span className="text-yellow-400">Specialists</span>
                </h4>

                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-inter leading-relaxed">
                  Our electrical experts are ready to help you choose the
                  perfect solutions for your residential or commercial projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:7410053100"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-inter"
                  >
                    Call: 9838896679
                  </a>
                  <a
                    href="https://www.zaranoxelectricals.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-inter"
                  >
                    Visit Website
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-yellow-400/20">
                  <div className="text-sm text-gray-400 font-inter space-y-1">
                    <p>
                      <span className="text-yellow-400">Established:</span> 1980
                      • <span className="text-yellow-400">Updated:</span> August
                      2025
                    </p>
                    <p>
                      All disputes subject to Delhi Jurisdiction • Prices
                      subject to change
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
