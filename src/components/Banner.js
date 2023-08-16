import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="banner">
        <div id="Banner" role="presentation">
          <ul id="Slider1" className="rslides">
            <li className="banner5">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                {/* <div className="bannerContent banner5-Content">
                  <div className="bannerHead">New Location in Friendswood</div>
                  <ul>
                    <li>High-Field 1.5 Tesla MRI</li>
                    <li>Ultrasound & Doppler</li>
                    <li>Computed Tomography (CT)</li>
                    <li>DEXA / BMC</li>
                    <li>Digital X-Ray</li>
                  </ul>
                  <div className="btn">
                    <a href="locations-and-maps-houston-mri#Friendswood">
                      Read More
                    </a>
                  </div>
                  <div className="phone-icon">
                    <img src="images/phone-icon.png" alt="Phone" />
                    (713)425-8100
                  </div>
                </div> */}
              </div>
            </li>
            <li className="banner8">
              <div className="gridWrapper">
                <div className="theme-L"></div>
                <div className="theme-R"></div>
                <div className="bannerContent banner8-Content">
                  {/* <div className="bannerHead">
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
                  </div> */}
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
                    AND
                    <span>
                      AFFORDABLE IMAGING
                      <br />
                      TO OUR COMMUNITY
                    </span>
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
                    compassionate <br />
                    <span>
                      team of
                      <br />
                      technologists
                    </span>
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
                    <span>
                      a Patient-Friendly
                      <br />
                      Environment
                    </span>
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
      <section>
        <div id="cost" data-skip="Find Out Why">
          <div className="gridWrapper">
            <div className="theme-L"></div>
            <div className="theme-R"></div>
            <h2>"Hospital quality imaging without the hospital costs"</h2>
            <div className="findy">
              <a href="find-why-houston-mri">Find Out Why</a>
            </div>
          </div>
        </div>
        <div id="wat-we-do-sec" data-skip="What We Do">
          <div className="gridWrapper">
            <div id="watWeDo">
              <h2>
                <a href="diagnostic-imaging-services-mri-center-katy">
                  What We Do
                </a>
              </h2>
              <p>
                We offer affordable, high quality, advanced medical imaging and
                testing services across the greater Houston metro area.
                <span id="dots">
                  Our staff offer a personalized approach to ensure you and your
                  family have a positive experience. We accept major insurance
                  plans, are in-network, and offer cash pay pricing, along with
                  financing options through CareCredit.
                </span>
              </p>
              <div id="my" className="mob rmob">
                <a href="javascript:void(0);" onclick="myFunction()">
                  Read More
                </a>
              </div>
              <ul>
                <li className="mri">
                  <a href="mri-magnetic-resonance-imaging-center">MRI </a>
                </li>
                <li className="mra">
                  <a href="mra-magnetic-resonance-angiography">MRA </a>
                </li>
                <li className="ct">
                  <a href="computed-tomography-houston-mri">
                    Computed Tomography
                  </a>
                </li>
                <li className="ult">
                  <a href="diagnostic-ultrasound-sonography-houston">
                    Ultrasound
                  </a>
                </li>
                <li className="bmd">
                  <a href="dexa-bone-density-osteoporosis-treatment">
                    Bone Mass Density
                  </a>
                </li>
                <li className="dxcr">
                  <a href="digital-x-ray-center-diagnostic-radiology">
                    Digital X-Ray
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blogCol1">
          <h2>
            <Link to="about">About</Link>
          </h2>
        </div>
        <div
          className="section"
          id="allservices"
          data-skip="Provider and Patient Portal"
        >
          <div id="phyRprtsnApntmnts">
            <div className="gridWrapper bg-color">
              <div className="boxP boxM">
                <video
                  width="100%"
                  height="100%"
                  controls
                  muted
                  poster="images/c1.jpeg"
                  controlslist="nodownload nofullscreen noremoteplayback"
                  className="img-cover"
                  loading="lazy"
                  data-w-id="d3b4dac9-2f11-93a1-61eb-05fff6e814fa"
                  alt=""
                >
                  <source src="images/video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="boxP">
                <h1 id="25_years">
                  Marking a Milestone: 25 Years of Remarkable Excellence
                </h1>
                <p>
                  In 1985, Dr. Susanta Kumar Roy's vision gave birth to
                  Anandaloke Sonoscan Center. A torchbearer of progress, it
                  evolved into Anandaloke Hospital and Neurosciences Center in
                  2003, now a leading 100-bed Anandaloke Multispeciality
                  Hospital. Dr. Arindam Pramanik's leadership expanded its
                  reach, addressing diagnostic needs for North Bengal, Bhutan,
                  Sikkim, and Nepal. The Anandaloke Eye Care Center, established
                  in 2010, added to its legacy. This institution's 25-year
                  journey symbolizes compassion, innovation, and regional
                  healthcare collaboration, impacting countless lives in the
                  region and beyond.
                </p>
                <center>
                  <Link to="provider-portal" className="rmo">
                    Read More
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="blog-section"></div>
        <div
          className="gridWrapper"
          id="skip-to-location"
          data-skip="Blog and videos"
        >
          <div className="blogCol1">
            <h2>
              <a href="blog">Blog</a>
            </h2>

            <div className="recent-blog-posts">
              <ul className="recent-blog-post-list">
                <li>
                  <div className="recent-post-image">
                    <a href="blog/the-importance-of-wellness-screenings-37120">
                      <img
                        src="blog-post-images/client-1435/website-1365/the-importance-of-wellness-screenings-371201690260836.jpg"
                        alt="The Importance of Wellness Screenings"
                      />
                    </a>
                  </div>
                  <div className="recent-post-content">
                    <p className="recent-post-title">
                      <a href="blog/the-importance-of-wellness-screenings-37120">
                        The Importance of Wellness Screenings
                      </a>
                    </p>
                    <div className="recent-post-meta-entry">
                      <span className="recent-meta-date">
                        <strong>Posted on:</strong> 24-Jul-2023
                      </span>
                    </div>
                    <p className="recent-post-excerpt">
                      August is National Wellness Month, a reminder to
                      prioritize your health. Studies show that developing and
                      incorporating self-care practices improves stress
                      management, decreases mental health issues, ...
                    </p>
                    <p className="read-more">
                      <a href="blog/the-importance-of-wellness-screenings-37120">
                        Read more
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="recent-post-image">
                    <a href="blog/the-importance-of-wellness-screenings-37120">
                      <img
                        src="blog-post-images/client-1435/website-1365/the-importance-of-wellness-screenings-371201690260836.jpg"
                        alt="The Importance of Wellness Screenings"
                      />
                    </a>
                  </div>
                  <div className="recent-post-content">
                    <p className="recent-post-title">
                      <a href="blog/the-importance-of-wellness-screenings-37120">
                        The Importance of Wellness Screenings
                      </a>
                    </p>
                    <div className="recent-post-meta-entry">
                      <span className="recent-meta-date">
                        <strong>Posted on:</strong> 24-Jul-2023
                      </span>
                    </div>
                    <p className="recent-post-excerpt">
                      August is National Wellness Month, a reminder to
                      prioritize your health. Studies show that developing and
                      incorporating self-care practices improves stress
                      management, decreases mental health issues, ...
                    </p>
                    <center>
                      <p className="rmo">
                        <Link to="about">Read more</Link>
                      </p>
                    </center>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="blogCol2">
            <h2>
              <a href="videos-houston-mri">Videos</a>
            </h2>
            <ul className="videos-conatiner">
              <li>
                <a
                  href="javascript:void(0)"
                  className="slvj-link-lightbox 1"
                  data-videoid="2twrvZ_L_Qw"
                  data-videosite="youtube"
                >
                  <img
                    src="images/houston-mri-newvideo2-new.jpg"
                    alt="Save Money on Your  Imaging & Testing Cost"
                    className="pc"
                  />
                  <img
                    src="images/houston-mri-m2.jpg"
                    alt="About Houston MRI"
                    className="mob"
                  />
                  <span>
                    Save Money on Your <br />
                    Imaging &amp; Testing Cost
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="slvj-link-lightbox 1"
                  data-videoid="KwsvDQhOpeU"
                  data-videosite="https://www.youtube.com/watch?v=9sRsK35NSmw"
                >
                  <img
                    src="images/medical-ultrasound-img-new.jpg"
                    alt="What is Medical Ultrasound?"
                    className="pc"
                  />
                  <img
                    src="images/medical-ultrasound-th.jpg"
                    alt="About Houston MRI"
                    className="mob"
                  />
                  <span>What is Medical Ultrasound?</span>
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="video-button">
            <Link to="videos-houston-mri">View all Videos</Link>
          </div> */}

          <div className="clear"></div>
        </div>
      </section>

      <div id="watWeDo">
        <h2>
          <Link to="gallery">Gallery</Link>
        </h2>
      </div>

      <Slider />
      <br />
      <div className="clear"></div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.7213173522696!2d88.4157195643614!3d26.721348624736343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4413ef9fb4fb9%3A0xb09423bfb96df427!2sAnandaloke%20Sonoscan!5e0!3m2!1sen!2sin!4v1632988877631!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Banner;
