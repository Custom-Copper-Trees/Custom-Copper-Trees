export default function BonsaiArtWebsite() {
  const creations = [
    {
      title: "Crystal Geode Bonsai",
      description: "Handcrafted wire bonsai growing from a glowing crystal geode.",
      image:
        "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Salt Lamp Bonsai",
      description: "Warm ambient Himalayan salt lamp paired with pink wire foliage.",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Crystal Tower Tree",
      description: "Minimal crystal tower wrapped with handcrafted bonsai wirework.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-zinc-400 text-sm mb-4">
            Handmade Wire Bonsai Art
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crystal Bonsai
            <br />
            Creations
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-lg leading-relaxed mb-10">
            Unique handcrafted wire bonsai sculptures featuring crystals,
            glowing geodes, resin rivers, and ambient lighting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#gallery"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              View Gallery
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Custom Orders
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Pieces</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Every bonsai is individually handcrafted using wire, crystals,
            wood, stone, and lighting elements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {creations.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 border-b border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">About the Artist</h2>

          <p className="text-zinc-300 leading-relaxed text-lg">
            These bonsai sculptures are handcrafted one piece at a time using
            twisted wire techniques, natural crystals, and custom wood bases.
            Inspired by nature, ambient lighting, and fantasy aesthetics.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Custom Orders</h2>

        <p className="text-zinc-400 mb-10 text-lg">
          Interested in a custom bonsai piece? Reach out through Instagram to
          discuss colors, crystals, lighting, and display styles.
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
        >
          Visit Instagram
        </a>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        © 2026 Crystal Bonsai Creations · Handmade Wire Art
      </footer>
    </div>
  );
}
