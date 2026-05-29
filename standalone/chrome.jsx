// chrome.jsx — header, mobile nav, mega menu, USP, footer, newsletter

const AnnouncementBar = () => {
  const msgs = [
    { ico: 'truck', t: 'Free UK delivery over £35 · Dispatched same-day before 8pm' },
    { ico: 'fire',  t: 'Nic Salts — 5 for £10. Mix & match flavours.' },
    { ico: 'star',  t: 'Trustpilot rated Great · 3,400+ verified reviews' },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setI(x => (x + 1) % msgs.length), 4500); return () => clearInterval(id); }, []);
  return (
    <div className="promo-strip">
      <div className="pills">
        <span className="pill"><span className="ico"><Icon name="phone" size={13} /></span>03332 244263</span>
        <span className="pill"><span className="ico"><Icon name="mail" size={13} /></span>support@vapebig.co.uk</span>
      </div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => setI((i - 1 + msgs.length) % msgs.length)} style={{ color: 'rgba(255,255,255,.5)', display: 'grid', placeItems: 'center' }}><Icon name="chev-l" size={11} /></button>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="ico" style={{ color: 'var(--blaze)' }}><Icon name={msgs[i].ico} size={13} /></span>
          {msgs[i].t}
        </span>
        <button onClick={() => setI((i + 1) % msgs.length)} style={{ color: 'rgba(255,255,255,.5)', display: 'grid', placeItems: 'center' }}><Icon name="chev" size={11} /></button>
      </div>
      <div className="pills">
        <a className="pill">Contact us</a>
      </div>
    </div>
  );
};

const UspBar = () => (
  <div style={{ background: 'var(--paper-2)', color: 'var(--ink-800)', fontSize: 12.5, padding: '11px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, borderBottom: '1px solid var(--paper-3)' }}>
    {[
      ['truck', 'Free delivery over £35'],
      ['bolt', 'Same-day dispatch by 8pm'],
      ['shield', 'TPD-compliant · 100% authentic'],
      ['star', '4.6 on Trustpilot · 3,400+ reviews'],
    ].map(([ic, t]) => (
      <span key={t} style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontWeight: 500 }}>
        <span style={{ color: 'var(--blaze)' }}><Icon name={ic} size={14} /></span> {t}
      </span>
    ))}
  </div>
);

const Header = ({ onNav, page }) => {
  const tabs = [
    { l: 'Vape Kits', caret: true },
    { l: 'Big Puff Vapes', caret: true },
    { l: 'Pre-Filled Pods', caret: true },
    { l: 'E-Liquids', caret: true },
    { l: 'Nic Salts' },
    { l: 'Coils' },
    { l: 'Pouches' },
    { l: 'All Brands', caret: true, action: 'plp' },
  ];
  return (
    <>
      <div className="header">
        <a onClick={() => onNav?.('home')} className="logo-row">
          <LogoMark size={42} mono />
          <Wordmark light size={22} />
        </a>
        <div className="h-search">
          <Icon name="search" size={16} />
          <input placeholder="Search 7,000+ vapes, kits, e-liquids…" />
          <button className="h-search-btn">Search</button>
        </div>
        <div className="h-actions">
          <button className="h-action" onClick={() => onNav?.('account')}>
            <Icon name="user" size={18} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
              <span style={{ fontSize: 10.5, opacity: .7, fontFamily: 'JetBrains Mono', letterSpacing: '.08em', textTransform: 'uppercase' }}>Sign in</span>
              <span>Account</span>
            </span>
          </button>
          <button className="h-action" onClick={() => onNav?.('account')}>
            <Icon name="heart" size={18} />
            <span className="badge" style={{ top: 4, right: 4, background: 'transparent', color: '#0e1117', minWidth: 'auto', height: 'auto', padding: 0, fontSize: 10 }}>2</span>
          </button>
          <button className="h-action" onClick={() => onNav?.('cart')} style={{ background: 'var(--blaze)', color: '#fff', borderRadius: 8, padding: '11px 16px' }}>
            <Icon name="bag" size={18} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
              <span style={{ fontSize: 10.5, opacity: .85, fontFamily: 'JetBrains Mono', letterSpacing: '.08em', textTransform: 'uppercase' }}>Cart · 3</span>
              <span style={{ fontWeight: 700 }}>£50.43</span>
            </span>
          </button>
        </div>
      </div>
      <nav className="nav-row">
        <div className="nav-items">
          {tabs.map(t => (
            <a key={t.l} className="nav-item" onClick={() => t.action && onNav?.(t.action)}>
              {t.l} {t.caret && <Icon name="chev-d" size={11} />}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <a className="nav-item is-sale"><Icon name="fire" size={13} /> Sale</a>
          <a className="nav-item is-new">New In</a>
          <a className="nav-item">Multibuy</a>
        </div>
      </nav>
    </>
  );
};

// Mobile header for mobile-prefixed pages
const MobileHeader = ({ onNav, title, back }) => {
  const announcements = [
    'Use code WELCOME10 for 10% off your first order',
    'New Hayati flavours now available — shop the latest drop',
    'Nic Salts · Mix & match 5 for £10',
    'Trustpilot rated Great · 3,400+ verified reviews',
    'Free UK delivery on every order over £35',
  ];
  const usps = [
    { i: 'truck',  t: 'Free UK delivery over £35' },
    { i: 'bolt',   t: 'Same-day dispatch by 8pm' },
    { i: 'shield', t: '100% authentic · TPD-compliant' },
    { i: 'rotate', t: '14-day no-quibble returns' },
  ];
  const [mi, setMi] = React.useState(0);
  const [ui, setUi] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setMi(x => (x + 1) % announcements.length), 6000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    // Offset the USP rotation by 3s so the two strips don't change in sync
    const offset = setTimeout(() => {
      setUi(x => (x + 1) % usps.length);
      const id = setInterval(() => setUi(x => (x + 1) % usps.length), 6000);
      offset.id = id;
    }, 3000);
    return () => { clearTimeout(offset); if (offset.id) clearInterval(offset.id); };
  }, []);
  return (
  <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', position: 'sticky', top: 0, zIndex: 30 }}>
    {/* Announcement strip — rotating marketing messages */}
    <div style={{ background: 'var(--ink-950)', color: '#f0ebe1', padding: '8px 14px', fontSize: 11.5, fontFamily: 'Inter Tight', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, height: 30, overflow: 'hidden' }}>
      <span style={{ color: 'var(--blaze)', display: 'inline-flex', flexShrink: 0 }}><Icon name="spark" size={12} /></span>
      <span key={mi} style={{ textAlign: 'center', animation: 'mob-fade .35s ease', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{announcements[mi]}</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: 8, alignItems: 'center', padding: '10px 14px 0' }}>
      <button onClick={() => onNav?.('mmenu')} style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: 10, background: 'var(--paper-2)' }}><Icon name="menu" size={18} /></button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
        <LogoMark size={28} /><Wordmark size={18} />
      </div>
      <button onClick={() => onNav?.('maccount')} style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: 10, background: 'var(--paper-2)' }}><Icon name="user" size={18} /></button>
      <button onClick={() => onNav?.('mcart')} style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: 10, background: 'var(--ink-950)', color: '#fff', position: 'relative' }}>
        <Icon name="bag" size={17} />
        <span style={{ position: 'absolute', top: -4, right: -4, background: 'var(--lime)', color: 'var(--ink-950)', borderRadius: 999, minWidth: 16, height: 16, display: 'grid', placeItems: 'center', fontSize: 9.5, fontWeight: 700, padding: '0 4px' }}>3</span>
      </button>
    </div>
    {/* Search + checkout */}
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '10px 14px 10px' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'var(--paper-2)', borderRadius: 999, padding: '0 14px' }}>
        <Icon name="search" size={15} stroke={2} />
        <input placeholder="Search for items…" style={{ border: 0, background: 'transparent', outline: 0, fontSize: 13.5, color: 'var(--ink-900)', padding: '10px 0', width: '100%', fontFamily: 'inherit' }} />
      </div>
      <button onClick={() => onNav?.('mcheckout')} className="btn" style={{ padding: '0 16px', height: 38, borderRadius: 999, fontSize: 13, fontWeight: 700, background: 'var(--blaze)', color: '#fff', whiteSpace: 'nowrap' }}>Checkout</button>
    </div>
    {/* USP strip — dark band, one rotating item with dot indicators */}
    <div style={{ background: 'var(--ink-900)', color: '#fff', padding: '12px 14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, borderTop: '1px solid #000' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, minHeight: 22 }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(255,255,255,.06)', color: 'var(--lime)', display: 'inline-grid', placeItems: 'center', flexShrink: 0 }}>
          <Icon name={usps[ui].i} size={14} stroke={2.2} />
        </span>
        <span key={ui} style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.02em', textTransform: 'uppercase', fontFamily: 'Inter Tight', animation: 'mob-fade .35s ease' }}>
          {usps[ui].t}
        </span>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {usps.map((_, i) => (
          <button key={i} onClick={() => setUi(i)} style={{ width: i === ui ? 22 : 7, height: 7, borderRadius: 99, background: i === ui ? 'var(--lime)' : 'rgba(255,255,255,.2)', transition: 'all .2s', padding: 0 }} />
        ))}
      </div>
    </div>
  </div>
  );
};

const MobileTabBar = ({ onNav, active = 'mhome' }) => {
  const items = [
    { k: 'mhome', i: 'cloud', l: 'Home' },
    { k: 'mplp', i: 'tune', l: 'Shop' },
    { k: 'mblog', i: 'star', l: 'Top' },
    { k: 'maccount', i: 'user', l: 'Account' },
    { k: 'mcart', i: 'bag', l: 'Cart' },
  ];
  return (
    <div style={{ position: 'sticky', bottom: 0, background: 'var(--ink-950)', color: '#fff', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', padding: '8px 4px 12px', borderTop: '1px solid #000', zIndex: 30 }}>
      {items.map(it => (
        <button key={it.k} onClick={() => onNav?.(it.k)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 0', color: active === it.k ? 'var(--lime)' : '#a89cb8', fontSize: 10.5, fontWeight: 600 }}>
          <Icon name={it.i} size={20} />
          {it.l}
        </button>
      ))}
    </div>
  );
};

const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return (
    <section style={{ background: 'var(--ink-950)', color: '#fff', padding: '64px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--lime)' }}>Big news, every Friday</span>
          <h2 className="display h-display" style={{ fontSize: 52, margin: '14px 0 16px', color: '#fff', maxWidth: 520 }}>Save 10% on your first order.</h2>
          <p style={{ color: '#b9b0c8', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: 0 }}>Sign up and we'll text your discount code straight away — plus first dibs on new launches, restocks, and members-only multibuy bundles.</p>
          <div style={{ display: 'flex', gap: 18, marginTop: 22, fontSize: 12.5, color: '#a89cb8', flexWrap: 'wrap' }}>
            {['First-order discount', 'Members-only bundles', 'Unsubscribe anytime'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--lime)' }}><Icon name="check" size={14} /></span>{t}</span>
            ))}
          </div>
        </div>
        <form onSubmit={e => { e.preventDefault(); if (/.+@.+\..+/.test(email)) setDone(true); }} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: 24 }}>
          {done ? (
            <div style={{ textAlign: 'center', padding: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--lime)', color: 'var(--ink-950)', display: 'grid', placeItems: 'center', margin: '0 auto 12px' }}><Icon name="check" size={26} stroke={2.4} /></div>
              <div className="display" style={{ fontSize: 22, fontWeight: 700 }}>Code on its way.</div>
              <div style={{ color: '#b9b0c8', fontSize: 13.5, marginTop: 6 }}>Check {email} — 10% off applied automatically at checkout.</div>
            </div>
          ) : (
            <>
              <label className="mono" style={{ fontSize: 11, color: 'var(--violet-200)', letterSpacing: '.12em', textTransform: 'uppercase' }}>Email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com" style={{ width: '100%', marginTop: 8, padding: '14px 16px', borderRadius: 10, background: '#fff', color: 'var(--ink-950)', fontSize: 15, border: 0 }} />
              <button type="submit" className="btn btn-lime" style={{ width: '100%', marginTop: 12, padding: 16, fontSize: 14, borderRadius: 10 }}>Reveal my 10% code <Icon name="arrow-r" size={16} /></button>
              <div style={{ fontSize: 11, color: '#7c7090', marginTop: 12, lineHeight: 1.6, textAlign: 'center' }}>By subscribing you confirm you're 18+. We'll never share your details.</div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = ({ onNav }) => (
  <footer style={{ background: 'var(--ink-950)', color: '#a89cb8', padding: '64px 32px 28px', borderTop: '1px solid #000' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 48 }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}><LogoMark size={42} /><Wordmark light size={24} /></div>
        <p style={{ marginTop: 18, fontSize: 13.2, lineHeight: 1.7, color: '#968aad', maxWidth: 320 }}>The UK's online vape shop, dispatching 7,000+ products from our Kington warehouse six days a week. TPD-compliant. Authentic only.</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          {['facebook', 'instagram', 'tiktok', 'twitter'].map(s => (
            <a key={s} style={{ width: 36, height: 36, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.06)', borderRadius: 10, color: '#cfc6dd' }}><Icon name={s} size={15} /></a>
          ))}
        </div>
      </div>
      {[
        { h: 'Shop', items: ['Vape Kits', 'Big Puff Vapes', 'Pre-Filled Pods', 'E-Liquids', 'Nic Salts', 'Coils', 'Nicotine Pouches', 'Clearance'] },
        { h: 'Help', items: ['Contact Us', 'Delivery Info', 'Returns Policy', 'Order Tracking', 'Vape Tax UK', 'FAQs'] },
        { h: 'Company', items: ['About Us', 'Blog', 'Vape Reviews', 'Vaping Guides', 'Buying for Business'] },
        { h: 'Legal', items: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Age Verification', 'Modern Slavery'] },
      ].map(col => (
        <div key={col.h}>
          <h4 className="mono" style={{ color: '#fff', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', margin: '0 0 16px', fontWeight: 500 }}>{col.h}</h4>
          {col.items.map(t => <a key={t} onClick={() => t === 'About Us' ? onNav?.('about') : t === 'Contact Us' ? onNav?.('contact') : t === 'Blog' ? onNav?.('blog') : null} style={{ display: 'block', fontSize: 13.2, padding: '5px 0', color: '#a89cb8', cursor: 'pointer' }}>{t}</a>)}
        </div>
      ))}
    </div>
    <div style={{ maxWidth: 1280, margin: '40px auto 0', padding: '24px 0 0', borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {['VISA', 'MC', 'AMEX', 'PAY', 'KLR'].map(p => (
          <div key={p} style={{ background: '#fff', color: '#14101e', borderRadius: 6, padding: '5px 9px', fontSize: 10, fontWeight: 800, letterSpacing: '.06em' }}>{p}</div>
        ))}
        <span style={{ marginLeft: 14, fontSize: 12, color: '#7c7090' }}>Secure checkout · SSL encrypted</span>
      </div>
      <div style={{ fontSize: 12, color: '#7c7090', textAlign: 'right' }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>Quick Vapes Limited</span> · 61 Bridge Street, Kington, HR5 3DJ · 03332 244263
      </div>
    </div>
    <div style={{ maxWidth: 1280, margin: '24px auto 0', padding: '20px 22px', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, fontSize: 11.5, color: '#7c7090', lineHeight: 1.7 }}>
      <strong style={{ color: '#cfc6dd' }}>Warning:</strong> This product contains nicotine, which is a highly addictive substance. Sale to under 18s prohibited. Not suitable for non-smokers, pregnant or breastfeeding women, or persons with heart conditions. Keep out of reach of children. © 2026 Vape Big · All rights reserved.
    </div>
  </footer>
);

Object.assign(window, { AnnouncementBar, UspBar, Header, MobileHeader, MobileTabBar, Newsletter, Footer });
