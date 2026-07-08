import "./Contact.css";

function Contact() {
  return (
    <footer className="footer dark" id="contact">
      <div className="container">
        
        <header className="section-header">
          <span className="section-number">04 / CLOSING</span>
          <h2 className="section-title">Let's talk</h2>
        </header>

        <p className="footer-lede">
          Open to full-stack, frontend, and backend roles. Fastest way to reach me is email — I'll reply within a day.
        </p>

        <div className="contact-links">
          <a href="mailto:sinharohit96690@gmail.com" aria-label="Send email to sinharohit96690@gmail.com">sinharohit96690@gmail.com</a>
          <a href="https://linkedin.com/in/rohit-sinha-ba7298238" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">LinkedIn ↗</a>
          <a href="https://github.com/RohitGkmit08" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">GitHub ↗</a>
          <a href="https://leetcode.com/u/sinharohit01/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile (opens in new tab)">LeetCode ↗</a>
        </div>

        <div className="close-line">
          <span>Rohit Sinha — B.E. Computer Science, Chandigarh University</span>
          <span>Udaipur, India · +91-9057583191</span>
        </div>

      </div>
    </footer>
  );
}

export default Contact;
