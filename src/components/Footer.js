import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="gridWrapper" id="skip-to-footer">
          <div id="Footer" data-skip="Footer">
            <div className="footerLogo">
              <a href="/">
                <img
                  src="images/houston-mri-and-diagnostic-imaging-footer-logo.png"
                  alt="Houston MRI and Diagnostic Imaging"
                />
              </a>
            </div>
            <div className="disclaimer">
              {/* <strong>DISCLAIMER:</strong> Houston MRI & Diagnostic Imaging is
              an Independent Diagnostic Testing Facility, not hospital
              affiliated or an emergency room. Radiologists provide reports
              Monday – Friday, 8:00 am – 5:00 pm. Exams completed outside of
              these hours will be assigned to Radiologists the following
              business day. Expected turnaround times for radiology reports are
              usually 1-2 business days on routine exams. */}
            </div>
            <div className="copyrights">
              <p className="links">
                <a href="index">Home</a> |
                <a href="disclaimer">Disclaimer</a> |
                <a href="privacy">Privacy</a> |
                <a href="sitemap-houston-mri">Sitemap</a> |
                <a href="feedback">Feedback</a> |
                <a href="tell-a-friend">Tell a Friend</a> |
                <a href="contact-us-houston-mri">Contact Us</a> |
                <a href="accessibility-statement">
                  Accessibility Statement
                </a>
              </p>
              <p className="copy">
                <a href="https://goo.gl/maps/yTsjmJZqpZ6UMRgXA" target="_blank">
                  &copy; Houston MRI <sub>&reg;</sub> & Diagnostic Imaging
                </a>
              </p>
              <div className="smo2">
                <ul>
                  <li className="fb">
                    <a
                      href="https://www.facebook.com/HoustonMRI"
                      target="_blank"
                      aria-label="follow us on Facebook"
                      rel="nofollow"
                    >
                      <span className="nodisplay">Facebook</span>
                    </a>
                  </li>
                  <li className="tw">
                    <a
                      href="https://twitter.com/HoustonMRI"
                      target="_blank"
                      aria-label="follow us on Twitter"
                      rel="nofollow"
                    >
                      <span className="nodisplay">Twitter</span>
                    </a>
                  </li>
                 
                  <li className="yt">
                    <a
                      href="http://www.youtube.com/channel/UC5engtM87HTHP76MY1zcyRA"
                      target="_blank"
                      aria-label="Subcribe us on Youtube"
                      rel="nofollow"
                    >
                      <span className="nodisplay">Youtube</span>
                    </a>
                  </li>
                  <li className="blog">
                    <a
                      href="https://www.instagram.com/Houston_MRI"
                      aria-label=""
                      rel="nofollow"
                      target="_blank"
                    >
                      <span className="nodisplay">Instagram</span>
                    </a>
                  </li>
                  <li className="rblog">
                    <a href="blog" aria-label="">
                      <span className="nodisplay">Blog</span>
                    </a>
                  </li>
                 
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
