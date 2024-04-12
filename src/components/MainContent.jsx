import "./styles/MainContent.css";
import doubtIcon from "../assets/Icons/IMG_20240412_144939.jpg";

function MainContent() {
  return (
    <main className="main">
      <h3>Domains</h3>
      <ol>
        <li>
          <img src={doubtIcon} alt="" />
          <p>
            Why do I see a Tilda logo on a grey background when I open my
            website?
          </p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do I connect a custom domain?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>
            How do i connect multiple domain names to a single Tilda website?
          </p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do I create a custom business email address?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>Troubleshooting custom domain errors</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do I connect a subdomain to my Tilda website?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do I redirect from HTTP to HTTPS?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do I remove &quot;www&quot; from a domain?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do I set up HTTPS/SSL for a subdomain in Tilda?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How do i set up my HTTPS/SSL certificate?</p>
        </li>
        <li>
          <img src={doubtIcon} alt="" />
          <p>How can I speed up &#40;optimize&#41; my Tilda website?</p>
        </li>
      </ol>
    </main>
  );
}

export default MainContent;
