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
                        I build experiences. I explore all the ways that design can
                        make you think, wonder, imagine and inspire. User experience is a core part
                        of my development ethos - every decision must serve the end-client purpose, with
                        design and code in a symphony of pixel perfection.
                    </HeroAbout>
                </Col>
            </Row>
        </Container>
    )
}

export default About
