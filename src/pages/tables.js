import { Icon } from '@iconify/react';
import React from 'react';
import { Container, Col, Row, Carousel, Card, Button } from 'react-bootstrap';

export const Tabelas = () => {
    return (
        <div className="tables">
            <Container id='tables'>
                <Carousel id='desktopcarousel'>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://s3-alpha-sig.figma.com/img/7f15/8106/a2c50a734e1797e233080427065e40c7?Expires=1655078400&Signature=grxF-QvugQFpUc7ORmwoqFaGPBFNeFYA8yjpJ9u0GnmnoHf3uDLUVD1ORiWaWy6n0cRmn1S-gUZjdupluyuLER2sweal~3PMbYuLUauXEh0YAWaKcN-MLPuGA3hHZUBrFQA0-5GI2oEBKdWOywfcXpcZ7rVStv7-TxQqNDAxMbeUH9jovrY0uudhHZf9sr3IMurB2hWtnYkb-wQ1ZEJil2E~XjkkOraCCTV1S4-oJ96AW0icWZX79DIv~kC3OeHHIB5dqzWU28CA6ffc0rJqQXGzByK7erHrS1oCRJ4N~ydAb9HwlHGE4n4OYTx7eTp-N8lzwFUQ7zyG9eIMODHMjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col><Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/dfd9d57fdc5ee6d851471d9c1384de80/9b704109fe9ef2ac-7a/s400x600/fc1c92766ba6e5989afac9f4d70ae6bdb480709d.pnj" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col><Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/9c41be1d4d6c6944096353bb286eaab0/9b704109fe9ef2ac-51/s400x600/5dedeb1cfdabd01ccd031ea9ea022476ca75250a.pnj" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/39665fb92d8768ea4307b2596e70a395/04e88827c1a8fea6-b9/s540x810/bdca18c51fc12caffb26d6cebb21144309e090ed.png" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col><Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/73ea6e54be57077d4269f758fa9c2195/04e88827c1a8fea6-b5/s540x810/331d6a172659dd42bcfecf0fd81497d0ac36949d.png" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col><Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/e560087f12a88cf163f885c3460eee9a/04e88827c1a8fea6-83/s540x810/9ff52b7b2f99b1a6b5cef1e5194dadc210b7e6d4.png" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/7eaa6e2ddbab9f56f3888b1ff8a0a101/04e88827c1a8fea6-03/s540x810/d0a2d49bf7d68b480d7a88d7f0f7faa75390d8f9.png" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col><Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/a07c2cb4673f0375667de4b7aaab195c/04e88827c1a8fea6-43/s540x810/e1d9d2b210dcbd740275f268c1989adb603e6adc.png" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col><Col>
                                    <Card className='cardborder'>
                                        <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/f1cfdb1ee93d2f2324fbcb5f5fb0527c/04e88827c1a8fea6-90/s540x810/b860306e31a95a0c1446f89a77a414d210a20c6b.png" />
                                        <Card.Body className='cardbody'>
                                            <Card.Title className='cardtitle'>Mustang</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li className='cardlist'>
                                                        <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                                    </li>
                                                    <li className='cardlist'>
                                                        <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                            <Button variant="light" className='buttoncard'>Ver carro</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>

{/* --------------------------------------------------versão mobile----------------------------------------------------------------------- */}
                <Carousel id='mobilecarousel'>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://s3-alpha-sig.figma.com/img/7f15/8106/a2c50a734e1797e233080427065e40c7?Expires=1655078400&Signature=grxF-QvugQFpUc7ORmwoqFaGPBFNeFYA8yjpJ9u0GnmnoHf3uDLUVD1ORiWaWy6n0cRmn1S-gUZjdupluyuLER2sweal~3PMbYuLUauXEh0YAWaKcN-MLPuGA3hHZUBrFQA0-5GI2oEBKdWOywfcXpcZ7rVStv7-TxQqNDAxMbeUH9jovrY0uudhHZf9sr3IMurB2hWtnYkb-wQ1ZEJil2E~XjkkOraCCTV1S4-oJ96AW0icWZX79DIv~kC3OeHHIB5dqzWU28CA6ffc0rJqQXGzByK7erHrS1oCRJ4N~ydAb9HwlHGE4n4OYTx7eTp-N8lzwFUQ7zyG9eIMODHMjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/dfd9d57fdc5ee6d851471d9c1384de80/9b704109fe9ef2ac-7a/s400x600/fc1c92766ba6e5989afac9f4d70ae6bdb480709d.pnj" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/9c41be1d4d6c6944096353bb286eaab0/9b704109fe9ef2ac-51/s400x600/5dedeb1cfdabd01ccd031ea9ea022476ca75250a.pnj" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/39665fb92d8768ea4307b2596e70a395/04e88827c1a8fea6-b9/s540x810/bdca18c51fc12caffb26d6cebb21144309e090ed.png" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/73ea6e54be57077d4269f758fa9c2195/04e88827c1a8fea6-b5/s540x810/331d6a172659dd42bcfecf0fd81497d0ac36949d.png" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/e560087f12a88cf163f885c3460eee9a/04e88827c1a8fea6-83/s540x810/9ff52b7b2f99b1a6b5cef1e5194dadc210b7e6d4.png" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/7eaa6e2ddbab9f56f3888b1ff8a0a101/04e88827c1a8fea6-03/s540x810/d0a2d49bf7d68b480d7a88d7f0f7faa75390d8f9.png" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/a07c2cb4673f0375667de4b7aaab195c/04e88827c1a8fea6-43/s540x810/e1d9d2b210dcbd740275f268c1989adb603e6adc.png" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardborder'>
                            <Card.Img className='cardimg' variant="top" src="https://64.media.tumblr.com/f1cfdb1ee93d2f2324fbcb5f5fb0527c/04e88827c1a8fea6-90/s540x810/b860306e31a95a0c1446f89a77a414d210a20c6b.png" />
                            <Card.Body className='cardbody'>
                                <Card.Title className='cardtitle'>Mustang</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li className='cardlist'>
                                            <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>2015</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>180 km/h</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>9/10</p>
                                        </li>
                                        <li className='cardlist'>
                                            <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>8/10</p>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="light" className='buttoncard'>Ver carro</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}