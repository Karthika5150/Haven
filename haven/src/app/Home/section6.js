import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Container, Button } from "react-bootstrap";

const Section6 = () => {
  return (
    <>
      <section className="sections section6">
        <Container>
          <div className="service">
            <div className="service-left">
              <p>Integration</p>

              <h1>Haven integrates into your existing servicing experience</h1>

              <h6>
                Whether you service in-house or use a subservicer, launch deeper
                engagement with your borrowers in weeks (not months) with a
                platform that integrates into your existing servicing stack.
              </h6>

              <Button className="service-btn">See how it works {<IoIosArrowForward />}</Button>
            </div>

            <div className="service-right">
                <div className="service-img-r">
                    <img src="/assets/service-8.svg" className="img-fluid" alt='img'/>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section6;
