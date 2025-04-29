"use client";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuBookCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import Image from "next/image";
import Owners from "./owners";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";

const Home = () => {
  const card1 = [
    {
      id: 0,
      name: "Home equality",
      amount: "$85,000",
      days: "updated 5 day's ago",
      increase: "$534",
    },
    {
      id: 1,
      name: "Home value",
      amount: "$465,000",
      days: "updated 5 day's ago",
      increase: "$1000",
    },
    {
      id: 0,
      name: "Mortgage balance",
      amount: "$385,000",
      days: "updated 5 day's ago",
      increase: "$1027",
    },
  ];

  const card2 = [
    {
      id: 0,
      name: "solar panel",
    },
    {
      id: 1,
      name: "Home Office",
    },
    {
      id: 2,
      name: "Garage",
    },
    {
      id: 3,
      name: "kitchen updates",
    },
    {
      id: 4,
      name: "bathroom updates",
    },
    {
      id: 5,
      name: "new roof",
    },
    {
      id: 6,
      name: "Landscaping",
    },
    ,
    {
      id: 7,
      name: "Other",
    },
  ];

  return (
    <>
      <section
        className="home-container"
        style={{ backgroundImage: `url(${"/assets/bg-1.png"})` }}
      >
        <Container>
          <div className="home-content">
            <div className="animation">
              <p className="home-txt-p">Meet Haven</p>
              <h1 className="home-txt-h">Get the most out of MSR</h1>
              <p className="home-txt-p1">
                Drive meaningful engagement via servicing — helping you
                understand, educate, and convert borrowers for mortgage &
                beyond.
              </p>

              <Button className="btn-2">Get a demo</Button>
            </div>
            <motion.div
              initial={{ opacity: 0.7, y: 50}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="amanda-contain">
                <div className="amanda-h">
                  <div className="d-flex gap-2">
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
                  <div>
                    <Image
                      src="/assets/logo.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr className="hr" />

                <div className="amanda-content">
                  <h6 className="amanda-txt-h">Good morning,Amanda!</h6>
                  <p className="amanda-txt">
                    Continue where you left off building your home roadmap
                  </p>

                  {/* cards */}
                  <section>
                    <Container>
                      <div>
                        <div className="row">
                          {/* col-1 */}
                          <div className="col-lg-4">
                            <div className="">
                              <div className="amanda-cards">
                                <h6 className="amanda-card-h">
                                  Home Finance Overview
                                </h6>
                                <p className="amanda-card-p">
                                  You have paid down <span>$14,346</span> of
                                  your mortgage and own approximately{" "}
                                  <span>27%</span> of your home.
                                </p>

                                {/* map method */}

                                {card1.map((item, index) => (
                                  <div key={index}>
                                    <Card className="mb-2">
                                      <div className="card-amanda">
                                        <div>
                                          <p className="card-amanda-txt-1">
                                            {item.name} {<FiAlertCircle />}
                                          </p>
                                          <h3 className="card-amanda-txt-h">
                                            {" "}
                                            {item.amount}
                                          </h3>
                                          <p className="card-amanda-txt-2">
                                            {item.days}
                                          </p>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                          <div className="amanda-arrow-div">
                                            {item.increase}
                                          </div>
                                          <div>
                                            {
                                              <IoIosArrowForward
                                                style={{ color: "grey" }}
                                              />
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </Card>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* col-2 */}
                          <div className="col-lg-4">
                            <div className="">
                              <div className="amanda-cards">
                                <h6 className="amanda-card-h">
                                  You have <span>$68,000</span> in avaliable
                                  home equality to put towards to your goal
                                </h6>
                                <p className="amanda-card-p">
                                  What home improvements are on your to do list?
                                </p>

                                <div className="amanda-card2-div">
                                  {card2.map((items, ids) => (
                                    <div key={ids}>
                                      <div className="amanda-card2">
                                        {items.name}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <Button className="amanda-btn">
                                  Add goals details
                                </Button>
                              </div>
                            </div>
                          </div>
                          {/* col-3 */}
                          <div className="col-lg-4">
                            <div className="">
                              <div className="amanda-cards">
                                <h6 className="amanda-card-h">
                                  Home Co.Mortgage
                                </h6>
                                <p className="amanda-card-p">
                                  To manage your payments,see statements or
                                  update your info continue to Home Co.
                                </p>

                                <Card>
                                  <div>
                                    <div className="card-amanda gap-2 justify-content-between">
                                      <div className="amanda-book-icon">
                                        {<LuBookCheck />}
                                      </div>
                                      <div>
                                        <p className="amanda-card3-txt">
                                          Loan *9905
                                        </p>
                                        <p className="amanda-card3-txt1">
                                          Monthly Payment:<span>$380,000</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Card>

                                <Button className="amanda-card3-btn1">
                                  Make a payment
                                </Button>

                                <Button className="amanda-card3-btn2">
                                  Manage your Mortgage
                                </Button>
                              </div>

                              <p className="amanda-card3-txt p-3 pb-2">
                                Review home finance topics
                              </p>

                              <div className="amanda-cards1">
                                <div className="d-flex gap-3">
                                  <div className="amanda-money-icon">
                                    {<LiaMoneyCheckAltSolid />}
                                  </div>
                                  <div>
                                    <p className="amanda-card3-txt">
                                      Simulate home value changes
                                    </p>
                                    <p className="amanda-card3-txt1">
                                      Current estimate:<span>$456,000</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      <div className="home-bg-bottom">as</div>

      <Owners />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
};

export default Home;
