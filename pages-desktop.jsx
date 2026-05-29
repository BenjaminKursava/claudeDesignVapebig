// pages-desktop.jsx — Home, PLP, PDP, Brand, Cart, Checkout, Order, SignIn, Account, About, Contact, Blog, BlogPost

// SEO body-copy inline link — preserves the real href for dev handoff, navigates in prototype.
const SEOLink = ({ href, onNav, children }) => (
  <a
    href={href}
    onClick={(e) => { e.preventDefault(); onNav?.('plp'); }}
    style={{ color: 'var(--blaze-2)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--blaze)' }}
  >{children}</a>
);

// Collapsible SEO accordion item — CSS-only (checkbox-hack), works without JS.
// All copy lives in the static DOM so crawlers see it.
const ProductAccordion = ({ id, title, defaultOpen = false, children }) => (
  <div className="seo-acc">
    <input type="checkbox" id={`seo-acc-${id}`} className="seo-acc__cb" defaultChecked={defaultOpen} />
    <label htmlFor={`seo-acc-${id}`} className="seo-acc__hd">
      <h3 className="seo-acc__title">{title}</h3>
      <span className="seo-acc__chev"><Icon name="chev-d" size={15} stroke={2.2} /></span>
    </label>
    <div className="seo-acc__body">
      <div>{children}</div>
    </div>
  </div>
);

const StarRow = ({ value = 0, size = 13, color = 'var(--violet-600)' }) => (
  <span style={{ display: 'inline-flex', gap: 1, color }}>
    {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ opacity: i <= Math.round(value) ? 1 : .25 }}><Icon name="star" size={size} /></span>)}
  </span>
);

const PriceTag = ({ price, was, big = false }) => (
  <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8 }}>
    <span className="display" style={{ fontWeight: 700, fontSize: big ? 26 : 18, color: 'var(--ink-950)', letterSpacing: '-.02em' }}>£{price.toFixed(2)}</span>
    {was && <span style={{ fontSize: big ? 14 : 12, color: 'var(--ink-400)', textDecoration: 'line-through' }}>£{was.toFixed(2)}</span>}
    {was && <span className="chip chip-coral" style={{ fontSize: big ? 11 : 10 }}>–{Math.round((1 - price / was) * 100)}%</span>}
  </div>
);

const ProductCard = ({ p, layout = 'A' }) => {
  const [qbOpen, setQbOpen] = React.useState(false);
  const [qbFlavour, setQbFlavour] = React.useState('');
  const [qbQty, setQbQty] = React.useState(1);
  const flavourList = (p.flavours || '').split(',').map(s => s.trim()).filter(Boolean);
  const needsFlavour = flavourList.length > 0;
  const canAdd = !needsFlavour || !!qbFlavour;
  if (layout === 'B') {
    // horizontal compact
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 14, padding: 14, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14 }}>
        <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 10, overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
          {p.img ? <img src={p.img} alt={p.name} style={{ width: '90%', height: '90%', objectFit: 'contain' }}/> : <div className="stripe-placeholder" style={{ width: '100%', height: '100%' }}>{p.brand}</div>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--violet-700)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{p.brand}</div>
          <div className="display" style={{ fontWeight: 600, fontSize: 14.5, lineHeight: 1.25 }}>{p.name}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{p.puffs && `${p.puffs} puffs · `}{p.strength}</div>
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <PriceTag price={p.price} was={p.was} />
            <button className="btn btn-ink" style={{ padding: '8px 12px', borderRadius: 8, fontSize: 12 }}>Add</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 16, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'transform .15s, box-shadow .15s' }}>
      {p.tag && <span className="chip" style={{ position: 'absolute', top: 14, left: 14, background: p.tag === 'Bestseller' ? 'var(--lime)' : p.tag === 'New' ? 'var(--violet-500)' : p.tag === 'Hot' ? 'var(--coral)' : 'var(--ink-900)', color: ['Bestseller'].includes(p.tag) ? 'var(--ink-950)' : '#fff', fontSize: 10, zIndex: 2 }}>{p.tag}</span>}
      <button style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 999, background: 'var(--paper-2)', display: 'grid', placeItems: 'center', color: 'var(--ink-700)', zIndex: 2 }}><Icon name="heart" size={15} /></button>

      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 12, overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
          {p.img ? <img src={p.img} alt={p.name} style={{ width: '85%', height: '85%', objectFit: 'contain' }} /> : <div className="stripe-placeholder" style={{ width: '70%', height: '70%' }}>{p.brand}</div>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, minHeight: 22 }}>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--violet-700)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{p.brand}</div>
          {p.multibuy && <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 10px', background: 'var(--blaze)', color: '#fff', borderRadius: 6, fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono', letterSpacing: '.04em', whiteSpace: 'nowrap' }}><Icon name="tag" size={12} stroke={2} /> {p.multibuy}</div>}
        </div>

        <div className="display" style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.25, minHeight: 38 }}>{p.name}</div>

        {p.rating && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--ink-600)' }}>
            <StarRow value={p.rating} size={11} />
            <span>{p.rating} <span style={{ color: 'var(--ink-400)' }}>({p.reviews})</span></span>
          </div>
        )}

        <PriceTag price={p.price} was={p.was} />
      </div>

      {/* Spec strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--paper-3)', borderBottom: '1px solid var(--paper-3)', fontSize: 12.5, color: 'var(--ink-800)', fontWeight: 500 }}>
        <div style={{ padding: '9px 12px', textAlign: 'center', borderRight: '1px solid var(--paper-3)' }}>{p.cap || '2ml'}</div>
        <div style={{ padding: '9px 12px', textAlign: 'center' }}>{p.cap === 'Refillable' ? 'Refillable' : (p.strength || '20mg')}</div>
      </div>

      {/* Description */}
      {p.desc && (
        <div style={{ padding: '12px 14px 14px', fontSize: 12.5, color: 'var(--ink-600)', lineHeight: 1.5, minHeight: 64 }}>
          {p.desc}
        </div>
      )}

      {/* Quick Buy */}
      <button onClick={(e) => { e.stopPropagation(); setQbOpen(true); }} className="btn btn-ink" style={{ borderRadius: 0, padding: '13px 14px', fontSize: 13.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 'auto' }}>
        Quick Buy <Icon name="bag" size={14} />
      </button>

      {/* Quick Buy Modal */}
      {qbOpen && (
        <div
          onClick={(e) => { e.stopPropagation(); setQbOpen(false); }}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(12,8,20,.55)',
            backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center',
            zIndex: 100, padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 14, width: '100%', maxWidth: 720,
              boxShadow: '0 40px 100px -30px rgba(20,16,30,.5)',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              fontFamily: "'Inter Tight','DM Sans',sans-serif",
            }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 22px 0' }}>
              <a style={{ fontSize: 13.5, color: '#2563d6', fontWeight: 500, cursor: 'pointer' }}>View full details</a>
              <button onClick={() => setQbOpen(false)} style={{ width: 32, height: 32, color: 'var(--ink-500)', display: 'grid', placeItems: 'center' }}>
                <Icon name="x" size={18} />
              </button>
            </div>

            {/* Product row */}
            <div style={{ padding: '14px 22px 22px', display: 'flex', gap: 18, alignItems: 'center' }}>
              <div style={{ width: 92, height: 92, flexShrink: 0, background: 'var(--paper-2)', borderRadius: 10, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                {p.img ? <img src={p.img} alt={p.name} style={{ width: '90%', height: '90%', objectFit: 'contain' }} /> : <div className="stripe-placeholder" style={{ width: '85%', height: '85%', fontSize: 9 }}>{p.brand}</div>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="display" style={{ fontWeight: 700, fontSize: 18.5, color: 'var(--ink-950)', lineHeight: 1.25, letterSpacing: '-.01em' }}>{p.name}</div>
                {p.rating && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, fontSize: 13, color: 'var(--ink-600)' }}>
                    <StarRow value={p.rating} size={13} color="#2563d6" />
                    <span style={{ color: 'var(--ink-500)' }}>({p.reviews})</span>
                  </div>
                )}
              </div>
            </div>

            {/* Flavour select */}
            {needsFlavour && (
              <div style={{ padding: '0 22px 22px', borderTop: '1px solid var(--paper-2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 18, marginBottom: 10 }}>
                  <label className="display" style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink-950)' }}>Flavour</label>
                  <span style={{ fontSize: 12.5, color: '#c63e3e', fontWeight: 500 }}>Required</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <select
                    value={qbFlavour}
                    onChange={(e) => setQbFlavour(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 44px 14px 16px',
                      borderRadius: 8, border: '1.5px solid var(--ink-200)', background: '#fff',
                      fontSize: 14, color: qbFlavour ? 'var(--ink-900)' : 'var(--ink-500)',
                      appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                      cursor: 'pointer', fontFamily: 'inherit', outline: 'none',
                    }}
                  >
                    <option value="">Choose an option…</option>
                    {flavourList.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                  <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-500)', display: 'inline-flex' }}>
                    <Icon name="chev-d" size={16} />
                  </span>
                </div>
              </div>
            )}

            {/* Qty + price */}
            <div style={{ padding: '0 22px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: needsFlavour ? 'none' : '1px solid var(--paper-2)', paddingTop: needsFlavour ? 0 : 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--ink-200)', borderRadius: 8, overflow: 'hidden' }}>
                <button onClick={() => setQbQty(Math.max(1, qbQty - 1))} style={{ padding: '0 14px', height: 44 }}><Icon name="minus" size={14} /></button>
                <span className="display" style={{ minWidth: 44, textAlign: 'center', fontWeight: 700, fontSize: 15, padding: '0 4px', background: 'var(--paper-2)', height: 44, lineHeight: '44px' }}>{qbQty}</span>
                <button onClick={() => setQbQty(qbQty + 1)} style={{ padding: '0 14px', height: 44 }}><Icon name="plus" size={14} /></button>
              </div>
              <div className="display" style={{ fontWeight: 700, fontSize: 26, color: 'var(--ink-950)', letterSpacing: '-.02em' }}>£{(p.price * qbQty).toFixed(2)}</div>
            </div>

            {/* Actions */}
            <div style={{ padding: '0 22px 22px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 12 }}>
              <button
                onClick={() => setQbOpen(false)}
                className="btn"
                style={{ padding: '14px 18px', borderRadius: 8, fontSize: 14.5, fontWeight: 600, background: '#fff', color: 'var(--ink-900)', border: '1.5px solid var(--ink-200)' }}
              >Cancel</button>
              <button
                disabled={!canAdd}
                onClick={() => setQbOpen(false)}
                className="btn"
                style={{ padding: '14px 18px', borderRadius: 8, fontSize: 14.5, fontWeight: 700, background: canAdd ? 'var(--ink-950)' : 'var(--ink-300)', color: '#fff', cursor: canAdd ? 'pointer' : 'not-allowed' }}
              >Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// =========================================================
// HOME
// =========================================================
const HomeDesktop = ({ onNav }) => {
  const banners = [
    { eyebrow: 'New arrival', title: 'Hayati Pro Ultra Plus 25K', sub: '25,000 puffs · 6 flavour modes · in stock now', cta: 'Shop Hayati', img: 'assets/hero-hayati-promax.webp', bg: 'linear-gradient(120deg, #1a1320 0%, #c2380a 60%, #ff5e1f 100%)', accent: '#ffc940' },
    { eyebrow: 'Multibuy mix & match', title: 'Nic Salts — 5 for £10', sub: '900+ flavours from Dojo, Bar Juice, Lost Mary & more', cta: 'Build your bundle', bg: 'linear-gradient(120deg, #0e1117 0%, #16278a 100%)', accent: '#ff8770' },
    { eyebrow: 'Clearance', title: 'Up to 70% off vape kits', sub: 'Limited stock · ends Sunday', cta: 'Shop sale', bg: 'linear-gradient(120deg, #5c1804 0%, #ff5e1f 100%)', accent: '#ffc940' },
  ];
  const [bi, setBi] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setBi(x => (x + 1) % banners.length), 6000); return () => clearInterval(id); }, []);
  const b = banners[bi];
  return (
    <div data-screen-label="01 Home — desktop">
      {/* HERO — full-bleed banner image carousel (replace src with real banner art) */}
      <section style={{ background: 'var(--ink-100)', padding: '20px 22px 8px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '1320 / 440', background: b.bg, transition: 'background .4s ease' }}>
            {b.img ? (
              <img src={b.img} alt={b.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ position: 'absolute', inset: 24, borderRadius: 12, border: '1.5px dashed rgba(255,255,255,.28)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: b.accent, fontWeight: 700 }}>Banner {bi + 1} of {banners.length} · {b.eyebrow}</span>
                  <span className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)' }}>1320 × 440</span>
                </div>
                <div style={{ flex: 1, display: 'grid', placeItems: 'center', textAlign: 'center', padding: '0 32px' }}>
                  <div>
                    <div className="display h-display" style={{ fontSize: 40, fontWeight: 800, color: '#fff', letterSpacing: '-.025em', lineHeight: 1.05 }}>{b.title}</div>
                    <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.7)', marginTop: 10, lineHeight: 1.55 }}>{b.sub}</div>
                  </div>
                </div>
                <div style={{ padding: '0 22px 18px', textAlign: 'center' }}>
                  <span className="mono" style={{ fontSize: 10.5, color: 'rgba(255,255,255,.45)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Hero banner artwork goes here</span>
                </div>
              </div>
            )}
            {/* Carousel controls */}
            <button onClick={() => setBi((bi - 1 + banners.length) % banners.length)} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: 999, background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(8px)', color: '#fff', display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,.2)' }}><Icon name="chev-l" size={18} /></button>
            <button onClick={() => setBi((bi + 1) % banners.length)} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: 999, background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(8px)', color: '#fff', display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,.2)' }}><Icon name="chev" size={18} /></button>
            {/* Dots */}
            <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
              {banners.map((_, i) => (
                <button key={i} onClick={() => setBi(i)} style={{ width: i === bi ? 24 : 8, height: 8, borderRadius: 999, background: i === bi ? '#fff' : 'rgba(255,255,255,.4)', transition: 'all .2s' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO INTRO — between hero and categories */}
      <section style={{ background: 'var(--paper)', padding: '40px 32px 8px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <h1 className="display h-display" style={{ fontSize: 30, margin: '0 0 14px', letterSpacing: '-.02em', color: 'var(--ink-950)' }}>Vape Big — UK's Leading Vape Shop</h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-700)', margin: 0, maxWidth: 880, marginLeft: 'auto', marginRight: 'auto' }}>
            Experience top-quality vaping with Vape Big, the UK's premier online vape store. We offer a wide selection of popular e-cigarettes like Elf Bars, Elux, <a href="brands/hayati-pro-max-4000/" onClick={(e) => { e.preventDefault(); onNav?.('brand'); }} style={{ color: 'var(--blaze-2)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--blaze)' }}>Hayati Pro Max</a> and innovative heated tobacco products like IQOS, and a variety of premium e-liquids. Known for unbeatable prices and exceptional customer service, Vape Big is your go-to source for all vaping needs. Enjoy competitive pricing and free UK delivery on orders over £35. Whether you're a beginner or a vaping veteran, Vape Big has everything you need for the perfect vaping experience.
          </p>
        </div>
      </section>

      {/* CATEGORIES — image tiles */}
      <section style={{ padding: '32px 32px 24px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 18 }}>
            <span className="eyebrow">Browse the shop</span>
            <h2 className="display h-display" style={{ fontSize: 32, margin: '6px 0 0', letterSpacing: '-.02em' }}>Shop by category</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 10 }}>
            {[
              { name: 'Vape Kits',       img: 'assets/cat-vape-kits.jpg',  ico: 'battery' },
              { name: 'Big Puff Vapes',  img: 'assets/cat-disposables.jpg',ico: 'puff' },
              { name: 'Pre-Filled Pods', img: 'assets/cat-pods.jpg',       ico: 'package' },
              { name: 'E-Liquids',       img: null,                         ico: 'cloud' },
              { name: 'Nic Salts',       img: 'assets/cat-nicsalts.jpg',   ico: 'bolt' },
              { name: 'Pouches',         img: 'assets/cat-pouches.jpg',    ico: 'leaf' },
              { name: 'Coils',           img: 'assets/cat-coils.jpg',      ico: 'rotate' },
            ].map(c => (
              <a key={c.name} onClick={() => onNav?.('plp')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '14px 10px 14px', background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, textAlign: 'center', cursor: 'pointer', transition: 'border-color .15s, transform .1s' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--blaze)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--paper-3)'; e.currentTarget.style.transform = 'none'; }}>
                <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 10, background: 'linear-gradient(160deg, var(--paper-2), var(--paper-3))', display: 'grid', placeItems: 'center', overflow: 'hidden', position: 'relative' }}>
                  {c.img ? (
                    <img src={c.img} alt={c.name} style={{ width: '92%', height: '92%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                  ) : (
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--violet-50)', color: 'var(--blaze)', display: 'grid', placeItems: 'center' }}>
                      <Icon name={c.ico} size={22} stroke={1.8} />
                    </div>
                  )}
                </div>
                <div className="display" style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink-900)', lineHeight: 1.2, marginTop: 2 }}>{c.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING GRID */}
      <section style={{ padding: '64px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <span className="eyebrow">Trending now</span>
              <h2 className="display h-display" style={{ fontSize: 44, margin: '8px 0 0' }}>What everyone's buying.</h2>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['Vape Kits', 'Big Puff Vapes', 'Nic Salts', 'Pods'].map((t, i) => (
                <button key={t} className="btn" style={{ padding: '10px 16px', fontSize: 13, borderRadius: 999, background: i === 0 ? 'var(--ink-950)' : 'transparent', color: i === 0 ? '#fff' : 'var(--ink-800)', border: i === 0 ? 'none' : '1.5px solid var(--ink-200)' }}>{t}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            {HERO_PRODUCTS.slice(0, 8).map(p => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* SEO CONTENT — kits & pods (between trending and USP) */}
      <section style={{ padding: '24px 32px 56px', background: 'var(--cream)', borderTop: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gap: 18 }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-700)', margin: 0 }}>
            Vape Big offers a trending range of vape kits, making it easy to choose based on your vaping preferences without any unnecessary confusion. If you just want something that lasts and doesn't need constant replacing, devices like the <SEOLink href="/brands/ivg-xl-35k-prefilled-pod-kit/" onNav={onNav}>IVG XL 35K Kit</SEOLink> or the <SEOLink href="/brands/pyne-pod-click-50k-prefilled-pod-kit/" onNav={onNav}>Pyne Pod Click 50K Kit</SEOLink> are easy picks, built for longer use with minimal effort. For those who prefer simplicity, it's really about having something that just works. Kits like the <SEOLink href="/brands/ivg-pro-12-pod-kit/" onNav={onNav}>IVG Pro 12 Kit</SEOLink> or the <SEOLink href="/brands/ske-crystal-bar-600-prefilled-pod-kit/" onNav={onNav}>SKE Crystal 600 Kit</SEOLink> fit that perfectly: easy to carry and easy to use. Then there's the middle ground. If you want better performance or longer use without getting into anything technical, options like the <SEOLink href="/brands/hyola-ultra-30k-prefilled-pod-kit/" onNav={onNav}>Hyola Ultra 30K Kit</SEOLink>, <SEOLink href="/brands/hqd-glow-air-70k-vape-kit/" onNav={onNav}>HQD Glow Air 70K Kit</SEOLink>, <SEOLink href="/brands/ske-crystal-600-pro-prefilled-pod-kit/" onNav={onNav}>SKE Crystal 600 Pro Kit</SEOLink>, and <SEOLink href="/brands/ske-bar-15k-prefilled-pod-kit/" onNav={onNav}>SKE Bar 15K Kit</SEOLink> strike that balance well.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-700)', margin: 0 }}>
            Vape Pods offer a more streamlined and low-maintenance experience. Users can simply replace the pod and continue without interruption. Whether you're using long-lasting options like the <SEOLink href="/brands/ivg-xl-35k-pods/" onNav={onNav}>IVG XL 35K Pods</SEOLink> and <SEOLink href="/brands/pyne-pod-click-refill-pods/" onNav={onNav}>Pyne Pod Click 50K Pods</SEOLink>, or keeping it simple with <SEOLink href="/brands/ivg-pro-12-refill-pods/" onNav={onNav}>IVG Pro 12 Pods</SEOLink> and <SEOLink href="/brands/ske-crystal-bar-600-prefilled-pods/" onNav={onNav}>SKE Crystal 600 Pods</SEOLink>, everything is built to just work without getting in your way. If you want something that feels a bit more refined, <SEOLink href="/brands/ske-crystal-600-pro-prefilled-pods/" onNav={onNav}>SKE Crystal 600 Pro Pods</SEOLink>, <SEOLink href="/brands/hyola-ultra-30k-prefilled-pods/" onNav={onNav}>Hyola Ultra 30K Pods</SEOLink>, <SEOLink href="/brands/hqd-glow-air-35k-prefilled-pods/" onNav={onNav}>HQD Glow Air 35K Pods</SEOLink>, and <SEOLink href="/brands/ske-bar-15k-refill-pods/" onNav={onNav}>SKE Bar 15K Pods</SEOLink> all hold up well for everyday use without adding any extra effort. Once in use, the experience becomes seamless, with the device and pods integrating naturally into your routine while maintaining consistent performance without requiring active attention.
          </p>
        </div>
      </section>

      {/* USP STRIP */}
      <section style={{ background: 'var(--violet-500)', color: '#fff', padding: '40px 32px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
          {[
            ['truck', 'Free over £35', 'Royal Mail tracked, dispatched in 24h'],
            ['shield', 'TPD-compliant', 'Genuine, UK-legal stock only'],
            ['rotate', '14-day returns', 'Unopened items, no questions asked'],
            ['headset', 'Real humans', 'Mon-Fri 10-3 · 03332 244263'],
          ].map(([ic, h, s]) => (
            <div key={h} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,.18)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name={ic} size={20} /></div>
              <div>
                <div className="display" style={{ fontWeight: 700, fontSize: 17, color: '#fff' }}>{h}</div>
                <div style={{ fontSize: 13, color: '#e6d8ff', marginTop: 4, lineHeight: 1.5 }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS BAR */}
      <section style={{ padding: '40px 32px', background: 'var(--cream)', borderTop: '1px solid var(--paper-3)', borderBottom: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <span className="eyebrow">Stocked brands</span>
            <h3 className="display h-display" style={{ fontSize: 26, margin: '6px 0 0' }}>The brands you trust, all in one place.</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {BRANDS.map(b => (
              <a key={b} onClick={() => onNav?.('plp')} style={{ padding: '10px 18px', borderRadius: 999, border: '1.5px solid var(--ink-200)', background: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{b}</a>
            ))}
          </div>
        </div>
      </section>

      {/* NEW IN — second product rail */}
      <section style={{ padding: '56px 32px 56px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
            <h2 className="display h-display" style={{ fontSize: 32, margin: 0 }}>New in</h2>
            <a onClick={() => onNav?.('plp')} style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-800)', cursor: 'pointer', textDecoration: 'underline' }}>Shop all →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {HERO_PRODUCTS.slice(4, 8).map(p => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* PRODUCT KNOWLEDGE — SEO accordion */}
      <section style={{ padding: '56px 32px 88px', background: 'var(--paper)', borderTop: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <span className="eyebrow">Get to know the kit</span>
            <h2 className="display h-display" style={{ fontSize: 38, margin: '6px 0 6px', letterSpacing: '-.025em' }}>The vapes & e-liquids everyone's asking about.</h2>
            <p style={{ fontSize: 14.5, color: 'var(--ink-600)', maxWidth: 720, margin: 0, lineHeight: 1.6 }}>Quick overviews of the most popular kits, pods and nic salts we stock — tap any title to read more.</p>
          </div>
          <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 32, rowGap: 0 }}>
            <ProductAccordion id="hayati-pro-ultra-plus-25k" defaultOpen title="Hayati Pro Ultra Plus 25K">
              Enhance your vaping experience with the <SEOLink href="product/hayati-pro-ultra-plus-25000/" onNav={onNav}>Hayati Pro Ultra Plus</SEOLink>, paired with the expertly crafted <SEOLink href="product/hayati-pro-ultra-plus-25000-pods/" onNav={onNav}>Hayati Pro Ultra Plus Pods</SEOLink> for optimal performance and flavour. This device features a smart chip for even power delivery, ensuring consistent clouds and rich flavour from first puff to last. Pods click securely into place and come preloaded with premium e-liquid, highlighting fruity, minty and sweet flavour options. The slim body fits easily in your hand while a high-capacity battery keeps you vaping longer. From its rapid charge capability to its clean airflow design, it's all about convenience and top-tier performance.
            </ProductAccordion>
            <ProductAccordion id="hayati-pro-max-plus-6k" title="Hayati Pro Max Plus 6K">
              The <SEOLink href="product/hayati-pro-max-plus-6000/" onNav={onNav}>Hayati Pro Max Plus</SEOLink> is built for vapers who love smooth power without the fuss. Pair it with <SEOLink href="product/hayati-pro-max-plus-6000-pods/" onNav={onNav}>Hayati Pro Max Plus Pods</SEOLink> and you get a clean, flavourful draw every time. Quick-heating coils and adjustable airflow mean bold taste and thick vapour with zero lag. Each pod is prefilled with vibrant e-liquids—think fruit pops, icy hits, even dessert blends—and the leak-proof design keeps pockets safe. Add a battery that lasts all day and you've got a setup that nails both tech and taste in one sleek package.
            </ProductAccordion>
            <ProductAccordion id="elux-nic-salts" title="Elux Nic Salts">
              <SEOLink href="collections/elux-legend-nic-salts/" onNav={onNav}>Elux Nic Salts</SEOLink> blends advanced nicotine salt technology with bold, layered flavours for a smooth, satisfying hit. Each draw provides a quick nicotine delivery without harshness, ideal for new users and experienced vapers alike. The Elux Nic Salt range showcases everything from fresh fruits to creamy dessert notes, all crafted for balanced throat hits and consistent vapour. Using premium Nic Salt formulas, these e-liquids maintain flavour clarity and keep coils cleaner for longer sessions. Perfect for pod systems, they bring a refined, easy-going experience that keeps taste at the forefront.
            </ProductAccordion>
            <ProductAccordion id="bar-juice-5000" title="Bar Juice 5000 Nic Salts">
              <SEOLink href="brands/bar-juice-5000-nic-salt-e-liquids/" onNav={onNav}>Bar Juice 5000</SEOLink> keeps things simple but never boring. The nic-salt mix hits smooth and steady, giving just the right nicotine kick from the first puff to the last. You get flavours for every mood—fresh fruit, icy menthol, creamy dessert—while the juice keeps coils happy and clouds full. It's made for refillable pods and low-watt devices, stays clean, and won't leak when you drop it in your pocket. If you want reliable flavour without the mess or maintenance, Bar Juice 5000 is the bottle you'll reach for again and again.
            </ProductAccordion>
            <ProductAccordion id="ivg-pro-12" title="IVG Pro 12">
              The <SEOLink href="brands/ivg-pro-12-pod-kit/" onNav={onNav}>IVG Pro 12</SEOLink> mixes sharp design with serious performance. Its powerful battery and precision airflow create dense clouds while keeping flavours bright. Pop in an IVG Pro 12 Pod—already filled with quality e-liquid and a mesh coil—and you'll notice it right away: even heat, smooth pulls, and a strong nicotine hit. The battery charges fast, so you're not waiting around, and the slim design slips into a pocket like it's nothing. If you're after big flavour and a setup you can count on, the IVG Pro 12 with <SEOLink href="brands/ivg-pro-12-refill-pods/" onNav={onNav}>IVG Pro 12 Pods</SEOLink> is an easy favourite.
            </ProductAccordion>
            <ProductAccordion id="ivg-smart-max" title="IVG Smart Max">
              <SEOLink href="brands/ivg-smart-max-vape-kit/" onNav={onNav}>IVG Smart Max</SEOLink> is all about consistent power and rich taste. Its intelligent chip keeps output steady while the high-capacity battery powers long sessions. Match it with <SEOLink href="brands/ivg-smart-max-pods/" onNav={onNav}>IVG Smart Max Pods</SEOLink>, and you get mesh coils that crank up vapour density and keep every flavour note sharp. Pods lock in tight to prevent leaks, and a clear LED display shows battery life at a glance. With quick charging and a smooth ergonomic feel, the IVG Smart Max and IVG Smart Max Pods deliver a strong, flavour-packed vape with zero hassle.
            </ProductAccordion>
            <ProductAccordion id="lost-mary-bm6000" title="Lost Mary BM6000">
              <SEOLink href="brands/lost-mary/bm6000-prefilled-pod-kit/" onNav={onNav}>Lost Mary BM6000</SEOLink> proves you don't have to trade style for power. This pocket-friendly vape clicks right in with <SEOLink href="product/lost-mary-bm6000-prefilled-pods/" onNav={onNav}>Lost Mary BM6000 Pods</SEOLink>, built with smart coils that bring out deep, balanced flavour. Each pod's already filled with top-shelf e-liquid—think fruity, icy, or dessert vibes—so changing flavours is effortless. The battery easily powers long sessions, and the airflow stays smooth from the first draw to the last. Whether you're new to vaping or a daily user, the Lost Mary BM6000 with its matching pods makes portable vaping simple and flavourful.
            </ProductAccordion>
            <ProductAccordion id="hyola-pro-30k" title="Hyola Pro 30K">
              <SEOLink href="brands/hyola-ultra-30k-prefilled-pod-kit/" onNav={onNav}>Hyola Pro 30K</SEOLink> is made for serious puff counts and serious flavour. Its high-output battery and precision coil system push out up to 30,000 puffs without skipping a beat. Pair it with <SEOLink href="brands/hyola-ultra-30k-prefilled-pods/" onNav={onNav}>Hyola Pro 30K Pods</SEOLink> to lock in rich, layered blends—from icy menthols to bright fruits. The ergonomic body feels good in hand, while leak-resistant pods keep pockets and bags clean. Fast charging and a clear battery display round out a setup built for heavy use. For long-lasting sessions and top-tier taste, Hyola Pro 30K and its pods deliver.
            </ProductAccordion>
          </div>
        </div>
      </section>

      {/* FAQ — 2-column CSS-only accordion (no JS required) */}
      <section style={{ padding: '64px 32px 88px', background: 'var(--cream)', borderTop: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="eyebrow">Help & support</span>
            <h2 className="display h-display" style={{ fontSize: 38, margin: '6px 0 0', letterSpacing: '-.025em' }}>Frequently asked questions</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 32, rowGap: 0 }}>
            <ProductAccordion id="faq-who" title="Who is Vape Big?">
              Vape Big is a UK Online Vape Shop that offers a wide range of products, including vapes, e-liquids, disposable devices, refillable kits, coils, and accessories. We focus on quality products and also provide a reliable shopping experience for both new and experienced vapers.
            </ProductAccordion>
            <ProductAccordion id="faq-legal" title="Are your vape products legal in the UK?">
              Yes. Every Vape we sell follows UK regulations. Our Online Vape Shop stocks only fully compliant Vapes and e-liquids, so you can buy with confidence knowing everything is safe and legal.
            </ProductAccordion>
            <ProductAccordion id="faq-genuine" title="Do you sell genuine branded vape products?">
              Definitely. We sell only genuine vapes from trusted brands which are of superior quality and are legal. To ensure authenticity in every order you place, we only source products from the verified suppliers.
            </ProductAccordion>
            <ProductAccordion id="faq-delivery" title="Do you offer free delivery?">
              Yes. Vape Big gives free UK delivery on qualifying orders. Grab your favourite Vapes and enjoy quick, cost-free shipping straight from our Vape Shop to your doorstep.
            </ProductAccordion>
            <ProductAccordion id="faq-returns" title="What is your returns policy?">
              We accept returns on unopened vapes and accessories within the specified time period. For more information on how to exchange or request a refund, visit our page for <SEOLink href="page/refunds-and-returns/" onNav={onNav}>Refunds and Returns</SEOLink>.
            </ProductAccordion>
            <ProductAccordion id="faq-age" title="Do I need to be over 18 to buy from Vape Big?">
              Yes, one should be above 18 years to buy from our Vape Shop. We follow strict age verification and run thorough checks at checkout to ensure safe, responsible sales of vapes and protect young customers from underage purchases.
            </ProductAccordion>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section style={{ padding: '64px 32px 88px', background: 'var(--ink-100)', borderTop: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
              <span className="eyebrow">About us</span>
              <Wordmark size={32} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--blaze-2)', fontWeight: 600 }}>Your one-stop for vaping excellence</span>
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--ink-700)', margin: '0 0 18px' }}>
              We're more than an online vape store; our team are passionate and dedicated to providing you with top-quality vaping products, exceptional customer service, and a seamless shopping experience. As fervent vaping enthusiasts ourselves, we understand the significance of finding the perfect vape gear to enhance your enjoyment and meet your individual needs.
            </p>
            <h3 className="display h-display" style={{ fontSize: 20, fontWeight: 700, margin: '22px 0 8px', color: 'var(--ink-950)' }}>Our Mission</h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--ink-700)', margin: '0 0 24px' }}>
              Our mission is to empower smokers and vapers on their journey towards a smoke-free and healthier lifestyle. We strive to offer a diverse range of vaping products that cater to beginners and experienced vapers alike. With our extensive selection, we want to make the transition from traditional smoking to vaping as smooth and enjoyable as possible, while also serving the needs of seasoned vapers looking for the latest innovations.
            </p>
            <a href="/page/about-us/" onClick={(e) => { e.preventDefault(); onNav?.('about'); }} className="btn btn-ink" style={{ padding: '14px 24px', borderRadius: 8, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700 }}>Read more <Icon name="arrow-r" size={13} /></a>
          </div>
          <div style={{ position: 'relative', aspectRatio: '6/4', borderRadius: 18, overflow: 'hidden', background: 'linear-gradient(160deg, var(--paper-2), var(--paper-3))', border: '1px solid var(--paper-3)', boxShadow: 'var(--shadow-md)' }}>
            <img src="https://www.vapebig.co.uk/assets/imgs/vpg/image.png" alt="About Vape Big" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

window.ProductCard = ProductCard;
window.StarRow = StarRow;
window.PriceTag = PriceTag;
window.HomeDesktop = HomeDesktop;
