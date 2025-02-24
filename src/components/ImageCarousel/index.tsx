import { Carousel } from 'react-bootstrap';
import './Carousel.css';

import image1 from '../../assets/images/home/image_1.png';
import image2 from '../../assets/images/home/image_2.png';
import image3 from '../../assets/images/home/image_3.png';

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
                    src={image2}
                    alt="Segunda imagem"
                />
                {/*<Carousel.Caption>
                    <h3>Nanda e Junior</h3>
                </Carousel.Caption>*/}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Terceira imagem"
                />
                {/*<Carousel.Caption>
                    <h3>Nanda e Junior</h3>
                </Carousel.Caption>*/}
            </Carousel.Item>
        </Carousel>
    );
}
