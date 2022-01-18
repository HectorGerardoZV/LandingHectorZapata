import React from 'react'
import Image from 'next/image'
const Me = () => {
    return (
        <main className={style.mainContent} >
            <h1 className={style.h1}>Holaaaa! soy Héctor</h1>
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
                    <p>Hola soy Héctor  Gerardo Zapata Vázquez, nací en
                        Monterrey Nuevo Leon, México y actualmente tengo
                        20 años, bien venido a mi paginal personal, espero
                        que sea de tu agrado y me conozcas un poco mejor.</p>
                    <p>Estudie la preparatoria en el Colegio De Bachilleres
                        Del Estado De Sonora o “COBACH Obregon 3”,
                        actualmente me encuentro estudiando la carrera de
                        ingeniería en software en ITSON obregon.</p>
                    <p>Soy una persona que le gusta mucho el estudio,
                        aprender cosas nuevas y trabajar en equipo, adoro
                        el diseño y programar, tambien me gusta mucho
                        leer y salir a pasear en bicicleta.</p>

                </div>
            </div>
        </main>
    )
}

//Style
import style from "../styles/Home.module.css";
export default Me
