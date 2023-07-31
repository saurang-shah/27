import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import logo from "../images/logo.jpeg";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const GeneralNavbar = ({ proprole }) => {
    const [showBasic, setShowBasic] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can store the dark mode preference in local storage or a state management system like Redux
    };

    const navigate = useNavigate();

    return (
        <MDBNavbar expand="lg" dark style={{ backgroundColor: "#28a745" }}>
            <MDBContainer fluid>
                <MDBContainer onClick={() => navigate(`/`)} fluid>
                    <span style={{ fontWeight: "bold", width: "100%", textAlign: "center", fontSize: "24px", color: "#fff" }}>Fingo</span>
                </MDBContainer>
            </MDBContainer>
        </MDBNavbar>
    );
};
export default GeneralNavbar;
