// The Gipsy Hill Smokehouse - client-side site search
// Injects a search button into the header and an overlay with live results.
(function () {
  'use strict';

  // Static search index. Keep in sync with the site's pages.
  const PAGES = [
    {
      url: '/',
      title: 'Home',
      description: 'Premium hog roast and BBQ catering for weddings, parties and corporate events across London. Spit-roast, live-fire, proper food. Quote in 24 hours.',
      keywords: 'hog roast bbq catering london weddings private parties corporate events barbecue spit roast live fire quote borough market street fairs markets music festivals'
    },
    {
      url: '/our-food',
      title: 'Our Food',
      description: 'Hog Roast, Barbecue and Spit Roast Catering. Our food, menus and event catering planning for your hog roast party.',
      keywords: 'barbecue menus free-range marinated porchetta bbq specials bbq chicken piri piri bbq roast pork spit roast lamb wood fennel rosemary garlic lemon'
    },
    {
      url: '/wedding-catering',
      title: 'Wedding Catering',
      description: 'Celebrate your special day with premier hog roast and barbecue catering in London. Expert spit roasts and BBQ services, ideal for weddings and events.',
      keywords: 'hog roast wedding caterer london spit roasts barbecues porchetta bar reception service wedding catering team since 2004 geographical area covered'
    },
    {
      url: '/wedding-menus',
      title: 'Wedding Menus',
      description: 'Our wedding menus are based on years of experience. Hog roasts, barbecues or spit roast menus tailored for you. Sides & salads + additional services available.',
      keywords: 'wedding menus porchetta menu roast lamb menu from the sea sides salads additional services team'
    },
    {
      url: '/private-parties',
      title: 'Private Parties',
      description: 'Host an unforgettable private party in London with delicious hog roast, spit roasts, and customized barbecue catering services, perfect for any celebration.',
      keywords: 'private parties birthdays anniversaries celebrations hog spit roasts canapes salads the team perfection our food'
    },
    {
      url: '/event-catering',
      title: 'Corporate Events',
      description: 'Exceptional hog roast event catering services for every occasion in London. Spit roasts and BBQ catering, delivering mouthwatering dishes.',
      keywords: 'corporate events hog roast event catering good craic experienced service fantastic food quality staff party company function'
    },
    {
      url: '/spit-roasts-hog-roasts',
      title: 'Hog & Spit Roasts',
      description: 'Hog roast & spit roast catering across London & the South East. Weddings, corporate events, private parties. From £25.00 per head. Get a quote today.',
      keywords: 'spit roast catering hog roasts lamb spit roast leg of lamb chicken spit roasts videos price per head south east £25'
    },
    {
      url: '/testimonials',
      title: 'Testimonials',
      description: 'Read what our clients have kindly had to say about us & our hog roasts, barbeque catering & spit roasts.',
      keywords: 'testimonials reviews what our customers say clients feedback wedding catering'
    },
    {
      url: '/gallery',
      title: 'Photos',
      description: 'Years of experience have allowed us to develop our expertise as hog roast caterers, barbecue kings and spit roast masters. View our gallery.',
      keywords: 'gallery photos hog roast barbecue catering pictures images ready to feast'
    },
    {
      url: '/contact',
      title: 'Contact',
      description: 'Wedding catering, hog roast party catering, corporate event catering, barbecue catering and spit roasts. Call 07944 390 309 to talk to someone directly.',
      keywords: 'contact us send a message get a quote enquiry phone email address 121 central hill london se19 1by 07944 390309 timclements'
    },
    {
      url: '/our-story',
      title: 'Our Story',
      description: 'From a whole hog on a London street corner in 2004 to Borough Market, the festivals and the Smokehouse. Twenty years of hog roast, spit roast and barbecue catering.',
      keywords: 'our story about us history tim clements borough market portugal jamaica portuguese black pig charcuterie bifana piri piri sardine brazilian barbecue fat duck heston blumenthal ash irish peat brisket ribs since 2004 opened 2016'
    },
    {
      url: '/privacy-policy',
      title: 'Privacy Policy',
      description: 'What The Gipsy Hill Smokehouse does with the information you send through our enquiry forms, how long we keep it, and your rights under UK GDPR.',
      keywords: 'privacy policy data protection gdpr your rights information cookies ico data controller'
    },
    {
      url: '/terms-conditions',
      title: 'Terms & Conditions',
      description: 'Booking terms and conditions for hog roast, spit roast and barbecue catering with The Gipsy Hill Smokehouse Ltd.',
      keywords: 'terms conditions booking deposit cancellation final numbers prices payment liability conduct t&cs'
    },
    {
      url: '/post/why-is-an-apple-placed-in-the-mouth-of-a-hog-roast',
      title: 'Why Is An Apple Placed In The Mouth Of A Hog Roast?',
      description: 'The traditions, the myth about flavour, and the honest answer to why an apple goes in the mouth of a hog roast.',
      keywords: 'apple in the mouth hog roast pig why tradition harvest applewood spit roast theatre carving whole pig folklore'
    }
  ];

  // Build a lowercase haystack per page once.
  PAGES.forEach((p) => {
    p._haystack = (p.title + ' ' + p.description + ' ' + p.keywords).toLowerCase();
  });

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/);
    const results = [];
    PAGES.forEach((p) => {
      let score = 0;
      terms.forEach((t) => {
        if (!t) return;
        // Title matches weigh heaviest, then keywords, then description.
        if (p.title.toLowerCase().includes(t)) score += 10;
        if (p.keywords.toLowerCase().includes(t)) score += 4;
        if (p.description.toLowerCase().includes(t)) score += 2;
        if (p._haystack.includes(t)) score += 1;
      });
      if (score > 0) results.push({ page: p, score: score });
    });
    results.sort((a, b) => b.score - a.score);
    return results.map((r) => r.page);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function build() {
    const header = document.querySelector('.site-header .container');
    if (!header) return;

    // Search toggle button, placed just before the mobile nav toggle.
    const btn = document.createElement('button');
    btn.className = 'search-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Search the site');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">'
      + '<circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>'
      + '<span class="search-toggle-label">Search</span>';

    const navToggle = header.querySelector('.nav-toggle');
    if (navToggle) header.insertBefore(btn, navToggle);
    else header.appendChild(btn);

    // Overlay dialog.
    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Site search');
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="search-panel">' +
        '<div class="search-inputwrap">' +
          '<input type="search" class="search-input" placeholder="Search hog roasts, weddings, menus…" ' +
            'aria-label="Search query" autocomplete="off" spellcheck="false">' +
          '<button type="button" class="search-close" aria-label="Close search">✕</button>' +
        '</div>' +
        '<ul class="search-results" role="listbox" aria-label="Search results"></ul>' +
        '<p class="search-empty" hidden>No matching pages. Try &ldquo;wedding&rdquo;, &ldquo;menu&rdquo; or &ldquo;spit roast&rdquo;.</p>' +
      '</div>';
    document.body.appendChild(overlay);

    const input = overlay.querySelector('.search-input');
    const list = overlay.querySelector('.search-results');
    const empty = overlay.querySelector('.search-empty');
    const closeBtn = overlay.querySelector('.search-close');
    let activeIndex = -1;
    let current = [];

    function render(results) {
      current = results;
      activeIndex = -1;
      list.innerHTML = '';
      const hasQuery = input.value.trim().length > 0;
      empty.hidden = !(hasQuery && results.length === 0);
      results.forEach((p, i) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.id = 'search-result-' + i;
        li.innerHTML =
          '<a href="' + escapeHtml(p.url) + '">' +
            '<span class="search-result-title">' + escapeHtml(p.title) + '</span>' +
            '<span class="search-result-desc">' + escapeHtml(p.description) + '</span>' +
          '</a>';
        list.appendChild(li);
      });
    }

    function setActive(i) {
      const items = list.querySelectorAll('li');
      if (!items.length) return;
      activeIndex = (i + items.length) % items.length;
      items.forEach((li, idx) => {
        const on = idx === activeIndex;
        li.classList.toggle('active', on);
        if (on) {
          input.setAttribute('aria-activedescendant', li.id);
          li.scrollIntoView({ block: 'nearest' });
        }
      });
    }

    function open() {
      overlay.hidden = false;
      document.body.classList.add('search-open');
      input.value = '';
      render([]);
      input.focus();
    }

    function close() {
      overlay.hidden = true;
      document.body.classList.remove('search-open');
      input.removeAttribute('aria-activedescendant');
      btn.focus();
    }

    btn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('mousedown', (e) => {
      if (e.target === overlay) close();
    });

    input.addEventListener('input', () => render(search(input.value)));

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIndex + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIndex - 1); }
      else if (e.key === 'Enter') {
        const items = list.querySelectorAll('li a');
        const target = activeIndex >= 0 ? items[activeIndex] : items[0];
        if (target) window.location.href = target.getAttribute('href');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (overlay.hidden) {
        // "/" opens search when not typing in a field.
        if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) {
          e.preventDefault();
          open();
        }
      } else if (e.key === 'Escape') {
        close();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
