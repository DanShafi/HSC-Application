import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

// Image imports

import Marketing from '../media/pr.svg'
import Police from '../media/police.svg'
import Developer from '../media/code_development_.svg'
import LeWagon from '../media/lewagon.png'
import TimelineSep from '../media/timeline-seperator.png'

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
const Divider = {
    position: 'relative',
    left: '150px',
}

const Divider1 = {
    position: 'relative',
    left: '150px',
    transform: 'scaleX(-1)',

}

const Timeline = () => {
    return (
        <Container>
            <Row>
                <Col lg={7}>
                    <img src={Marketing} />
                </Col>
                <Col lg={5}>
                    <p className="text-muted">2014-2018</p>
                    <HeroTitle>
                        Humble beginnings in marketing.
                    </HeroTitle>
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
                <img src={TimelineSep} style={Divider}/>
            </Row>

            <Row>
                <Col lg={6} lg={{order: 'first' }} xs={{ order: 'last' }}>
                    <p className="text-muted">2011-2019</p>
                    <HeroTitle>
                        Serving the community, one Bobby at a time.
                    </HeroTitle>
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
                <Col lg={6}>
                    <img src={Police} />
                </Col>
                <img src={TimelineSep} style={Divider1}/>
            </Row>

            <Row>
                <Col lg={7}>
                    <img src={Developer} />
                    <img src={LeWagon} style={{height: '100px'}} />
                </Col>
                <Col lg={5}>
                    <p className="text-muted">2019 - Present</p>
                    <HeroTitle>
                        Humble beginnings in marketing.
                    </HeroTitle>
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

export default Timeline
