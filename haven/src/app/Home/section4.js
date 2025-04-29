import React from "react";
import { Container } from "react-bootstrap";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "react-bootstrap";

const Section4 = () => {
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

  return (
    <>
      <section className="sections">
        <Container>
          <div>
            <div className="sections-contain4">
              <div>
                <h1>
                  Generate value with your borrowers through an all-in-one hub
                  for home finances
                </h1>
              </div>
            </div>

            <div className="mt-4">
              <div className="scroll-slider box-1">
                <div className="d-flex justify-content-between gap-3">
                  <div className="scroll-slider-left">
                    <div className="amanda-cards">
                      <h6 className="amanda-card-h">Home Finance Overview</h6>
                      <p className="amanda-card-p">
                        You have paid down <span>$14,346</span> of your mortgage
                        and own approximately <span>27%</span> of your home.
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
                                <p className="card-amanda-txt-2">{item.days}</p>
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
                  <div className="scroll-slider-right">
                    <div className="scroll-slider-r-div">
                      <h2>Understand borrower intent</h2>
                      <p>
                        Anticipate your borrowers’ future plans ahead of anyone
                        else with modules that help borrowers build a plan for
                        their homes and their futures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-slider box-2">
                <div className="d-flex justify-content-between gap-3">
                  <div className="scroll-slider-left">
                    <div className="amanda-cards">
                      <h6 className="amanda-card-h">Home Finance Overview</h6>
                      <p className="amanda-card-p">
                        You have paid down <span>$14,346</span> of your mortgage
                        and own approximately <span>27%</span> of your home.
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
                                <p className="card-amanda-txt-2">{item.days}</p>
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
                  <div className="scroll-slider-right">
                    <div className="scroll-slider-r-div2">
                      <h2>Educate homeowners to drive engagement</h2>
                      <p>
                        Empower your customers to make sense of their home
                        finances, drawing them in outside of just making
                        payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-slider box-3">
                <div className="d-flex justify-content-between gap-3">
                  <div className="scroll-slider-left">
                    <div className="amanda-cards">
                      <h6 className="amanda-card-h">Home Finance Overview</h6>
                      <p className="amanda-card-p">
                        You have paid down <span>$14,346</span> of your mortgage
                        and own approximately <span>27%</span> of your home.
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
                                <p className="card-amanda-txt-2">{item.days}</p>
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
                  <div className="scroll-slider-right">
                    <div className="scroll-slider-r-div3">
                      <h2>Present personalized offers</h2>
                      <p>
                        Turn payment portals into a digital marketing channel
                        that presents personalized offers in the right place at
                        the right time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-4">
                <div className="d-flex justify-content-between gap-3">
                  <div className="scroll-slider-left">
                    <div className="box4-card">
                      <div className="amanda-cards">
                        <h6 className="amanda-card-h">Home Finance Overview</h6>
                        <p className="amanda-card-p">
                          You have paid down <span>$14,346</span> of your
                          mortgage and own approximately <span>27%</span> of
                          your home.
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
                  <div className="scroll-slider-right">
                    <div className="scroll-slider-r-div4">
                      <h2>Fully white-labeled</h2>
                      <p>
                        Advance your strategy, brand, and look and feel. Have
                        multiple brands? We support that too.
                      </p>
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

export default Section4;
