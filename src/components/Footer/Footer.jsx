import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-credit">
          Handcrafted by Andrew Martinez &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-links" aria-label="Social links">
          <p className="footer-links-label">Let&apos;s connect</p>
          <a
            href="https://www.linkedin.com/in/andymartinez2/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/andymartinez1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
