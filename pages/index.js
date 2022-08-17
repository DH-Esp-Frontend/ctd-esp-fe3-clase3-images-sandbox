import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import minionPic from '../public/images/minion.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>Image Local: </div>
        <div>
          <Image
            src={minionPic}
            //Next js automaticamente carga el tamaño de la imagen por nosotros
            // width={}
            // height={}
          />
        </div>
        <div>Image Remote: </div>
        <div>
          {/* Posible error: 
      Error: Invalid src prop (https://i.pinimg.com/originals/31/fa/29/31fa295bfec41fce854b648a5e1e54b7.jpg) on `next/image`, hostname "i.pinimg.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

        Se agrega el dominio al next.config.js
      
      */}

          <Image
            src="https://i.pinimg.com/originals/31/fa/29/31fa295bfec41fce854b648a5e1e54b7.jpg"
            width={200}
            height={323} // En este caso es obligatorio informar el ancho o el largo
          />
        </div>
      </main>
    </div>
  );
}
