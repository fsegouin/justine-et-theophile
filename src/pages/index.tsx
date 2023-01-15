import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ResponseForm from '@/components/ResponseForm';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Justine et Théophile</h1>
            <p className='mt-2 text-sm text-gray-800'>
              Notre mariage c'est pour bientôt !
            </p>
            <ResponseForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
