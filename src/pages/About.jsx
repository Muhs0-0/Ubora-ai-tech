import useSeo from "../hooks/useSeo.js";

export default function About() {
  useSeo(
    "About Us | UBORA AI TECHNOLOGIES",
    "Learn about UBORA AI TECHNOLOGIES, a Kenyan Meta Tech Provider building AI-powered WhatsApp agents that help businesses sell more."
  );

  return (
    <section className="section legal-page">
      <div className="container legal-content">
        <h1>About Ubora AI</h1>

        <p>
          Ubora AI is the trading name of <strong>UBORA AI TECHNOLOGIES</strong>,
          a Kenyan technology company registered under the Registration of
          Business Names Act, Kenya (Business Registration Number{" "}
          <strong>BN-QBSZOKOK</strong>). We are based in Nairobi and are a
          Meta Tech Provider, building AI-powered WhatsApp agents for small
          and medium businesses across Kenya.
        </p>

        <h2>Who we are</h2>
        <p>
          We are a Kenyan team that believes small and medium businesses
          deserve the same quality of customer experience as the biggest
          brands — without having to hire a full customer service team. Ubora
          AI was built to put a reliable, always-on assistant inside the app
          Kenyan customers already use the most: WhatsApp.
        </p>

        <h2>Our mission</h2>
        <p>
          Our mission is to help Kenyan businesses sell more on WhatsApp. We
          do this by connecting a business's WhatsApp Business number to our
          platform through Meta's official WhatsApp Business Platform, then
          powering it with an AI agent that understands the business's
          products, services and prices. The result is a 24/7 assistant that
          answers customer questions, shares the catalogue, takes orders and
          bookings, and hands over to a real person whenever a human touch is
          needed — in both English and Kiswahili.
        </p>

        <h2>What we believe</h2>
        <ul>
          <li>
            Customers should get a fast, helpful reply at any hour — not just
            during business hours.
          </li>
          <li>
            Technology should be simple enough for any business owner to set
            up, without technical skills.
          </li>
          <li>
            AI should support your staff, not replace the human relationship
            with your customers — which is why handover to a real person is
            always built in.
          </li>
          <li>
            Kenyan businesses deserve tools built around how they actually
            communicate: in English, in Kiswahili, and on WhatsApp.
          </li>
        </ul>

        <h2>Legal information</h2>
        <p>
          Legal business name: UBORA AI TECHNOLOGIES
          <br />
          Trading name: Ubora AI
          <br />
          Business Registration Number: BN-QBSZOKOK
          <br />
          Registered under: the Registration of Business Names Act, Kenya
          <br />
          Address: Tanzil Gardens, 5 Star Road, South C, Langata, Nairobi,
          Kenya, 00100
        </p>

        <p>
          Have questions about Ubora AI?{" "}
          <a
            href="https://wa.me/254759383583"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp
          </a>{" "}
          or email{" "}
          <a href="mailto:najibdahir944@gmail.com">
            najibdahir944@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
