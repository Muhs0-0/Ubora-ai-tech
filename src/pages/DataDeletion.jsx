import useSeo from "../hooks/useSeo.js";

export default function DataDeletion() {
  useSeo(
    "Data Deletion | UBORA AI TECHNOLOGIES",
    "How to request deletion of your personal data from UBORA AI TECHNOLOGIES (Ubora AI)."
  );

  return (
    <section className="section legal-page">
      <div className="container legal-content">
        <h1>Data Deletion</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        <p>
          If you are a Business Customer using the Ubora AI platform, or an
          End User who has messaged a business powered by Ubora AI on
          WhatsApp, you can request that we delete your personal data at any
          time.
        </p>

        <h2>How to request deletion</h2>
        <p>Send us a request using either method below:</p>
        <ul>
          <li>
            <strong>Email us</strong> at{" "}
            <a href="mailto:info@uboraai.com">
              info@uboraai.com
            </a>{" "}
            with the subject line "Data Deletion Request", including the
            WhatsApp phone number and/or business account associated with
            the data you want deleted.
          </li>
          <li>
            <strong>WhatsApp us</strong> at{" "}
            <a
              href="https://wa.me/254759383583"
              target="_blank"
              rel="noopener noreferrer"
            >
              +254 759 383 583
            </a>{" "}
            and tell us you would like your data deleted, along with the
            phone number the data is linked to.
          </li>
        </ul>

        <h2>What happens next</h2>
        <ol>
          <li>
            We will confirm receipt of your request and may ask you to
            verify your identity or the phone number associated with the
            data, to protect against fraudulent deletion requests.
          </li>
          <li>
            We will delete the personal data associated with your request —
            including conversation history, order details and account
            information, as applicable — within <strong>30 days</strong>.
          </li>
          <li>
            We will send you a confirmation once the deletion has been
            completed.
          </li>
        </ol>

        <h2>What we may keep</h2>
        <p>
          We may retain limited information where required to comply with
          our legal, tax or accounting obligations under Kenyan law, to
          resolve disputes, or to enforce our agreements, even after a
          deletion request. Where this applies, we will let you know what
          is retained and why.
        </p>

        <p>
          For more detail on how we collect, use and protect personal data,
          see our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
