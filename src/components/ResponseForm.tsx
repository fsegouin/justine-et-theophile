import clsx from 'clsx';
import React, { useState } from 'react';

type ResponseType = {
  nom: string;
  email: string;
  vegetarien: boolean;
  samedi: boolean;
  brunch: boolean;
};

const ResponseForm = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [vegetarien, setVegetarien] = useState<boolean | null>(null);
  const [samedi, setSamedi] = useState<boolean | null>(null);
  const [brunch, setBrunch] = useState<boolean | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendForm = async (item: ResponseType) => {
    try {
      // we will send a POST request with the data required to create an item
      const res = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' },
      });
      return res.json();
    } catch (error) {
      setError(true);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSending(true);
    sendForm({
      nom: nom,
      vegetarien: vegetarien || false,
      samedi: samedi || false,
      brunch: brunch || false,
      email: email,
    }).then((r) => {
      setIsSending(false);
      if (r.id) {
        setSent(true);
        resetForm();
      } else {
        setError(true);
      }
    });
  };

  const resetForm = () => {
    setError(false);
    setNom('');
    setEmail('');
    setVegetarien(null);
    setBrunch(null);
    setSamedi(null);
  };

  return !sent ? (
    <form className='form my-6' onSubmit={handleSubmit}>
      <div className='flex w-full flex-col space-y-4'>
        <div className='w-full text-center'>1 formulaire par personne</div>
        <div className='flex w-full flex-col'>
          <label className='mb-2'>Nom</label>
          <input
            required
            type='text'
            name='nom'
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className='mr-2 flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
          />
        </div>
        <div className='flex w-full flex-col'>
          <label className='mb-2'>Email</label>
          <input
            required
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mr-2 flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
          />
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className=''>
            Serez-vous présent à nos côtés le samedi 8 juillet ?
          </span>
          <div className='flex flex-row space-x-2'>
            <div className='flex flex-row items-center'>
              <span className='mr-2'>Oui</span>
              <input
                type='checkbox'
                name='samedi'
                checked={samedi || false}
                onChange={(e) => setSamedi(e.target.checked)}
                className='mr-2 max-w-[10px] flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
              />
            </div>
            <div className='flex flex-row items-center'>
              <span className='mr-2'>Non</span>
              <input
                type='checkbox'
                name='samedi'
                checked={samedi !== null ? !samedi : false}
                onChange={(e) => setSamedi(!e.target.checked)}
                className='mr-2 max-w-[10px] flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
              />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className=''>Serez-vous présent au brunch du dimanche ?</span>
          <div className='flex flex-row space-x-2'>
            <div className='flex flex-row items-center'>
              <span className='mr-2'>Oui</span>
              <input
                type='checkbox'
                name='brunch'
                checked={brunch || false}
                onChange={(e) => setBrunch(e.target.checked)}
                className='mr-2 max-w-[10px] flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
              />
            </div>
            <div className='flex flex-row items-center'>
              <span className='mr-2'>Non</span>
              <input
                type='checkbox'
                name='brunch'
                checked={brunch !== null ? !brunch : false}
                onChange={(e) => setBrunch(!e.target.checked)}
                className='mr-2 max-w-[10px] flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
              />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className=''>
            Avez-vous une préférence pour un plat végétarien (poisson) ?
          </span>
          <div className='flex flex-row space-x-2'>
            <div className='flex flex-row items-center'>
              <span className='mr-2'>Oui</span>
              <input
                type='checkbox'
                name='vegetarien'
                checked={vegetarien || false}
                onChange={(e) => setVegetarien(e.target.checked)}
                className='mr-2 max-w-[10px] flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
              />
            </div>
            <div className='flex flex-row items-center'>
              <span className='mr-2'>Non</span>
              <input
                type='checkbox'
                name='vegetarien'
                checked={vegetarien !== null ? !vegetarien : false}
                onChange={(e) => setVegetarien(!e.target.checked)}
                className='mr-2 max-w-[10px] flex-1 appearance-none rounded-lg border border-gray-200 p-2 focus:border-gray-500 focus:outline-none'
              />
              <div />
              <div />
            </div>
          </div>
        </div>
        <button
          type='submit'
          disabled={isSending}
          className={clsx(
            isSending
              ? 'bg-darkGreen/20'
              : 'bg-darkGreen/60 hover:bg-darkGreen',
            'rounded py-2 px-4 text-white'
          )}
        >
          Envoyer
        </button>
      </div>
    </form>
  ) : (
    <div className='my-6 flex w-full flex-col items-center justify-center'>
      <div>Merci ! C'est noté !</div>
      <button
        type='submit'
        className='my-4 rounded bg-darkGreen/60 py-2 px-4 text-white hover:bg-darkGreen'
        onClick={() => setSent(false)}
      >
        Voulez-vous remplir le formulaire pour un autre invité ?
      </button>
    </div>
  );
};

export default ResponseForm;
