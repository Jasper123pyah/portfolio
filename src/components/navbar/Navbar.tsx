import './navbar.scss';

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -88; // Offset in pixels
      const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
  return (
    <div className={'navbar'}>
      <a className={'navbar-link'} onClick={() => scrollTo('about')}>
        about me
      </a>
      <a className={'navbar-link'} onClick={() => scrollTo('projects')}>
        projects
      </a>
      <a className={'navbar-link'} onClick={() => scrollTo('resume')}>
        resume
      </a>
      <a className={'navbar-link'} onClick={() => scrollTo('contact')}>
        contact
      </a>
    </div>
  )
}
export default Navbar;