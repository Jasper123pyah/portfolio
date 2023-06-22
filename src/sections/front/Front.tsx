import './front.scss';
import profile from '../../assets/images/profile.png';
import delta from '../../assets/images/delta.svg';
import {FiGithub} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";

const Front = () => {

  return (
    <div className={'front'}>
      <div className={'front-text'}>
        <h3>Hello I'm</h3>
        <h2 className={'name'}>Jasper van den Meiracker</h2>
        <h3>Web Designer & Web Developer</h3>
        <div className={'description'}>
          <div className={'empty-circle'}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
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
        <img className={'profile'} src={profile} alt={'profile'}/>
      </div>
    </div>
  )
}

export default Front;