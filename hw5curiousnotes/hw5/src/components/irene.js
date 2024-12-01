import React from 'react';
import ireneImage from '../images/irene.jpg';
import MemberInfo from './MemberInfo';

const Irene = () => {
  const ireneBio = `
    Bae Joo-hyun (Korean: 배주현; born March 29, 1991), better known by her stage name Irene (아이린), is a South Korean singer and actress. 
    She is best known as the member and leader of the South Korean girl group Red Velvet, and its sub-unit Red Velvet – Irene & Seulgi.

    Irene hosted the television programs Music Bank (2015–2016), Laundry Day (2016–2017), and Irene's Work & Holiday (2022), 
    as well as various music festivals and award events. As an actress, Irene has starred in Women at a Game Company (2016) and Double Patty (2021).
  `;

  return (
    <MemberInfo
      name="Irene"
      image={ireneImage}
      bio={ireneBio}
    />
  );
};

export default Irene;
