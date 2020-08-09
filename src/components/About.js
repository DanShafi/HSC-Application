import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

const HeroTitle = styled.h1`
    font-size: 40px;
    font-family: Poppins;
    font-weight: 700;
    color: #30d4ff;
    letter-spacing: 0.02em;
    line-height: 1.1em;
`
const HeroAbout = styled.p`
    font-size: 21px;
    font-family: Poppins;
    font-weight: 500;
    color: grey;
`

const About = () => {
    return (
        <Container className="mb-5 mt-5 pt-5 pb-5">
            <Row>
                <Col lg={7} className="mb-5">
                    <HeroTitle>Hello, I'm Dan.<br/>I'm a 
                        creative person specialising in front end
                        web development and design.
                    </HeroTitle>
                </Col>
                <Col lg={5}>
                    <HeroAbout>
                        This is a test. We build experiences. We explore all the ways 
                        design can make us smile, scream, sing and think, understand and care. 
                        We are interested in the whole journey. The big questions. 
                        The tiny details. The unexpected things along the way.
                    </HeroAbout>
                </Col>
            </Row>
        </Container>
    )
}

export default About
