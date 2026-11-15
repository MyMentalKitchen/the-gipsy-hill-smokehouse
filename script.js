// Mobile nav toggle + dropdown handling
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Mobile: tap parent label to expand its submenu
  document.querySelectorAll('.main-nav .has-sub > a').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 860px)').matches) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });
})();

// Google Ads conversion tracking
// Account tag: AW-355858447 (base tag lives in each page's <head>)
const GHS_ADS = {
  quote: 'AW-355858447/3DkiCMm_mswZEI_w16kB', // "Get a Quote" - enquiry form submitted successfully
  phone: 'AW-355858447/d064CL2S-LQdEI_w16kB'  // "Phone click (website)" - tel: link tapped
};

function ghsTrack(sendTo) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: sendTo });
  }
}

// Google Analytics 4 events (G-QC3BZG396T, config in each page's <head>).
// Consent Mode in the <head> and cookie-consent.js decides what Google may store.
// Never send a visitor's name, email, phone or message to GA.
function ghsGA(name, params) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

// event_type is a free-text box on some forms, so it is trimmed, shortened,
// and dropped if it looks like an email address or a phone number.
function ghsEventType(fd) {
  let v = String(fd.get('event_type') || '').trim().replace(/\s+/g, ' ').slice(0, 40);
  if (!v) return 'not given';
  if (/@/.test(v) || /\d[\d\s()+-]{5,}\d/.test(v)) return 'other';
  return v;
}

// Phone number clicks -> Ads conversion + GA4 phone_click
(function () {
  document.querySelectorAll('a[href^="tel:"]').forEach((a) => {
    a.addEventListener('click', () => {
      ghsTrack(GHS_ADS.phone);
      ghsGA('phone_click', { link_url: a.getAttribute('href') });
    });
  });
})();

// Email link clicks -> GA4 email_click
(function () {
  document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
    a.addEventListener('click', () => {
      ghsGA('email_click', { link_url: a.getAttribute('href') });
    });
  });
})();

// Enquiry forms -> Formspree (AJAX so the visitor stays on the page)
(function () {
  const forms = document.querySelectorAll('form[action*="formspree.io"]');
  forms.forEach((form) => {
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (status) { status.textContent = ''; status.className = 'form-status'; }

      const fd = new FormData(form);
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: fd,
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.reset();
          ghsTrack(GHS_ADS.quote); // only fires once Formspree confirms the enquiry landed
          ghsGA('generate_lead', { event_type: ghsEventType(fd), form_id: 'enquiry-form' });
          if (status) {
            status.textContent = "Thanks — your message is on its way. We'll be in touch shortly.";
            status.classList.add('ok');
          }
        } else {
          const data = await res.json().catch(() => ({}));
          const msg = (data.errors && data.errors.map((x) => x.message).join(', '))
            || 'Sorry, something went wrong. Please call 07944 390 309.';
          if (status) { status.textContent = msg; status.classList.add('error'); }
        }
      } catch (err) {
        if (status) {
          status.textContent = 'Network problem — please call 07944 390 309 or email us directly.';
          status.classList.add('error');
        }
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = label; }
      }
    });
  });
})();
