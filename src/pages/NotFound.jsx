import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo.js";

export default function NotFound() {
  useSeo(
    "Page Not Found | UBORA AI TECHNOLOGIES",
    "The page you're looking for doesn't exist on the UBORA AI TECHNOLOGIES website."
  );

  return (
    <section className="section not-found">
      <div className="container">
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
