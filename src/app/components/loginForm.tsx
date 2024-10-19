"use client";

import Image from 'next/image';
import TextField from '@mui/material/TextField';
import 'typeface-montserrat';

export default function LoginForm() {
    
    const onSubmit = (event:any) => {
        event.preventDefault();
        window.location.href = "/";
    };

    return (
        <form onSubmit={onSubmit} className="grid p-5 gap-5 grid-cols-2 flex-col">
            <TextField
                label="Email"
                className='font-montserrat col-span-2'
                required
            />
            <TextField
                label="Senha"
                className='font-montserrat col-span-2'
                required
                type='password'
            />
            <p className='col-span-2 font-montserrat'>
                Esqueceu a senha?
            </p>
            <button type='submit' className='bg-secondaryGreen text-white font-bold col-span-2 p-3 rounded-2xl'>Entrar</button>
            <p className='col-span-2 font-montserrat'>
                Você ainda não possui uma conta?   
            </p>
            <p className='text-secondaryGreen font-bold font-montserrat'>
                Clique aqui!
            </p>
            <article className='flex justify-between items-center col-span-2'>
                <span style={{ border: "thin solid black", backgroundColor: "black", width: "40%", height: "2px" }}></span>
                <p>or</p>
                <span style={{ border: "thin solid black", backgroundColor: "black", width: "40%", height: "2px" }}></span>
            </article>
            <Image
                src="/drone.svg"
                alt='Imagem de um drone'
                width={80}
                height={80}
                className='col-span-2 block m-auto mb-2'
            />
            <button type='submit' className='bg-secondaryGreen text-white font-bold col-span-2 p-3 rounded-2xl'>Continuar com o Google</button>
            <button type='submit' className='bg-secondaryGreen text-white font-bold col-span-2 p-3 rounded-2xl'>Continuar como visitante</button>
        </form>
    );
}