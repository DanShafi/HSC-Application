import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import A1 from '../media/a1.png'
import M1 from '../media/m1.png'
import H1 from '../media/h1.png'
import G1 from '../media/g1.png'
import D1 from '../media/d1.png'

// Images Import
import A1Mail from '../media/a1_mail_icon.svg'
import A1Twit from '../media/a1_twitter_icon.svg'
import A1Insta from '../media/a1_insta_icon.svg'

import M1Mail from '../media/m1_mail_icon.svg'
import M1Twit from '../media/m1_twitter_icon.svg'
import M1Git from '../media/m1_github_icon.svg'

import H1Mail from '../media/h1_mail_icon.svg'

import G1Mail from '../media/g1_mail_icon.svg'
import G1Insta from '../media/g1_insta_icon.svg'

import D1Mail from '../media/d1_mail_icon.svg'
import D1Twit from '../media/d1_twitter_icon.svg'
import D1Git from '../media/d1_github_icon.svg'

const center = {
    textAlign: 'center'
}

const imgHeight = {
    height: '198px'
}

const socialIcons = {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'space-evenly',
    marginRight: '50px',
    marginTop: '-15px',
}

const teamTitle = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '500',
    textDecoration: 'underline'
}

const footerText = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginTop: '50px',
    color: 'grey',
}

const Team = () => {
    return (
        <Container className="mb-5">
            <p style={teamTitle}>The New HSC Team - Sep 2020</p>
            <Row>
                <Col style={center}>
                    <img className="team-head" src={A1} style={imgHeight} alt="Team-Member-Head" />
                    <div>
                        <b>Andy Foster</b>
                        <p>Illustrator & Animator</p>
                        <ul style={socialIcons}>
                            <li className="socialIcons">
                                <a href="mailto:andy@hungrysandwich.club">
                                    <img src={A1Mail} alt="Mail-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="google.com">
                                    <img src={A1Twit} alt="Twitter-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="google.com">
                                    <img src={A1Insta} alt="Instagram-Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col style={center}>
                    <img className="team-head" src={M1} style={imgHeight} alt="Team-Member-Head"/>
                    <div>
                        <b>Martin O'Dea</b>
                        <p>Web Designer & Developer</p>
                        <ul style={socialIcons}>
                            <li className="socialIcons">
                                <a href="mailto:martin@hungrysandwich.club">
                                    <img src={M1Mail} alt="Mail-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="google.com">
                                    <img src={M1Twit} alt="Twitter-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="google.com">
                                    <img src={M1Git} alt="Github-Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col style={center}>
                    <img className="team-head" src={H1} style={imgHeight} alt="Team-Member-Head"/>
                    <div>
                        <b>Hannah Kirkman</b>
                        <p>Account Director</p>
                        <ul style={socialIcons}>
                            <li className="socialIcons">
                                <a href="mailto:hannah@hungrysandwich.club">
                                    <img src={H1Mail} alt="Mail-Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col style={center}>
                    <img className="team-head" src={G1} style={imgHeight} alt="Team-Member-Head"/>
                    <div>
                        <b>George Williams</b>
                        <p>Animator</p>
                        <ul style={socialIcons}>
                            <li className="socialIcons">
                                <a href="mailto:george@hungrysandwich.club">
                                    <img src={G1Mail} alt="Mail-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="google.com">
                                    <img src={G1Insta} alt="Instagram-Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col> 

                <Col style={center}>
                    <img className="team-head" src={D1} style={imgHeight} alt="Team-Member-Head"/>
                    <div>
                        <b>Danish Shafi</b>
                        <p>Web Developer</p>
                        <ul style={socialIcons}>
                            <li className="socialIcons">
                                <a href="mailto:danish@hungrysandwich.club">
                                    <img src={D1Mail} alt="Mail-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="twitter.com/danshafi">
                                    <img src={D1Twit} alt="Twitter-Icon" />
                                </a>
                            </li>
                            <li className="socialIcons">
                                <a href="github.com/danshafi">
                                    <img src={D1Git} alt="Github-Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <p style={footerText}>
             <a href="www.builtbydan.com">BuiltByDan.com</a>
            </p>
        </Container>
    )
}

export default Team
