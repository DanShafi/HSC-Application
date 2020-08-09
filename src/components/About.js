import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

const HeroTitle = styled.h1`
    font-size: 45px;
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
        <Container>
            <Row>
                <Col lg={7}>
                    <HeroTitle>Hello, I'm Dan.<br/>I'm a 
                        creative person specialising in front end
                        web development and design.
                    </HeroTitle>
                </Col>
                <Col lg={5}>
                    <HeroAbout>
                        We tell stories. We build experiences. We explore all the ways 
                        design can make us smile, scream, sing and think, understand and care. 
                        We are interested in the whole journey. The big questions. 
                        The tiny details. The unexpected things along the way.
                        <br/><br/>
                        If you have a project or an idea in mind, 
                        say hello or call us +44 (0) 7972096337, 
                        and let’s see where it takes us.
                    </HeroAbout>
                </Col>
            </Row>
        </Container>
    )
}

export default About
