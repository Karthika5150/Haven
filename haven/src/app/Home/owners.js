import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Owners = () => {
  return (
    <>
      <section className="owner-container">
        <Container>
          <div className="p-5 pb-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="row">
                <div className="col-lg-4">
                  <div className="count-div">
                    <div className="count1">
                      <div>1.4M+</div>
                      <p>homeowners</p>
                    </div>
                    <div className="count2">
                      <hr className="vr" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="count-div">
                    <div className="count1">
                      <div>11%</div>
                      <p>high-intent leads generated</p>
                    </div>
                    <div className="count2">
                      <hr className="vr" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="count-div">
                    <div className="count1">
                      <div>11+</div>
                      <p>offer types</p>
                    </div>
                    {/* <div className="count2">
                    <hr className="vr" />
                  </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Owners;
