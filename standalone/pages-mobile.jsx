// pages-mobile.jsx — mobile counterparts (12 screens, compact)

const MProductRow = ({ p, onNav }) => (
  <div onClick={() => onNav?.('mpdp')} style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 12, padding: 12, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14 }}>
    <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 10, display: 'grid', placeItems: 'center' }}>
      {p.img ? <img src={p.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} /> : <div className="stripe-placeholder" style={{ width: '100%', height: '100%' }}>{p.brand}</div>}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="mono" style={{ fontSize: 9.5, color: 'var(--violet-700)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{p.brand}</div>
      <div className="display" style={{ fontWeight: 600, fontSize: 13.5, lineHeight: 1.25, marginTop: 2 }}>{p.name}</div>
      {p.rating && <div style={{ fontSize: 11, color: 'var(--ink-600)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><StarRow value={p.rating} size={9} /> <span>{p.rating} ({p.reviews})</span></div>}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <PriceTag price={p.price} was={p.was} />
        <button className="btn btn-ink" style={{ padding: '6px 10px', borderRadius: 999, fontSize: 11 }}><Icon name="plus" size={11} /></button>
      </div>
    </div>
  </div>
);

const MProductCard = ({ p, onNav }) => (
  <div onClick={() => onNav?.('mpdp')} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
    {p.tag && <span className="chip" style={{ position: 'absolute', top: 10, left: 10, background: p.tag === 'Bestseller' ? 'var(--lime)' : p.tag === 'New' ? 'var(--violet-500)' : 'var(--coral)', color: p.tag === 'Bestseller' ? 'var(--ink-950)' : '#fff', fontSize: 9, padding: '3px 7px', zIndex: 2 }}>{p.tag}</span>}
    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 10, display: 'grid', placeItems: 'center' }}>
        {p.img ? <img src={p.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} /> : <div className="stripe-placeholder" style={{ width: '100%', height: '100%' }}>{p.brand}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
        <div className="mono" style={{ fontSize: 9, color: 'var(--violet-700)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{p.brand}</div>
        {p.multibuy && <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 6px', background: 'var(--blaze)', color: '#fff', borderRadius: 5, fontSize: 9, fontWeight: 700, fontFamily: 'JetBrains Mono', letterSpacing: '.04em', whiteSpace: 'nowrap', flexShrink: 0 }}><Icon name="tag" size={8} stroke={2} /> {p.multibuy}</div>}
      </div>
      <div className="display" style={{ fontWeight: 600, fontSize: 12.5, lineHeight: 1.2, minHeight: 30, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{p.name}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '2px 6px' }}>
        <span className="display" style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink-950)', letterSpacing: '-.02em', lineHeight: 1 }}>£{p.price.toFixed(2)}</span>
        {p.was && <span style={{ fontSize: 11, color: 'var(--ink-400)', textDecoration: 'line-through', lineHeight: 1 }}>£{p.was.toFixed(2)}</span>}
        {p.was && <span className="chip chip-coral" style={{ fontSize: 9, padding: '2px 5px', lineHeight: 1 }}>–{Math.round((1 - p.price / p.was) * 100)}%</span>}
      </div>
    </div>

    {/* Spec strip */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--paper-3)', borderBottom: '1px solid var(--paper-3)', fontSize: 11, color: 'var(--ink-800)', fontWeight: 500 }}>
      <div style={{ padding: '7px 6px', textAlign: 'center', borderRight: '1px solid var(--paper-3)' }}>{p.cap || '2ml'}</div>
      <div style={{ padding: '7px 6px', textAlign: 'center' }}>{p.cap === 'Refillable' ? 'Refillable' : (p.strength || '20mg')}</div>
    </div>

    {/* Description */}
    {p.desc && (
      <div style={{ padding: '8px 10px 10px', fontSize: 11, color: 'var(--ink-600)', lineHeight: 1.45, minHeight: 48 }}>
        {p.desc}
      </div>
    )}

    {/* Quick Buy */}
    <button onClick={(e) => { e.stopPropagation(); onNav?.('mpdp'); }} className="btn btn-ink" style={{ borderRadius: 0, padding: '10px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 'auto' }}>
      Quick Buy <Icon name="bag" size={11} />
    </button>
  </div>
);

const MFooter = ({ onNav }) => (
  <footer style={{ background: 'var(--ink-950)', color: '#a89cb8', padding: '32px 16px 22px', marginTop: 8 }}>
    {/* Brand block */}
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><LogoMark size={32} /><Wordmark light size={20} /></div>
      <p style={{ marginTop: 12, fontSize: 12.5, lineHeight: 1.65, color: '#968aad' }}>The UK's online vape shop, dispatching 7,000+ products from our Kington warehouse six days a week. TPD-compliant. Authentic only.</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
        {['facebook', 'instagram', 'tiktok', 'twitter'].map(s => (
          <a key={s} style={{ width: 34, height: 34, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.06)', borderRadius: 9, color: '#cfc6dd' }}><Icon name={s} size={14} /></a>
        ))}
      </div>
    </div>

    {/* Link columns — collapsible accordion style */}
    {[
      { h: 'Shop', items: ['Vape Kits', 'Big Puff Vapes', 'Pre-Filled Pods', 'E-Liquids', 'Nic Salts', 'Coils', 'Nicotine Pouches', 'Clearance'] },
      { h: 'Help', items: ['Contact Us', 'Delivery Info', 'Returns Policy', 'Order Tracking', 'Vape Tax UK', 'FAQs'] },
      { h: 'Company', items: ['About Us', 'Blog', 'Vape Reviews', 'Vaping Guides', 'Buying for Business'] },
      { h: 'Legal', items: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Age Verification', 'Modern Slavery'] },
    ].map(col => (
      <details key={col.h} style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
        <summary style={{ listStyle: 'none', padding: '14px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <span className="mono" style={{ color: '#fff', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 500 }}>{col.h}</span>
          <span style={{ color: '#7c7090', display: 'inline-flex' }}><Icon name="chev-d" size={13} /></span>
        </summary>
        <div style={{ paddingBottom: 12 }}>
          {col.items.map(t => (
            <a key={t} onClick={() => t === 'About Us' ? onNav?.('about') : t === 'Contact Us' ? onNav?.('contact') : t === 'Blog' ? onNav?.('blog') : null} style={{ display: 'block', fontSize: 13.5, padding: '6px 0', color: '#a89cb8', cursor: 'pointer' }}>{t}</a>
          ))}
        </div>
      </details>
    ))}

    {/* Payments + address */}
    <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
        {['VISA', 'MC', 'AMEX', 'PAY', 'KLR'].map(p => (
          <div key={p} style={{ background: '#fff', color: '#14101e', borderRadius: 5, padding: '4px 7px', fontSize: 9.5, fontWeight: 800, letterSpacing: '.06em' }}>{p}</div>
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: '#7c7090', lineHeight: 1.6 }}>
        Secure checkout · SSL encrypted
      </div>
      <div style={{ marginTop: 14, fontSize: 11.5, color: '#a89cb8', lineHeight: 1.6 }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>Quick Vapes Limited</span><br/>
        61 Bridge Street, Kington, HR5 3DJ<br/>
        03332 244263
      </div>
    </div>

    {/* Nicotine warning */}
    <div style={{ marginTop: 18, padding: '14px 14px', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, fontSize: 10.5, color: '#7c7090', lineHeight: 1.6 }}>
      <strong style={{ color: '#cfc6dd' }}>Warning:</strong> This product contains nicotine, which is a highly addictive substance. Sale to under 18s prohibited. Not suitable for non-smokers, pregnant or breastfeeding women, or persons with heart conditions. Keep out of reach of children.
      <div style={{ marginTop: 8, color: '#5d536e' }}>© 2026 Vape Big · All rights reserved.</div>
    </div>
  </footer>
);

const MHome = ({ onNav }) => (
  <div data-screen-label="14 Home — mobile">
    <MobileHeader onNav={onNav} />
    {/* Hero — full-bleed image banner */}
    <section style={{ padding: '12px 12px 0' }}>
      <a onClick={() => onNav?.('mpdp')} style={{ display: 'block', borderRadius: 16, overflow: 'hidden', aspectRatio: '525 / 770', background: '#0c0814', cursor: 'pointer' }}>
        <img src={window.__resources.heroHayatiMobile} alt="Hayati Pro Max+ — Fresh Flavours for May" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </a>
    </section>

    {/* Featured product */}
    <section style={{ padding: '14px 16px 0' }}>
      <div onClick={() => onNav?.('mpdp')} style={{ background: 'linear-gradient(135deg, var(--violet-700), var(--violet-900))', borderRadius: 18, padding: 18, color: '#fff', display: 'grid', gridTemplateColumns: '1fr 130px', gap: 12, alignItems: 'center' }}>
        <div>
          <span className="chip chip-lime" style={{ fontSize: 9 }}>Bestseller</span>
          <div className="display" style={{ fontWeight: 700, fontSize: 18, marginTop: 8 }}>{HERO_PRODUCTS[0].name}</div>
          <div style={{ fontSize: 11, opacity: .7, marginTop: 2 }}>25,000 puffs · 8 flavours</div>
          <div className="display" style={{ fontWeight: 800, fontSize: 26, color: 'var(--lime)', marginTop: 8 }}>£14.99</div>
        </div>
        <img src={HERO_PRODUCTS[0].img} style={{ width: '100%', objectFit: 'contain' }} />
      </div>
    </section>

    {/* SEO intro */}
    <section style={{ padding: '24px 16px 8px' }}>
      <h1 className="display h-display" style={{ fontSize: 22, margin: '0 0 10px', textAlign: 'center', letterSpacing: '-.015em', color: 'var(--ink-950)' }}>Vape Big — UK's Leading Vape Shop</h1>
      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'var(--ink-700)', margin: 0 }}>
        Experience top-quality vaping with Vape Big, the UK's premier online vape store. We offer a wide selection of popular e-cigarettes like Elf Bars, Elux, <a href="brands/hayati-pro-max-4000/" onClick={(e) => { e.preventDefault(); onNav?.('mplp'); }} style={{ color: 'var(--blaze-2)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--blaze)' }}>Hayati Pro Max</a> and innovative heated tobacco products like IQOS, and a variety of premium e-liquids. Known for unbeatable prices and exceptional customer service, Vape Big is your go-to source for all vaping needs. Enjoy competitive pricing and free UK delivery on orders over £35.
      </p>
    </section>

    {/* Categories — image tiles (matches desktop) */}
    <section style={{ padding: '20px 16px 8px' }}>
      <div style={{ marginBottom: 12 }}>
        <span className="eyebrow" style={{ fontSize: 10 }}>Browse the shop</span>
        <h2 className="display h-display" style={{ fontSize: 22, margin: '4px 0 0', letterSpacing: '-.015em' }}>Shop by category</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {[
          { name: 'Vape Kits',       img: window.__resources.catVapeKits,   ico: 'battery' },
          { name: 'Big Puff Vapes',  img: window.__resources.catDisposables, ico: 'puff' },
          { name: 'Pre-Filled Pods', img: window.__resources.catPods,        ico: 'package' },
          { name: 'E-Liquids',       img: null,                          ico: 'cloud' },
          { name: 'Nic Salts',       img: window.__resources.catNicsalts,    ico: 'bolt' },
          { name: 'Pouches',         img: window.__resources.catPouches,     ico: 'leaf' },
          { name: 'Coils',           img: window.__resources.catCoils,       ico: 'rotate' },
        ].map(c => (
          <a key={c.name} onClick={() => onNav?.('mplp')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '8px 6px', background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 10, textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 8, background: 'linear-gradient(160deg, var(--paper-2), var(--paper-3))', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
              {c.img ? (
                <img src={c.img} alt={c.name} style={{ width: '92%', height: '92%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              ) : (
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--violet-50)', color: 'var(--blaze)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={c.ico} size={16} stroke={1.8} />
                </div>
              )}
            </div>
            <div className="display" style={{ fontWeight: 700, fontSize: 10.5, color: 'var(--ink-900)', lineHeight: 1.15, marginTop: 1 }}>{c.name}</div>
          </a>
        ))}
      </div>
    </section>

    {/* Trending */}
    <section style={{ padding: '20px 16px 4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 className="display h-display" style={{ fontSize: 22, margin: 0 }}>Trending</h2>
        <a style={{ fontSize: 12, color: 'var(--violet-700)', fontWeight: 600 }}>All →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {HERO_PRODUCTS.slice(0, 4).map(p => <MProductCard key={p.name} p={p} onNav={onNav} />)}
      </div>
    </section>

    {/* SEO body copy — kits & pods */}
    <section style={{ padding: '20px 16px 4px' }}>
      <div style={{ display: 'grid', gap: 14 }}>
        <p style={{ fontSize: 13.5, lineHeight: 1.75, color: 'var(--ink-700)', margin: 0 }}>
          Vape Big offers a trending range of vape kits, making it easy to choose based on your vaping preferences. If you just want something that lasts, devices like the <SEOLink href="/brands/ivg-xl-35k-prefilled-pod-kit/" onNav={onNav}>IVG XL 35K Kit</SEOLink> or the <SEOLink href="/brands/pyne-pod-click-50k-prefilled-pod-kit/" onNav={onNav}>Pyne Pod Click 50K Kit</SEOLink> are easy picks. For simplicity, kits like the <SEOLink href="/brands/ivg-pro-12-pod-kit/" onNav={onNav}>IVG Pro 12 Kit</SEOLink> or the <SEOLink href="/brands/ske-crystal-bar-600-prefilled-pod-kit/" onNav={onNav}>SKE Crystal 600 Kit</SEOLink> fit perfectly. Then there's the middle ground — options like the <SEOLink href="/brands/hyola-ultra-30k-prefilled-pod-kit/" onNav={onNav}>Hyola Ultra 30K Kit</SEOLink>, <SEOLink href="/brands/hqd-glow-air-70k-vape-kit/" onNav={onNav}>HQD Glow Air 70K Kit</SEOLink>, <SEOLink href="/brands/ske-crystal-600-pro-prefilled-pod-kit/" onNav={onNav}>SKE Crystal 600 Pro Kit</SEOLink>, and <SEOLink href="/brands/ske-bar-15k-prefilled-pod-kit/" onNav={onNav}>SKE Bar 15K Kit</SEOLink> strike the balance well.
        </p>
        <p style={{ fontSize: 13.5, lineHeight: 1.75, color: 'var(--ink-700)', margin: 0 }}>
          Vape Pods offer a more streamlined experience. Whether you're using long-lasting options like the <SEOLink href="/brands/ivg-xl-35k-pods/" onNav={onNav}>IVG XL 35K Pods</SEOLink> and <SEOLink href="/brands/pyne-pod-click-refill-pods/" onNav={onNav}>Pyne Pod Click 50K Pods</SEOLink>, or keeping it simple with <SEOLink href="/brands/ivg-pro-12-refill-pods/" onNav={onNav}>IVG Pro 12 Pods</SEOLink> and <SEOLink href="/brands/ske-crystal-bar-600-prefilled-pods/" onNav={onNav}>SKE Crystal 600 Pods</SEOLink>, everything is built to just work. For something more refined, <SEOLink href="/brands/ske-crystal-600-pro-prefilled-pods/" onNav={onNav}>SKE Crystal 600 Pro Pods</SEOLink>, <SEOLink href="/brands/hyola-ultra-30k-prefilled-pods/" onNav={onNav}>Hyola Ultra 30K Pods</SEOLink>, <SEOLink href="/brands/hqd-glow-air-35k-prefilled-pods/" onNav={onNav}>HQD Glow Air 35K Pods</SEOLink>, and <SEOLink href="/brands/ske-bar-15k-refill-pods/" onNav={onNav}>SKE Bar 15K Pods</SEOLink> hold up well for everyday use.
        </p>
      </div>
    </section>

    {/* Promo banner — links to https://www.vapebig.co.uk/collections/any-5-for-10-on-nic-salts/ */}
    <section style={{ padding: '20px 16px 0' }}>
      <div
        onClick={() => onNav?.('mplp')}
        data-href="https://www.vapebig.co.uk/collections/any-5-for-10-on-nic-salts/"
        style={{ background: 'var(--lime)', color: 'var(--ink-950)', borderRadius: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
      >
        <Icon name="bolt" size={26} />
        <div style={{ flex: 1 }}>
          <div className="display" style={{ fontWeight: 700, fontSize: 15 }}>Mix & match — 5 for £10</div>
          <div style={{ fontSize: 11, opacity: .85, lineHeight: 1.45 }}>
            Selected Nic Salts — <a href="https://www.vapebig.co.uk/collections/elux-legend-nic-salts/" onClick={(e) => { e.stopPropagation(); e.preventDefault(); onNav?.('mplp'); }} style={{ color: 'var(--ink-950)', fontWeight: 600, textDecoration: 'underline' }}>Elux</a>, <a href="https://www.vapebig.co.uk/brands/bar-juice-5000-nic-salt-e-liquids/" onClick={(e) => { e.stopPropagation(); e.preventDefault(); onNav?.('mplp'); }} style={{ color: 'var(--ink-950)', fontWeight: 600, textDecoration: 'underline' }}>Bar Juice</a>, <a href="https://www.vapebig.co.uk/brands/elfliq-nic-salt-e-liquids-by-elf-bar/" onClick={(e) => { e.stopPropagation(); e.preventDefault(); onNav?.('mplp'); }} style={{ color: 'var(--ink-950)', fontWeight: 600, textDecoration: 'underline' }}>Elfliq</a>, <a href="https://www.vapebig.co.uk/brands/ske-crystal-nic-salt-e-liquids/" onClick={(e) => { e.stopPropagation(); e.preventDefault(); onNav?.('mplp'); }} style={{ color: 'var(--ink-950)', fontWeight: 600, textDecoration: 'underline' }}>SKE Salts</a>. Auto applied.
          </div>
        </div>
        <Icon name="arrow-r" size={16} />
      </div>
    </section>

    {/* USPs */}
    <section style={{ padding: '24px 16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[['truck', 'Free over £35'], ['shield', '100% authentic'], ['rotate', '14-day returns'], ['headset', 'Real humans']].map(([i, l]) => (
          <div key={l} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 12, background: 'var(--cream)', borderRadius: 10, fontSize: 12 }}>
            <span style={{ color: 'var(--violet-600)' }}><Icon name={i} size={16} /></span> <strong>{l}</strong>
          </div>
        ))}
      </div>
    </section>

    {/* E-liquids — grid (matches Trending) */}
    <section style={{ padding: '20px 16px 4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 className="display h-display" style={{ fontSize: 22, margin: 0 }}>New e-liquids</h2>
        <a style={{ fontSize: 12, color: 'var(--violet-700)', fontWeight: 600 }}>All →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {ELIQUIDS.slice(0, 4).map(p => <MProductCard key={p.name} p={p} onNav={onNav} />)}
      </div>
    </section>

    {/* Product knowledge — CSS-only accordion (single column for mobile) */}
    <section style={{ padding: '8px 16px 24px', borderTop: '1px solid var(--paper-3)' }}>
      <div style={{ marginBottom: 8, paddingTop: 16 }}>
        <span className="eyebrow" style={{ fontSize: 10 }}>Get to know the kit</span>
        <h2 className="display h-display" style={{ fontSize: 24, margin: '4px 0 0', letterSpacing: '-.02em' }}>The vapes & e-liquids everyone's asking about.</h2>
      </div>
      <div>
        <ProductAccordion id="m-hayati-pro-ultra-plus-25k" defaultOpen title="Hayati Pro Ultra Plus 25K">
          Enhance your vaping experience with the <SEOLink href="product/hayati-pro-ultra-plus-25000/" onNav={onNav}>Hayati Pro Ultra Plus</SEOLink>, paired with the expertly crafted <SEOLink href="product/hayati-pro-ultra-plus-25000-pods/" onNav={onNav}>Hayati Pro Ultra Plus Pods</SEOLink> for optimal performance and flavour. This device features a smart chip for even power delivery, ensuring consistent clouds and rich flavour from first puff to last. Pods click securely into place and come preloaded with premium e-liquid, highlighting fruity, minty and sweet flavour options. The slim body fits easily in your hand while a high-capacity battery keeps you vaping longer.
        </ProductAccordion>
        <ProductAccordion id="m-hayati-pro-max-plus-6k" title="Hayati Pro Max Plus 6K">
          The <SEOLink href="product/hayati-pro-max-plus-6000/" onNav={onNav}>Hayati Pro Max Plus</SEOLink> is built for vapers who love smooth power without the fuss. Pair it with <SEOLink href="product/hayati-pro-max-plus-6000-pods/" onNav={onNav}>Hayati Pro Max Plus Pods</SEOLink> and you get a clean, flavourful draw every time. Quick-heating coils and adjustable airflow mean bold taste and thick vapour with zero lag. Each pod is prefilled with vibrant e-liquids, and the leak-proof design keeps pockets safe.
        </ProductAccordion>
        <ProductAccordion id="m-elux-nic-salts" title="Elux Nic Salts">
          <SEOLink href="collections/elux-legend-nic-salts/" onNav={onNav}>Elux Nic Salts</SEOLink> blends advanced nicotine salt technology with bold, layered flavours for a smooth, satisfying hit. Each draw provides a quick nicotine delivery without harshness, ideal for new users and experienced vapers alike. The Elux Nic Salt range showcases everything from fresh fruits to creamy dessert notes, all crafted for balanced throat hits and consistent vapour.
        </ProductAccordion>
        <ProductAccordion id="m-bar-juice-5000" title="Bar Juice 5000 Nic Salts">
          <SEOLink href="brands/bar-juice-5000-nic-salt-e-liquids/" onNav={onNav}>Bar Juice 5000</SEOLink> keeps things simple but never boring. The nic-salt mix hits smooth and steady, giving just the right nicotine kick from the first puff to the last. You get flavours for every mood — fresh fruit, icy menthol, creamy dessert — while the juice keeps coils happy and clouds full.
        </ProductAccordion>
        <ProductAccordion id="m-ivg-pro-12" title="IVG Pro 12">
          The <SEOLink href="brands/ivg-pro-12-pod-kit/" onNav={onNav}>IVG Pro 12</SEOLink> mixes sharp design with serious performance. Its powerful battery and precision airflow create dense clouds while keeping flavours bright. Pop in an IVG Pro 12 Pod — already filled with quality e-liquid and a mesh coil — and you'll notice it right away. The IVG Pro 12 with <SEOLink href="brands/ivg-pro-12-refill-pods/" onNav={onNav}>IVG Pro 12 Pods</SEOLink> is an easy favourite.
        </ProductAccordion>
        <ProductAccordion id="m-ivg-smart-max" title="IVG Smart Max">
          <SEOLink href="brands/ivg-smart-max-vape-kit/" onNav={onNav}>IVG Smart Max</SEOLink> is all about consistent power and rich taste. Its intelligent chip keeps output steady while the high-capacity battery powers long sessions. Match it with <SEOLink href="brands/ivg-smart-max-pods/" onNav={onNav}>IVG Smart Max Pods</SEOLink>, and you get mesh coils that crank up vapour density.
        </ProductAccordion>
        <ProductAccordion id="m-lost-mary-bm6000" title="Lost Mary BM6000">
          <SEOLink href="brands/lost-mary/bm6000-prefilled-pod-kit/" onNav={onNav}>Lost Mary BM6000</SEOLink> proves you don't have to trade style for power. This pocket-friendly vape clicks right in with <SEOLink href="product/lost-mary-bm6000-prefilled-pods/" onNav={onNav}>Lost Mary BM6000 Pods</SEOLink>, built with smart coils that bring out deep, balanced flavour.
        </ProductAccordion>
        <ProductAccordion id="m-hyola-pro-30k" title="Hyola Pro 30K">
          <SEOLink href="brands/hyola-ultra-30k-prefilled-pod-kit/" onNav={onNav}>Hyola Pro 30K</SEOLink> is made for serious puff counts and serious flavour. Its high-output battery and precision coil system push out up to 30,000 puffs without skipping a beat. Pair it with <SEOLink href="brands/hyola-ultra-30k-prefilled-pods/" onNav={onNav}>Hyola Pro 30K Pods</SEOLink> to lock in rich, layered blends.
        </ProductAccordion>
      </div>
    </section>

    {/* FAQ — single column on mobile */}
    <section style={{ padding: '8px 16px 28px', background: 'var(--cream)', borderTop: '1px solid var(--paper-3)' }}>
      <div style={{ textAlign: 'center', marginBottom: 8, paddingTop: 16 }}>
        <span className="eyebrow" style={{ fontSize: 10 }}>Help & support</span>
        <h2 className="display h-display" style={{ fontSize: 24, margin: '4px 0 0', letterSpacing: '-.02em' }}>Frequently asked questions</h2>
      </div>
      <div>
        <ProductAccordion id="m-faq-who" title="Who is Vape Big?">
          Vape Big is a UK Online Vape Shop that offers a wide range of products, including vapes, e-liquids, disposable devices, refillable kits, coils, and accessories. We focus on quality products and also provide a reliable shopping experience for both new and experienced vapers.
        </ProductAccordion>
        <ProductAccordion id="m-faq-legal" title="Are your vape products legal in the UK?">
          Yes. Every Vape we sell follows UK regulations. Our Online Vape Shop stocks only fully compliant Vapes and e-liquids, so you can buy with confidence knowing everything is safe and legal.
        </ProductAccordion>
        <ProductAccordion id="m-faq-genuine" title="Do you sell genuine branded vape products?">
          Definitely. We sell only genuine vapes from trusted brands which are of superior quality and are legal. To ensure authenticity in every order you place, we only source products from the verified suppliers.
        </ProductAccordion>
        <ProductAccordion id="m-faq-delivery" title="Do you offer free delivery?">
          Yes. Vape Big gives free UK delivery on qualifying orders. Grab your favourite Vapes and enjoy quick, cost-free shipping straight from our Vape Shop to your doorstep.
        </ProductAccordion>
        <ProductAccordion id="m-faq-returns" title="What is your returns policy?">
          We accept returns on unopened vapes and accessories within the specified time period. For more information on how to exchange or request a refund, visit our page for <SEOLink href="page/refunds-and-returns/" onNav={onNav}>Refunds and Returns</SEOLink>.
        </ProductAccordion>
        <ProductAccordion id="m-faq-age" title="Do I need to be over 18 to buy from Vape Big?">
          Yes, one should be above 18 years to buy from our Vape Shop. We follow strict age verification and run thorough checks at checkout to ensure safe, responsible sales of vapes and protect young customers from underage purchases.
        </ProductAccordion>
      </div>
    </section>

    {/* About Us */}
    <section style={{ padding: '32px 16px', background: 'var(--ink-100)', borderTop: '1px solid var(--paper-3)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ aspectRatio: '6/4', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <img src="https://www.vapebig.co.uk/assets/imgs/vpg/image.png" alt="About Vape Big" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
            <span className="eyebrow" style={{ fontSize: 10 }}>About us</span>
            <Wordmark size={26} />
            <span className="mono" style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blaze-2)', fontWeight: 600 }}>Your one-stop for vaping excellence</span>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'var(--ink-700)', margin: '0 0 14px' }}>
            We're more than an online vape store; our team are passionate and dedicated to providing top-quality vaping products, exceptional customer service, and a seamless shopping experience.
          </p>
          <h3 className="display h-display" style={{ fontSize: 16, fontWeight: 700, margin: '14px 0 6px', color: 'var(--ink-950)' }}>Our Mission</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'var(--ink-700)', margin: '0 0 18px' }}>
            Empower smokers and vapers on their journey towards a smoke-free, healthier lifestyle. We offer a diverse range of products for beginners and seasoned vapers alike — making the switch as smooth as possible.
          </p>
          <a href="/page/about-us/" onClick={(e) => { e.preventDefault(); }} className="btn btn-ink" style={{ display: 'inline-flex', padding: '12px 22px', borderRadius: 8, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700 }}>Read more <Icon name="arrow-r" size={12} /></a>
        </div>
      </div>
    </section>

    <MFooter onNav={onNav} />
  </div>
);

const MPLP = ({ onNav }) => {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [showAllNicSalts, setShowAllNicSalts] = React.useState(false);
  const nicSaltCards = [
    { name: 'Bar Juice 5000',  desc: 'All your favourite vape juice flavours',                 img: 'https://api.vapebig.co.uk/files/product_images/Cherry-Ice-10mg-Bar-Juice-Nic-Sa6887a13abdb99.webp',                                 href: 'https://www.vapebig.co.uk/brands/bar-juice-5000-nic-salt-e-liquids/' },
    { name: 'Elux Legend',     desc: 'Exact same tasty flavours from Elux disposables',         img: 'https://api.vapebig.co.uk/files/product_images/elux-legend-nic-salts-berry-lemonade-10ml659bcff84c88b-300x300.webp',                  href: 'https://www.vapebig.co.uk/collections/elux-legend-nic-salts/' },
    { name: 'Elf Bar ElfLiq',  desc: 'All official Elf Bar disposable vape flavours',           img: 'https://api.vapebig.co.uk/files/product_images/apple_blackcurrant_elfliq682746f6d83de.webp',                                          href: 'https://www.vapebig.co.uk/brands/elfliq-nic-salt-e-liquids-by-elf-bar/' },
    { name: 'SKE Crystal',     desc: 'All Crystal Bar disposable vape flavours',                img: 'https://api.vapebig.co.uk/files/product_images/lemon-peach-passionfruit6838549aacad6683d65619326d.webp',                              href: 'https://www.vapebig.co.uk/brands/ske-crystal-nic-salt-e-liquids/' },
    { name: 'Hayati Pro Max',  desc: 'Premium flavours by Hayati Pro Max',                      img: 'https://api.vapebig.co.uk/files/product_images/hayati-pro-max-salt-BERRY-LEMONADE-2656dee09f33bf67d16c2f2167d-300x300.webp',           href: 'https://www.vapebig.co.uk/brands/hayati-pro-max-nic-salt-e-liquids/' },
    { name: 'Ultimate',        desc: 'Smooth throat hit with long-lasting taste',               img: 'https://api.vapebig.co.uk/files/product_images/Ultimate-E-Liquid-100ml-SF-Villains-Madame-Chaos64f37719b9f25.webp',                    href: 'https://www.vapebig.co.uk/brands/ultimate-nic-salts/' },
    { name: 'Any 5 For £10',   desc: 'Unbeatable value on favourite flavours',                  img: 'https://api.vapebig.co.uk/files/product_images/nic-salts-any-5-for-10-696cc96bc1fd9.webp',                                             href: 'https://www.vapebig.co.uk/collections/any-5-for-10-on-nic-salts/' },
    { name: 'Any 4 For £10',   desc: 'Big savings, more flavours, less spend',                  img: 'https://api.vapebig.co.uk/files/product_images/nic-salts-any-4-for-10-696cc9532fc4e.webp',                                             href: 'https://www.vapebig.co.uk/collections/any-4-for-10/' },
  ];
  const visibleNicSalts = showAllNicSalts ? nicSaltCards : nicSaltCards.slice(0, 3);
  return (
    <div data-screen-label="15 Listing — mobile">
      <MobileHeader onNav={onNav} />

      {/* Breadcrumb band */}
      <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '10px 16px' }}>
        <Breadcrumb items={['Home', 'Shop', 'Big Puff Vapes']} />
      </div>

      {/* Title section */}
      <section style={{ background: 'var(--paper)', padding: '14px 16px 16px', borderBottom: '1px solid var(--paper-3)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 14, flexWrap: 'wrap' }}>
          <h1 className="display h-display" style={{ fontSize: 28, color: 'var(--ink-950)', margin: 0, letterSpacing: '-.02em' }}>Big Puff Vapes</h1>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <div><div className="display" style={{ fontWeight: 700, fontSize: 18, color: 'var(--blaze-2)', lineHeight: 1 }}>78</div><div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-500)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 2 }}>products</div></div>
            <div><div className="display" style={{ fontWeight: 700, fontSize: 18, color: 'var(--ink-950)', lineHeight: 1 }}>£3+</div><div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-500)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 2 }}>from</div></div>
          </div>
        </div>
      </section>

      {/* PLP intro — short description + sub-category cards */}
      <section style={{ background: 'var(--paper)', padding: '16px 16px 4px' }}>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--ink-700)', margin: '0 0 16px' }}>
          Nic Salt E-Liquids deliver smooth, fast-absorbing nicotine for cigarette-like satisfaction without harshness. Popular brands like Elux, Elf Bar ElfLiq, Hayati Pro Max, Ultimate, and SKE Crystal Nic Salt give you bold flavour with a gentle throat hit. With strengths from 5mg to 20mg, Nic Salts make vaping simple, satisfying, and closer to smoking but without the harsh burn.
        </p>
        <h2 className="display h-display" style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px', letterSpacing: '-.015em', color: 'var(--ink-950)' }}>Nic Salt Range</h2>
        <div style={{ display: 'grid', gap: 8, marginBottom: 12 }}>
          {visibleNicSalts.map((c) => (
            <a key={c.name} href={c.href} onClick={(e) => { e.preventDefault(); }} style={{
              display: 'grid', gridTemplateColumns: '64px 1fr', gap: 10, padding: 10,
              background: '#E9ECEF', borderRadius: 9, color: 'var(--ink-900)', cursor: 'pointer',
            }}>
              <img src={c.img} alt={c.name} loading="lazy" width="64" height="64" style={{ width: '100%', maxWidth: 64, height: 'auto', maxHeight: 64, objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3, minWidth: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.01em', color: 'var(--ink-950)', lineHeight: 1.2 }}>{c.name}</span>
                <span style={{ fontSize: 11.5, color: '#474f57', lineHeight: 1.35 }}>{c.desc}</span>
              </div>
            </a>
          ))}
        </div>
        <button
          onClick={() => setShowAllNicSalts(v => !v)}
          className="btn"
          style={{ width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', border: '1.5px solid var(--ink-200)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
        >
          {showAllNicSalts ? 'Show less' : `Show ${nicSaltCards.length - 3} more`} <Icon name={showAllNicSalts ? 'chev-u' : 'chev-d'} size={13} />
        </button>
      </section>
      <div style={{ position: 'sticky', top: 88, background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 20 }}>
        <span style={{ fontSize: 12.5, color: 'var(--ink-600)' }}>78 results</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setFilterOpen(true)} style={{ padding: '7px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 12, fontWeight: 600, display: 'inline-flex', gap: 6 }}><Icon name="tune" size={13} /> Filter <span style={{ background: 'var(--violet-500)', color: '#fff', borderRadius: 999, padding: '0 6px', fontSize: 10 }}>3</span></button>
          <button style={{ padding: '7px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 12, fontWeight: 600, display: 'inline-flex', gap: 6 }}>Sort <Icon name="chev-d" size={11} /></button>
        </div>
      </div>
      <div style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, background: 'var(--paper)' }}>
        {[...HERO_PRODUCTS, ...HERO_PRODUCTS.slice(0, 4)].map((p, i) => <MProductCard key={i} p={p} onNav={onNav} />)}
      </div>
      <div style={{ padding: '20px 16px 28px', background: 'var(--paper)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
          <button className="btn btn-soft" style={{ width: 38, height: 38, padding: 0, borderRadius: 8, display: 'grid', placeItems: 'center' }}><Icon name="chev-l" size={13} /></button>
          {[1, 2, 3, 4].map(n => (
            <button key={n} className="btn" style={{ width: 38, height: 38, padding: 0, borderRadius: 8, fontSize: 13, background: n === 1 ? 'var(--ink-950)' : 'transparent', color: n === 1 ? '#fff' : 'var(--ink-800)', border: n === 1 ? 'none' : '1.5px solid var(--ink-200)' }}>{n}</button>
          ))}
          <button className="btn btn-soft" style={{ width: 38, height: 38, padding: 0, borderRadius: 8, display: 'grid', placeItems: 'center' }}><Icon name="chev" size={13} /></button>
        </div>
        <div style={{ textAlign: 'center', fontSize: 11.5, color: 'var(--ink-500)', marginTop: 10 }}>Showing 1–24 of 78</div>
      </div>

      {/* SEO copy */}
      <div style={{ padding: '8px 16px 0', background: 'var(--paper)' }}>
        <h3 className="display h-display" style={{ fontSize: 18, marginTop: 0, marginBottom: 10, letterSpacing: '-.015em' }}>About Big Puff Vapes at Vape Big</h3>
        <p style={{ fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.7, margin: '0 0 10px' }}>Big Puff Vapes are pre-charged, pre-filled vape devices designed to be used straight out of the box. At Vape Big we stock the latest UK-legal devices from Hayati, Lost Mary, SKE Crystal, Elf Bar, IVG and more — including the new generation of refillable, pod-replaceable kits that comply with the upcoming UK disposable ban.</p>
        <p style={{ fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.7, margin: 0 }}>All orders ship with same-day dispatch from our Kington warehouse. Free delivery on orders over £35.</p>
      </div>

      {/* PLP FAQ — CSS-only, indexable without JS */}
      <div style={{ padding: '24px 16px 24px', background: 'var(--paper)' }}>
        <span className="eyebrow" style={{ fontSize: 10 }}>Big Puff Vapes FAQ</span>
        <h3 className="display h-display" style={{ fontSize: 20, margin: '4px 0 10px', letterSpacing: '-.015em' }}>Frequently asked questions</h3>
        <div>
          <ProductAccordion id="m-plp-faq-bigpuff-what" defaultOpen title="What are Big Puff Vapes?">
            Big Puff Vapes are the new generation of refillable, pod-replaceable vape kits — designed to look and feel like a disposable but with a USB-C rechargeable battery and swappable pre-filled pods. They comply with the UK's June 2026 disposable ban and typically deliver 6,000 to 50,000 puffs per kit.
          </ProductAccordion>
          <ProductAccordion id="m-plp-faq-bigpuff-vs-disposable" title="How are they different from disposable vapes?">
            The device body is reusable. Instead of binning the whole thing when the juice runs out, you click in a fresh pre-filled pod. That makes them cheaper per puff, far less wasteful, and post-June 2026 they're the only legal alternative.
          </ProductAccordion>
          <ProductAccordion id="m-plp-faq-bigpuff-puffs" title="How long does one pod last?">
            Pod capacity varies by kit. A 6K pod gives roughly a week of moderate use; a 25K Pro Ultra pod lasts most users 2–3 weeks. Real-world numbers depend on draw depth and frequency.
          </ProductAccordion>
          <ProductAccordion id="m-plp-faq-bigpuff-flavours" title="Which flavours are available?">
            We stock the full UK-legal flavour ranges from every major brand — Blue Razz Cherry, Mr Blue, Cherry Cola, Triple Mango, Banana Ice, Strawberry Ice and dozens more. Use the Flavour filter to narrow down to your favourite category.
          </ProductAccordion>
          <ProductAccordion id="m-plp-faq-bigpuff-strength" title="10mg or 20mg — which should I choose?">
            20mg is closer to a cigarette throat hit and is what most ex-smokers prefer. 10mg is a milder option — good for lighter users or anyone stepping down their nicotine intake.
          </ProductAccordion>
          <ProductAccordion id="m-plp-faq-bigpuff-delivery" title="When will my order arrive?">
            Place your order before 8pm Mon–Sat and we'll dispatch it the same day. Standard Royal Mail Tracked 48 is free over £35 (2–3 working days). Next-day Tracked 24 is £3.95.
          </ProductAccordion>
        </div>
      </div>

      {/* Filter sheet */}
      {filterOpen && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,8,20,.55)', zIndex: 50, display: 'flex', alignItems: 'flex-end' }} onClick={() => setFilterOpen(false)}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: '18px 18px 0 0', width: '100%', maxHeight: '88%', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px 18px 0', position: 'sticky', top: 0, background: '#fff', zIndex: 2 }}>
              <div style={{ width: 40, height: 4, background: 'var(--ink-200)', borderRadius: 99, margin: '0 auto 12px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid var(--paper-3)' }}>
                <h3 className="display h-display" style={{ fontWeight: 700, fontSize: 18, margin: 0, letterSpacing: '-.015em' }}>Filters</h3>
                <button onClick={() => setFilterOpen(false)} style={{ width: 32, height: 32, display: 'grid', placeItems: 'center', borderRadius: 8, color: 'var(--ink-600)' }}><Icon name="x" size={16} /></button>
              </div>
            </div>

            <div style={{ padding: '4px 18px 0' }}>
              {[
                { name: 'Brand', items: [['Hayati', 26], ['Lost Mary', 14], ['SKE Crystal', 22], ['Elf Bar', 29], ['IVG', 18], ['OXBAR', 9]] },
                { name: 'Price', items: [['Under £5', 24], ['£5 – £10', 38], ['£10 – £20', 14], ['£20+', 2]] },
                { name: 'Puff Count', items: [['Up to 600', 8], ['1K – 6K', 22], ['6K – 10K', 18], ['10K – 20K', 16], ['20K+', 14]] },
                { name: 'Strength', items: [['10mg', 28], ['20mg', 50]] },
                { name: 'Flavour', items: [['Berry', 24], ['Citrus', 18], ['Mint & Menthol', 14], ['Tropical', 22], ['Dessert', 12], ['Tobacco', 6]] },
              ].map(grp => (
                <details key={grp.name} open={grp.name === 'Brand'} style={{ borderBottom: '1px solid var(--paper-3)' }}>
                  <summary style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', cursor: 'pointer' }}>
                    <span className="display" style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--ink-950)' }}>{grp.name}</span>
                    <span style={{ color: 'var(--ink-500)', display: 'inline-flex' }}><Icon name="chev-d" size={13} /></span>
                  </summary>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingBottom: 12 }}>
                    {grp.items.map(([l, c]) => (
                      <label key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', fontSize: 13.5, cursor: 'pointer' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                          <input type="checkbox" defaultChecked={l === 'Hayati'} style={{ accentColor: 'var(--blaze)', width: 17, height: 17, cursor: 'pointer' }} />
                          {l}
                        </span>
                        <span style={{ color: 'var(--ink-400)', fontSize: 12 }}>{c}</span>
                      </label>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div style={{ position: 'sticky', bottom: 0, padding: '14px 18px', borderTop: '1px solid var(--paper-3)', background: '#fff', display: 'flex', gap: 10 }}>
              <button className="btn btn-soft" style={{ flex: 1, padding: '13px 14px', borderRadius: 10, fontSize: 13 }}>Clear all</button>
              <button className="btn btn-ink" onClick={() => setFilterOpen(false)} style={{ flex: 2, padding: '13px 14px', borderRadius: 10, fontSize: 13 }}>Show 78 results</button>
            </div>
          </div>
        </div>
      )}
      <MFooter onNav={onNav} />
    </div>
  );
};

const MPDP = ({ onNav }) => {
  const p = HERO_PRODUCTS[0];
  const [flavour, setFlavour] = React.useState('Blue Razz Cherry');
  const [strength, setStrength] = React.useState('20mg');
  const [tab, setTab] = React.useState('Description');
  const [qty, setQty] = React.useState(1);
  return (
    <div data-screen-label="16 Product — mobile">
      <MobileHeader onNav={onNav} />

      {/* Title / rating / price — above image */}
      <div style={{ padding: '16px 16px 14px', background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)' }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--violet-700)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{p.brand}</div>
        <h1 className="display h-display" style={{ fontSize: 24, margin: '6px 0 10px', letterSpacing: '-.02em', lineHeight: 1.15 }}>{p.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <StarRow value={4.9} size={13} /> <span style={{ fontSize: 12, color: 'var(--ink-700)' }}><strong>4.9</strong> · 980</span>
          <span className="chip chip-good" style={{ fontSize: 9, marginLeft: 'auto' }}><Icon name="check" size={9} /> In stock</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <PriceTag price={p.price} was={p.was} big />
          <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', borderRadius: 999, overflow: 'hidden', background: 'var(--ink-950)', color: '#fff' }}>
            <span className="display" style={{ fontSize: 12, fontWeight: 700, padding: '5px 11px', letterSpacing: '-.005em' }}>3 for £42</span>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div style={{ aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--paper-2), var(--paper-3))', position: 'relative', display: 'grid', placeItems: 'center' }}>
        <span className="chip chip-lime" style={{ position: 'absolute', top: 14, left: 14, fontSize: 10 }}>Bestseller</span>
        <span className="chip chip-coral" style={{ position: 'absolute', top: 14, right: 14, fontSize: 10 }}>–17%</span>
        <img src={p.img} style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
        <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 5 }}>
          {[0, 1, 2, 3].map(i => <div key={i} style={{ width: i === 0 ? 18 : 6, height: 6, borderRadius: 99, background: i === 0 ? 'var(--ink-950)' : 'rgba(0,0,0,.3)' }} />)}
        </div>
      </div>
      <div style={{ padding: '18px 16px', background: 'var(--paper)' }}>
        {/* Rewards earn — visible when logged-in */}
        <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--violet-50)', border: '1px solid var(--violet-100)', borderRadius: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--blaze)', color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Icon name="trophy" size={18} stroke={2} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, color: 'var(--ink-900)', lineHeight: 1.35 }}>
              Earn <strong style={{ color: 'var(--blaze-2)' }}>140 Big Points</strong> on this order
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-600)', marginTop: 2 }}>
              Worth £1.40 off your next purchase · <a style={{ color: 'var(--violet-700)', fontWeight: 600, textDecoration: 'underline' }}>How it works</a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <div className="display" style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>Flavour</div>
          <div style={{ position: 'relative' }}>
            <select
              value={flavour}
              onChange={(e) => setFlavour(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 38px 12px 14px',
                borderRadius: 10,
                border: '1.5px solid var(--ink-200)',
                background: '#fff',
                fontSize: 13.5,
                fontWeight: 600,
                color: 'var(--ink-900)',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {['Blue Razz Cherry', 'Mr Blue', 'Cherry Cola', 'Triple Mango', 'Banana Ice', 'Pink Lemonade'].map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-500)', display: 'inline-flex' }}>
              <Icon name="chev-d" size={14} />
            </span>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div className="display" style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Strength</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['10mg', '20mg'].map(s => (
              <button key={s} onClick={() => setStrength(s)} style={{ flex: 1, padding: 10, borderRadius: 9, border: strength === s ? '2px solid var(--ink-950)' : '1.5px solid var(--ink-200)', background: strength === s ? 'var(--ink-50)' : '#fff', fontSize: 13, fontWeight: 600 }}>{s}</button>
            ))}
          </div>
        </div>

        {/* Qty + Add to cart */}
        <div style={{ display: 'flex', gap: 8, marginTop: 16, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--ink-200)', borderRadius: 10, overflow: 'hidden', height: 48 }}>
            <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '0 12px', height: '100%' }}><Icon name="minus" size={13} /></button>
            <span className="display" style={{ minWidth: 28, textAlign: 'center', fontWeight: 700, fontSize: 14 }}>{qty}</span>
            <button onClick={() => setQty(qty + 1)} style={{ padding: '0 12px', height: '100%' }}><Icon name="plus" size={13} /></button>
          </div>
          <button onClick={() => onNav?.('mcart')} className="btn btn-ink" style={{ flex: 1, padding: '0 14px', height: 48, borderRadius: 10, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Icon name="bag" size={15} /> Add to cart · £{(p.price * qty).toFixed(2)}
          </button>
          <button className="btn btn-soft" style={{ width: 48, height: 48, borderRadius: 10, padding: 0, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="heart" size={18} /></button>
        </div>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            ['truck', 'Same-day dispatch'],
            ['shield', '100% authentic'],
            ['rotate', '14-day returns'],
            ['lock', 'Klarna available'],
          ].map(([i, l]) => (
            <div key={l} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11.5, padding: 10, background: 'var(--paper-2)', borderRadius: 9 }}>
              <span style={{ color: 'var(--violet-700)' }}><Icon name={i} size={14} /></span><strong>{l}</strong>
            </div>
          ))}
        </div>

        {/* Tabs — Description / Specs / Replacement / Reviews / Delivery */}
        <div style={{ marginTop: 22, marginLeft: -16, marginRight: -16, borderTop: '1px solid var(--paper-3)', borderBottom: '1px solid var(--paper-3)' }}>
          <div className="no-scrollbar" style={{ display: 'flex', overflowX: 'auto', padding: '0 16px' }}>
            {['Description', 'Specifications', 'Replacement Item', 'Reviews (980)', 'Delivery & Returns'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="display"
                style={{
                  padding: '12px 4px',
                  marginRight: 16,
                  fontSize: 13,
                  fontWeight: tab === t ? 700 : 500,
                  color: tab === t ? 'var(--ink-950)' : 'var(--ink-500)',
                  borderBottom: tab === t ? '2px solid var(--ink-950)' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >{t}</button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          {tab === 'Description' && (
            <div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-700)', lineHeight: 1.65, margin: '0 0 12px' }}>The Hayati Pro Ultra Plus 25K is a refillable pod-vape with dual-mesh coil and 1100mAh battery. 25,000 puffs · 18ml e-liquid (2× 9ml pods) · USB-C rechargeable.</p>
              <h4 className="display" style={{ fontSize: 14, fontWeight: 700, margin: '14px 0 6px' }}>What's in the box</h4>
              <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.7, margin: 0 }}>
                <li>1× Hayati Pro Ultra Plus battery device</li>
                <li>2× pre-filled flavour pods</li>
                <li>1× USB-C charging cable</li>
                <li>User manual</li>
              </ul>
            </div>
          )}

          {tab === 'Specifications' && (
            <div style={{ background: 'var(--cream)', border: '1px solid var(--paper-3)', borderRadius: 12, padding: '4px 14px' }}>
              {[
                ['Brand', 'Hayati'], ['Model', 'Pro Ultra Plus 25K'], ['Form factor', 'Pod kit (refillable)'],
                ['Puff count', '~25,000'], ['Battery', '1100 mAh, USB-C'], ['E-liquid', '18 ml (2 × 9 ml)'],
                ['Strength', '10mg / 20mg'], ['Coil', 'Dual mesh, 1.0Ω'], ['Compliance', 'TPD compliant'],
              ].map(([k, v], i) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: i ? '1px solid var(--paper-3)' : 'none', fontSize: 13 }}>
                  <span style={{ color: 'var(--ink-600)' }}>{k}</span><span style={{ fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'Replacement Item' && (
            <div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-700)', lineHeight: 1.65, margin: '0 0 14px' }}>
                When your pre-filled pod is empty, click in a replacement. Available in every flavour, sold separately.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {HERO_PRODUCTS.filter(x => /Pods|Refill/i.test(x.name) || x.puffs === 'Refill').concat(HERO_PRODUCTS.slice(0, 3)).slice(0, 4).map((rp, i) => <MProductCard key={i} p={rp} onNav={onNav} />)}
              </div>
            </div>
          )}

          {tab === 'Reviews (980)' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                <span className="display" style={{ fontSize: 36, fontWeight: 800, color: 'var(--ink-950)' }}>4.9</span>
                <span style={{ fontSize: 14, color: 'var(--ink-500)' }}>/ 5 · 980 reviews</span>
              </div>
              <StarRow value={4.9} size={15} />
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { n: 'Charlie T.', d: '3 days ago', r: 5, t: 'Best Hayati yet', b: 'Switched from the 6K Pro Max. Flavour is significantly cleaner and the pod swap is genuinely two seconds.' },
                  { n: 'Maria S.', d: '1 week ago', r: 5, t: 'Excellent value', b: 'Got the 3 for £42 deal — works out at £14 a pod kit which is unbeatable. Blue Razz Cherry is the standout.' },
                ].map(r => (
                  <div key={r.n} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div className="display" style={{ fontWeight: 700, fontSize: 13 }}>{r.n}</div>
                        <div style={{ fontSize: 11, color: 'var(--ink-500)' }}>{r.d}</div>
                      </div>
                      <StarRow value={r.r} size={11} />
                    </div>
                    <div className="display" style={{ fontWeight: 700, fontSize: 14, margin: '8px 0 4px' }}>{r.t}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-700)', lineHeight: 1.55 }}>{r.b}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-ink" style={{ marginTop: 14, padding: '11px 18px', borderRadius: 10, fontSize: 12.5 }}>Write a review</button>
            </div>
          )}

          {tab === 'Delivery & Returns' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Standard — Free over £35', '2–3 working days · Royal Mail Tracked 48'],
                ['Express — £3.95', 'Next working day if ordered by 8pm'],
                ['Returns — 14 days', 'Unopened only · contact us first'],
              ].map(([h, s]) => (
                <div key={h} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14 }}>
                  <div className="display" style={{ fontWeight: 700, fontSize: 14.5 }}>{h}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-700)', marginTop: 4, lineHeight: 1.5 }}>{s}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PDP FAQ — CSS-only accordion, indexable without JS */}
        <div style={{ marginTop: 24, paddingTop: 22, borderTop: '1px solid var(--paper-3)' }}>
          <span className="eyebrow" style={{ fontSize: 10 }}>Help & support</span>
          <h3 className="display h-display" style={{ fontSize: 20, margin: '4px 0 12px', letterSpacing: '-.015em' }}>Frequently asked questions</h3>
          <div>
            <ProductAccordion id="m-pdp-faq-charge" defaultOpen title="How long does the Pro Ultra Plus take to charge?">
              The Hayati Pro Ultra Plus charges from empty to full in roughly 45 minutes via USB-C. LEDs on the device indicate charging progress. Use the supplied cable — any standard USB-C wall plug at 5W works fine.
            </ProductAccordion>
            <ProductAccordion id="m-pdp-faq-pods" title="How many puffs does each pod give?">
              The kit comes with two pre-filled 9 ml pods, giving you around 25,000 puffs in total. Real-world numbers vary based on how deep your draws are — most users get 7–10 days of heavy use per pod.
            </ProductAccordion>
            <ProductAccordion id="m-pdp-faq-compliant" title="Is this device UK / TPD compliant?">
              Yes. The Pro Ultra Plus 25K is fully TPD-compliant — refillable, rechargeable, and uses replaceable pre-filled pods. It complies with the upcoming UK ban on single-use disposables.
            </ProductAccordion>
            <ProductAccordion id="m-pdp-faq-strength" title="Which strength should I pick — 10mg or 20mg?">
              20mg is closer to a cigarette throat hit and is what most ex-smokers prefer. 10mg is a milder option — better for lighter users or anyone stepping down their nicotine intake.
            </ProductAccordion>
            <ProductAccordion id="m-pdp-faq-delivery" title="When will my order arrive?">
              Order before 8pm Monday–Saturday for same-day dispatch. Standard delivery (Royal Mail Tracked 48) is free over £35 and lands in 2–3 working days. Next-day Tracked 24 is £3.95.
            </ProductAccordion>
            <ProductAccordion id="m-pdp-faq-returns" title="Can I return it if I change my mind?">
              We accept returns on unopened pod kits within 14 days. For hygiene reasons we can't accept opened pods or used devices. Contact us first and we'll arrange the return.
            </ProductAccordion>
          </div>
        </div>
      </div>

      {/* Sticky bottom bar removed — Add to bag lives inline above */}
      <MFooter onNav={onNav} />
    </div>
  );
};

const MCart = ({ onNav }) => {
  const initial = [
    { ...HERO_PRODUCTS[0], qty: 2, flavour: 'Blue Razz Cherry', strength: '20mg' },
    { ...HERO_PRODUCTS[1], qty: 1, flavour: 'Banana Ice', strength: '20mg' },
    { ...HERO_PRODUCTS[3], qty: 3, flavour: 'Cola Ice', strength: '10mg' },
  ];
  const [items, setItems] = React.useState(initial);
  const [savedItems, setSavedItems] = React.useState([]);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(id);
  }, [toast]);

  const setQty = (i, delta) => setItems(items.map((it, idx) => idx === i ? { ...it, qty: Math.max(1, it.qty + delta) } : it));
  const saveForLater = (i) => {
    const it = items[i];
    setItems(items.filter((_, idx) => idx !== i));
    setSavedItems([it, ...savedItems]);
    setToast({ msg: 'Saved for later', undo: () => { setItems(prev => [...prev, it]); setSavedItems(prev => prev.filter(x => x !== it)); setToast(null); } });
  };
  const moveToBag = (it) => {
    setSavedItems(savedItems.filter(x => x !== it));
    setItems([...items, it]);
    setToast({ msg: 'Moved back to your bag', undo: null });
  };
  const removeItem = (i) => {
    const it = items[i];
    setItems(items.filter((_, idx) => idx !== i));
    setToast({ msg: 'Removed', undo: () => { setItems(prev => [...prev, it]); setToast(null); } });
  };

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= 35 ? 0 : 3.95;
  const total = subtotal + shipping;

  return (
    <div data-screen-label="17 Cart — mobile">
      <MobileHeader onNav={onNav} />

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 120, left: '50%', transform: 'translateX(-50%)', background: 'var(--ink-950)', color: '#fff', borderRadius: 12, padding: '12px 14px', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 12, zIndex: 200, fontSize: 12.5, maxWidth: 'calc(100% - 32px)', width: 'max-content' }}>
          <span style={{ color: 'var(--lime)', display: 'inline-flex', flexShrink: 0 }}><Icon name="check" size={14} stroke={2.4} /></span>
          <span style={{ flex: 1, whiteSpace: 'nowrap' }}>{toast.msg}</span>
          {toast.undo && <button onClick={toast.undo} style={{ color: 'var(--lime)', fontWeight: 700, textDecoration: 'underline', flexShrink: 0 }}>Undo</button>}
        </div>
      )}

      <div style={{ padding: 14, background: 'var(--paper)' }}>
        {items.length > 0 && (
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 12, marginBottom: 10 }}>
            {shipping === 0 ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 12 }}>
                <span style={{ color: 'var(--ink-700)' }}>You qualify for <strong style={{ color: 'var(--good)' }}>FREE delivery</strong> — nice one.</span>
                <span style={{ color: 'var(--good)', display: 'inline-flex' }}><Icon name="check" size={13} stroke={2.4} /></span>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 12 }}>
                <span style={{ color: 'var(--ink-700)' }}>Add <strong style={{ color: 'var(--blaze-2)' }}>£{(35 - subtotal).toFixed(2)}</strong> more for <strong>FREE delivery</strong>.</span>
                <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-500)' }}>£{subtotal.toFixed(2)} / £35</span>
              </div>
            )}
            <div style={{ height: 5, background: 'var(--paper-2)', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ width: `${Math.min(100, (subtotal / 35) * 100)}%`, height: '100%', background: shipping === 0 ? 'linear-gradient(90deg, var(--violet-500), var(--lime))' : 'var(--blaze)', borderRadius: 99, transition: 'width .3s' }} />
            </div>
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--paper-3)', fontSize: 11.5, color: 'var(--ink-600)', display: 'flex', gap: 7, alignItems: 'flex-start', lineHeight: 1.45 }}>
              <span style={{ color: 'var(--blaze-2)', display: 'inline-flex', flexShrink: 0, marginTop: 1 }}><Icon name="info" size={12} stroke={2} /></span>
              <span>Adding a coupon or redeeming Big Points at checkout? If it drops your subtotal under £35, free delivery no longer applies.</span>
            </div>
          </div>
        )}

        {/* Active items */}
        {items.length > 0 ? (
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, overflow: 'hidden' }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: 10, padding: 12, borderTop: i ? '1px solid var(--paper-3)' : 'none' }}>
                <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 8, display: 'grid', placeItems: 'center' }}>
                  <img src={it.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.25 }}>{it.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-500)', marginTop: 2 }}>{it.strength} · {it.flavour}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid var(--ink-200)', borderRadius: 7, marginTop: 8 }}>
                    <button onClick={() => setQty(i, -1)} style={{ width: 26, height: 26 }}><Icon name="minus" size={11} /></button>
                    <span style={{ minWidth: 22, textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{it.qty}</span>
                    <button onClick={() => setQty(i, 1)} style={{ width: 26, height: 26 }}><Icon name="plus" size={11} /></button>
                  </div>
                  <div style={{ display: 'flex', gap: 14, marginTop: 8, fontSize: 11.5 }}>
                    <a onClick={() => saveForLater(i)} style={{ color: 'var(--ink-500)', cursor: 'pointer', display: 'inline-flex', gap: 4, alignItems: 'center' }}><Icon name="heart" size={11} /> Save for later</a>
                    <a onClick={() => removeItem(i)} style={{ color: 'var(--ink-500)', cursor: 'pointer', display: 'inline-flex', gap: 4, alignItems: 'center' }}><Icon name="trash" size={11} /> Remove</a>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <PriceTag price={it.price * it.qty} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: '28px 16px', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--paper-2)', display: 'inline-grid', placeItems: 'center', color: 'var(--ink-500)', marginBottom: 12 }}>
              <Icon name="bag" size={22} stroke={1.8} />
            </div>
            <div className="display" style={{ fontWeight: 700, fontSize: 16 }}>Your bag is empty</div>
            <p style={{ fontSize: 12.5, color: 'var(--ink-600)', marginTop: 4 }}>Add something nice — same-day dispatch on orders before 8pm.</p>
            <button onClick={() => onNav?.('mplp')} className="btn btn-ink" style={{ marginTop: 14, padding: '10px 16px', borderRadius: 10, fontSize: 12.5 }}>Shop Big Puff Vapes</button>
          </div>
        )}

        {/* Saved for later */}
        {savedItems.length > 0 && (
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 14, marginTop: 12 }}>
            <div className="display" style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Saved for later <span style={{ color: 'var(--ink-500)', fontWeight: 500, fontSize: 12 }}>({savedItems.length})</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {savedItems.map((it, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 56, height: 56, background: 'var(--paper-2)', borderRadius: 8, display: 'grid', placeItems: 'center' }}>
                    <img src={it.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.25, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-500)', marginTop: 2 }}>{it.strength} · qty {it.qty}</div>
                  </div>
                  <button onClick={() => moveToBag(it)} className="btn btn-soft" style={{ padding: '7px 11px', borderRadius: 8, fontSize: 11.5, whiteSpace: 'nowrap' }}>Move to bag</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order summary */}
        {items.length > 0 && (
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 14, marginTop: 12 }}>
            {[['Subtotal', subtotal.toFixed(2)], ['Delivery', shipping === 0 ? 'FREE' : shipping.toFixed(2)]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0' }}>
                <span style={{ color: 'var(--ink-700)' }}>{k}</span><span style={{ fontWeight: v === 'FREE' ? 700 : 500, color: v === 'FREE' ? 'var(--good)' : 'var(--ink-900)' }}>{v === 'FREE' ? v : `£${v}`}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--paper-3)', marginTop: 8, paddingTop: 10 }}>
              <span className="display" style={{ fontWeight: 700, fontSize: 16 }}>Total</span>
              <span className="display" style={{ fontWeight: 800, fontSize: 22 }}>£{total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Related products */}
        <div style={{ marginTop: 24 }}>
          <h3 className="display h-display" style={{ fontSize: 18, margin: '0 0 12px' }}>Related products</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {ELIQUIDS.slice(0, 4).map(p => <MProductCard key={p.name} p={p} onNav={onNav} />)}
          </div>
        </div>
      </div>

      {items.length > 0 && (
        <div style={{ position: 'sticky', bottom: 60, background: '#fff', borderTop: '1px solid var(--paper-3)', padding: '10px 14px', display: 'flex', gap: 8, zIndex: 25 }}>
          <button onClick={() => onNav?.('mcheckout')} className="btn btn-ink" style={{ flex: 1, padding: '0 14px', height: 48, borderRadius: 10, fontSize: 13.5 }}>Checkout · £{total.toFixed(2)} <Icon name="arrow-r" size={15} /></button>
        </div>
      )}
      <MFooter onNav={onNav} />
    </div>
  );
};

const MCheckout = ({ onNav }) => {
  const [payMethod, setPayMethod] = React.useState('card');
  const totalQty = 6; // [2, 1, 3]
  return (
  <div data-screen-label="18 Checkout — mobile">
    <MobileHeader onNav={onNav} />
    <div style={{ padding: 14, background: 'var(--paper)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14, fontSize: 11, color: 'var(--ink-500)' }}>
        {['Account', 'Delivery', 'Payment', 'Review'].map((s, i) => (
          <React.Fragment key={s}>
            <span style={{ color: i === 1 ? 'var(--ink-900)' : 'var(--ink-500)', fontWeight: i === 1 ? 600 : 400 }}>{s}</span>
            {i < 3 && <Icon name="chev" size={9} />}
          </React.Fragment>
        ))}
      </div>

      <details open style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14, marginBottom: 10 }}>
        <summary style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', listStyle: 'none' }}>
          <span className="display" style={{ fontWeight: 700, fontSize: 14 }}>1. Email</span>
          <Icon name="chev-d" size={13} />
        </summary>
        <input defaultValue="charlie@example.com" style={{ width: '100%', marginTop: 10, padding: 11, borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13 }} />
      </details>

      <details open style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14, marginBottom: 10 }}>
        <summary style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', listStyle: 'none' }}>
          <span className="display" style={{ fontWeight: 700, fontSize: 14 }}>2. Delivery address</span>
          <Icon name="chev-d" size={13} />
        </summary>
        {(() => {
          const fieldBox = { padding: '10px 12px', borderRadius: 9, border: '1.5px solid var(--ink-200)', background: '#fff', minWidth: 0 };
          const labelStyle = { fontSize: 10.5, color: 'var(--ink-500)', fontWeight: 500, display: 'block', marginBottom: 2 };
          const reqDot = <span style={{ color: '#c63e3e', marginLeft: 2 }}>*</span>;
          const inputStyle = { width: '100%', border: 0, outline: 0, background: 'transparent', fontSize: 13, color: 'var(--ink-900)', fontFamily: 'inherit', padding: 0, minWidth: 0 };
          const Field = ({ label, required, span, children }) => (
            <div style={{ ...fieldBox, gridColumn: span ? `span ${span}` : undefined }}>
              <label style={labelStyle}>{label}{required && reqDot}</label>
              {children}
            </div>
          );
          return (
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8, marginTop: 10 }}>
              <Field label="First name" required><input defaultValue="Charlie" style={inputStyle} /></Field>
              <Field label="Last name" required><input defaultValue="Thomas" style={inputStyle} /></Field>
              <Field label="Country" required span={2}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <select defaultValue="UK" style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                    <option value="UK">United Kingdom</option>
                    <option value="IE">Ireland</option>
                  </select>
                  <Icon name="chev-d" size={12} />
                </div>
              </Field>
              <Field label="Company (optional)" span={2}><input style={inputStyle} /></Field>
              <Field label="Address line 1" required span={2}><input defaultValue="124 Old Street" style={inputStyle} /></Field>
              <Field label="Address line 2 (optional)" span={2}><input style={inputStyle} /></Field>
              <Field label="City" required><input defaultValue="London" style={inputStyle} /></Field>
              <Field label="County"><input defaultValue="Greater London" style={inputStyle} /></Field>
              <Field label="Postcode" required><input defaultValue="EC1V 9HX" style={inputStyle} /></Field>
              <Field label="Phone number" required><input defaultValue="07700 900123" style={inputStyle} /></Field>
            </div>
          );
        })()}
        {/* Shipping methods */}
        <h4 className="display" style={{ margin: '14px 0 8px', fontWeight: 700, fontSize: 13 }}>Shipping method</h4>
        {[
          { k: 't48', l: 'Tracked 48', s: '2–4 working days', p: 'FREE', sub: ['Free when over £35', 'Track your parcel', 'Tracked 48 hours', '2–4 working days', 'Same-day dispatch for orders before 4pm (Mon–Fri)'] },
          { k: 't24', l: 'Tracked 24', s: '1–2 working days', p: '£3.99', sub: ['Track your parcel', 'Tracked 24 hours', '1–2 working days', 'Same-day dispatch for orders before 4pm (Mon–Fri)'] },
        ].map((d, i) => (
          <label key={d.k} style={{ display: 'block', padding: 12, border: i === 0 ? '2px solid var(--ink-950)' : '1.5px solid var(--ink-200)', borderRadius: 9, marginBottom: 8, background: i === 0 ? 'var(--ink-50)' : '#fff', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <input type="radio" name="delm" defaultChecked={i === 0} style={{ accentColor: 'var(--blaze)', width: 16, height: 16, cursor: 'pointer', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="display" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink-950)' }}>{d.l} <span style={{ color: 'var(--ink-500)', fontSize: 12, fontWeight: 500 }}>({d.s})</span></div>
              </div>
              <div className="display" style={{ fontWeight: 800, fontSize: 14.5, color: d.p === 'FREE' ? 'var(--good)' : 'var(--ink-950)', flexShrink: 0 }}>{d.p}</div>
            </div>
            <ul style={{ margin: '8px 0 0 26px', padding: 0, listStyle: 'disc', fontSize: 11.5, color: 'var(--ink-700)', lineHeight: 1.65 }}>
              {d.sub.map(item => <li key={item}>{item}</li>)}
            </ul>
          </label>
        ))}
      </details>


      {/* Coupon */}
      <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14, marginTop: 12 }}>
        <h3 className="display" style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 14 }}>Have a coupon?</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="COUPON" style={{ flex: 1, minWidth: 0, padding: '10px 12px', borderRadius: 9, border: '1.5px solid var(--ink-200)', fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', fontFamily: 'inherit', outline: 0 }} />
          <button className="btn" style={{ padding: '0 18px', borderRadius: 9, fontSize: 13, fontWeight: 700, background: 'var(--good)', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            <Icon name="tag" size={13} /> Apply
          </button>
        </div>
        <div style={{ marginTop: 9, padding: '9px 11px', background: 'var(--paper-2)', borderRadius: 8, fontSize: 11.5, color: 'var(--ink-700)', display: 'flex', gap: 7, alignItems: 'flex-start', lineHeight: 1.45 }}>
          <span style={{ color: 'var(--blaze-2)', display: 'inline-flex', flexShrink: 0, marginTop: 1 }}><Icon name="info" size={12} stroke={2} /></span>
          <span>Heads up — if your coupon or redeemed Big Points drop the subtotal below <strong>£35</strong>, free delivery will no longer apply.</span>
        </div>
      </div>

      {/* Order summary */}
      <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14 }}>
        <h3 className="display" style={{ margin: '0 0 10px', fontWeight: 700, fontSize: 14 }}>Order summary</h3>
        <details>
          <summary style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderRadius: 8, background: 'var(--paper-2)', cursor: 'pointer', fontSize: 12.5, color: 'var(--ink-700)', fontWeight: 600 }}>
            <span>View {totalQty} items in this order</span>
            <Icon name="chev-d" size={13} />
          </summary>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 4px 4px' }}>
            {[HERO_PRODUCTS[0], HERO_PRODUCTS[1], HERO_PRODUCTS[3]].map((it, i) => {
              const qty = [2, 1, 3][i];
              const flav = ['Blue Razz Cherry', 'Banana Ice', 'Cola Ice'][i];
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr auto', gap: 10, alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: 52, height: 52, background: 'var(--paper-2)', borderRadius: 8, display: 'grid', placeItems: 'center', flexShrink: 0, overflow: 'hidden' }}>
                    {it.img ? (
                      <img src={it.img} alt={it.name} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                    ) : (
                      <span className="display" style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-700)', letterSpacing: '-.02em' }}>{it.brand.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
                    )}
                    <span style={{ position: 'absolute', top: -4, right: -4, minWidth: 18, height: 18, padding: '0 5px', background: 'var(--ink-950)', color: '#fff', borderRadius: 999, fontSize: 10, fontWeight: 700, display: 'grid', placeItems: 'center' }}>{qty}</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="display" style={{ fontWeight: 600, fontSize: 12.5, lineHeight: 1.25, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{it.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-500)', marginTop: 2 }}>20mg · {flav}</div>
                  </div>
                  <div className="display" style={{ fontSize: 13, fontWeight: 700, flexShrink: 0 }}>£{(it.price * qty).toFixed(2)}</div>
                </div>
              );
            })}
          </div>
        </details>
        <div style={{ paddingTop: 12, marginTop: 12, borderTop: '1px solid var(--paper-3)' }}>
          {[['Subtotal', '54.93'], ['Discount', '−4.50'], ['Delivery', '3.95']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '4px 0' }}>
              <span style={{ color: 'var(--ink-700)' }}>{k}</span><span>£{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--paper-3)', marginTop: 8, paddingTop: 10 }}>
            <span className="display" style={{ fontWeight: 700, fontSize: 15 }}>Total</span>
            <span className="display" style={{ fontWeight: 800, fontSize: 20 }}>£53.97</span>
          </div>
        </div>
      </div>

      {/* Consent + T&Cs */}
      <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12.5, color: 'var(--ink-800)' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 9, cursor: 'pointer', lineHeight: 1.45 }}>
          <input type="checkbox" defaultChecked style={{ accentColor: 'var(--blaze)', width: 16, height: 16, marginTop: 1, flexShrink: 0, cursor: 'pointer' }} />
          <span>Sign me up to receive email updates and news <span style={{ color: 'var(--ink-500)' }}>(optional)</span></span>
        </label>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 9, cursor: 'pointer', lineHeight: 1.45 }}>
          <input type="checkbox" style={{ accentColor: 'var(--blaze)', width: 16, height: 16, marginTop: 1, flexShrink: 0, cursor: 'pointer' }} />
          <span>I have read and agree to the website <a href="https://www.vapebig.co.uk/page/terms-and-conditions/" onClick={(e) => e.preventDefault()} style={{ color: 'var(--blaze-2)', textDecoration: 'underline', fontWeight: 600 }}>terms and conditions</a> <span style={{ color: '#c63e3e' }}>*</span></span>
        </label>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, padding: 14, marginBottom: 10 }}>
        <div className="display" style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>3. Payment</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { k: 'card', l: 'Credit / Debit', i: 'card', cta: 'Place order — £53.97' },
            { k: 'apple', l: 'Apple Pay', i: 'phone', cta: 'Continue with Apple Pay' },
            { k: 'google', l: 'Google Pay', i: 'phone', cta: 'Continue with Google Pay' },
          ].map(opt => {
            const active = payMethod === opt.k;
            return (
              <div key={opt.k} style={{ border: active ? '2px solid var(--ink-950)' : '1.5px solid var(--ink-200)', borderRadius: 10, overflow: 'hidden', background: active ? '#fff' : 'var(--paper)' }}>
                <button onClick={() => setPayMethod(opt.k)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', cursor: 'pointer', background: 'transparent' }}>
                  <span style={{ width: 16, height: 16, borderRadius: 999, border: active ? '5px solid var(--blaze)' : '1.5px solid var(--ink-300)', background: '#fff', flexShrink: 0 }} />
                  <span style={{ flex: 1, textAlign: 'left', fontSize: 13.5, fontWeight: 600, color: 'var(--ink-950)' }}>{opt.l}</span>
                </button>
                {active && (
                  <div style={{ padding: '0 14px 14px', borderTop: '1px dashed var(--paper-3)' }}>
                    {opt.k === 'card' ? (
                      <div style={{ paddingTop: 12, display: 'grid', gap: 8 }}>
                        <input placeholder="Card number" style={{ width: '100%', minWidth: 0, padding: '11px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13, fontFamily: 'inherit' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8 }}>
                          <input placeholder="MM / YY" style={{ width: '100%', minWidth: 0, padding: '11px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13, fontFamily: 'inherit' }} />
                          <input placeholder="CVV" style={{ width: '100%', minWidth: 0, padding: '11px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13, fontFamily: 'inherit' }} />
                        </div>
                        <input placeholder="Name on card" style={{ width: '100%', minWidth: 0, padding: '11px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13, fontFamily: 'inherit' }} />
                        <button onClick={() => onNav?.('morder')} className="btn" style={{ width: '100%', padding: 13, borderRadius: 9, fontSize: 13.5, fontWeight: 700, background: 'var(--ink-950)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 4 }}>
                          <Icon name="lock" size={14} /> {opt.cta}
                        </button>
                      </div>
                    ) : (
                      <div style={{ paddingTop: 12 }}>
                        <button onClick={() => onNav?.('morder')} className="btn" style={{ width: '100%', padding: 13, borderRadius: 9, fontSize: 13.5, fontWeight: 700, background: 'var(--ink-950)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                          <Icon name="bolt" size={14} /> {opt.cta}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Place order CTA lives inside each payment method now */}
    </div>
  </div>
  );
};

const MOrderConfirm = ({ onNav }) => (
  <div data-screen-label="19 Order Confirm — mobile">
    <MobileHeader onNav={onNav} />
    <div style={{ padding: '24px 16px', background: 'var(--paper)', textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: 999, background: 'var(--lime)', color: 'var(--ink-950)', display: 'grid', placeItems: 'center', margin: '0 auto 18px' }}><Icon name="check" size={36} stroke={2.4} /></div>
      <h1 className="display h-display" style={{ fontSize: 30, margin: '0 0 8px' }}>Cheers, Charlie.</h1>
      <p style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.55, margin: 0 }}>Order <strong>#VB-208461</strong> received. Confirmation sent to charlie@example.com.</p>
      <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 18, margin: '20px 0', textAlign: 'left' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', left: '12.5%', right: '12.5%', top: 13, height: 2, background: 'var(--paper-3)' }} />
          <div style={{ position: 'absolute', left: '12.5%', top: 13, width: '37.5%', height: 2, background: 'var(--violet-500)' }} />
          {['Confirmed', 'Picking', 'Dispatched', 'Delivered'].map((l, i) => (
            <div key={l} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ width: 28, height: 28, borderRadius: 999, background: i < 2 ? 'var(--violet-500)' : '#fff', color: '#fff', border: i < 2 ? 'none' : '2px solid var(--paper-3)', display: 'grid', placeItems: 'center', margin: '0 auto', position: 'relative', zIndex: 1, fontSize: 11, fontWeight: 700 }}>{i < 2 ? <Icon name="check" size={13} stroke={2.4} /> : <span style={{ color: 'var(--ink-400)' }}>{i + 1}</span>}</div>
              <div style={{ fontSize: 10.5, fontWeight: 600, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: 'var(--ink-950)', color: '#fff', borderRadius: 14, padding: 18, textAlign: 'left' }}>
        <span className="eyebrow" style={{ color: 'var(--lime)', fontSize: 9 }}>Members club</span>
        <div className="display" style={{ fontWeight: 700, fontSize: 17, marginTop: 4 }}>Earn Big Points on every order.</div>
        <button onClick={() => onNav?.('msignin')} className="btn btn-lime" style={{ marginTop: 10, padding: '10px 14px', borderRadius: 999, fontSize: 12 }}>Create account</button>
      </div>
      <button onClick={() => onNav?.('mhome')} className="btn btn-soft" style={{ width: '100%', marginTop: 14, padding: 14, borderRadius: 10 }}>Continue shopping</button>
    </div>
  </div>
);

const MSignIn = ({ onNav }) => {
  const [tab, setTab] = React.useState('signin');
  return (
    <div data-screen-label="20 SignIn — mobile">
      <MobileHeader onNav={onNav} />
      <div style={{ padding: '20px 16px', background: 'var(--paper)' }}>
        <div className="seg" style={{ display: 'flex', width: '100%', marginBottom: 18 }}>
          <button className={tab === 'signin' ? 'active' : ''} onClick={() => setTab('signin')} style={{ flex: 1, padding: '10px 0' }}>Sign in</button>
          <button className={tab === 'signup' ? 'active' : ''} onClick={() => setTab('signup')} style={{ flex: 1, padding: '10px 0' }}>Create</button>
        </div>
        {tab === 'signin' ? (
          <>
            <h1 className="display h-display" style={{ fontSize: 32, margin: '0 0 8px' }}>Welcome back.</h1>
            <p style={{ fontSize: 13.5, color: 'var(--ink-700)', margin: 0 }}>Track orders, save favourites, save 5%.</p>
            <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input placeholder="Email" defaultValue="charlie@example.com" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
              <input type="password" placeholder="Password" defaultValue="••••••••" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
              <a style={{ alignSelf: 'flex-end', fontSize: 12, color: 'var(--violet-700)', fontWeight: 600 }}>Forgotten password</a>
              <button onClick={() => onNav?.('maccount')} className="btn btn-ink" style={{ padding: 16, borderRadius: 10, fontSize: 14, marginTop: 4 }}>Sign in</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 10, margin: '20px 0 14px' }}>
              <div style={{ height: 1, background: 'var(--paper-3)' }} /><span className="mono" style={{ fontSize: 11, color: 'var(--ink-500)' }}>OR</span><div style={{ height: 1, background: 'var(--paper-3)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Continue with Google', 'Continue with Apple'].map(p => (
                <button key={p} className="btn btn-soft" style={{ padding: 14, borderRadius: 10, fontSize: 13 }}>{p}</button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="display h-display" style={{ fontSize: 32, margin: '0 0 8px' }}>Save 10% off your first order.</h1>
            <p style={{ fontSize: 13.5, color: 'var(--ink-700)', margin: 0 }}>Members get exclusive bundles and early drops.</p>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['First name', 'Last name', 'Email', 'Password', 'Date of birth'].map(f => (
                <input key={f} placeholder={f} type={f === 'Password' ? 'password' : 'text'} style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
              ))}
              <label style={{ fontSize: 12, color: 'var(--ink-700)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <input type="checkbox" defaultChecked /> I'm 18+ and agree to the Terms.
              </label>
              <button onClick={() => onNav?.('maccount')} className="btn btn-ink" style={{ padding: 16, borderRadius: 10, fontSize: 14 }}>Create & save 10%</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const MAccount = ({ onNav }) => (
  <div data-screen-label="21 Account — mobile">
    <MobileHeader onNav={onNav} />
    <section style={{ background: 'var(--ink-950)', color: '#fff', padding: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 52, height: 52, borderRadius: 999, background: 'var(--lime)', color: 'var(--ink-950)', display: 'grid', placeItems: 'center', fontSize: 20, fontFamily: 'Bricolage Grotesque', fontWeight: 800 }}>CT</div>
        <div>
          <div className="display" style={{ fontWeight: 700, fontSize: 19 }}>Charlie Thomas</div>
          <div style={{ fontSize: 11.5, color: '#a89cb8' }}>Plus member · 240 points</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,.08)', padding: 10, borderRadius: 10 }}>
          <div className="display" style={{ fontWeight: 700, fontSize: 17, color: 'var(--lime)' }}>£124</div>
          <div style={{ fontSize: 10, color: '#a89cb8', textTransform: 'uppercase', letterSpacing: '.08em', fontFamily: 'JetBrains Mono' }}>Saved</div>
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,.08)', padding: 10, borderRadius: 10 }}>
          <div className="display" style={{ fontWeight: 700, fontSize: 17 }}>14</div>
          <div style={{ fontSize: 10, color: '#a89cb8', textTransform: 'uppercase', letterSpacing: '.08em', fontFamily: 'JetBrains Mono' }}>Orders</div>
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,.08)', padding: 10, borderRadius: 10 }}>
          <div className="display" style={{ fontWeight: 700, fontSize: 17 }}>240</div>
          <div style={{ fontSize: 10, color: '#a89cb8', textTransform: 'uppercase', letterSpacing: '.08em', fontFamily: 'JetBrains Mono' }}>Points</div>
        </div>
      </div>
    </section>
    <div style={{ padding: 14, background: 'var(--paper)' }}>
      <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 14, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span className="display" style={{ fontWeight: 700, fontSize: 14 }}>Latest order</span>
          <span className="chip chip-violet" style={{ fontSize: 9 }}>In transit</span>
        </div>
        <div className="display" style={{ fontWeight: 700, fontSize: 16 }}>#VB-208461</div>
        <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>3 items · £53.97 · placed today</div>
        <button className="btn btn-ink" style={{ marginTop: 10, padding: '8px 14px', borderRadius: 8, fontSize: 12 }}>Track order</button>
      </div>
      {[
        ['package', 'My orders', '14 placed'],
        ['heart', 'Wishlist', '6 items'],
        ['pin', 'Addresses', '2 saved'],
        ['trophy', 'Rewards', '240 points'],
        ['headset', 'Help & support'],
      ].map(([i, l, s]) => (
        <button key={l} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: 14, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, marginBottom: 6, textAlign: 'left' }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--violet-100)', color: 'var(--violet-700)', display: 'grid', placeItems: 'center' }}><Icon name={i} size={16} /></div>
          <div style={{ flex: 1 }}>
            <div className="display" style={{ fontWeight: 600, fontSize: 14 }}>{l}</div>
            {s && <div style={{ fontSize: 11.5, color: 'var(--ink-500)' }}>{s}</div>}
          </div>
          <Icon name="chev" size={14} />
        </button>
      ))}
      <button onClick={() => onNav?.('mhome')} style={{ width: '100%', padding: 14, color: 'var(--ink-500)', fontSize: 13, marginTop: 8 }}>Sign out</button>
    </div>
    <MFooter onNav={onNav} />
  </div>
);

const MMenu = ({ onNav }) => (
  <div data-screen-label="22 Menu — mobile">
    <div style={{ background: 'var(--ink-950)', color: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 30 }}>
      <button onClick={() => onNav?.('mhome')} style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.08)', borderRadius: 10 }}><Icon name="x" size={18} /></button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><LogoMark size={28} /><Wordmark light size={18} /></div>
      <button onClick={() => onNav?.('msignin')} style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.08)', borderRadius: 10 }}><Icon name="user" size={17} /></button>
    </div>
    <div style={{ background: 'var(--ink-950)', color: '#fff', padding: '8px 16px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,.08)', borderRadius: 999, padding: '4px 4px 4px 16px' }}>
        <Icon name="search" size={15} />
        <input placeholder="Search 7,000+ products…" style={{ flex: 1, border: 0, outline: 0, padding: '10px 12px', background: 'transparent', color: '#fff', fontSize: 13 }} />
      </div>
    </div>
    <div style={{ background: 'var(--ink-950)', color: '#fff', padding: '8px 0 28px' }}>
      <div className="mono" style={{ fontSize: 10, color: '#7c7090', letterSpacing: '.16em', textTransform: 'uppercase', padding: '0 16px 8px' }}>Shop</div>
      {['Vape Kits', 'Big Puff Vapes', 'Pre-Filled Pods', 'E-Liquids', 'Nic Salts', 'Coils', 'Pouches', 'Clearance'].map(t => (
        <button key={t} onClick={() => onNav?.('mplp')} style={{ width: '100%', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <span className="display" style={{ fontWeight: 600, fontSize: 17 }}>{t}</span>
          <Icon name="chev" size={14} />
        </button>
      ))}
      <div className="mono" style={{ fontSize: 10, color: '#7c7090', letterSpacing: '.16em', textTransform: 'uppercase', padding: '24px 16px 8px' }}>Brands</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 16px' }}>
        {BRANDS.slice(0, 10).map(b => (
          <a key={b} onClick={() => onNav?.('mplp')} style={{ padding: '7px 13px', borderRadius: 999, background: 'rgba(255,255,255,.08)', fontSize: 12, fontWeight: 600 }}>{b}</a>
        ))}
      </div>
      <div className="mono" style={{ fontSize: 10, color: '#7c7090', letterSpacing: '.16em', textTransform: 'uppercase', padding: '24px 16px 8px' }}>Help</div>
      {[['about', 'About us'], ['contact', 'Contact'], ['blog', 'Blog & guides']].map(([k, l]) => (
        <button key={l} onClick={() => onNav?.('m' + k === 'mabout' ? 'mblog' : 'm' + k)} style={{ width: '100%', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', color: '#fff', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <span className="display" style={{ fontWeight: 500, fontSize: 15 }}>{l}</span>
          <Icon name="chev" size={13} />
        </button>
      ))}
    </div>
  </div>
);

const MBlog = ({ onNav }) => (
  <div data-screen-label="23 Blog — mobile">
    <MobileHeader onNav={onNav} />
    <section style={{ padding: '20px 16px 12px', background: 'var(--paper)' }}>
      <span className="eyebrow" style={{ fontSize: 10 }}>Vape Big Journal</span>
      <h1 className="display h-display" style={{ fontSize: 30, margin: '6px 0 14px' }}>Reviews & guides.<br/>Real talk.</h1>
      <div className="no-scrollbar" style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
        {['All', 'Guides', 'Reviews', 'News'].map((t, i) => (
          <button key={t} className="btn" style={{ padding: '7px 14px', fontSize: 12, borderRadius: 999, background: i === 0 ? 'var(--ink-950)' : '#fff', color: i === 0 ? '#fff' : 'var(--ink-800)', border: i === 0 ? 'none' : '1.5px solid var(--ink-200)', whiteSpace: 'nowrap' }}>{t}</button>
        ))}
      </div>
    </section>
    <section style={{ padding: '4px 16px 20px', background: 'var(--paper)' }}>
      <a onClick={() => onNav?.('mblog')} style={{ display: 'block', background: 'var(--ink-950)', color: '#fff', borderRadius: 16, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, var(--violet-700), var(--violet-900))', display: 'grid', placeItems: 'center' }}><Icon name="cloud" size={56} stroke={1} /></div>
        <div style={{ padding: 16 }}>
          <span className="chip chip-lime" style={{ fontSize: 9 }}>Featured · Guides</span>
          <div className="display" style={{ fontWeight: 700, fontSize: 19, marginTop: 8, lineHeight: 1.25 }}>The Disposable Ban: what changes in June 2026.</div>
          <div style={{ fontSize: 11, color: '#a89cb8', marginTop: 8, fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '.08em' }}>12 Apr · 6 min read</div>
        </div>
      </a>
      {[
        ['Reviews', 'Hayati Pro Ultra Plus 25K — full review', '5 min'],
        ['Guides', 'Choosing your first vape: a beginner\'s guide', '4 min'],
        ['News', 'Vape Tax UK 2026: what you\'ll actually pay', '3 min'],
        ['Guides', 'How to charge a vape pod kit safely', '5 min'],
      ].map(([t, ti, r]) => (
        <a key={ti} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12, padding: 12, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, marginBottom: 8 }}>
          <div style={{ aspectRatio: '4/3', background: 'var(--paper-3)', borderRadius: 8, display: 'grid', placeItems: 'center', color: 'var(--ink-700)' }}><Icon name={t === 'Reviews' ? 'star' : t === 'News' ? 'spark' : 'info'} size={24} /></div>
          <div>
            <span className="chip chip-paper" style={{ fontSize: 9 }}>{t}</span>
            <div className="display" style={{ fontWeight: 600, fontSize: 13.5, marginTop: 6, lineHeight: 1.25 }}>{ti}</div>
            <div style={{ fontSize: 10.5, color: 'var(--ink-500)', marginTop: 4, fontFamily: 'JetBrains Mono' }}>{r} read</div>
          </div>
        </a>
      ))}
    </section>
    <MFooter onNav={onNav} />
  </div>
);

window.MHome = MHome;
window.MPLP = MPLP;
window.MPDP = MPDP;
window.MCart = MCart;
window.MCheckout = MCheckout;
window.MOrderConfirm = MOrderConfirm;
window.MSignIn = MSignIn;
window.MAccount = MAccount;
window.MMenu = MMenu;
window.MBlog = MBlog;
