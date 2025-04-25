import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <section>
      <p className='fs-wild text__color'>404</p>

      <article className='fs-md text__color'>
        <p className='fs-xxxl text__color'>Ups, page not found</p>
        <p className='fs-lg text__color'>This page doesn't exits</p>
      </article>
    </section>
  );
};


