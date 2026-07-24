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

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.reset();
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
