const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

if (siteHeader) {
  let lastScrollY = window.scrollY;
  const hideThreshold = 90;
  const deltaThreshold = 6;

  window.addEventListener(
    'scroll',
    () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const mobileMenuOpen = !!(nav && nav.classList.contains('open'));

      if (mobileMenuOpen || currentScrollY <= hideThreshold || delta < -deltaThreshold) {
        siteHeader.classList.remove('nav-hidden');
      } else if (delta > deltaThreshold) {
        siteHeader.classList.add('nav-hidden');
      }

      lastScrollY = currentScrollY;
    },
    { passive: true }
  );
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('img').forEach((image) => {
  image.loading = image.loading || 'lazy';
  image.decoding = 'async';
  if (!image.dataset.fallbackBound) {
    image.addEventListener('error', () => {
      if (!image.src.includes('assets/jewellery-fallback.svg') && !image.src.includes('assets/logo-fallback.svg')) {
        image.src = image.classList.contains('brand-logo') ? 'assets/logo-fallback.svg' : 'assets/jewellery-fallback.svg';
      }
    });
    image.dataset.fallbackBound = '1';
  }
});

const inquiryForm = document.querySelector('#inquiryForm');
const formMessage = document.querySelector('#formMessage');

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thank you! Our team will contact you shortly.';
    inquiryForm.reset();
  });
}

const heroCanvas = document.querySelector('#heroShaderCanvas');

if (heroCanvas) {
  const ctx = heroCanvas.getContext('2d', { alpha: true });
  const blobs = [
    { x: 0.2, y: 0.3, vx: 0.00022, vy: 0.00015, radius: 0.34, color: '255,80,5' },
    { x: 0.75, y: 0.25, vx: -0.00018, vy: 0.00021, radius: 0.3, color: '219,186,149' },
    { x: 0.65, y: 0.74, vx: 0.00016, vy: -0.00019, radius: 0.36, color: '208,188,225' },
    { x: 0.3, y: 0.78, vx: -0.00014, vy: -0.00016, radius: 0.28, color: '199,150,33' }
  ];

  let width = 0;
  let height = 0;
  let dpr = 1;

  const resizeCanvas = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = heroCanvas.clientWidth;
    height = heroCanvas.clientHeight;
    heroCanvas.width = Math.floor(width * dpr);
    heroCanvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const drawFrame = (time) => {
    const t = time * 0.001;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(12, 16, 18, 0.5)';
    ctx.fillRect(0, 0, width, height);

    blobs.forEach((blob, index) => {
      blob.x += blob.vx * (1 + Math.sin(t * 0.4 + index));
      blob.y += blob.vy * (1 + Math.cos(t * 0.35 + index));

      if (blob.x > 1.15 || blob.x < -0.15) blob.vx *= -1;
      if (blob.y > 1.15 || blob.y < -0.15) blob.vy *= -1;

      const px = blob.x * width;
      const py = blob.y * height;
      const pr = blob.radius * Math.min(width, height);

      const grad = ctx.createRadialGradient(px, py, pr * 0.1, px, py, pr);
      grad.addColorStop(0, `rgba(${blob.color}, 0.48)`);
      grad.addColorStop(1, `rgba(${blob.color}, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let i = 0; i < 120; i += 1) {
      const x = (Math.sin(t * 0.8 + i) * 0.5 + 0.5) * width;
      const y = (Math.cos(t * 0.9 + i * 0.7) * 0.5 + 0.5) * height;
      ctx.fillRect(x, y, 1.2, 1.2);
    }

    requestAnimationFrame(drawFrame);
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  requestAnimationFrame(drawFrame);
}

const dictionary = {
  en: {
    navHome: 'Home',
    navCollections: 'Collections',
    navAbout: 'About',
    navContact: 'Contact',
    heroEyebrow: 'Legacy Since 1998',
    heroTitle: 'Handcrafted Jewellery for Every Celebration',
    heroDesc: 'Shree Soni Jewellers blends modern finesse with traditional artistry to create pieces that feel personal, luxurious, and unforgettable.',
    badge1: 'BIS Hallmarked',
    badge2: 'Certified Diamonds',
    badge3: 'Lifetime Care',
    heroBtn1: 'Explore Collection',
    heroBtn2: 'Book Consultation',
    brandName: 'Shree Soni Jewellers',
    footerTag: 'Where elegance meets emotion.',
    visitUs: 'Visit Us',
    callUs: 'Call'
  },
  hi: {
    navHome: 'होम',
    navCollections: 'कलेक्शन',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क',
    heroEyebrow: '1998 से विरासत',
    heroTitle: 'हर उत्सव के लिए हस्तनिर्मित ज्वेलरी',
    heroDesc: 'श्री सोनी ज्वेलर्स पारंपरिक कला और आधुनिक डिजाइन को मिलाकर यादगार आभूषण बनाता है।',
    badge1: 'BIS हॉलमार्क',
    badge2: 'प्रमाणित डायमंड',
    badge3: 'लाइफटाइम केयर',
    heroBtn1: 'कलेक्शन देखें',
    heroBtn2: 'कंसल्टेशन बुक करें',
    brandName: 'श्री सोनी ज्वेलर्स',
    footerTag: 'जहां सुंदरता भावनाओं से मिलती है।',
    visitUs: 'हमसे मिलें',
    callUs: 'कॉल'
  },
  or: {
    navHome: 'ମୁଖ୍ୟ ପୃଷ୍ଠା',
    navCollections: 'ସଂଗ୍ରହ',
    navAbout: 'ଆମ ବିଷୟରେ',
    navContact: 'ଯୋଗାଯୋଗ',
    heroEyebrow: '1998 ଠାରୁ ପାରମ୍ପରିକତା',
    heroTitle: 'ପ୍ରତ୍ୟେକ ଉତ୍ସବ ପାଇଁ ହସ୍ତନିର୍ମିତ ଗହଣା',
    heroDesc: 'ଶ୍ରୀ ସୋନି ଜୁଏଲର୍ସ ପାରମ୍ପରିକ କଳାକୃତି ଓ ଆଧୁନିକ ଶୈଳୀକୁ ମିଶାଇ ସ୍ମୃତିମୟ ଗହଣା ତିଆରି କରେ।',
    badge1: 'BIS ହଲମାର୍କ',
    badge2: 'ପ୍ରମାଣିତ ହୀରା',
    badge3: 'ଜୀବନପର୍ଯ୍ୟନ୍ତ ସେବା',
    heroBtn1: 'ସଂଗ୍ରହ ଦେଖନ୍ତୁ',
    heroBtn2: 'ପରାମର୍ଶ ବୁକ୍ କରନ୍ତୁ',
    brandName: 'ଶ୍ରୀ ସୋନି ଜୁଏଲର୍ସ',
    footerTag: 'ଯେଉଁଠି ରୂଚି ଭାବନା ସହିତ ମିଳେ।',
    visitUs: 'ଆମକୁ ଦେଖନ୍ତୁ',
    callUs: 'କଲ୍'
  }
};

const langSwitch = document.querySelector('#langSwitch');

function applyLanguage(lang) {
  const selected = dictionary[lang] ? lang : 'en';
  const data = dictionary[selected];
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (data[key]) {
      element.textContent = data[key];
    }
  });
  document.documentElement.lang = selected === 'or' ? 'or' : selected;
  localStorage.setItem('site_lang', selected);
  if (langSwitch) {
    langSwitch.value = selected;
  }
}

const savedLanguage = localStorage.getItem('site_lang') || 'en';
applyLanguage(savedLanguage);

if (langSwitch) {
  langSwitch.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
  });
}
