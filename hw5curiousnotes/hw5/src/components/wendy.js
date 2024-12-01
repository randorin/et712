import React from 'react';
import wendyImage from '../images/wendy.avif';
import MemberInfo from './MemberInfo';

const Wendy = () => {
  const wendyBio = `
    Shon Seung-wan (Korean: 손승완; born February 21, 1994), better known by her stage name Wendy (Korean: 웬디), is a South Korean singer. 
    She is a member of the South Korean girl group Red Velvet. In 2021, she made her solo debut with the EP Like Water. 
    In 2022, she became a member of SM Entertainment's supergroup Got the Beat.

    Apart from her music career, Wendy has made various television appearances, such as being a panelist on reality show We Got Married (2015–2016), 
    Trick & True (2016–2017), being cast on comedy show Saturday Night Live Korea (2021), and hosting Mysterious Record Shop (2021). 
    From 2021 to 2023, Wendy hosted the radio program Wendy's Youngstreet. Also in 2023, she made her theatrical debut in the musical Rebecca.
  `;

  return (
    <MemberInfo
      name="Wendy"
      image={wendyImage}
      bio={wendyBio}
    />
  );
};

export default Wendy;
