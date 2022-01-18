import React from 'react'
import Image from 'next/image'
const Me = () => {
    return (
        <main className={style.mainContent} >
            <h1 className={style.h1}>Hiiiiii!!, I'm Hector Zapata </h1>
            <div className={style.grid}>
                <div className={style.image}>
                    <Image
                        priority={true}
                        layout='responsive'
                        width={1200}
                        height={1600}
                        src={"/img/me.jpg"}
                        alt='me'
                    />

                </div>
                <div className={style.content}>
                    <p>Hi, I'm Héctor Gerardo Zapata Vázquez, I was born in
                        Monterrey Nuevo Leon, Mexico and currently I have
                        20 years welcome to my personal page, I hope
                        That is to your liking and you know me a little better.</p>
                    <p>Study high school at Colegio De Bachilleres
                        From the State of Sonora or "COBACH Obregon 3",
                        I'm currently studying for a degree in
                        software engineering at ITSON Obregon.</p>
                    <p>I'm a person who likes studying very much.
                        learn new things and work as a team, I love
                        the design and programming, I also like a lot
                        read and go for a bike ride.</p>

                </div>
            </div>
        </main>
    )
}

//Style
import style from "../styles/Home.module.css";
export default Me
