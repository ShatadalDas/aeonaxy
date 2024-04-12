import "./styles/Sidebar.css";
import domainIcon from "../assets/Icons/IMG_20240412_144352.jpg";
import siteSettingsIcon from "../assets/Icons/IMG_20240412_144407.jpg";
import pageEditingIcon from "../assets/Icons/IMG_20240412_144457.jpg";
import plansAndBillingIcon from "../assets/Icons/IMG_20240412_144515.jpg";
import dataCaptureFormsIcon from "../assets/Icons/IMG_20240412_144536.jpg";
import onlineStoreIcon from "../assets/Icons/IMG_20240412_144536.jpg";
import menuIcon from "../assets/Icons/IMG_20240412_144614.jpg";
import siteStatisticsAndGoalsIcon from "../assets/Icons/IMG_20240412_144629.jpg";
import fontsIcon from "../assets/Icons/IMG_20240412_144646.jpg";
import seoIcon from "../assets/Icons/IMG_20240412_144700.jpg";
import mobileVersionIcon from "../assets/Icons/IMG_20240412_144713.jpg";
import generalQuestionsIcon from "../assets/Icons/IMG_20240412_144725.jpg";
import otherQuestionsIcon from "../assets/Icons/IMG_20240412_144740.jpg";
import multilandingIcon from "../assets/Icons/IMG_20240412_144757.jpg";
import emailCampaignBuilderIcon from "../assets/Icons/IMG_20240412_144809.jpg";
import errorsIcon from "../assets/Icons/IMG_20240412_144823.jpg";
import zeroBlockIcon from "../assets/Icons/IMG_20240412_144834.jpg";
import customCodeIcon from "../assets/Icons/IMG_20240412_144843.jpg";
import possibleProblemsIcon from "../assets/Icons/IMG_20240412_144856.jpg";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ol>
        <li className="active">
          <img src={domainIcon} alt="" />
          <p>Domains</p>
        </li>
        <li>
          <img src={siteSettingsIcon} alt="" />
          <p>Site Settings</p>
        </li>
        <li>
          <img src={pageEditingIcon} alt="" />
          <p>Page Editing</p>
        </li>
        <li>
          <img src={plansAndBillingIcon} alt="" />
          <p>Plans and Billing</p>
        </li>
        <li>
          <img src={dataCaptureFormsIcon} alt="" />
          <p>Data Capture Forms</p>
        </li>
        <li>
          <img src={onlineStoreIcon} alt="" />
          <p>Online Store</p>
        </li>
        <li>
          <img src={menuIcon} alt="" />
          <p>Menu</p>
        </li>
        <li>
          <img src={siteStatisticsAndGoalsIcon} alt="" />
          <p>Site Statistics and Goals</p>
        </li>
        <li>
          <img src={fontsIcon} alt="" />
          <p>Fonts</p>
        </li>
        <li>
          <img src={seoIcon} alt="" />
          <p>SEO</p>
        </li>
        <li>
          <img src={mobileVersionIcon} alt="" />
          <p>Mobile Version</p>
        </li>
        <li>
          <img src={generalQuestionsIcon} alt="" />
          <p>General Questions</p>
        </li>
        <li>
          <img src={otherQuestionsIcon} alt="" />
          <p>Other Questions</p>
        </li>
        <li>
          <img src={multilandingIcon} alt="" />
          <p>Multilanding</p>
        </li>
        <li>
          <img src={emailCampaignBuilderIcon} alt="" />
          <p>Email Campaign Builder</p>
        </li>
        <li>
          <img src={errorsIcon} alt="" />
          <p>Errors</p>
        </li>
        <li>
          <img src={zeroBlockIcon} alt="" />
          <p>Zero Block</p>
        </li>
        <li>
          <img src={customCodeIcon} alt="" />
          <p>Custom Code</p>
        </li>
        <li>
          <img src={possibleProblemsIcon} alt="" />
          <p>Possible Problems</p>
        </li>
      </ol>
    </aside>
  );
}

export default Sidebar;
