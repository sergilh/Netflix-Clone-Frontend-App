import Link from 'next/link'
import React from 'react'
import Terms from '../components/Terms/Terms'
import RegisterForm from './RegisterForm/RegisterForm'
export default function Register() {
    return (
        <div>
            <p className='text-3xl font-bold  text-left mb-7'>Registro</p>
            <RegisterForm/>

            <div className='mt-4 flex gap-1'>
                <p className='text-white opacity-70'>¿Ya tienes una cuenta?</p>
                <Link href="/login" className=' text-white ml-2 hover:underline'>Inicia sesión aquí </Link>
            </div>

            <Terms/>
        </div>
    )
}