import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <section className="not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link to="/" className="not-found-link">
        Back to Home
      </Link>
    </section>
  );
}
