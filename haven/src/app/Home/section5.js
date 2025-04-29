import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <>
      <section className="sections">
        <Container>
          <div>
            <div className="sections-contain5">
              <div>
                <h1>We’re on a mission to make life simpler for homeowners</h1>
              </div>
            </div>

            {/* row&col */}

            <div className="mt-4 p-2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="service-col">
                    <motion.div
                      initial={{ opacity: 0.7, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <img
                          src="/assets/service-4.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </motion.div>
                    <h2>Who we are</h2>

                    <p>
                      Hevan was founded on the premise that homeownership
                      couldn't be complicated or stressful.Meet our team.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-col2">
                    <motion.div
                      initial={{ opacity: 0.7, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <img
                          src="/assets/service-5.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </motion.div>

                    <h2>Hear from our customers</h2>

                    <p>
                      We work with mortgage companies, helping them connect with
                      their customers more deeply than ever before.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div className="service-col1">
                    <div className="service-col1-left">
                      <h2>See our latest insights</h2>
                      <p>
                        We’re busy creating content to help you implement our
                        technology with clarity — and to good effect.
                      </p>
                    </div>
                    <div className="service-col1-right">
                      <motion.div
                        initial={{ opacity: 0.7, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <div className="row-col-div">
                          <img
                            src="assets/service-6.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section5;
