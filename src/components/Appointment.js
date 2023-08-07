import React from "react";

function Appointment() {
  const Style1 = {
    width: "100%",
  };
  const Center = {
    textAlign: "center",
  };
  const Position = {
    position: "relative",
  };
  const Style2 = {
    height: "80px",
  };

  return (
    <div>
      <div className="banner">
        <div id="BannerInner" role="presentation">
          <ul id="Slider1" className="rslides">
            <li className="banner5">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent banner5-Content">
                  <div className="bannerHead">New Location in Friendswood</div>
                  <ul>
                    <li>High-Field 1.5 Tesla MRI</li>
                    <li>Ultrasound & Doppler</li>
                    <li>Computed Tomography (CT)</li>
                    <li>DEXA / BMC</li>
                    <li>Digital X-Ray</li>
                  </ul>
                  <div className="btn">
                    <a href="locations-and-maps-houston-mri.html#Friendswood">
                      Read More
                    </a>
                  </div>
                  <div className="phone-icon">
                    <img src="images/phone-icon.png" alt="Phone" />
                    (713)425-8100
                  </div>
                </div>
              </div>
            </li>

            <li className="banner5">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent">
                  <div className="bannerHead">
                    Our Facilities Are
                    <br />
                    BioProtect-Certified
                    <br />
                    <span>for your Saftey &amp; Protection</span>
                  </div>
                  <a
                    href="bioprotect-cleaning-system-houston-mri.html"
                    className="rm"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>

            <li className="banner8">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent banner8-Content">
                  <div className="bannerHead">
                    SCHOOL SUPPLY DRIVE
                    <p>
                      for the Women’s & Family Development Center at Star of
                      Hope’s Cornerstone Community.
                    </p>
                    <div className="drop-div">
                      <h4>Drop off at any Houston MRI Location</h4>
                      <p>
                        Markers, Color Pencils, Scissors, Erasers, Highlighters,
                        Pens, Plastic School Boxes, Index Cards, Folders, 1-2"
                        Binders, Notebook Paper, Spiral Notebooks
                      </p>
                    </div>
                    <ul className="star-of-hope">
                      <li>
                        <img
                          src="images/star-of-hope-img.jpg"
                          alt="Star of Hope"
                        />
                      </li>
                      <li>
                        <h4>Ending homelessness..</h4>
                        <p>one life, one family at a time.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="banner1">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent">
                  <div className="bannerHead">
                    PROVIDING <br />
                    exceptional care
                    <br />
                    AND AFFORDABLE IMAGING
                    <br />
                    TO OUR COMMUNITY
                  </div>
                </div>
              </div>
            </li>
            <li className="banner3">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent">
                  <div className="bannerHead">
                    Experienced and
                    <br />
                    compassionate
                    <br />
                    team of
                    <br />
                    technologists
                  </div>
                </div>
              </div>
            </li>
            <li className="banner4">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent">
                  <div className="bannerHead">
                    Advanced Medical
                    <br />
                    Imaging In
                    <br />
                    a Patient-Friendly
                    <br />
                    Environment
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="gridWrapper">
          <div className="Banner-Tabs">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <span>01</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span>02</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span>03</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span>04</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span>05</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main>
        <div className="gridWrapper">
          <section>
            <article
              className="ypocms textMain"
              id="skip-to-content"
              data-skip="Content"
              style={Style1}
            >
              <div className="breadcrumbs">
                <a href="index.html">Home</a> &raquo;
                <a href="patients-houston-mri.html">Patients</a> &raquo; Make an
                Appointment
              </div>
              <h1>Make an Appointment</h1>
              <div id="makeAppointment">
                <h2 style={Center}>Time Is On Your Side.</h2>
                <p style={Center}>
                  And so are we. Morning, afternoon, evening, even weekends. We
                  do everything we can to accommodate your schedule. That's part
                  of optimal health care - making it easy for you to get here so
                  that you get timely results.
                </p>
                <div className="note">
                  Please note that all deductible, co-pay, and co-insurance
                  amounts are required to be paid at the time of service. If you
                  have any questions or require further explanation, please ask
                  to see a manager upon appointment arrival.
                </div>
                <p>
                  A member from Houston MRI® scheduling team will respond within
                  24 business hours of receiving your appointment request for a
                  radiology exam.
                </p>
                <ul id="schedule">
                  <li>
                    <div className="schedule">Send a Request</div>
                    <p>
                      Use the Request Appointment form below and we will contact
                      you as soon as possible.
                    </p>
                    <div>
                      <hr size="1" />
                    </div>
                    <form
                      action="#"
                      method="post"
                      name="cuForm"
                      id="cuForm"
                      enctype="multipart/form-data"
                      style={Position}
                    >
                      <table
                        className="tableborder"
                        border="0"
                        cellpadding="2"
                        cellspacing="0"
                        width="100%"
                      >
                        <tr>
                          <td colspan="5">
                            <p className="textMainBold">
                              UPLOAD YOUR DOCTOR'S ORDERS
                            </p>
                            <div className="mandatory">
                              Fields marked (*) are mandatory
                            </div>
                            <p>
                              If you have your doctor's orders or prescription
                              for a medical imaging exam, you can upload them
                              here. One of our representatives will contact you
                              for scheduling within 1(one) business day.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="txtName"
                              className="txtfield"
                              id="txtName"
                              maxlength="20"
                              placeholder="First Name *"
                              value=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="txtLName"
                              className="txtfield"
                              id="txtLName"
                              maxlength="20"
                              placeholder="Last Name *"
                              value=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="txtDob"
                              className="txtfield"
                              id="popupDatepicker"
                              maxlength="20"
                              placeholder="Date of Birth *"
                              value=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="txtEmail"
                              className="txtfield"
                              id="txtEmail"
                              maxlength="45"
                              value=""
                              placeholder="E-Mail Address *"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="phoneNumber"
                              className="txtfield"
                              id="phoneNumber"
                              maxlength="45"
                              value=""
                              placeholder="Phone Number *"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <textarea
                              className="textArea"
                              id="textComments"
                              name="txtMessage"
                              placeholder="Questions or Comments *"
                              style={Style2}
                            ></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td className="formlable" valign="top">
                            Upload your orders
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="file"
                              name="upload[]"
                              id="upload"
                              accept=""
                              multiple
                            />
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <button
                              className="g-recaptcha button"
                              data-sitekey="6LfaX8cUAAAAAKfosA9cQ_8bzjM4i_wDEoxr2Wfv"
                              data-callback="onSubmit"
                              style={Position}
                            >
                              Submit
                            </button>
                            <input
                              name="Erase"
                              className="button"
                              value="Reset"
                              type="reset"
                            />
                          </td>
                        </tr>
                      </table>
                    </form>
                    <div>&nbsp;</div>
                  </li>
                  <li>
                    <div className="schedule">Give Us a Call</div>
                    <p style={Center}>
                      <img
                        src="images/give-us-call-img.jpg"
                        alt="Give Us a Call"
                      />
                    </p>
                    <p className="call-text">Call: 713.425.8190</p>
                    <p>
                      <strong>Monday - Friday: 8:00 AM to 6:00 PM</strong>
                    </p>
                    <p>
                      <strong>Saturday : 8:00 AM to 5:00 PM</strong>
                    </p>
                    <div>
                      <hr size="1" />
                    </div>
                    <p>
                      Give us a call and we will help schedule your appointment.
                    </p>
                    <p>
                      Have your doctor's orders and insurance information
                      available to schedule your exam.
                    </p>
                  </li>
                </ul>
              </div>
              <p>&nbsp;</p>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Appointment;
