import React from 'react';
import { DNA } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <DNA
        visible={true}
        height="250"
        width="250"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <h2>Auth in progress...</h2>
    </div>
  );
};
