import './front.scss';
import profile from '../../assets/images/profile.webp';
import delta from '../../assets/images/delta.svg';
import {FiGithub} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";

const Front = () => {

  return (
    <div className={'front'}>
      <div className={'front-text'}>
        <h3>Hello I'm</h3>
        <h2 className={'front-name'}>Jasper van den Meiracker</h2>
        <h3>Full-stack Developer</h3>
        <div className={'front-description'}>
          <div className={'empty-circle'}/>
          <p>
            I am 24 years old and I have a bachelor in HBO ICT. My graduation internship was at <a
            className={'front-link'}
            target={'_blank'}
            href={'https://capgemini.com/'}>Capgemini</a> and I followed the <a className={'front-link'}
                                                                                target={'_blank'}
                                                                                href={'https://deltafhict.nl/'}>delta</a> programme
            at FHICT. I have also
            finished one internship at <a className={'front-link'} target="_blank"
                                          href={'https://www.indicia.nl/'}>INDICIA</a> and am
            currently working as a freelance software developer at <a className={'front-link'} target="_blank"
                                                                 href={'https://www.webyx.nl/'}>Webyx</a>.
          </p>
        </div>
        <h3 className={'findme'}>
          Find Me
        </h3>
        <div className={'findme-buttons'}>
          <a target={'_blank'} href={'https://github.com/Jasper123pyah'} className={'findme-button'}>
            <FiGithub/>
          </a>
          <a target={'_blank'} href={'https://linkedin.com/in/jaspervandenmeiracker'} className={'findme-button'}>
            <FaLinkedinIn/>
          </a>
          <a target={'_blank'} href={'https://deltafhict.nl'} className={'findme-button'}>
            <img src={delta} alt={'delta'} className={'delta'}/>
          </a>
        </div>
      </div>
      <div className={'front-image'}>
        <div className={'circle'}/>
        <img className={'profile'} loading={"lazy"} src={profile} alt={'profile'}/>
      </div>
    </div>
  )
}

export default Front;