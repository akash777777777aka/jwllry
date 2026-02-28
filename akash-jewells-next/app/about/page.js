export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container section-head">
          <p className="eyebrow">Our Story</p>
          <h1>Three Generations of Trusted Jewellery Craft</h1>
          <p>
            Founded by master artisan Hariram Soni, Shree Soni Jewellers is built on honesty, artistry, and lifelong customer
            relationships.
          </p>
        </div>
      </section>

      <section className="section-pad slim-top">
        <div className="container split-grid">
          <article className="info-panel">
            <h2>What We Believe</h2>
            <p>
              Jewellery is memory, identity, and heritage. We design every piece to carry emotional value that lasts
              for generations.
            </p>
          </article>
          <article className="info-panel">
            <h2>How We Work</h2>
            <p>
              Every design goes through sketching, hand-finishing, and strict quality checks. We involve customers
              throughout the process.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
