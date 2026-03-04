import './projects.scss';
import {lazy, Suspense, useEffect, useRef, useState} from 'react';

const PortfolioCarousel = lazy(() => import('./PortfolioCarousel.tsx'));

const Projects = () => {
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || shouldLoadCarousel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadCarousel(true);
          observer.disconnect();
        }
      },
      {rootMargin: '300px 0px'}
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldLoadCarousel]);

  return (
    <div id={'projects'} className="projects" ref={sectionRef}>
      <h4>Projects</h4>
      <h3 className="projects-title">Recent Works</h3>
      <div className={'empty-circle'}/>
      {shouldLoadCarousel ? (
        <Suspense fallback={<div className={'portfolio-carousel portfolio-carousel--loading'} aria-hidden={'true'}/>}>
          <PortfolioCarousel/>
        </Suspense>
      ) : (
        <div className={'portfolio-carousel portfolio-carousel--loading'} aria-hidden={'true'}/>
      )}
    </div>
  );
};

export default Projects;
