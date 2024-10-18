import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Vendedores | Eletro Santa Clara</title>
        <meta
          name="description"
          content="Eletro Santa Clara"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador"
        />
        <meta name="author" content="Eletro Santa Clara" />
      </Head>

      <div>
        <HeaderPage subtitle="Contatos" />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
        
          <h3>Alexandre</h3>
          <div className={styles.description}>
          <li className={styles.separador}>
                <p>
                  <img src="/icons/emailIcon.svg" alt="email" />
                  vendas@eletrosantaclara.com.br
                </p>
              </li>

               </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
        
          <h3>André</h3>
          <div className={styles.description}>
            <p>
            vendas08@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
         
          <h3>Felipe</h3>
          <div className={styles.description}>
            <p>
            vendas@eletrosantaclara.com.br

            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
         {/* <MyImage
            src="/images/contato1.png"
            alt="Vendas - Gabriel"
            width="350"
            height="279"
          />  */}

          <h3>Gabriel</h3>
          <div className={styles.description}>
            <p>
            vendas01@eletrosantaclara.com.br  
            </p>
           </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*  <MyImage
            src="/images/contato1.png"
            alt="vendas03@eletrosantaclara.com.br"
            width="350"
            height="279"
            left
          />  */}

          <h3>Luca</h3>
          <div className={styles.description}>
            <p>
            vendas04@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
         {/*  <MyImage
            src="/images/contato2.png"
            alt="Contas a Receber"
            width="350"
            height="279"
            left
          /> */}

          <h3>José Evandro</h3>
          <div className={styles.description}>
            <p>
            vendas05@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
         {/*   <MyImage
            src="/images/contato1.png"
            alt="vendas04@eletrosantaclara.com.br"
            width="350"
            height="279"
          /> */}

          <h3>Rangel</h3>
          <div className={styles.description}>
            <p>
            vendas09@eletrosantaclara.com.br
            </p>
            </div>
        </div>        

        

        <div className={styles.treatmentsItem} data-aos="fade-up">
          {/*   <MyImage
            src="/images/contato1.png"
            alt=" vendas05@eletrosantaclara.com.br"
            width="350"
            height="279"
            left
          /> */}

          <h3>Juno</h3>
          <div className={styles.description}>
            <p>
            vendas07@eletrosantaclara.com.br
            </p>
          </div>
        </div>
      <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*  <MyImage
            src="/images/lucas.png"
            alt="Botulinica"
            width="350"
            height="279"
            left
          /> */}

          <h3>Mario</h3>
          <div className={styles.description}>
            <p>
            vendas03@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        

       

      

       

      
        
        {/* <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/"
            alt="Fios de PDO"
            width="350"
            height="279"
            left
          />
          <h3>Fios de PDO</h3>
          <div className={styles.description}>
            <p>São inseridos na derme com o intuito de estimular o colágeno.</p>
          </div>
        </div> */}

  

      </main>

      {/* <section className={styles.images}>
        <Title title="Fotos" subtitle="Resultado dos Tratamentos" />

        <ul className={`${styles.imagesContainer} mainContainer`}>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado1.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado2.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado3.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado4.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado5.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado6.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
        </ul>
      </section> */}

      <Footer />
    </>
  );
}
