"use client"; 
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import { useEffect, useRef } from 'react';
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLightMode, MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane } from 'react-icons/io';
import { LuMoveRight } from 'react-icons/lu';
import { services } from '../../components/Service/serviceData';

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-sticky');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  //Menu Bar
  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add('opened');
      bodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      offcanvas.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span class="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

  useEffect(() => {
    const mainMenuContent = document.querySelector('.main-menu-content');
    const mainMenuMobile = document.querySelector('.main-menu-mobile');

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const arrows = document.querySelectorAll(
        '.main-menu-mobile .has-dropdown > a'
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement('BUTTON');
        arrowBtn.classList.add('dropdown-toggle-btn');
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener('click', (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle('dropdown-opened');
          arrow.parentElement.classList.toggle('expanded');
          arrow.parentElement.parentElement.classList.add('dropdown-opened');
          arrow.parentElement.parentElement
            .querySelectorAll('.submenu')
            .forEach((submenu) => {
              submenu.style.display =
                submenu.style.display === 'block' ? 'none' : 'block';
            });
          arrow.parentElement.parentElement
            .querySelectorAll('.has-dropdown')
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove('dropdown-opened');
                sibling.querySelectorAll('.submenu').forEach((submenu) => {
                  submenu.style.display = 'none';
                });
              }
            });
        });
      });
    }
  }, [headerIcon]);
  //Menu Sidebar

  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const menuSideBar = menuSideBarRef.current;
    const sidebarContent = sidebarContentRef.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;
    const closeBtn2 = closeBtn2Ref.current;

    const addClasses = () => {
      sidebarContent.classList.add('opened');
      bodyOverlay2.classList.add('apply');
    };

    const removeClasses = () => {
      sidebarContent.classList.remove('opened');
      bodyOverlay2.classList.remove('apply');
    };

    if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
      menuSideBar.addEventListener('click', addClasses);
      closeBtn2.addEventListener('click', removeClasses);
      bodyOverlay2.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
        menuSideBar.removeEventListener('click', addClasses);
        closeBtn2.removeEventListener('click', removeClasses);
        bodyOverlay2.removeEventListener('click', removeClasses);
      }
    };
  }, []);
  return (
    <div data-lenis-prevent>
      <div className='offcanvas-area'>
        <div
          ref={offcanvasRef}
          className='offcanvas'
        >
          <div className='offcanvas_close-btn'>
            <button
              ref={closeBtnRef}
              className='close-btn'
            >
              <FaTimes />
            </button>
          </div>
          <div className='offcanvas_logo'>
            <Link href={'/'}>
              <Image
                src={'/images/logo.png'}
                alt='Logo'
                width={150}
                height={50}
                draggable='false'
              />
            </Link>
          </div>
          <div className='offcanvas_title'>
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div className='main-menu-mobile lg:none'></div>
          <div className='offcanvas_contact-info'>
            <div className='offcanvas_contact-title'>
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link href={'/'}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link href={'/'}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link href={'/'}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className='offcanvas_input'>
            <div className='offcanvas_input-title'>
              <h4>Get Update</h4>
            </div>
            <form
              action='#'
              method='post'
            >
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter E-Mail'
                  required
                />
                <button type='submit'>
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
            <div className='status'></div>
          </div>
          <div className='offcanvas_social'>
            <div className='social-icon'>
              <Link href={'/'}>
                <FaFacebookF />
              </Link>
              <Link href={'/'}>
                <FaXTwitter />
              </Link>
              <Link href={'/'}>
                <FaPinterestP />
              </Link>
              <Link href={'/'}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bodyOverlayRef}
        className='body-overlay'
      ></div>
      <div
        id='header-sticky'
        className='header-area header-sticky header-creative xl:mt-3 2xl:mt-0'
      >
        <div className='Container'>
          <div className='flex items-center justify-between py-4 lg:hidden'>
            <div className='flex items-center h-full'>
              <div className='header-logo'>
                <Link href={'/'}>
                  <Image
                    src={'/images/logo-white.png'}
                    alt='Logo'
                    width={313}
                    height={70}
                    draggable='false'
                  />
                </Link>
              </div>
            </div>
            <div className='flex items-center h-full gap-4'>
              <div className='header-bar'>
                <button
                  ref={menuBarRef}
                  className='menu-bar'
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-[1fr_2.5fr_1fr] items-center h-[90px]">
            <div className="flex items-center h-full">
              <div>
                <Link href={'/'}>
                  <Image
                    src={'/images/logo-white.png'}
                    alt='Logo'
                    width={313}
                    height={70}
                    draggable='false'
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              <div className='header-main-menu text-center w-full'>
                <nav className='main-menu-content'>
                  <ul>
                    <li>
                      <Link href={'/about'}>About</Link>
                    </li>
                    <li className='has-dropdown'>
                      <Link href={'/service'}>
                        Service
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        {Array.from(new Set(services.map(s => s.category))).map(category => (
                          <li className='has-dropdown' key={category}>
                            <a href='#'>
                              {category}
                              <span><FaChevronDown /></span>
                            </a>
                            <ul className='submenu'>
                              {services.filter(s => s.category === category).map(service => (
                                <li key={service.slug}>
                                  <Link href={`/service/${service.slug}`}>{service.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link href={'/'}>
                        Articles
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link href={'/blog_grid'}>blog grid</Link>
                        </li>
                        <li>
                          <Link href={'/blog_details'}>blog details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex items-center justify-center h-full gap-4">
              <div className='header-btn'>
                <Link href={'/contact'}>
                  Get A Quote<span></span>
                  <LuMoveRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
