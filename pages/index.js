import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (
        <div className={styles.container}>
            <Head>
                <title>Exemplo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.user}>
                    {loading && <div className={styles.title}>Aguarde...</div>}
                    {
                        session &&
                        <>
                            <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
                            <img src={session.user.image} alt="" className={styles.avatar} />
                        </>
                    }
                    {
                        !session &&
                        <>
                            <p className={styles.title}>Privado, faça login</p>                            
                        </>
                    }
                </div>
            </main>
        </div>
    )
}