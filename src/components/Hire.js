import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

import Tick from '../media/tick.svg'

const TimelineTitle = styled.h3`
    font-size: 30px;
    font-family: Poppins;
    font-weight: 700;
    color: #30d4ff;
    letter-spacing: 0.02em;
    line-height: 1.1em;
`
const TimelineAbout = styled.p`
    font-size: 18px;
    font-family: Poppins;
    font-weight: 500;
    color: black;
`
const HeroTitle = styled.h1`
    font-size: 40px;
    font-family: Poppins;
    font-weight: 700;
    color: #30d4ff;
    letter-spacing: 0.02em;
    line-height: 1.1em;
    text-align: center;
`
const HireTitle= styled.p`
    font-size: 20px;
    font-family: Poppins;
    font-weight: 500;
    color: black;
`

const HireText = styled.p`
    font-size: 18px;
    font-family: Poppins;
    font-weight: 500;
    color: grey;
`

const List = styled.ul`
    list-style: none;
`

const Margin = {
    marginTop: '10px',
    marginBottom: '10px'
}

const Hire = () => {
    return (
        <Container className="mb-5 mt-5 pt-5 pb-5" >
            <HeroTitle className="mb-5">What can I bring to the club?</HeroTitle>
            <Row>
                <Col lg={6}>
                    <HireTitle><img src={Tick} /> Frontend Development</HireTitle>
                    <HireText>As a developer and designer, I bring a host
                        of fundamental frontend language skills including
                        vanilla JavaScript, HTML5 and CSS3. I've built upon
                        these skills by learning React.js to handle
                        my web applications.
                    </HireText>
                </Col>
                <Col lg={6}>
                    <HireTitle><img src={Tick} /> Passion for Learning</HireTitle>
                    <HireText>I attended a bootcamp to understand
                        full stack web development and since then,
                        have watched hundreds of hours of online
                        videos and tutorials to better my tech
                        skills.
                    </HireText>
                </Col>
                <Col lg={6}>
                    <HireTitle><img src={Tick} /> Client Servicing</HireTitle>
                    <HireText>With over five years working with blue-chip CMO's
                        and managing my own team, I bring a friendly, yet
                        calculated approach to complex client needs,
                        regularly servicing clients last minute requests.
                    </HireText>
                </Col>
                <Col lg={6}>
                    <HireTitle><img src={Tick} /> Team Player & Autonomy</HireTitle>
                    <HireText>As both an ex-manager and ex-Police Officer, I work well within any team
                        and understand the importance of team working. Contrastingly, I am able
                        to work autonomously without constant management.
                    </HireText>
                </Col>
            </Row>
        </Container>
    )
}

export default Hire
