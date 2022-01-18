import Layout from "../components/Layout"
import Image from "next/image"
const hobbies = () => {
    return (
        <Layout
            namePage={"Hobbies"}
        >
            <main className={style.mainContent} >
                <h1 className={style.h1}>What are my Hobbies?</h1>
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
                        <p>I love programming, learning new things, and the most
                            important hobbie is software development and algorithms,
                            I really recommend programming in react
                        </p>


                    </div>

                    <div className={style.section_2}>
                        <p>
                            I really like playing video games and spending time with my friends,
                            lol it is the video game that I currently play the most, even though it is
                            sincere.....sometimes I hate it.
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
                            Soccer has been and will always be my favorite sport.
                            Played on the state team since I was 14 years old
                            until I was 18, I have won many regional and state tournaments,
                            and I can say that there is nothing better than playing with your friends
                        </p>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

import style from "../styles/Hobbie.module.css";

export default hobbies
