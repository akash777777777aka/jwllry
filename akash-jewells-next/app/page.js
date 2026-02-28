import Link from "next/link";
import ShaderHeroBackground from "../components/ShaderHeroBackground";

const featured = [
  {
    title: "Royal Bridal Necklace",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Classic Diamond Ring",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Traditional Gold Bangles",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-pad hero shader-hero">
        <ShaderHeroBackground />
        <div className="shader-fallback" />
        <div className="container hero-grid hero-content-layer">
          <div className="hero-copy">
            <p className="eyebrow">Legacy Since 1998</p>
            <h1>Handcrafted Jewellery for Every Celebration</h1>
            <p>
              Shree Soni Jewellers combines traditional craftsmanship and modern elegance to create memorable pieces for your
              life&apos;s finest moments.
            </p>
            <div className="hero-badges">
              <span className="badge">BIS Hallmarked</span>
              <span className="badge">Certified Diamonds</span>
              <span className="badge">Lifetime Care</span>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/collections">
                Explore Collection
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Book Consultation
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <h2>Signature Collection</h2>
            <p>Temple Gold Necklace Set</p>
            <ul>
              <li>22K Hallmarked Gold</li>
              <li>Hand-engraved motifs</li>
              <li>Matching earrings included</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Product Gallery</p>
            <h2>Popular Pieces at Shree Soni Jewellers</h2>
          </div>
          <div className="gallery-grid">
            {featured.map((item) => (
              <figure className="gallery-item" key={item.title}>
                <img src={item.image} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container metrics">
          <article className="metric">
            <strong>25+</strong>
            <span>Years of Craft Legacy</span>
          </article>
          <article className="metric">
            <strong>12k+</strong>
            <span>Happy Families Served</span>
          </article>
          <article className="metric">
            <strong>4.9/5</strong>
            <span>Client Satisfaction Rating</span>
          </article>
        </div>
      </section>
    </>
  );
}
