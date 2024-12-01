import React from 'react';
import joyImage from '../images/joy.jpg';
import MemberInfo from './MemberInfo';

const Joy = () => {
  const joyBio = `
    Park Soo-young (Korean: 박수영; born September 3, 1996), better known by her stage name Joy, is a South Korean singer, actress, and host. 
    She debuted as a member of South Korean girl group Red Velvet in August 2014. 
    In 2017, Joy debuted as an actress and has had starring roles in the television dramas The Liar and His Lover (2017), Tempted (2018), 
    The One and Only (2021), and Once Upon a Small Town (2022). In 2021, Joy officially debuted as a soloist with the release of her special album Hello.
  `;

  return (
    <MemberInfo
      name="Joy"
      image={joyImage}
      bio={joyBio}
    />
  );
};

export default Joy;
