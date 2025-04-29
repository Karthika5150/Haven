"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Section3 = () => {
  const [alerts, setAlert] = useState(false);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const handlescroll = () => {
      const section2 = document.getElementById("section2");

      if (section2) {
        const sectionTop = section2.offsetTop;
        const sectionScroll = window.scrollY;
        // alert("successs");

        if (sectionScroll > sectionTop - 100 && !alerts) {
          setAlert(true);
          alert("You are view in section2");
          // console.log();
        }
      }
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [alerts]);

  return (
    <>
      <section className="sections" id="section2">
        <Container>
          <div>
            <div className="sections-contain">
              <div>
                <h1>The most effective way to retain homeowners</h1>
                <p>
                  Predict prepayment and deliver personalized offers that
                  convert by making the tough decisions of homeownership simple
                  and intuitive.
                </p>
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="servicer-card" title="Servicers">
                      <h4>For Servicers</h4>
                      <p className="servicer-card-p">
                        Improve yield on your MSR with technolgoies enables your
                        recapture and resell strategy.
                      </p>
                      <div className="servicer-div-img">
                        <div className="servicer-img-div">
                          <img
                            src="/assets/service1.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <Button className="servicer-btn">
                        Servicers {<IoIosArrowForward />}
                      </Button>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="servicer-card" title="Subservicers">
                      <h4>ForSubServicers</h4>
                      <p className="servicer-card-p">
                        Improve yield on your MSR with technolgoies enables your
                        recapture and resell strategy.
                      </p>
                      <div className="servicer-div-img">
                        <div className="servicer-img-div">
                          <img
                            src="/assets/service-2.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <Button className="servicer-btn">
                        Sub Servicers {<IoIosArrowForward />}
                      </Button>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="servicer-card" title="Lenders">
                      <h4>For Lenders</h4>
                      <p className="servicer-card-p">
                        Improve yield on your MSR with technolgoies enables your
                        recapture and resell strategy.
                      </p>

                      <div className="servicer-div-img">
                        <div className="servicer-img-div">
                          <img
                            src="/assets/service-3.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <Button className="servicer-btn">
                        Lenders{<IoIosArrowForward />}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section3;
