import React from "react";
import image from "../../assets/home-image.png";
import { Link } from "react-router-dom";
import onTime from "../../assets/ontime.gif";
import professionalTeam from "../../assets/professionalTeam.gif";
import analyze from "../../assets/analyze.gif";
import minimize from "../../assets/minimize.gif";
import Card from "../../widgets/ServicesCard";
import gst from "../../assets/gst.jpg";
import incomeTax from "../../assets/incomeTax.jpg";
import accounts from "../../assets/accounts.jpg";
import mca from "../../assets/mca.jpg";
import digitalSignature from "../../assets/digitalSignature.jpg";
import esi from "../../assets/esi.png";
import epf from "../../assets/employee.jpg";
import msme from "../../assets/msme.jpg";
import iec from "../../assets/iec.jpg";
import certifications from "../../assets/certifications.jpg";
import partnership from "../../assets/partnership.jpg";
import insurance from "../../assets/insurance.jpg";
import entrivity from "../../assets/entrivity.png";
import "aos/dist/aos.css";

import "./Home.css";
const Home = () => {
  const clients = [
    {
      image: entrivity,
      name: "Client 1",
      description: "Some description about Client 1",
    },
    // ...add other clients
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-right"
            className="col-md-6 d-flex align-items-center"
          >
            <div className="heading text-center">
              <h2>
                <span className="text-primary">We Help</span> Your{" "}
                <span className="text-primary">Business</span> to Grow Up Next
                Level
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <Link to="/contactUs">
                <button class="btn contact-button">Contact Us</button>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="img-id col-md-6">
            <img
              src={image}
              className="person img-fluid mt-3"
              alt="Right Image"
            />
          </div>
        </div>
      </div>
      <div className="container mt-5 company-services">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="shadow homecard card-body d-flex flex-column align-items-center justify-content-center">
                <img src={onTime} className="logo" alt="On Time Service Logo" />
                <h5 className="card-title mt-3 text-center">On Time Service</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="shadow homecard card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src={professionalTeam}
                  style={{ width: "200px" }}
                  className="logo"
                  alt="Team of Professionals Logo"
                />
                <h5 className="card-title mt-3 text-center">
                  A Team Of Professionals
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="shadow homecard card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src={analyze}
                  className="logo"
                  alt="Analyze Your Business Logo"
                />
                <h5 className="card-title mt-3 text-center">
                  Analyze Your Business
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="shadow homecard card-body  d-flex flex-column align-items-center justify-content-center">
                <img
                  src={minimize}
                  className="logo"
                  alt="Minimize Accounting Logo"
                />
                <h5 className="card-title mt-3 text-center">
                  Minimize Accounting and Tax Compliance
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="services-title">Services We Provide</h2>
            </div>
          </div>
        </div>
        <div className="services-cards">
          <div className="Card">
            <Card
              imageUrl={gst}
              title="GST"
              description="Goods and Services Tax"
              path="/gst-registration"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={incomeTax}
              title="Income Tax"
              description="lrema sd ashdf w oadsf"
              path="/gst-returns"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={accounts}
              title="Accounts Maintenance"
              description="lrema sd ashdf w oadsf"
              path="/private-limited-company"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={mca}
              title="MCA"
              description="lrema sd ashdf w oadsf"
              path="/limited-liability-partnership"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={digitalSignature}
              title="Digital Signature"
              description="lrema sd ashdf w oadsf"
              path="/one-person-company"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={esi}
              title="GST"
              description="lrema sd ashdf w oadsf"
              path="/partnership-firm"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={epf}
              title="GST"
              description="lrema sd ashdf w oadsf"
              path="/employee-state-insurance"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={msme}
              title="MSME"
              description="lrema sd ashdf w oadsf"
              path="/msme"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={iec}
              title="Import and Export Code"
              description="lrema sd ashdf w oadsf"
              path="/import-export-code"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={certifications}
              title="Certifications"
              description="lrema sd ashdf w oadsf"
              path="/food-license"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={partnership}
              title="Partnership"
              description="lrema sd ashdf w oadsf"
              path="/trade-license"
            />
          </div>
          <div className="Card">
            <Card
              imageUrl={insurance}
              title="Insurance"
              description="lrema sd ashdf w oadsf"
              path="/12A"
            />
          </div>
        </div>
      </div>
      <div
        className="testimonials shadow-lg border border-top-5"
        // style={{ backgroundColor: "white" }}
      >
        <div class="container-xl">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 className="text-primary">Client's Testimonials</h2>
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <p class="testimonial">
                      If Professionalism has a face it looks like you... Every
                      one likes to own valuable things... I'm pretty lucky to
                      have you as Tax Consultant.. It's time for the society to
                      witness a wonderful professional personality... Keep going
                      Buddy... All the best 👍
                    </p>
                    <p class="overview">
                      <b>Dr.Sudharshan Naik</b>,DOCTOR IN ANANTAPUR.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Nizam's Tax Consultency is giving very good service about
                      IT Returns filling & financial guidance.
                    </p>
                    <p class="overview">
                      <b>Thota Nagaraju</b>, DIRECTOR ANANATPUR PUBLICATIONS
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Very friendly natured person. he talked to the company
                      people where i have worked to release my bills and help
                      many times in GST issues. will refer 100%.
                    </p>
                    <p class="overview">
                      <b>Nagesh</b>, NAGESH CONSTRUCTIONS.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Nizammudin, you are like our tax consultancy 'Guru'.
                      Always available to assist us in all the ways. It's our
                      fortune that you are here for us. Thanks to your valuable
                      service. Your work is great appreciable and rewardable.
                    </p>
                    <p class="overview">
                      <b>Pushpa Naik and Raju Naik</b>,DEAR IN BAMBOO STICKS AND
                      WOOD.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      They are providing me with ITR filing and GST services.
                      The consultant is very responsive and apt in providing the
                      solutions. Its been 2 years since they started providing
                      me the services and I really appreciate their efforts in
                      timely ITR & GST filings.
                    </p>
                    <p class="overview">
                      <b>Shubam Agarwal</b>, LALITHA JEWELLERY.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      One of the best tax consultancy service, Nizam is quick
                      and prompt in his service and response, has got a good
                      knowledge in his field. I'll Definitely refer him for all
                      your tax related services.
                    </p>
                    <p class="overview">
                      <b>Praveen Kumar</b>, DIRECTOR ENSCULP CONSTRUCTIONS.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Always Available, Fast response, No delay in work. Sir
                      helped me in tax payments as well he paid his own funds
                      and later collected from me Thank you sir for your support
                      to my business
                    </p>
                    <p class="overview">
                      <b>B Venkatesulu</b>, ARYAN ENTERPRISES.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      He is Available at any time. Solve problems with ease and
                      having good Communication skills so that a Client can
                      understand easily.
                    </p>
                    <p class="overview">
                      <b>Manoharan</b>, VASUKI CONSTRUCTIONS
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      I love this guy for making client comfortable at any
                      situation.....
                    </p>
                    <p class="overview">
                      <b>Director Janardhan P</b>, SREENIVASA MOTORS.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      I have lost GST user ID and password. I lost hope for my
                      GST credentials Nizam sir helped from beginning to ending
                      for getting back GST credentials Visited department, had a
                      call with department people many times Thank you so much.
                      I really appreciate the commitment towards works.
                    </p>
                    <p class="overview">
                      <b>Ahsan Ali</b>,, Ali Engineering
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Been working with Nizam since 2017. Happy till date with
                      the micro and macro services he and his team providing.
                      Meticulous, Accurate, Intime, Guidance are the words we
                      describe about Nizam. We Recommend for people who wants
                      peace of mind about their taxation and other services..
                      Hoping for a longer association.
                    </p>
                    <p class="overview">
                      <b>Director Lakshman Andra</b>, VASUDHAARA ENTERPRISES
                      LLP.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Nizam always make sure that he is available anytime. Good
                      part is, he follow-up clients well in advance so that we
                      don’t rush at the end dates. Friendly, professional,
                      flexible and the best service all together makes him
                      special in the industry.
                    </p>
                    <p class="overview">
                      <b>Director Ragadeep.</b>, ENTRIVITY MEDIA.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Subject knowledge is very good .He solved my company GST
                      issues with departments and saved money to me. Happy to
                      associate with you sir.
                    </p>
                    <p class="overview">
                      <b>RAJA KUBERA NAIK</b>
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      Being a client to Nizam since two years, never get any
                      delay in tax payments and GST returns...... 👏👏 Keep it
                      up Nizam.... 🤝
                    </p>
                    <p class="overview">
                      <b>Giri Teja</b>, HARIKA ENTERPRISES
                    </p>
                  </div>

                  <div class="carousel-item">
                    <p class="testimonial">
                      I have used Nizams Tax consultancy for some time now for
                      all my taxation, accountancy and general advice. They are
                      excellent, friendly, very professional, and very prompt ,
                      I would recommend 100% .
                    </p>
                    <p class="overview">
                      <b>PARAMASIVAN RAJKUMAR</b>
                    </p>
                  </div>

                  <div class="carousel-item">
                    <p class="testimonial">
                      I consulted him about tax filling of futures and options
                      trading. Many people doesn't even know this, even though
                      they are professionally qualified CA... He done it very
                      clearly without having me any headaches.
                    </p>
                    <p class="overview">
                      <b>SHARTH CHANDRA</b>
                    </p>
                  </div>

                  <div class="carousel-item">
                    <p class="testimonial">
                      Nizam provide very specialized service for all tax needs
                      for incorporation, accounting and taxes. I have referred
                      several colleagues and they are all very happy with the
                      service and expertise. Harish Dasari He is very
                      responsible to clarify the doubts about ITR and GST . He
                      is a very talented guy and he will file it returns for a
                      very Best price
                    </p>
                    <p class="overview">
                      <b>SHAIK IMRAN</b>
                    </p>
                  </div>

                  <div class="carousel-item">
                    <p class="testimonial">
                      Good hospitality and generous and kind in behavior .. will
                      guide u in every aspect of queries .. can be trusted
                      heartfully.
                    </p>
                    <p class="overview">
                      <b>Dr. Sai Kiran Chandu</b>, DOCTOR GANDHI HOSPITAL
                      HYDERABAD.
                    </p>
                  </div>

                  <div class="carousel-item">
                    <p class="testimonial">
                      1st thing is response, in that he's great He's in
                      professional on his job I am so thank full to this person.
                      he's done my taxes and some up and gains also so don't
                      hesitate to ask just go on that and file ur
                      takes.......thank u Nizam for giving ur tax consultation.
                    </p>
                    <p class="overview">
                      <b>sharuk shaik</b>, KASHMIR COOL DRINKS.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="testimonial">
                      He is having excellent knowledge on his profession and he
                      focus on client satisfaction. I strongly recommend to
                      everyone who’s looking for tax related consultation👍
                    </p>
                    <p class="overview">
                      <b>RATEHSH RAMU</b>
                    </p>
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
