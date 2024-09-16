import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css'; // Include your custom styles or Tailwind CSS

gsap.registerPlugin(ScrollTrigger);

const App1 = () => {
  useEffect(() => {
    // Hero Section Animation
    gsap.from('.hero-text', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power4.out',
      delay: 0.5,
    });

    gsap.from('.hero-image', {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: 'power4.out',
      delay: 1,
    });

    // About Section Animation
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out',
    });

    // Services Section Animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power4.out',
    });

    // Portfolio Section Parallax Effect
    gsap.to('.portfolio-image', {
      scrollTrigger: {
        trigger: '.portfolio-section',
        scrub: true,
      },
      y: -50,
      ease: 'none',
    });

    // Contact Section Animation
    gsap.from('.contact-heading', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      rotation: 360,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="text-gray-900 bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen hero-section">
        <h1 className="mb-4 text-6xl font-bold hero-text font-bebas">
          Welcome to My Website
        </h1>
        <p className="text-lg">Where creativity meets technology</p>
        <img
          src="https://via.placeholder.com/400"
          alt="Hero"
          className="mt-8 hero-image"
        />
      </section>

      {/* About Section */}
      <section className="py-16 bg-white about-section">
        <div className="container mx-auto about-content">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="text-lg">
            I'm a passionate developer with a love for creating beautiful and
            functional web applications.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 services-section">
        <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          <div className="p-6 text-white rounded-lg service-card bg-primary">
            <h3 className="mb-2 text-2xl font-bold">Web Development</h3>
            <p>Building responsive and high-performance websites.</p>
          </div>
          <div className="p-6 text-white rounded-lg service-card bg-secondary">
            <h3 className="mb-2 text-2xl font-bold">UI/UX Design</h3>
            <p>Crafting user-friendly interfaces with a focus on usability.</p>
          </div>
          <div className="p-6 text-white rounded-lg service-card bg-accent">
            <h3 className="mb-2 text-2xl font-bold">Consulting</h3>
            <p>Providing expert advice to help your project succeed.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white portfolio-section">
        <div className="container mx-auto">
          <h2 className="mb-4 text-4xl font-bold">Portfolio</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="portfolio-item">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 1"
                className="w-full rounded-lg portfolio-image"
              />
              <h3 className="mt-4 text-2xl font-bold">Project 1</h3>
            </div>
            <div className="portfolio-item">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 2"
                className="w-full rounded-lg portfolio-image"
              />
              <h3 className="mt-4 text-2xl font-bold">Project 2</h3>
            </div>
            <div className="portfolio-item">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 3"
                className="w-full rounded-lg portfolio-image"
              />
              <h3 className="mt-4 text-2xl font-bold">Project 3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 contact-section">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold contact-heading">Contact Me</h2>
          <form className="p-8 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 font-bold text-white rounded bg-primary hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App1;
