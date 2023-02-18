import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../data/siteData";
import { FrontPageSliderCard } from "../types/types.d";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};




const FrontPageSlider = () => {

    const customSlider = useRef<Slider>(null);



    return (
        <Slider ref={customSlider} {...settings}>
            {cards.map((card: FrontPageSliderCard) => (
                <div key={card.order}>
                    <div>
                        <p>{card.title}</p>
                        <p>{card.image}</p>
                    </div>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </div>
            ))}
        </Slider>
    )
}

export default React.memo(FrontPageSlider);