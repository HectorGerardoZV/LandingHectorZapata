
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";


const Navegation = () => {
    const [open, isOpen] = useState(false);


    const contact = () => {
        isOpen(!open);
    }
    return (
        <section className={style.bar}>
            <div className={style.image}>
                <Image
                    layout="responsive"
                    src={"/img/home.svg"}
                    width={100}
                    height={100}
                />
            </div>
            <div className={style.separator}></div>
            <nav className={style.navegation}>
                <Link href={"/"}>Sobre Mi</Link>
                <Link href={"/hobbies"}>Hobbies</Link>
                <button className={style.contact}
                    onClick={contact}
                >
                    Contactame</button>
                {
                    open ? (
                        <div className={style.icons_section}>
                            <div className={style.contact_img}>
                                <Link href={""}
                                >
                                    <a target={"_blank"} href="https://www.facebook.com/profile.php?id=100009602167871">
                                        <div>
                                            <Image
                                                layout="responsive"
                                                src={"/img/face.svg"}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </a>

                                </Link>

                                <Link href={""}
                                >
                                    <a target={"_blank"} href="https://www.instagram.com/hectorgerardozv/">
                                        <div>
                                            <Image
                                                layout="responsive"
                                                src={"/img/insta.svg"}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </a>

                                </Link>
                                <Link href={""}
                                >
                                    <a target={"_blank"} href="https://github.com/HectorGerardoZV">
                                        <div>
                                            <Image
                                                layout="responsive"
                                                src={"/img/git.svg"}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </a>

                                </Link>
                            </div>
                        </div>
                    ) : null
                }
            </nav>

        </section>

    )
}


//Style
import style from "../styles/Navegation.module.css";

export default Navegation
