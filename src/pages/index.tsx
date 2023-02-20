/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
// @ts-ignore
import Obfuscate from 'react-obfuscate';

import Layout from '@/components/layout/Layout';
import ResponseForm from '@/components/ResponseForm';
import Seo from '@/components/Seo';
import Header from '@/components/layout/Header';
import Date from '@/components/Date';
import H1 from '@/components/H1';
import Polaroids from '@/components/Polaroids';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header />
      <main className='font-albatros'>
        <div className='flex min-h-screen flex-col text-darkGreen'>
          <section
            id='hero'
            className='mb-4 flex h-full w-full flex-col items-center justify-center bg-[#c0c1b9] px-4 md:h-[calc(100vh-56px)]'
          >
            <div className='mb-20 mt-14 md:mb-24 md:mt-0'>
              <div className='text-center font-albatros text-4xl leading-[1.5] tracking-[8px] md:text-6xl md:tracking-[16px]'>
                JUSTINE <span className='font-albatrosItalic'>&</span> THÉOPHILE
              </div>
              <div className='mt-2 text-center font-cassandre text-xl uppercase tracking-[5px] md:text-2xl'>
                Après 10 ans d'amour, nous nous marions !
              </div>
            </div>
            <Polaroids />
          </section>
          <section className='layout pt-8' id='programme'>
            <H1 className='border-b-0'>Programme</H1>
            <div className='my-4'>
              <Date>8 Juillet 2023</Date>
              <div className='my-4 flex flex-row'>
                <div className='mr-20'>16:00</div>
                <div>
                  Notre union sera célébrée lors d’une cérémonie laïque qui se
                  déroulera à 16 heures au domaine du Grand Singe.
                  <br />
                  Les festivités se poursuivront avec un apéritif et un dîner en
                  musique au domaine.
                </div>
              </div>
              <Date>9 Juillet 2023</Date>
              <div className='mt-4 flex flex-row'>
                <div className='mr-20'>11:00</div>
                <div>
                  Dès 11 heures, venez bruncher en notre compagnie au domaine.
                </div>
              </div>
            </div>
          </section>
          <section className='layout pt-8' id='acces'>
            <H1>Accès</H1>
            <div>
              <p className='mb-4'>
                Le domaine du Grand Singe se situe à Sarrians, commune du
                Vaucluse, à 15 min en voiture des villes d’Orange, Avignon et
                Carpentras.
              </p>
              <p className='mb-4'>
                En train :<br />
                Nous vous conseillons la gare Avignon TGV, les locations de
                voitures y étant plus nombreuses.
              </p>
              <p className='mb-4'>
                En voiture :<br />
                Un parking est à votre disposition pour accueillir votre
                véhicule tout au long des festivités.
              </p>
            </div>
          </section>
          <section className='layout pt-8' id='logements'>
            <H1>Logements</H1>
            <div>
              <p className='mb-4'>Plusieurs solutions sont possibles :</p>
              <ul className='ml-8 list-disc space-y-4'>
                <li>
                  Un champ est à notre disposition au sein du domaine pour les
                  campeurs amateurs. À vos bivouacs ! Vous pouvez y planter vos
                  tentes ou autres hamacs. Nous conseillons vivement cette
                  solution à tous ceux qui ne se prénomment pas Sam afin de
                  profiter toute la nuit de la fête.
                </li>
                <li>
                  Un parking accueillera les campeurs professionnels et autres
                  détenteurs de vans et camping-cars !
                </li>
                <li>
                  Plusieurs jolies chambres d’hôtes sont implantées dans les
                  villages alentours. Vous trouverez une petite sélection sur la
                  carte ci-dessous.
                </li>
              </ul>
            </div>
          </section>
          <section className='layout pt-8' id='votre-presence'>
            <H1 className='border-none'>Votre Présence</H1>
            <div className='border-[1px] border-darkGreen bg-darkGreen/40 lg:mx-56'>
              <div className='p-4 md:p-8'>
                <ResponseForm />
              </div>
            </div>
          </section>
          <section className='layout pt-8' id='contact'>
            <H1>Contact</H1>
            <div>
              <div className='mb-4'>
                Des questions en suspens ? Contactez-nous directement :
              </div>
              <div className='mb-4 flex flex-col'>
                <div className=''>Par téléphone :</div>
                <div className='ml-4'>
                  Justine : <Obfuscate tel='+33666752977' />
                </div>
                <div className='ml-4'>
                  Théophile : <Obfuscate tel='+33650453777' />
                </div>
                <div className='mt-4'>Par email :</div>
                <div className='ml-4'>
                  Justine : <Obfuscate email='js.segouin@gmail.com' />
                </div>
                <div className='ml-4'>
                  Théophile : <Obfuscate email='theophile.belivier@gmail.com' />
                </div>
              </div>
            </div>
          </section>
          <section className='layout pt-4 pb-16 md:pb-32' id='photos'>
            <H1>Photos</H1>
            <div className='mb-4'>
              Retrouvez ici les photographies prises lors de notre mariage
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
