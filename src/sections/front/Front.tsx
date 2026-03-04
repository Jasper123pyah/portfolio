import './front.scss';
import elecho from '../../assets/images/elecho-icon.svg';
import profile from '../../assets/images/profile.webp';
import {FiGithub} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";

const getAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const Front = () => {
  const age = getAge(new Date(1999, 11, 7));

  return (
    <div className={'front'}>
      <div className={'front-text'}>
        <h3>Hello I'm</h3>
        <h2 className={'front-name'}>Jasper van den Meiracker</h2>
        <h3>Full-stack Developer</h3>
        <div className={'front-description'}>
          <div className={'empty-circle'}/>
          <p>
            I am {age} years old and I have a bachelor in HBO ICT. My graduation internship was at <a
            className={'front-link'}
            target={'_blank'}
            href={'https://capgemini.com/'}>Capgemini</a> and I followed the <a className={'front-link'}
                                                                                target={'_blank'}
                                                                                href={'https://deltafontysict.nl/'}>delta</a> programme
            at FHICT. I co-run <a className={'front-link'} target="_blank"
                                  href={'https://www.elecho.io'}>Elecho</a> focused on creating and expanding MVP&apos;s
            and also currently work at <a className={'front-link'} target="_blank"
                                          href={'https://www.proforto.nl/'}>Proforto</a> as an automations engineer.
          </p>
        </div>
        <h3 className={'findme'}>
          Find Me
        </h3>
        <div className={'findme-buttons'}>
          <a aria-label={'GitHub profile'} target={'_blank'} rel={'noopener noreferrer'} href={'https://github.com/Jasper123pyah'} className={'findme-button'}>
            <FiGithub/>
          </a>
          <a aria-label={'LinkedIn profile'} target={'_blank'} rel={'noopener noreferrer'} href={'https://linkedin.com/in/jaspervandenmeiracker'} className={'findme-button'}>
            <FaLinkedinIn/>
          </a>
          <a aria-label={'Elecho website'} target={'_blank'} rel={'noopener noreferrer'} href={'https://elecho.io'} className={'findme-button'}>
            <img src={elecho} alt={'elecho'} className={'elecho'}/>
          </a>
        </div>
      </div>
      <div className={'front-image'}>
        <div className={'circle'}/>
        <img className={'profile'} src={profile} alt={'profile'} width={2866} height={5174} loading={'eager'} fetchPriority={'high'} decoding={'async'}/>
      </div>
    </div>
  )
}

export default Front;
