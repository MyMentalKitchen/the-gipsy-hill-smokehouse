// GHS cookie consent banner
// Works with the Consent Mode v2 block in each page's <head>.
// Shows the consent bar on first visit, remembers the choice,
// and tells Google whether analytics and ad cookies may be used.
// Stored choice (ghs_cc_v2): granted (both) | analytics | ads | denied.
// New key on 9 Nov 2026: anyone who answered before Google Analytics was added is asked again.
// Any element with data-cookie-settings (e.g. the footer link) reopens it.
(function () {
  var KEY = 'ghs_cc_v2';
  var VALUES = ['granted', 'analytics', 'ads', 'denied'];
  function hasAnalytics(v) { return v === 'granted' || v === 'analytics'; }
  function hasAds(v) { return v === 'granted' || v === 'ads'; }
  var PRIVACY_URL = '/privacy-policy';

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function apply(v) {
    if (typeof window.gtag !== 'function') return;
    var ad = hasAds(v) ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      ad_storage: ad,
      ad_user_data: ad,
      ad_personalization: ad,
      analytics_storage: hasAnalytics(v) ? 'granted' : 'denied'
    });
  }

  var css =
    '.ghs-cc{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#fff;color:#1a1a1a;' +
    'border-top:1px solid #d9d9d9;box-shadow:0 -2px 12px rgba(0,0,0,.08);font:inherit;font-size:15px;line-height:1.5}' +
    '.ghs-cc__in{max-width:760px;margin:0 auto;padding:22px 20px 24px}' +
    '.ghs-cc h2{font:inherit;font-size:17px;font-weight:700;margin:0 0 6px;color:#1a1a1a;letter-spacing:0}' +
    '.ghs-cc p{margin:0}' +
    '.ghs-cc a{color:inherit;text-decoration:underline}' +
    '.ghs-cc__row{display:flex;gap:16px;align-items:center;margin-top:18px}' +
    '.ghs-cc__manage{flex:1 1 0;background:none;border:0;padding:10px 0;font:inherit;font-size:15px;color:#1a1a1a;' +
    'text-decoration:underline;cursor:pointer;text-align:center}' +
    '.ghs-cc__btn{flex:1 1 0;background:#fff;color:#1a1a1a;border:1px solid #1a1a1a;border-radius:2px;padding:10px 16px;' +
    'font:inherit;font-size:15px;cursor:pointer}' +
    '.ghs-cc__btn:hover{background:#f3f3f3}' +
    '.ghs-cc button:focus-visible{outline:2px solid #1a1a1a;outline-offset:2px}' +
    '.ghs-cc__prefs{border-top:1px solid #e5e5e5;margin-top:16px;padding-top:6px}' +
    '.ghs-cc__pref{display:flex;gap:16px;align-items:flex-start;justify-content:space-between;padding:12px 0;border-bottom:1px solid #eee}' +
    '.ghs-cc__pref strong{display:block;font-weight:700}' +
    '.ghs-cc__pref span{color:#555;font-size:14px}' +
    '.ghs-cc__pref input{width:20px;height:20px;margin-top:3px;flex:0 0 auto;accent-color:#1a1a1a}' +
    '.ghs-cc__always{font-size:14px;color:#555;white-space:nowrap;margin-top:2px}' +
    '.ghs-cc__short{display:none}' +
    // Phones: short text, Accept + Decline on one row, "Manage preferences" as a small link under them
    '@media (max-width:599px){.ghs-cc{font-size:14px;line-height:1.4}.ghs-cc__in{padding:12px 16px calc(10px + env(safe-area-inset-bottom))}' +
    '.ghs-cc h2,.ghs-cc__long{display:none}.ghs-cc__short{display:block}' +
    '.ghs-cc__row{flex-wrap:wrap;gap:8px 10px;margin-top:10px}.ghs-cc__btn{flex:1 1 40%;padding:9px 12px;font-size:15px}' +
    '.ghs-cc__manage{order:3;flex:1 1 100%;padding:2px 0;font-size:13px;color:#555}' +
    '.ghs-cc__prefs{max-height:50vh;overflow-y:auto}}';

  function addStyles() {
    if (document.getElementById('ghs-cc-style')) return;
    var st = document.createElement('style');
    st.id = 'ghs-cc-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  function hide() {
    var el = document.getElementById('ghs-cc');
    if (el) el.parentNode.removeChild(el);
    document.documentElement.classList.remove('ghs-cc-open');
  }

  function choose(v) {
    save(v);
    apply(v);
    hide();
  }

  function prefsPanel(bar) {
    var box = bar.querySelector('.ghs-cc__prefs');
    if (box) { box.hidden = !box.hidden; return; }
    var current = read();
    box = document.createElement('div');
    box.className = 'ghs-cc__prefs';
    box.innerHTML =
      '<div class="ghs-cc__pref"><div><strong>Necessary</strong>' +
      '<span>Keeps the website working and remembers your cookie choice.</span></div>' +
      '<div class="ghs-cc__always">Always on</div></div>' +
      '<label class="ghs-cc__pref" for="ghs-cc-analytics"><div><strong>Analytics</strong>' +
      '<span>Lets Google Analytics count visits and show us which pages people read. We see totals, not who you are.</span></div>' +
      '<input type="checkbox" id="ghs-cc-analytics"' + (hasAnalytics(current) ? ' checked' : '') + '></label>' +
      '<label class="ghs-cc__pref" for="ghs-cc-ads"><div><strong>Advertising</strong>' +
      '<span>Lets Google tell us which of our ads bring in enquiries.</span></div>' +
      '<input type="checkbox" id="ghs-cc-ads"' + (hasAds(current) ? ' checked' : '') + '></label>' +
      '<div class="ghs-cc__row"><button type="button" class="ghs-cc__btn ghs-cc__save">Save preferences</button></div>';
    box.querySelector('.ghs-cc__save').addEventListener('click', function () {
      var an = box.querySelector('#ghs-cc-analytics').checked;
      var ad = box.querySelector('#ghs-cc-ads').checked;
      choose(an && ad ? 'granted' : an ? 'analytics' : ad ? 'ads' : 'denied');
    });
    bar.querySelector('.ghs-cc__in').insertBefore(box, bar.querySelector('.ghs-cc__row'));
  }

  function show() {
    if (document.getElementById('ghs-cc')) return;
    addStyles();
    var bar = document.createElement('div');
    bar.id = 'ghs-cc';
    bar.className = 'ghs-cc';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-labelledby', 'ghs-cc-title');

    bar.innerHTML =
      '<div class="ghs-cc__in">' +
      '<h2 id="ghs-cc-title">Cookie consent</h2>' +
      '<p class="ghs-cc__long">We use cookies to give you the best experience on our website. Click on manage preferences if you wish ' +
      'to see more and make changes. We only use cookies if you accept them. Learn more in our ' +
      '<a href="' + PRIVACY_URL + '">Privacy Policy</a></p>' +
      '<p class="ghs-cc__short">We\'d like to use cookies to count visits and see which of our ads bring in enquiries. ' +
      '<a href="' + PRIVACY_URL + '">Privacy Policy</a></p>' +
      '<div class="ghs-cc__row">' +
      '<button type="button" class="ghs-cc__manage">Manage preferences</button>' +
      '<button type="button" class="ghs-cc__btn ghs-cc__accept">Accept</button>' +
      '<button type="button" class="ghs-cc__btn ghs-cc__reject">Decline</button>' +
      '</div></div>';

    bar.querySelector('.ghs-cc__manage').addEventListener('click', function () { prefsPanel(bar); });
    bar.querySelector('.ghs-cc__accept').addEventListener('click', function () { choose('granted'); });
    bar.querySelector('.ghs-cc__reject').addEventListener('click', function () { choose('denied'); });
    document.body.appendChild(bar);
    // Lets pages hide anything fixed to the bottom (e.g. the ad page's Call/Enquire bar) while the banner is up
    document.documentElement.classList.add('ghs-cc-open');
  }

  // "Cookie settings" links anywhere on the page reopen the banner
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (t) { e.preventDefault(); show(); }
  });
  window.ghsCookieSettings = show;

  function init() {
    var v = read();
    if (VALUES.indexOf(v) === -1) show();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
