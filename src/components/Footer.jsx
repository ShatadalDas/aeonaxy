import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ol className="extra-links">
        <li>
          <a href="#">Tilda.cc</a>
        </li>
        <li>
          <a href="#">Help Center</a>
        </li>
        <li>
          <a href="#">Video Tutorials</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ol>

      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com">
            <img src="src/assets/Icons/IMG_20240412_145116.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <img src="src/assets/Icons/IMG_20240412_145100.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <img src="src/assets/Icons/IMG_20240412_145051.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <img src="src/assets/Icons/IMG_20240412_145039.jpg" alt="" />
          </a>
        </li>
      </ul>

      <div className="info-columns">
        <div>
          <h4>Report Abuse</h4>
          <p>
            If you believe that any website made on Tilda is violating your
            rights, file a compliant by filling out this <a href="#">form</a>
          </p>
        </div>
        <div>
          <h4>How to contact our support</h4>
          <p>
            To find out more about the platform features, use the feedback form
            in your Tilda account, or contact us via email{" "}
            <a href="#">team@tilda.cc</a>
          </p>
        </div>
        <div>
          <h4>Accounting docs</h4>
          <p>
            To get the supporting documentation and proof of payment, send your
            request to <a href="#">docs@tilda.cc</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
