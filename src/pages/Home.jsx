import useSeo from "../hooks/useSeo.js";
import Accordion from "../components/Accordion.jsx";

const STEPS = [
  {
    title: "Connect your WhatsApp",
    text: "We connect your WhatsApp Business number through Meta's official WhatsApp Business Platform (Cloud API).",
  },
  {
    title: "Add your products & services",
    text: "Tell us about your business once — your catalogue, services and prices — and we set up your AI agent.",
  },
  {
    title: "Your AI agent gets to work",
    text: "Your agent answers customer questions 24/7 in English and Kiswahili, shares your catalogue and takes orders.",
  },
  {
    title: "You receive the orders",
    text: "Orders and bookings land with you in real time, ready to confirm and fulfill.",
  },
];

const FEATURES = [
  {
    title: "24/7 Replies",
    text: "Your AI agent never sleeps — customers get instant answers any time of day or night.",
  },
  {
    title: "English & Kiswahili",
    text: "Conversations happen naturally in whichever language your customer prefers.",
  },
  {
    title: "Product Catalogue",
    text: "Showcase your products or services with prices, right inside the chat.",
  },
  {
    title: "Orders & Bookings",
    text: "Customers can buy and book directly on WhatsApp, no extra apps required.",
  },
  {
    title: "Human Handover",
    text: "Complex questions or complaints are passed smoothly to you or your staff.",
  },
  {
    title: "Simple Dashboard",
    text: "See conversations, orders and bookings in one simple, easy-to-use dashboard.",
  },
];

const AUDIENCE = [
  "Retail shops & boutiques",
  "Restaurants & cafes",
  "Salons & barbershops",
  "Pharmacies",
  "Hardware stores",
  "Online sellers & social media shops",
  "Service providers (cleaners, technicians, tutors)",
];

const FAQS = [
  {
    question: "Do I need a WhatsApp Business account?",
    answer:
      "Yes. Ubora AI connects to your business through Meta's official WhatsApp Business Platform (Cloud API). If you don't have a WhatsApp Business account yet, we'll guide you through setting one up.",
  },
  {
    question: "Does the AI understand Kiswahili?",
    answer:
      "Yes. Your AI agent replies naturally in both English and Kiswahili, so you can serve customers in the language they're most comfortable with.",
  },
  {
    question: "Can a human take over the conversation?",
    answer:
      "Yes. Whenever a customer needs a real person — for a complex request, a complaint, or anything outside the AI's scope — the conversation is handed over to you or your staff.",
  },
  {
    question: "Is my business data safe?",
    answer:
      "Yes. We only use your information to power your AI agent and we never sell your data. See our Privacy Policy for full details on how we collect, use and protect your information.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are live within a few days. We connect your WhatsApp number, add your products or services and prices, and test everything with you before switching it on for customers.",
  },
  {
    question: "What if a customer asks something the AI can't answer?",
    answer:
      "The AI recognizes when it doesn't have a confident answer and hands the conversation to a human staff member, so customers are never left stuck.",
  },
];

export default function Home() {
  useSeo(
    "UBORA AI TECHNOLOGIES | AI WhatsApp Agents for Kenyan Businesses",
    "UBORA AI TECHNOLOGIES builds AI-powered WhatsApp agents for Kenyan businesses. Answer customers, share your catalogue, and take orders 24/7 in English and Kiswahili."
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="badge">Meta Tech Provider</span>
          <h1>Sell More on WhatsApp — Powered by AI</h1>
          <p className="hero-subtitle">
            Ubora AI gives your business a 24/7 AI assistant on WhatsApp that
            answers questions, shares your products and prices, and takes
            orders — in English and Kiswahili.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary btn-lg"
              href="https://wa.me/254759383583"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
            <a className="btn btn-ghost btn-lg" href="#how-it-works">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle">
            From connecting your WhatsApp to receiving your first order — in
            four simple steps.
          </p>
          <div className="steps-grid">
            {STEPS.map((step, index) => (
              <div className="step-card" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="features">
        <div className="container">
          <h2 className="section-title">Everything your business needs</h2>
          <p className="section-subtitle">
            A complete AI agent for your WhatsApp, built for how Kenyan
            businesses actually sell.
          </p>
          <div className="features-grid">
            {FEATURES.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="who-its-for">
        <div className="container">
          <h2 className="section-title">Who it's for</h2>
          <p className="section-subtitle">
            Built for small and medium businesses across Kenya.
          </p>
          <ul className="audience-grid">
            {AUDIENCE.map((item) => (
              <li className="audience-chip" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" id="pricing">
        <div className="container pricing-inner">
          <h2 className="section-title">Simple, fair pricing</h2>
          <p className="section-subtitle">
            Every business is different, so we tailor your plan to your
            catalogue and conversation volume.
          </p>
          <div className="pricing-card">
            <h3>Contact us for pricing</h3>
            <p>
              Tell us about your business and we'll put together a plan that
              fits.
            </p>
            <a
              className="btn btn-primary"
              href="https://wa.me/254759383583"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently asked questions</h2>
          <Accordion items={FAQS} />
        </div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container">
          <h2 className="section-title">Contact us</h2>
          <div className="contact-card">
            <div>
              <h3>UBORA AI TECHNOLOGIES</h3>
              <p>
                Tanzil Gardens, 5 Star Road
                <br />
                South C, Langata, Nairobi, Kenya, 00100
              </p>
              <p>
                Phone / WhatsApp:{" "}
                <a href="tel:+254759383583">+254 759 383 583</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@uboraai.com">
                  info@uboraai.com
                </a>
              </p>
            </div>
            <a
              className="btn btn-primary btn-lg"
              href="https://wa.me/254759383583"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
