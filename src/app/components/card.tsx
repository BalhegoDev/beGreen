import { ReactNode } from "react";
import Image from "next/image";

type props = {
    image:string,
    title:string
    link:string
}

export default function Card({image,title,link}: props):ReactNode{
    return(
        <article className=" flex flex-col items-center m-auto gap-3">
            <a href={link} rel="noopener noreferrer">
                <section className=" h-20 w-20 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-secondaryGreen">
                    <Image
                        src={image}
                        alt="Imagem ilustrativa"    
                        width={80}
                        height={80}
                    />
                </section>
            </a>
            <p className="text-secondaryGreen font-bold">{title}</p>
        </article>
    )
}