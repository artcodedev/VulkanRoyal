// 'use client'

import Image from 'next/image'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import Main_Container from "./Main_Container";
// import { Carousel } from "@material-tailwind/react";


const MainSlider = () => {


    let data_sliders = [
        {
            "carousel_title": " Выжимай из Cлотов максимум",
            "carousel_subtitle": "C бонусом Уэнздей!",
            "carousel_button": "Регистрация",
            "carousel_button_href": "/some",
            "baner": "/uploads/slide_img/1716x468__-1.jpg"
        },
        {
            "carousel_title": " Выжимай из Cлотов максимум",
            "carousel_subtitle": "C бонусом Уэнздей!",
            "carousel_button": "Регистрация",
            "carousel_button_href": "/some",
            "baner": "/uploads/slide_img/1716x468_lootboxes-1726745737.jpg"
        },
        {
            "carousel_title": " Выжимай из Cлотов максимум",
            "carousel_subtitle": "C бонусом Уэнздей!",
            "carousel_button": "Регистрация",
            "carousel_button_href": "/some",
            "baner": "/uploads/slide_img/1716x468-1722329314.jpg"
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    };
    return (

        <div id="carousel-slider" className='carousel carousel-slider'>
            <div className='carousel-inner' role="listbox">


                <Slider {...settings}>

                    {data_sliders.map((i) => <div style={{ height: "400px", background: "red" }}>
                        <Image src={i.baner} className="carousel-image" alt="" height={320} width={1700} />

                        <div className='' style={{position: "absolute", top:"0", width: "100%"}}>
                            <div className='carousel-caption'>
                                <div className='carousel-subtitle'>

                                    <div className='carousel-title'>
                                       {i.carousel_title}
                                    </div>
                                    <div className='carousel-subtitle' style={{ textShadow: "1px 1px 1px #1e225d, 1px -1px 1px #1e225d, -1px 1px 1px #1e225d, -1px -1px 1px #1e225d, 0 0 1px #1e225d;" }}>
                                        {i.carousel_subtitle}
                                    </div>
                                </div>

                                <a className='btn btn-engage btn-red' data-name="Ortega web" href={i.carousel_button_href}>
                                    <span>{i.carousel_button}</span>
                                </a>
                            </div>
                        </div>

                    </div>)}

                </Slider>


            </div>
        </div>

    );
}


export default MainSlider;
