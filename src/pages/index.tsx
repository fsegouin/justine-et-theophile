import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ResponseForm from '@/components/ResponseForm';
import Seo from '@/components/Seo';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header />
      <main>
        <div className='layout flex min-h-screen flex-col p-4 text-gray-700 md:p-12'>
          <section className='my-4 flex h-[calc(100vh-56px)] w-full flex-col items-center justify-center'>
            <div className='text-center text-4xl text-black/80 lg:text-6xl'>
              Justine et Théophile
            </div>
            <div className='mt-2 text-center text-2xl text-gray-500'>
              Après 10 ans d'amour, nous nous marions !
            </div>
          </section>
          <section id='programme'>
            <h1 className='my-8'>Programme</h1>
            <div className='my-4'>
              <div className='text-sm'>8 Juillet 2023</div>
              <div>
                Notre union sera célébrée lors d’une cérémonie laïque qui se
                déroulera à 16 heures au domaine du Grand Singe. Les festivités
                se poursuivront avec un apéritif et un dîner en musique au
                domaine.
              </div>
              <div className='mt-4 text-sm'>9 Juillet 2023</div>
              <div>
                Dès 11 heures, venez bruncher en notre compagnie au domaine.
              </div>
            </div>
          </section>
          <section id='acces'>
            <h1 className='my-8'>Accès</h1>
          </section>
          <section id='logements'>
            <h1 className='my-8'>Logements</h1>
          </section>
          <section id='votre-presence'>
            <h1 className='my-8'>Votre Présence</h1>
            <div className='border-[1px] border-gray-500 lg:mx-56'>
              <div className='p-8'>
                <ResponseForm />
              </div>
            </div>
          </section>
          <section id='contact'>
            <h1 className='my-8'>Contact</h1>
            <div>
              <div className='mb-4'>
                Des questions en suspens ? Contactez-nous directement :
              </div>
              <div className='mb-4 flex flex-col'>
                <div className=''>Par téléphone :</div>
                <div className='ml-4'>Justine : 06 66 75 29 77</div>
                <div className='ml-4'>Théophile : 06 50 45 37 77</div>
                <div className='mt-4'>Par email :</div>
                <div className='ml-4'>justine-et-theophile@gmail.com</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
