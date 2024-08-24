import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './heroSection.css';
import video from '../../../assets/banner/ink_-_21536 (1080p).mp4';
import video2 from '../../../assets/banner/ink_-_67358 (1080p).mp4';
import paintImage from '../../../assets/banner/pexels-antoni-shkraba-5853940.jpg';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container fluid className="p-0">
                <Carousel>
                    <Carousel.Item>
                        <video
                            className="d-block w-100 hero-video"
                            src={video}
                            alt="First slide"
                            autoPlay
                            loop
                            muted
                        />
                        <Carousel.Caption>
                            <h3>Special Collection</h3>
                            <p>Up to 50% off on selected items!</p>
                            <button className="btn btn-primary">Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video
                            className="d-block w-100 hero-video"
                            src={video2}
                            alt="Second slide"
                            autoPlay
                            loop
                            muted
                        />
                        <Carousel.Caption>
                            <h3>New Arrivals</h3>
                            <p>Discover the latest trends!</p>
                            <button className="btn btn-primary">Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 hero-image"
                            src={paintImage}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Exclusive Offers</h3>
                            <p>Grab them before they're gone!</p>
                            <button className="btn btn-primary">Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default HeroSection;
