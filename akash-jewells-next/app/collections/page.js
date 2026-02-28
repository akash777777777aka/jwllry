const collections = [
  {
    title: "Bridal Grandeur",
    description: "Layered necklaces and statement bangles crafted for wedding ceremonies.",
    price: "Starting INR 1,20,000"
  },
  {
    title: "Diamond Classics",
    description: "Fine solitaires and premium rings with elegant modern settings.",
    price: "Starting INR 55,000"
  },
  {
    title: "Antique Heritage",
    description: "Intricate handcrafted textures inspired by royal Indian design.",
    price: "Starting INR 85,000"
  },
  {
    title: "Daily Elegance",
    description: "Lightweight pieces with polished style for everyday comfort.",
    price: "Starting INR 12,000"
  },
  {
    title: "Men's Collection",
    description: "Bold rings, sleek bracelets, and understated premium pendants.",
    price: "Starting INR 18,000"
  },
  {
    title: "Custom Studio",
    description: "Made-to-order jewellery based on your idea, event, and style.",
    price: "By Consultation"
  }
];

export default function CollectionsPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Jewellery Range</p>
          <h1>Curated Collections for Every Style</h1>
        </div>
        <div className="cards-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
