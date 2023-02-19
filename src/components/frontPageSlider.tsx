import React, { useRef, FC, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FrontPageSliderCard } from "../types/types.d";
import YouTube, { YouTubeProps } from 'react-youtube';




interface FrontPageSliderProps {
    cards: FrontPageSliderCard[];
}



const FrontPageSlider: FC<FrontPageSliderProps> = ({ cards }) => {

    const sliderRef = useRef<Slider>(null);

    const onReady = (event: any) => {
        const player = event.target;
        player.playVideo();
    };


    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            enablejsapi: 0,
            loop: 1,
        },
    };


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlaySpeed: 4000,
        autoplay: true,
    };



    return (
        <Slider ref={sliderRef} {...settings} >
            {cards.map((card: FrontPageSliderCard) => (
                <div key={card.order}>
                    {card.type === "image" && (<div
                        className="h-screen w-screen bg-center bg-no-repeat bg-cover flex flex-column items-end justify-center"
                        style={{ backgroundImage: `url(${card.url})` }}
                    >

                        <p className="mb-44 drop-shadow-lg text-white font-medium text-6xl " style={{ textShadow: '1px 1px 10px #000000, 2px 2px 10px #000000' }}
                        >{card.title}</p>
                    </div>)}
                    {card.type === 'video' && (
                        <YouTube
                            className="h-screen"
                            videoId={card.url}
                            opts={opts}
                            onReady={onReady}
                        />)}
                </div>
            ))}
        </Slider>
    )
}

export default React.memo(FrontPageSlider);



/*


import React, { useRef, FC, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FrontPageSliderCard } from "../types/types.d";
import YouTube from 'react-youtube';




interface FrontPageSliderProps {
    cards: FrontPageSliderCard[];
}



const FrontPageSlider: FC<FrontPageSliderProps> = ({ cards }) => {

    const sliderRef = useRef<Slider>(null);

    const playerRef = useRef<any>(null);

    useEffect(() => {
        const player = playerRef.current.getInternalPlayer();
        player.pauseVideo();
    }, []);

    const onReady = (event: any) => {
        const player = event.target;
        player.playVideo();
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            enablejsapi: 1,
        },
    };


    const onBeforeChange = (oldIndex: number, newIndex: number) => {
        const player = playerRef.current.getInternalPlayer();
        if (player.getPlayerState() === 1) {
            player.pauseVideo();
        }
        if (newIndex > oldIndex) {
            slickNext();
        } else {
            slickPrev();
        }
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlaySpeed: 2000,
        autoplay: true,
        beforeChange: onBeforeChange,
    };

    const slickNext = () => {
        sliderRef.current?.slickNext();
    };

    const slickPrev = () => {
        sliderRef.current?.slickPrev();
    };


    return (
        <Slider ref={sliderRef} {...settings} >
            {cards.map((card: FrontPageSliderCard) => (
                <div key={card.order}>
                    {card.type === "image" && (<div
                        className="h-screen bg-center bg-no-repeat bg-cover flex items-center"
                        style={{ backgroundImage: `url(${card.url})` }}
                    >
                        <p className="mx-auto">{card.title}</p>

                    </div>)}
                    {card.type === 'video' && (<YouTube
                        videoId={card.url}
                        opts={opts}
                        onReady={onReady}
                        onStateChange={() => null}
                        ref={playerRef}
                    />)}
                </div>
            ))}
        </Slider>
    )
}

export default React.memo(FrontPageSlider);



*/




