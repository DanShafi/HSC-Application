import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

import A1 from '../media/a1.png'
import M1 from '../media/m1.png'
import H1 from '../media/h1.png'
import G1 from '../media/g1.png'
import D1 from '../media/d1.png'
import githubLogo from '../media/github_logo.svg'

const center = {
    textAlign: 'center'
}

const imgHeight = {
    height: '198px'
}

const socialIcons = {
    display: 'flex',
    listStyleType: 'none',
}


const Team = () => {
    return (
        <Container>
            <Row>
                <Col style={center}>
                    <img className="team-head" src={A1} style={imgHeight} />
                    <div>
                        <b>Andy Foster</b>
                        <p>Illustrator & Animator</p>
                        <ul style={socialIcons}>
                            <li>
                                <a href="google.com">
                                    <img src={githubLogo} alt="Github-logo" />
                                </a>
                            </li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </Col>

                <Col style={center}>
                    <img className="team-head" src={M1} style={imgHeight}/>
                    <div>
                        <b>Martin O'Dea</b>
                        <p>Web Designer & Developer</p>
                        <span></span>
                    </div>
                </Col>

                <Col style={center}>
                    <img className="team-head" src={H1} style={imgHeight}/>
                    <div>
                        <b>Hannah Kirkman</b>
                        <p>Account Director</p>
                        <span></span>
                    </div>
                </Col>

                <Col style={center}>
                    <img className="team-head" src={G1} style={imgHeight}/>
                    <div>
                        <b>George Williams</b>
                        <p>Animator</p>
                        <span></span>
                    </div>
                </Col> 

                <Col style={center}>
                    <img className="team-head" src={D1} style={imgHeight}/>
                    <div>
                        <b>Danish Shafi</b>
                        <p>Web Developer</p>
                        <span></span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Team
