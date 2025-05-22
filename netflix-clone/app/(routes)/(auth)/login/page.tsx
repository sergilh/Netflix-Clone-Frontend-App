import Link from 'next/link';
import { Checkbox } from "@/components/ui/checkbox"
import Terms from '../components/Terms/Terms';
import { LoginForm } from './LoginForm';


export default async function LoginPage() {
    return (
        <div>
            <p className='text-3xl font-bold text-left mb-7'>Iniciar sesión</p>
            <LoginForm />
            <div className='mt-5 text-center'>
                <Link href="/" className='hover:underline hover:opacity-70'>
                    ¿Has olvidado tu contraseña?
                </Link>
            </div>
            <div className='flex items-center space-x-2 mt-4'>
                <Checkbox id='terms' className='border-white cursor-pointer' />
                <label className='peer-disabled:cursor not allowed peer-disabled:opacity-70'>
                    Recuérdame
                </label>
            </div>

            <div className='mt-4 flex gap-3'>
                <p className='text-white opacity-70'>¿Todavía sin Serflix?</p>
                <Link href="/register" className=' text-white hover:underline'>
                    Suscríbete ahora!
                </Link>
            </div>
            <Terms/>
        </div>
    )
}