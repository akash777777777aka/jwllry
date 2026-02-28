import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container contact-grid">
        <article className="contact-info">
          <p className="eyebrow">Get In Touch</p>
          <h1>Book a Jewellery Consultation</h1>
          <p>Share your requirement and our team will reach out within 24 hours.</p>
          <p>
            <strong>Address:</strong> Belpahar Fatak, Dist. Jharsuguda, At/Po Belpahar, Pin 768218, Odisha, Near Post Office, Near Kiosk SBI Mini Bank, Bazar Road
          </p>
          <p>
            <strong>Phone:</strong> +91 95834 20885
          </p>
          <p>
            <strong>Email:</strong> webservicesbrown@gmail.com
          </p>
        </article>
        <ContactForm />
      </div>
    </section>
  );
}
