"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [title1, setTitle1] = useState(false);
  const [title2, setTitle2] = useState(false);

  const handleTitleOne = () => {
    setTitle1(!title1);
  };

  const handleTitleTwo = () => {
    setTitle2(!title2);
  };

  return (
    <>
      <section className="header-contain">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="logo-div">
                <div>
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={25}
                    height={25}
                    className="img-fluid"
                  />
                </div>
                <p className="logo-name">Haven</p>
              </div>
            </div>

            <div className="d-flex gap-4 align-items-center">
              <p className="head-c-txt" title="How it works">
                How it works
              </p>
              <div
                className="head-c-txt title1"
                title="Use Cases"
                onClick={handleTitleOne}
              >
                Use Cases
                <span className="px-1">{<IoIosArrowDown />}</span>
              </div>

              <p
                className="head-c-txt"
                title="Company"
                onClick={handleTitleTwo}
              >
                Company
                <span className="px-1">{<IoIosArrowDown />}</span>
              </p>
            </div>

            <div>
              <Button className="btn-1">Get a demo</Button>
            </div>
          </div>

          <div className="title1-sub">
            {title1 && (
              <div>
                <div>
                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service1.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>For Servicers</h6>
                      <p className="mb-0">
                        Improve yield on your MSR with technolgoies enables your
                        recapture and resell strategy.
                      </p>
                    </div>
                  </div>
                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service-2.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>ForSubServicers</h6>
                      <p className="mb-0">
                        Improve yield on your MSR with technolgoies enables your
                        recapture and resell strategy.
                      </p>
                    </div>
                  </div>

                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service-3.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>For Lenders</h6>
                      <p className="mb-0">
                        Improve yield on your MSR with technolgoies enables your
                        recapture and resell strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* subnav2 */}

          <div className="title2-sub">
            {title2 && (
              <div>
                <div>
                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service-4.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>About Haven</h6>
                      <p className="mb-0">
                        Learn more about the team taking the stress out of
                        homeownership.
                      </p>
                    </div>
                  </div>
                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service9.png"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>pressroom</h6>
                      <p className="mb-0">
                        Follow news of our partnerships and product.
                      </p>
                    </div>
                  </div>

                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service10.png"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>Carrers</h6>
                      <p className="mb-0">
                        Join the team making homeownership smarter, fairer, and
                        all around better.
                      </p>
                    </div>
                  </div>

                  <div className="title-divs">
                    <div className="title-bg">
                      <div className="title-img">
                        <img
                          src="./assets/service11.png"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="title-div-content">
                      <h6>Contact</h6>
                      <p className="mb-0">
                      Reach out to our team — we’d be happy to answer any questions you may have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
