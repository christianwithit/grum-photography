// Grum Photography - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVIGATION =====
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const navLinks = document.querySelectorAll('[data-page]');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Close mobile menu when clicking outside or on a link
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu || e.target.hasAttribute('data-page')) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ===== SPA ROUTING =====
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) {
      page.classList.add('active');
      window.scrollTo(0, 0);
    }

    // Update active nav link
    document.querySelectorAll('[data-page]').forEach(a => {
      a.classList.remove('active');
      if (a.dataset.page === pageId) a.classList.add('active');
    });

    // Close mobile menu
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Update page title
    const titles = {
      home: 'Grum Photography | Uganda',
      about: 'About | Grum Photography',
      services: 'Services | Grum Photography',
      galleries: 'Galleries | Grum Photography',
      contact: 'Contact | Grum Photography'
    };
    document.title = titles[pageId] || 'Grum Photography | Uganda';

    // Update URL hash
    history.pushState({ page: pageId }, '', pageId === 'home' ? '#' : '#' + pageId);

    // Re-trigger hero animation
    setTimeout(() => {
      const heroBg = page.querySelector('.hero-bg');
      if (heroBg) heroBg.classList.add('loaded');
      initScrollReveal();
      initFAQ();
    }, 50);
  }

  // Handle nav clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (link) {
      e.preventDefault();
      showPage(link.dataset.page);
    }
  });

  // Handle hash on load
  const hash = location.hash.replace('#', '') || 'home';
  showPage(hash || 'home');

  // Hero animation
  setTimeout(() => {
    const heroBg = document.querySelector('#page-home .hero-bg');
    if (heroBg) heroBg.classList.add('loaded');
  }, 100);

  // ===== SCROLL REVEAL =====
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.page.active .reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  setTimeout(initScrollReveal, 200);

  // ===== FAQ ACCORDION =====
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  initFAQ();

  // ===== EMAIL FORM =====
  const emailForm = document.getElementById('email-signup');
  if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = emailForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'SUBSCRIBED!';
      btn.style.background = '#2c2420';
      emailForm.querySelector('input').value = '';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    });
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'MESSAGE SENT!';
      submitBtn.style.opacity = '0.7';

      const thankYou = document.getElementById('thank-you-msg');
      if (thankYou) {
        thankYou.style.display = 'block';
        contactForm.style.display = 'none';
      }

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '';
        if (thankYou) {
          thankYou.style.display = 'none';
          contactForm.style.display = 'block';
          contactForm.reset();
        }
      }, 4000);
    });
  }

  // ===== TESTIMONIAL SLIDER =====
  let currentTestimonial = 0;
  const testimonialDots = document.querySelectorAll('.t-dot');

  function showTestimonial(idx) {
    document.querySelectorAll('.testimonial-slide').forEach((s, i) => {
      s.style.opacity = i === idx ? '1' : '0';
      s.style.pointerEvents = i === idx ? 'auto' : 'none';
    });
    testimonialDots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    currentTestimonial = idx;
  }

  if (testimonialDots.length) {
    testimonialDots.forEach((dot, i) => {
      dot.addEventListener('click', () => showTestimonial(i));
    });
    // Auto-advance
    setInterval(() => {
      const next = (currentTestimonial + 1) % testimonialDots.length;
      showTestimonial(next);
    }, 5000);
  }

  // ===== GALLERY LIGHTBOX =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  document.addEventListener('click', (e) => {
    const thumb = e.target.closest('.gallery-thumb');
    if (thumb && lightbox) {
      const src = thumb.querySelector('img')?.src || thumb.src;
      lightboxImg.src = src.replace('/400/', '/800/');
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.id === 'lightbox-close') {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  // Popstate (browser back/forward)
  window.addEventListener('popstate', (e) => {
    const pageId = e.state?.page || 'home';
    showPage(pageId);
  });

});
