import Carousel from 'react-bootstrap/Carousel';
import carImg1 from '../images/shopon.pk-1741372708474/xbox_gift_card_main.png'
import carImg2 from '../images/shopon.pk-1741372708474/xbox_Gift_cards__1_.png'
import carImg3 from '../images/shopon.pk-1741372708474/xbox_Gift_cards__2_.png'
import carImg4 from '../images/shopon.pk-1741372708474/Untitled_design.png'
import carImg5 from '../images/shopon.pk-1741372708474/special_offer.png'
import carImg6 from '../images/shopon.pk-1741372708474/Slider-03.jpg'

export default function MyCarousel(){

    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carImg1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carImg2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carImg3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carImg4}
              alt="fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carImg5}
              alt="fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carImg6}
              alt="six slide"
            />
          </Carousel.Item>
        </Carousel>
      );
      
}