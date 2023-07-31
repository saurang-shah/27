import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import GeneralNavbar from "../components/GeneralNavbar";
const logo = require("../images/teach.png");

const StartPage = (props) => {
    const navigate = useNavigate();
    
    // Style for the hover effect
    const buttonStyle = {
        width: "50%",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        marginLeft: "25%",
        padding: "15px",
        borderRadius: "15px",
        boxShadow: "0px 7px #1a5928",
        transition: "all ease-in-out 0.3s"
    };

    return (
        <>
            <Helmet>
                <title>Fingo - Learn Finance the Fun Way</title>
            </Helmet>
            <GeneralNavbar />
            <br />
            <br />

            <Row style={{ margin: "auto", width: "80%" }}>
                <Col xs={12} md={6} style={{ marginTop: "" }}>
                    <img src={logo} className="img-fluid" alt="Learn Finance" />
                </Col>
                <Col xs={12} md={6} style={{ marginTop: "10%" }}>
                    <h1>
                        <span style={{ fontWeight: "bold" }}>
                            Learn Finance the Fun Way!
                        </span>
                    </h1>
                    <br />
                    <h5>
                        Get access to 500+ chapters on Investing, Trading,
                        Crypto, and more. Each only 3 minutes long.
                    </h5>
                    <br />
                    <h5>
                        Plus, challenge yourself with 2000+ quizzes to test your
                        knowledge.
                    </h5>
                    <br />
                    <Button
                        style={buttonStyle}
                        onMouseEnter={(e) => e.target.style.borderBottom = "0px"}
                        onMouseLeave={(e) => e.target.style.borderBottom = "4px solid #1a5928"}
                        onClick={() => navigate("/auth/login")}>
                        Get Started
                    </Button>
                </Col>
            </Row>

            <Row style={{ margin: "auto", width: "80%" }}>
                <Col> 
                    <img 
                        src={logo} 
                        height={500}
                        width={600}
                        fluid 
                        alt="Learn Finance Logo" 
                    />
                </Col>
                <Col style={{ marginTop: "10%" }}>
                    <h1><span style={{fontWeight: 'bold'}}>Learn Finance the Fun Way!</span></h1>
                    <br/>
                    <h5>Get access to 450+ chapters on Investing, Trading, Crypto, and more. Each only 3 minutes long.</h5>
                    <br/>
                    <h5>Plus, challenge yourself with 1800+ quizzes to test your knowledge.</h5>
                    <br/>
                    <Button style={{ width: "50%", marginLeft: "25%", padding: "15px", borderRadius: "15px", boxShadow: "initial" }} onClick={() => navigate(`/auth/login`)}>Get Started</Button> 
                </Col>
            </Row>
        </>
    );
};

export default StartPage;

