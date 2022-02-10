import React from "react";
import style from "./team.module.scss";
import person from "../../assets/png/team-person.png";
import {Card} from "./Card";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


export interface ICard {
    img: string
    name: string
    job: string
    text: string
    href: string
}

const cards: ICard[] = [
    {
        img: person,
        name: "Theo “Gundy” Escriva",
        job: "Project Lead",
        text: "French entrepreneur, and digital business owner, Theo has built and directed numerous projects after entering the crypto space in 2016",
        href: '#'
    },
    {
        img: person,
        name: "Zozimo Neto ",
        job: "Artist",
        text: "When creating the generator, we used a well-known universal speech code. The text is generated by paragraphs randomly",
        href: '#'
    },
    {
        img: person,
        name: "“Sennec”",
        job: "Software engineer",
        text: "When creating the generator, we used a well-known universal speech code. The text is generated by paragraphs randomly",
        href: '#'
    },
    {
        img: person,
        name: "“Kotnascher”",
        job: "Blockchain Developer",
        text: "When creating the generator, we used a well-known universal speech code. The text is generated by paragraphs randomly",
        href: '#'
    },
    {
        img: person,
        name: "Anatoliy Demyanchuk",
        job: "UI/UX designer",
        text: "Ukrainian art director and designer since 2017, Anatoliy has been working exclusively for crypto projects like Jigen app and Garlicoin in the last 2 years",
        href: '#'
    },
    {
        img: person,
        name: "Moderators",
        job: "Community moderators",
        text: "They will be designed during the first phase of the project. Early enthusiasts who desire to help the project reach it’s full potential and help the community.",
        href: '#'
    },
];

export const Team = () => {
    return (
        <section className={style.team}

        >
            <h2 className={style.title} id="Team">Meet our team</h2>

            <Swiper
                className={style.slider}
                spaceBetween={8}
                slidesPerView="auto"
                slidesPerGroup={1}
            >
                {
                    cards.map((card, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <Card {...card}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={style.cards}>
                {
                    cards.map((card, index) => <Card key={index} {...card}/>)
                }
            </div>


        </section>
    )
}