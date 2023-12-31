import React from "react";
import { Link } from 'react-router-dom';
const style = {
  clear: "both",
};

function Header(props) {
const {home, about, appointment, service, provider, patients, contact, career} = props;

  return (
    <header id="header" data-skip="Header">
      <div className="gridWrapper">
        <div className="logoWrap">
          <div className="logo">
            <Link to="/">
              {/* <img
                src="/images/Anandalok_Logo new.png"
                alt="Houston MRI and Diagnostic Imaging"
              /> */}
            </Link>
              {/* <p>Anandaloke Sonoscan Centre</p> */}
          </div>
        </div>
        <div className="rightInfo">
          <div className="number">
            <div className="hcall">
              <span className="tel1"></span>
            </div>
          </div>
          <div className="header_lists">
            <div className="book" id="myBtn">
              <Link to="appointment">{appointment}</Link>
            </div>
            <div className="careers">
              <Link to="join-our-team-houston-mri">{career}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>

      <div className="clear"></div>
      <div id="Mobile-Menu">
        <div className="toggleMenu">
          <Link to="javascript:void(0);">
            <span data-icon="&#xf0c9;"></span>
          </Link>
        </div>
        <div className="Wrapper">
          <div className="menuClose">
            <Link to="javascript:void(0);">
              <span data-icon="&#xe816;"></span>
            </Link>
          </div>
          <div className="menuLogo"></div>
        </div>
      </div>
      <div id="Main-Menu">
        <nav id="skip-to-menu" data-skip="Menu">
          <div className="gridWrapper">
            <ul className="menu">
              <li>
                <Link to="/" accesskey="h">
                  {" "}
                  {home}{" "}
                </Link>
              </li>
              <li>
                <Link to="about" accesskey="a">
                  {" "}
                  {about}{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="diagnostic-imaging-services-mri-center-katy"
                  accesskey="s"
                >
                  {service}
                </Link>
                <ul>
                  <li>
                    <Link to="mri-magnetic-resonance-imaging-center">MRI</Link>
                  </li>
                  <li>
                    <Link to="computed-tomography-houston-mri"> CT</Link>
                  </li>
                  <li>
                    <Link to="mra-magnetic-resonance-angiography"> MRA</Link>
                  </li>
                  <li>
                    <Link to="digital-x-ray-center-diagnostic-radiology">
                      Digital X-ray
                    </Link>
                  </li>
                  <li>
                    <Link to="diagnostic-ultrasound-sonography-houston">
                      Ultrasound
                    </Link>
                  </li>
                  <li>
                    <Link to="dexa-bone-density-osteoporosis-treatment">DEXA</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="for-physicians-houston-mri" accesskey="p">
                  {provider}
                </Link>
                <ul>
                  <li>
                    <Link to="provider-portal">Provider Portal</Link>
                  </li>
                  <li>
                    <Link
                      to="pdf/order-form-houston-mri-2023"
                      target="_blank"
                    >
                      Order Form
                    </Link>
                  </li>
                  <li>
                    <Link to="physician-liaison-team-houston-mri">
                      Liaison Team
                    </Link>
                  </li>
                  <li>
                    <Link to="doctor-login">Online Ordering</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="patients-houston-mri" accesskey="i">
                  {patients}
                </Link>
                <ul>
                  <li>
                    <Link to="appointment-houston-mri">Make an Appointment</Link>
                  </li>
                  <li>
                    <Link to="houston-mri-imp-notice-covid">Mask Policy</Link>
                  </li>
                  <li>
                    <Link to="find-why-houston-mri">Your Money. Your Choice.</Link>
                  </li>
                  <li>
                    <Link to="patient-portal">Patient Portal</Link>
                  </li>
                  <li>
                    <Link to="insurance-plans-houston-mri">Insurance Plans</Link>
                  </li>
                  <li>
                    <Link to="pay-online-houston-mri">Pay Online</Link>
                  </li>
                  <li>
                    <Link to="patient-resources-houston-mri">
                      Patient Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="healthcare-news-pl867">Healthcare News</Link>
                  </li>
                  <li>
                    <Link to="videos-houston-mri">Videos</Link>
                  </li>
                  <li>
                    <Link to="faqs-houston-mri">FAQs</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="contact" accesskey="c">
                  {contact}
                </Link>
                <ul>
                  <li>
                    <Link to="appointment">{appointment}</Link>
                  </li>
                  <li>
                    <Link to="locations-and-maps-houston-mri">Locations</Link>
                  </li>
                  <li>
                    <Link to="join-our-team-houston-mri">
                      Employment Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link to="contact-us-houston-mri#Workers_id">
                      Personal Injury
                    </Link>
                  </li>
                  <li>
                    <Link to="contact-us-houston-mri#Billing_id">
                      Billing &amp; Collections
                    </Link>
                  </li>
                  <li>
                    <Link to="contact-us-houston-mri#Credentialing_id">
                      Credentialing
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
