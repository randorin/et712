import React from 'react';
import yeriImage from '../images/yeri.webp';
import MemberInfo from './MemberInfo';

const Yeri = () => {
  const yeriBio = `
    Kim Ye-rim (Korean: 김예림; Hanja: 金藝琳; born March 5, 1999), better known by her stage name Yeri, is a South Korean singer and actress. 
    She is a member of South Korean girl group Red Velvet. Aside from her music career, Yeri hosted Show! Music Core (2015) and The Viewable SM (2016). 
    Yeri also appeared on variety show Secret Unnie (2018) and Law of the Jungle in Thailand (2019). In 2020, Yeri hosted her first reality-variety show Yeri's Room, 
    which aired through the YouTube channel Dum Dum Studio.
  `;

  return (
    <MemberInfo
      name="Yeri"
      image={yeriImage}
      bio={yeriBio}
    />
  );
};

export default Yeri;
