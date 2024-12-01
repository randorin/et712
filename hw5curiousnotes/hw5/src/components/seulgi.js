import React from 'react';
import seulgiImage from '../images/seulgi.jpg';
import MemberInfo from './MemberInfo';

const Seulgi = () => {
  const seulgiBio = `
    Kang Seul-gi (Korean: 강슬기; born February 10, 1994), known mononymously as Seulgi, is a South Korean singer and dancer. 
    She is a member of the South Korean girl group Red Velvet, its sub-unit Red Velvet – Irene & Seulgi, and the supergroup Got the Beat. 
    She released her debut EP, 28 Reasons, in 2022.
  `;

  return (
    <MemberInfo
      name="Seulgi"
      image={seulgiImage}
      bio={seulgiBio}
    />
  );
};

export default Seulgi;
