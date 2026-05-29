// app.jsx — sidebar nav + page router + tweaks panel

const SCREENS = [
  { group: 'Desktop', items: [
    { id: 'home',    label: 'Home',              kbd: '1' },
    { id: 'plp',     label: 'Category / Listing',kbd: '2' },
    { id: 'pdp',     label: 'Product Detail',    kbd: '3' },
    { id: 'cart',    label: 'Cart',              kbd: '4' },
    { id: 'checkout',label: 'Checkout',          kbd: '5' },
    { id: 'order',   label: 'Order Confirmed',   kbd: '6' },
    { id: 'signin',  label: 'Sign In / Sign Up', kbd: '7' },
    { id: 'account', label: 'Account Dashboard', kbd: '8' },
    { id: 'about',   label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog',    label: 'Blog Index' },
    { id: 'blogpost',label: 'Blog Post' },
    { id: 'bigpoints', label: 'Big Points — rewards' },
  ]},
  { group: 'Mobile', items: [
    { id: 'mhome',    label: 'Home' },
    { id: 'mplp',     label: 'Category' },
    { id: 'mpdp',     label: 'Product' },
    { id: 'mcart',    label: 'Cart' },
    { id: 'mcheckout',label: 'Checkout' },
    { id: 'morder',   label: 'Order Confirmed' },
    { id: 'msignin',  label: 'Sign In / Sign Up' },
    { id: 'maccount', label: 'Account' },
    { id: 'mmenu',    label: 'Drawer Menu' },
    { id: 'mblog',    label: 'Blog' },
  ]},
];

const PAGES = {
  home:     { C: () => window.HomeDesktop,    mode: 'desktop' },
  plp:      { C: () => window.PLPDesktop,     mode: 'desktop' },
  pdp:      { C: () => window.PDPDesktop,     mode: 'desktop' },
  cart:     { C: () => window.CartDesktop,    mode: 'desktop' },
  checkout: { C: () => window.CheckoutDesktop,mode: 'desktop' },
  order:    { C: () => window.OrderConfirmDesktop, mode: 'desktop' },
  signin:   { C: () => window.SignInDesktop,  mode: 'desktop' },
  account:  { C: () => window.AccountDesktop, mode: 'desktop' },
  about:    { C: () => window.AboutDesktop,   mode: 'desktop' },
  contact:  { C: () => window.ContactDesktop, mode: 'desktop' },
  blog:     { C: () => window.BlogIndexDesktop, mode: 'desktop' },
  blogpost: { C: () => window.BlogPostDesktop, mode: 'desktop' },
  bigpoints:{ C: () => window.BigPointsDesktop, mode: 'desktop' },
  mhome:    { C: () => window.MHome,    mode: 'mobile' },
  mplp:     { C: () => window.MPLP,     mode: 'mobile' },
  mpdp:     { C: () => window.MPDP,     mode: 'mobile' },
  mcart:    { C: () => window.MCart,    mode: 'mobile' },
  mcheckout:{ C: () => window.MCheckout,mode: 'mobile' },
  morder:   { C: () => window.MOrderConfirm, mode: 'mobile' },
  msignin:  { C: () => window.MSignIn,  mode: 'mobile' },
  maccount: { C: () => window.MAccount, mode: 'mobile' },
  mmenu:    { C: () => window.MMenu,    mode: 'mobile' },
  mblog:    { C: () => window.MBlog,    mode: 'mobile' },
};

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blaze",
  "showAgeGate": false,
  "density": "comfortable",
  "headingFont": "inter"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  blaze:   { primary: '#ff5e1f', primary2: '#c2380a', secondary: '#ffc940', name: 'Blaze orange' },
  emerald: { primary: '#0e9e5a', primary2: '#076b3c', secondary: '#ffd24a', name: 'Emerald & gold' },
  cobalt:  { primary: '#2742d6', primary2: '#16278a', secondary: '#ff8770', name: 'Cobalt & coral' },
  noir:    { primary: '#0e1117', primary2: '#000000', secondary: '#ff5e1f', name: 'Noir & blaze' },
};

const HEADING_MAP = {
  inter:     { name: 'Inter Tight',          stack: "'Inter Tight','DM Sans',sans-serif" },
  bricolage: { name: 'Bricolage Grotesque',  stack: "'Bricolage Grotesque','DM Sans',sans-serif" },
  fraunces:  { name: 'Editorial Serif',      stack: "'Fraunces','DM Serif Display',serif" },
};

const App = () => {
  const [page, setPage] = React.useState('home');
  const [tweaks, setTweaks] = React.useState(DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  const current = PAGES[page];
  const mode = current?.mode || 'desktop';

  // Keyboard nav
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const allItems = SCREENS.flatMap(g => g.items);
      const found = allItems.find(it => it.kbd === e.key);
      if (found) setPage(found.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Edit mode protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') { setEditMode(true); setTweaksOpen(true); }
      if (e.data?.type === '__deactivate_edit_mode') { setEditMode(false); setTweaksOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  // Apply accent + heading font globally as CSS overrides
  const accent = ACCENT_MAP[tweaks.accent] || ACCENT_MAP.blaze;
  const heading = HEADING_MAP[tweaks.headingFont] || HEADING_MAP.inter;
  const accentCss = `
    :root {
      --violet-500: ${accent.primary};
      --violet-600: ${accent.primary};
      --violet-700: ${accent.primary2};
      --violet-800: ${accent.primary2};
      --blaze: ${accent.primary};
      --blaze-2: ${accent.primary2};
      --lime: ${accent.secondary};
    }
    .display, .h-display { font-family: ${heading.stack} !important; }
  `;

  const Page = current?.C() || (() => <div style={{ padding: 60 }}>Coming soon</div>);

  return (
    <div className="app">
      <style>{accentCss}</style>
      {tweaks.headingFont === 'fraunces' && <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&display=swap" rel="stylesheet" />}
      {tweaks.headingFont === 'spaced' && <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />}

      {/* Sidebar */}
      <aside className="rail">
        <div className="rail-head">
          <LogoMark size={36} dark />
          <div>
            <div className="rail-title">Vape Big</div>
            <div className="rail-sub">Redesign · v0.1</div>
          </div>
        </div>
        <div className="rail-blurb">
          A new look for <strong>vapebig.co.uk</strong> — confident UK retail, blaze orange + ink — distinct from <em>alectrofag</em>'s clinical teal.
        </div>
        {SCREENS.map(g => (
          <div key={g.group}>
            <div className="rail-section">{g.group}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {g.items.map(it => (
                <button key={it.id} className={'rail-btn ' + (page === it.id ? 'active' : '')} onClick={() => setPage(it.id)}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span className="dot" /> {it.label}
                  </span>
                  {it.kbd && <span className="kbd">{it.kbd}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <button onClick={() => setTweaksOpen(o => !o)} className="rail-btn" style={{ background: tweaksOpen ? 'rgba(110,60,255,.2)' : 'rgba(255,255,255,.04)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <Icon name="tune" size={14} /> Tweaks
            </span>
            <span className="kbd">⌘T</span>
          </button>
          <div className="mono" style={{ fontSize: 9.5, color: '#5d536e', marginTop: 12, padding: '0 4px', lineHeight: 1.6 }}>
            13 desktop · 10 mobile<br/>
            keys 1–9 to jump · current accent: <span style={{ color: accent.primary }}>{accent.name.toLowerCase()}</span>
          </div>
        </div>
      </aside>

      {/* Stage */}
      <main className="stage">
        <div className={'viewport ' + mode}>
          {mode === 'desktop' ? (
            <>
              <window.AnnouncementBar />
              <window.Header onNav={setPage} page={page} />
              <window.UspBar />
              <Page onNav={setPage} tweaks={tweaks} density={tweaks.density} />
              <window.Newsletter />
              <window.Footer onNav={setPage} />
            </>
          ) : (
            <Page onNav={setPage} tweaks={tweaks} density={tweaks.density} />
          )}
        </div>
      </main>

      {/* Tweaks panel */}
      <div className={'tweaks ' + (tweaksOpen ? 'open' : '')}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h3>Tweaks</h3>
          <button onClick={() => { setTweaksOpen(false); window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); }} style={{ width: 28, height: 28, borderRadius: 6, color: 'var(--ink-500)' }}><Icon name="x" size={14} /></button>
        </div>
        <div className="tweak-row">
          <span>Accent palette</span>
          <div className="swatch-row">
            {Object.entries(ACCENT_MAP).map(([k, a]) => (
              <button key={k} title={a.name} onClick={() => setTweak('accent', k)} className={tweaks.accent === k ? 'active' : ''} style={{ background: a.primary }} />
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <span>Display font</span>
          <div className="seg">
            {Object.entries(HEADING_MAP).map(([k, f]) => (
              <button key={k} className={tweaks.headingFont === k ? 'active' : ''} onClick={() => setTweak('headingFont', k)}>{k === 'inter' ? 'Inter' : k === 'bricolage' ? 'Grotesque' : 'Serif'}</button>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <span>Density</span>
          <div className="seg">
            {['compact', 'comfortable'].map(d => (
              <button key={d} className={tweaks.density === d ? 'active' : ''} onClick={() => setTweak('density', d)}>{d === 'compact' ? 'Compact' : 'Comfy'}</button>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <span>Show age-gate overlay</span>
          <div className="seg">
            {[['Off', false], ['On', true]].map(([l, v]) => (
              <button key={l} className={tweaks.showAgeGate === v ? 'active' : ''} onClick={() => setTweak('showAgeGate', v)}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 12, padding: 10, background: 'var(--paper-2)', borderRadius: 8, fontSize: 11, color: 'var(--ink-600)', lineHeight: 1.5 }}>
          Tip: press <span className="mono">1–9</span> to jump between desktop screens.
        </div>
      </div>

      {/* Age gate overlay */}
      {tweaks.showAgeGate && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(12,8,20,.85)', backdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', zIndex: 90 }}>
          <div style={{ background: '#fff', borderRadius: 18, padding: 36, maxWidth: 440, textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <LogoMark size={48} />
            <h2 className="display h-display" style={{ fontSize: 28, margin: '20px 0 8px' }}>Are you 18 or over?</h2>
            <p style={{ color: 'var(--ink-700)', fontSize: 14, lineHeight: 1.55, margin: '0 0 24px' }}>This site sells products that contain nicotine and is restricted to over-18s only.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setTweak('showAgeGate', false)} className="btn btn-ink" style={{ flex: 1, padding: '14px 18px' }}>Yes, I'm 18+</button>
              <button onClick={() => setTweak('showAgeGate', false)} className="btn btn-soft" style={{ flex: 1, padding: '14px 18px' }}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
