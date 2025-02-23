import { Carousel } from 'react-bootstrap';
import './Carousel.css';

import image1 from '../../assets/images/home/image_1.png';

export function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Primeira imagem"
                />
                {/*<Carousel.Caption>
                    <h3>Nanda e Junior</h3>
                </Carousel.Caption>*/}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Primeira imagem"
                />
                {/*<Carousel.Caption>
                    <h3>Nanda e Junior</h3>
                </Carousel.Caption>*/}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Primeira imagem"
                />
                {/*<Carousel.Caption>
                    <h3>Nanda e Junior</h3>
                </Carousel.Caption>*/}
            </Carousel.Item>
        </Carousel>
    );
}
