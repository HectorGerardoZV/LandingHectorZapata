import Layout from "../components/Layout"
import Image from "next/image"
const hobbies = () => {
    return (
        <Layout
            namePage={"Hobbies"}
        >
            <main className={style.mainContent} >
                <h1 className={style.h1}>¿Cuales son mis Hobbies?</h1>
                <div className={style.area}>

                    <div className={style.section_1}>
                        <div className={style.image}>
                            <Image
                                priority={true}
                                layout='responsive'
                                width={800}
                                height={550}
                                src={"/img/React.png"}
                                alt='me'
                            />

                        </div>
                        <p>Amo programar, aprender consas nuevas, y mi pasa tiempo mas
                            importante es el desarrollo de software y la la algoritmia,
                            realmente les recomiendo programar en react
                        </p>


                    </div>

                    <div className={style.section_2}>
                        <p>
                            Me gusta mucho jugar videojuegos y pasar tiempo con mis amigos,
                            lol es el videoJuego que mas juego actualmente aunque par ser
                            sinceros.....a veces lo odio.
                        </p>
                        <div className={style.image}>
                            <Image
                                priority={true}
                                layout='responsive'
                                width={800}
                                height={550}
                                src={"/img/Lol.png"}
                                alt='me'
                            />

                        </div>
                    </div>
                    <div className={style.section_1}>
                        <div className={style.image}>
                            <Image
                                priority={true}
                                layout='responsive'
                                width={800}
                                height={550}
                                src={"/img/soccer.png"}
                                alt='me'
                            />

                        </div>
                        <p>
                            El futbol a sido y será siempre mi deporte favorito
                            Jugue en la selección estatal desde los 14 años de edad
                            hasta los 18, he ganado muchos torneos regionales y estatales,
                            y puedo decir que no hay nada mejor que jugar con tus amigos
                        </p>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

import style from "../styles/Hobbie.module.css";

export default hobbies
