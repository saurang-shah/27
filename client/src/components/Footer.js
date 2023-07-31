import React, { useState, useRef, useEffect } from "react";
import flag from "../images/flag.png";
import heart from "../images/heart.png";
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
        <MDBNavbar expand="lg"  style={{ backgroundColor: "#fff", minHeight: "10vh" }}>
            <MDBContainer fluid >
                <MDBNavbarBrand>
                    <span style={{ fontWeight: "bold" }}>Made with <img src={heart} style={{width: "30px"}} alt="flag"/> in <img src={flag} style={{width: "30px"}} alt="flag"/>
                    </span>
                </MDBNavbarBrand>
                <MDBCollapse navbar show={showBasic} >
                    <MDBNavbarNav className="mr-auto mb-2 mb-lg-0" style={{width: "100%", display: "flex", justifyContent: "end"}}>
                        <MDBNavbarItem>
                            <MDBNavbarLink
                                onClick={() => navigate(`/contactus`)}
                                style={{
                                    fontWeight: "bold",
                                    color: "#000",
                                    cursor: "pointer",
                                }}>
                                Contact Us
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink
                                onClick={() => navigate(`/terms`)}
                                style={{
                                    fontWeight: "bold",
                                    color: "#000",
                                    cursor: "pointer",
                                }}>
                                Terms
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink
                                onClick={() => navigate(`/privacypolicy`)}
                                style={{
                                    fontWeight: "bold",
                                    color: "#000",
                                    cursor: "pointer",
                                }}>
                                Privacy Policy
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};
export default GeneralNavbar;
