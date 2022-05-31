import React from 'react';
import { Header } from '../componets/navbar';
import { Container, Col, Row, Image } from 'react-bootstrap';

export const Home = () => {
    return (
        <div className="home">
            <Container id='home'>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>MUSTANG</h1>
                        <Image id='vrumvrum' src='https://64.media.tumblr.com/2691190b80f4c960fdd71ebf91b30663/5c412e5de46efb8d-f6/s1280x1920/64f6f469d3f00c0e3ab2f5526556526efc588930.pnj' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
