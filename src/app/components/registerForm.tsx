"use client";

import Image from 'next/image';

import TextField from '@mui/material/TextField';
import { ReactNode } from 'react';
import InputMask from "react-input-mask"

//fonts
import 'typeface-montserrat';

export default function RegisterForm(){
    return(
        <form className="grid grid-cols-2 gap-2 p-3">
            <header className='col-span-2'>
                <p className='font-bold mb-2 text-xl font-montserrat'>
                    Bem-vindo à AirEco ! 
                </p>
            </header>
            <TextField label="Primeiro nome" variant="outlined" />
            <TextField label="Último nome" variant="outlined" />
            <InputMask className='col-span-2' mask="999.999.999-99" placeholder="Digite o CPF">
               {():ReactNode => <TextField className='col-span-2' label="CPF" variant='outlined'/>}
            </InputMask>
            <TextField className='col-span-2' label="Número de telefone" variant="outlined" />
            <TextField className='col-span-2' label="Email" variant="outlined" />
            <TextField className='col-span-2' label="Senha" variant="outlined" />
            <TextField className='col-span-2' label="Confirme sua senha" variant="outlined" />
            <button className='text-bold bg-secondaryGreen font-montserrat text-white text-bold col-span-2 mt-3 p-3 rounded-2xl' type='submit'>Sign UP</button>
            <article className='flex justify-between items-center mt-5 col-span-2'>
                <span style={{ border: "thin solid black", backgroundColor: "black", width: "40%", height: "2px" }}></span>
                <p>or</p>
                <span style={{ border: "thin solid black", backgroundColor: "black", width: "40%", height: "2px" }}></span>
            </article>
            <Image
                src="/googleIcon.svg"
                alt='Google icon'
                width={40}
                height={40}
                className='col-span-2 block m-auto mt-5'
            />
            <p className='col-span-2 block m-auto text-primaryGreen'>Você já tem uma conta? </p>
            <p className='col-span-2 block m-auto text-primaryGreen font-bold'>Conecte-se!</p>
        </form>
    )
}