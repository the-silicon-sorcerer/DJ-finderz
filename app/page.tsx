import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <p>This is the besta app to find the coolest dj's in town</p>
    </main>
  )
}
