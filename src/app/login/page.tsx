import Image from "next/image";

import LoginForm from "../components/loginForm";
import 'typeface-montserrat';



export default function Login(){
    return(
    <>
        <header className="flex p-5">
            <h1 className="text-secondaryGreen text-start text-4xl font-bold font-montserrat">
                Olá, faça seu
                login!
            </h1>
        </header>
        <LoginForm/>
    </>
    )
}