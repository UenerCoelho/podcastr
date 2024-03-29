import '../styles/global.scss'

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PayerContextProvider } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PayerContextProvider>
  )
}

export default MyApp
