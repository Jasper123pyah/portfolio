import './front.scss';
import profile from '../../assets/images/profile.jpg';
const Front = () => {

  return (
    <div className={'front'}>
      <div className={'front-text'}>
        <h3>Hello I'm</h3>
        <h2 className={'name'}>Jasper van den Meiracker</h2>
        <h3>Web Designer & Web Developer</h3>
        <p className={'description'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <h3 className={'findme'}>
          Find Me
        </h3>
      </div>
      <div className={'front-image'}>
        <img className={'profile'} src={profile} alt={'profile'}/>
      </div>
    </div>
  )
}

export default Front;