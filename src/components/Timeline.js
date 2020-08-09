import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

// Image imports

import Marketing from '../media/office_work_.svg'
import Police from '../media/police.svg'
import Developer from '../media/coding_.svg'
import TimelineSep from '../media/timeline-seperator.png'

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
                    <TimelineTitle>
                        Humble beginnings in advertising.
                    </TimelineTitle>
                    <TimelineAbout>
                        Shortly after graduating from the University of Greenwich,
                        I joined Publicis Media as a Graduate Account Executive, where
                        I would begin my career in advertising.
                        <br />
                        <br />
                        After moving from agency-to-agency, bringing experience from
                        top clients like BMW, Mercedes-Benz and Tesco, I ended my 5-yearish
                        stint in advertising as a Digital Account Manager at MediaCom.
                    </TimelineAbout>
                </Col>
                <img src={TimelineSep} style={Divider}/>
            </Row>

            <Row>
                <Col lg={6} lg={{order: 'first' }} xs={{ order: 'last' }}>
                    <p className="text-muted">2011-2019</p>
                    <TimelineTitle>
                        'Allo, 'Allo, what's this then?
                    </TimelineTitle>
                    <TimelineAbout>
                        At 17 years old, I decided to join the Metropolitan Police Service
                        as as voluntary officer (known better as a Special Constable).
                        In 2018, I was offered a direct graduate entry scheme role as a Police Officer.
                        <br/><br/>
                        I oversaw the digital reporting within my response team and local borough clusters. This role would have eventually
                        led to an Inspectorate role in the Cybercrime division but due to Government
                        cuts, the role ceased to exist. 
                        <br />
                        <br />
                        With that, I left the force for pastures new.
                    </TimelineAbout>
                </Col>
                <Col lg={6}>
                    <img src={Police} />
                </Col>
                <img src={TimelineSep} style={Divider1}/>
            </Row>

            <Row>
                <Col lg={7}>
                    <img src={Developer} />
                </Col>
                <Col lg={5}>
                    <p className="text-muted">2019 - Present</p>
                    <TimelineTitle>
                        Follow the Red Wagon.
                    </TimelineTitle>
                    <TimelineAbout>
                        After much deliberation, I decided to enlist into Le Wagon - an intensive 9-week full stack
                        web development bootcamp focussing on building web applications with Ruby on Rails.
                        <br/><br/>
                        This is when I realised that front-end web development is where my passion lies,
                        playing to my strengths from previous experience(s). Post-graduation, I undertook
                        an internship with the News UK Web Team and decided 
                        to focus on learning JavaScript and React independently.
                    </TimelineAbout>
                </Col>
            </Row>
        </Container>
    )
}

export default Timeline
