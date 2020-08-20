import Head from "next/head";
import React, { useState } from "react";
import Router from "next/router";
import { Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import CardComponent from "../components/card";

const apiUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

const launchYears = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const success = ["True", "False"];

function Home({ data }) {
  const [programsData, setProgramsData] = useState(data.allData);
  const [year, setYear] = useState(null);
  const [launchSuccess, setLaunchSuccess] = useState(null);
  const [landSuccess, setLandSuccess] = useState(null);

  const updateQuery = (newQuery) => {
    Router.push({
      pathname: "/",
      query: newQuery,
    });
  };

  const fetchData = async (yearFilter, launch_success, land_success) => {
    let url = apiUrl;
    if (yearFilter !== null) {
      setYear(yearFilter);
      url = `${url}&launch_year=${yearFilter}`;
      updateQuery(`launch_year=${yearFilter}`);
    }

    if (launch_success !== null) {
      setLaunchSuccess(launch_success);
      url = `${url}&launch_success=${launch_success}`;
    }

    if (land_success !== null) {
      setLandSuccess(land_success);
      url = `${url}&land_success=${land_success}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setProgramsData(data);
    updateQuery(url.split(apiUrl)[1]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h6 className={styles.heading}>SpaceX Launch Programs</h6>
        <Row>
          <Col sm={12} md={3}>          
            <div className={styles.filter}>
              <p style={{fontSize:18,fontWeight: "bolder", textAlign:"left", marginBottom: "0rem"}}>Filters</p>
              <div className={styles.filtered}>Launch Year</div>
              <Row style={{marginBottom: "1rem"}}>
                {launchYears.map((item) => {
                  return (
                    <Col xs={6} sm={3} md={6} >
                      <Button
                        onClick={async () => {
                          fetchData(item, launchSuccess, landSuccess);
                        }}
                        style={{ margin: "3px", backgroundColor:"#c6e09b", color: "black", padding: "1px 15px 1px 15px", fontSize: 13}}
                        variant="success" 
                      >
                        {item}
                      </Button>
                    </Col>
                  )
                })}
              </Row>              
              <div className={styles.filtered}>Successful Launch</div>
              <Row style={{marginBottom: "1rem"}}>
                {success.map((item) => {
                  return (
                    <Col xs={6} sm={6} md={6}>
                      <Button
                        onClick={async () => {
                          fetchData(year, item, landSuccess);
                        }}
                        style={{ margin: "3px",backgroundColor:"#c6e09b", color: "black", padding: "1px 15px 1px 15px", fontSize: 13}}
                        variant="success"
                      >
                        {item}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
              <div className={styles.filtered}>Successful Landing</div>
              <Row>
                {success.map((item) => {
                  return (
                    <Col xs={6} sm={6} md={6}>
                      <Button text-center
                        onClick={async () => {
                          fetchData(year, launchSuccess, item);
                        }}
                        style={{ margin: "3px", backgroundColor:"#c6e09b", color: "black", padding: "1px 15px 1px 15px", fontSize: 13}}
                        variant="success" 
                      >
                        {item}
                      </Button><br/>
                    </Col>
                  );
                })}
              </Row>
            </div>          
          </Col>
          <Col xs= {12} sm={12} md={9}>          
          <Row>
            {programsData.map((progaram) => {
              return (
                <Col xs={12} sm={6} md={6} lg={3} style={{ marginBottom: "0.25rem"}}>
                <CardComponent progaram={progaram} />
                </Col>
                );            
            })}
            </Row>          
          </Col>
        </Row>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="d-none d-md-block d-lg-block"><b>Developed by: Saket Nema</b></div>
          <div class="d-block d-md-none d-lg-none"><b>Developed by:</b><br/>
          <b>Saket Nema</b></div>
                  </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allDataRes = await fetch(apiUrl);
  const allData = await allDataRes.json();
  let data = {};
  data = { allData };
  return {
    props: {
      data,
    },
  };
}

export default Home;
