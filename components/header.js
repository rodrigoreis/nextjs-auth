import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header () {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header'>
      <Link href='/'>
        <a className='logo'>Exemplo</a>
      </Link>
      {session && <a href="#" onClick={handleSignout} className="btn-signin">Logoff</a>  }
      {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Login</a>  }
    </div>
  )
}