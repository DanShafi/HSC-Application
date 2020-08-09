import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import styled from "styled-components"

// Images

import Stars1 from '../media/stars1.png'
import Stars2 from '../media/stars2.png'
import Spaceman from '../media/spaceman.svg'
import Planets from '../media/Planets.svg'


const Space = styled.div`
height: 500px;
background-color: #121212;
position: relative;
`

const Hero = () => {
    return (
        <Container>
            <Space>
                <img src={Stars1} style={{position: 'absolute'}} />
                <img src={Stars2} style={{position: 'absolute'}} />
                <img src={Spaceman} className='SpacemanStyle' />
                <img src={Planets} className='PlanetStyle' />
            </Space>
        </Container>
    )
}

export default Hero
