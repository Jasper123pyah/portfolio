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
      <a onClick={() => scrollTo('about')}>
        about me
      </a>
      <a onClick={() => scrollTo('projects')}>
        projects
      </a>
      <a>
        resume
      </a>
      <a>
        contact
      </a>
    </div>
  )
}
export default Navbar;