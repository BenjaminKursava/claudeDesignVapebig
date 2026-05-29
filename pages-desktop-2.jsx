// pages-desktop-2.jsx — PLP, PDP, Brand

const Breadcrumb = ({ items }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--ink-500)' }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        <a style={{ cursor: 'pointer', color: i === items.length - 1 ? 'var(--ink-900)' : 'var(--ink-500)', fontWeight: i === items.length - 1 ? 600 : 400 }}>{it}</a>
        {i < items.length - 1 && <Icon name="chev" size={11} />}
      </React.Fragment>
    ))}
  </div>
);

const PLPDesktop = ({ onNav }) => {
  const [view, setView] = React.useState('grid');
  const [sort, setSort] = React.useState('Bestselling');
  const [openFilter, setOpenFilter] = React.useState(['Brand', 'Price']);
  const [brandQ, setBrandQ] = React.useState('');
  const products = [...HERO_PRODUCTS, ...HERO_PRODUCTS, ...HERO_PRODUCTS.slice(0, 4)];
  return (
    <div data-screen-label="02 PLP — desktop">
      {/* Breadcrumb band (matches PDP) */}
      <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '14px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Breadcrumb items={['Home', 'Shop', 'Big Puff Vapes']} />
        </div>
      </div>

      <section style={{ background: 'var(--paper)', color: 'var(--ink-900)', padding: '28px 32px 28px', borderBottom: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <h1 className="display h-display" style={{ fontSize: 56, color: 'var(--ink-950)', margin: 0 }}>Big Puff Vapes</h1>
            </div>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div><div className="display" style={{ fontWeight: 700, fontSize: 26, color: 'var(--blaze-2)' }}>78</div><div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '.1em', textTransform: 'uppercase' }}>products</div></div>
              <div><div className="display" style={{ fontWeight: 700, fontSize: 26, color: 'var(--ink-950)' }}>£3+</div><div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '.1em', textTransform: 'uppercase' }}>from</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PLP intro content — short description + sub-category cards */}
      <section style={{ background: 'var(--paper)', padding: '28px 32px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-700)', margin: '0 0 24px' }}>
            Nic Salt E-Liquids deliver smooth, fast-absorbing nicotine for cigarette-like satisfaction without harshness. Nic Salt E-Liquids are special vape juices that feel smooth and calm cravings super fast. They come in tasty flavours like fruits, mints, and desserts, and are perfect for small pod kits. Popular brands like Elux, Elf Bar ElfLiq, Hayati Pro Max, Ultimate, and SKE Crystal Nic Salt give you bold flavour with a gentle throat hit. With strengths from 5mg to 20mg, Nic Salts make vaping simple, satisfying, and closer to smoking but without the harsh burn.
          </p>
          <h2 className="display h-display" style={{ fontSize: 22, fontWeight: 700, margin: '0 0 14px', letterSpacing: '-.015em', color: 'var(--ink-950)' }}>Nic Salt Range</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 8 }}>
            {[
              { name: 'Bar Juice 5000',  desc: 'All your favourite vape juice flavours',                img: 'https://api.vapebig.co.uk/files/product_images/Cherry-Ice-10mg-Bar-Juice-Nic-Sa6887a13abdb99.webp',                                 href: 'https://www.vapebig.co.uk/brands/bar-juice-5000-nic-salt-e-liquids/' },
              { name: 'Elux Legend',     desc: 'Exact same tasty flavours from Elux disposables',       img: 'https://api.vapebig.co.uk/files/product_images/elux-legend-nic-salts-berry-lemonade-10ml659bcff84c88b-300x300.webp',                  href: 'https://www.vapebig.co.uk/collections/elux-legend-nic-salts/' },
              { name: 'Elf Bar ElfLiq',  desc: 'Feature all official Elf Bar disposable vape flavours', img: 'https://api.vapebig.co.uk/files/product_images/apple_blackcurrant_elfliq682746f6d83de.webp',                                          href: 'https://www.vapebig.co.uk/brands/elfliq-nic-salt-e-liquids-by-elf-bar/' },
              { name: 'SKE Crystal',     desc: 'Feature all Crystal Bar disposable vape flavours',     img: 'https://api.vapebig.co.uk/files/product_images/lemon-peach-passionfruit6838549aacad6683d65619326d.webp',                              href: 'https://www.vapebig.co.uk/brands/ske-crystal-nic-salt-e-liquids/' },
              { name: 'Hayati Pro Max',  desc: 'Premium flavours by Hayati Pro Max',                    img: 'https://api.vapebig.co.uk/files/product_images/hayati-pro-max-salt-BERRY-LEMONADE-2656dee09f33bf67d16c2f2167d-300x300.webp',           href: 'https://www.vapebig.co.uk/brands/hayati-pro-max-nic-salt-e-liquids/' },
              { name: 'Ultimate',        desc: 'Smooth throat hit with long-lasting taste',             img: 'https://api.vapebig.co.uk/files/product_images/Ultimate-E-Liquid-100ml-SF-Villains-Madame-Chaos64f37719b9f25.webp',                    href: 'https://www.vapebig.co.uk/brands/ultimate-nic-salts/' },
              { name: 'Any 5 For £10',   desc: 'Enjoy unbeatable value, favourite flavours',            img: 'https://api.vapebig.co.uk/files/product_images/nic-salts-any-5-for-10-696cc96bc1fd9.webp',                                             href: 'https://www.vapebig.co.uk/collections/any-5-for-10-on-nic-salts/' },
              { name: 'Any 4 For £10',   desc: 'Big savings, more flavours, less spend',                img: 'https://api.vapebig.co.uk/files/product_images/nic-salts-any-4-for-10-696cc9532fc4e.webp',                                             href: 'https://www.vapebig.co.uk/collections/any-4-for-10/' },
            ].map((c) => (
              <a key={c.name} href={c.href} onClick={(e) => { e.preventDefault(); }} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, padding: 12,
                background: '#E9ECEF', borderRadius: 10, color: 'var(--ink-900)', cursor: 'pointer',
                transition: 'background .15s',
              }}
                onMouseOver={e => e.currentTarget.style.background = '#dde2e8'}
                onMouseOut={e => e.currentTarget.style.background = '#E9ECEF'}
              >
                <img src={c.img} alt={c.name} loading="lazy" width="80" height="80" style={{ width: '100%', maxWidth: 80, height: 'auto', maxHeight: 80, objectFit: 'contain' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, minWidth: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.01em', color: 'var(--ink-950)', lineHeight: 1.2 }}>{c.name}</span>
                  <span style={{ fontSize: 13, color: '#474f57', lineHeight: 1.4 }}>{c.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick filter pills removed */}

      <section style={{ padding: '32px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '264px 1fr', gap: 32 }}>
          <aside>
            <div style={{ position: 'sticky', top: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div className="display" style={{ fontWeight: 700, fontSize: 18 }}>Filters</div>
                <button style={{ fontSize: 12, fontWeight: 600, color: 'var(--violet-700)' }}>Clear all</button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                {['Hayati', 'Under £10', '10K+ puffs'].map(t => (
                  <span key={t} style={{ padding: '6px 10px', borderRadius: 999, fontSize: 11.5, background: 'var(--violet-100)', color: 'var(--violet-800)', display: 'inline-flex', gap: 6, alignItems: 'center', fontWeight: 600 }}>{t} <Icon name="x" size={11} /></span>
                ))}
              </div>
              {[
                { name: 'Brand', items: ['Hayati', 'Lost Mary', 'SKE Crystal', 'Elf Bar', 'IVG', 'OXBAR', 'Hyola', 'Pyne Pod', 'Solo Bar'].map(b => ({ l: b, c: 6 + Math.floor(Math.random() * 30) })) },
                { name: 'Price', items: [['Under £5', 24], ['£5 – £10', 38], ['£10 – £20', 14], ['£20+', 2]].map(([l, c]) => ({ l, c })) },
                { name: 'Puff Count', items: [['Up to 600', 8], ['1K – 6K', 22], ['6K – 10K', 18], ['10K – 20K', 16], ['20K+', 14]].map(([l, c]) => ({ l, c })) },
                { name: 'Strength', items: [['10mg', 28], ['20mg', 50]].map(([l, c]) => ({ l, c })) },
                { name: 'Flavour', items: [['Berry', 24], ['Citrus', 18], ['Mint & Menthol', 14], ['Tobacco', 6], ['Tropical', 22], ['Dessert', 12]].map(([l, c]) => ({ l, c })) },
              ].map(grp => {
                const open = openFilter.includes(grp.name);
                return (
                  <div key={grp.name} style={{ borderTop: '1px solid var(--paper-3)', padding: '14px 0' }}>
                    <button onClick={() => setOpenFilter(open ? openFilter.filter(x => x !== grp.name) : [...openFilter, grp.name])} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="display" style={{ fontWeight: 600, fontSize: 14 }}>{grp.name}</span>
                      <Icon name={open ? 'minus' : 'plus'} size={14} />
                    </button>
                    {open && (
                      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {grp.name === 'Brand' && (
                          <div style={{ position: 'relative', marginBottom: 4 }}>
                            <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-400)', display: 'inline-flex', pointerEvents: 'none' }}>
                              <Icon name="search" size={13} />
                            </span>
                            <input
                              type="text"
                              value={brandQ}
                              onChange={(e) => setBrandQ(e.target.value)}
                              placeholder="Search brand"
                              style={{
                                width: '100%',
                                padding: '8px 28px 8px 30px',
                                borderRadius: 8,
                                border: '1.5px solid var(--ink-200)',
                                background: '#fff',
                                fontSize: 13,
                                color: 'var(--ink-900)',
                                outline: 'none',
                              }}
                            />
                            {brandQ && (
                              <button onClick={() => setBrandQ('')} style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', width: 22, height: 22, borderRadius: 999, color: 'var(--ink-500)', display: 'grid', placeItems: 'center' }}>
                                <Icon name="x" size={12} />
                              </button>
                            )}
                          </div>
                        )}
                        {(grp.name === 'Brand'
                          ? grp.items.filter(it => it.l.toLowerCase().includes(brandQ.toLowerCase()))
                          : grp.items
                        ).map(it => (
                          <label key={it.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, cursor: 'pointer' }}>
                            <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
                              <input type="checkbox" defaultChecked={['Hayati'].includes(it.l)} style={{ accentColor: 'var(--violet-500)' }} /> {it.l}
                            </span>
                            <span style={{ color: 'var(--ink-400)', fontSize: 11.5 }}>{it.c}</span>
                          </label>
                        ))}
                        {grp.name === 'Brand' && brandQ && grp.items.filter(it => it.l.toLowerCase().includes(brandQ.toLowerCase())).length === 0 && (
                          <div style={{ fontSize: 12, color: 'var(--ink-500)', padding: '6px 2px' }}>No brands match "{brandQ}".</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 13, color: 'var(--ink-600)' }}>Showing <strong style={{ color: 'var(--ink-900)' }}>1–24</strong> of 78 results</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '9px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13, background: '#fff' }}>
                  {['Bestselling', 'Price: low to high', 'Price: high to low', 'Best rated', 'Newest'].map(o => <option key={o}>{o}</option>)}
                </select>
                <div className="seg">
                  <button className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}><Icon name="menu" size={12} stroke={2.4} /></button>
                  <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}><Icon name="filter" size={12} stroke={2.4} /></button>
                </div>
              </div>
            </div>

            {/* Promo banner removed */}

            {view === 'grid' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
                {products.slice(0, 12).map((p, i) => <div key={i} onClick={() => onNav?.('pdp')} style={{ cursor: 'pointer' }}><ProductCard p={p} /></div>)}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {products.slice(0, 8).map((p, i) => <div key={i} onClick={() => onNav?.('pdp')} style={{ cursor: 'pointer' }}><ProductCard p={p} layout="B" /></div>)}
              </div>
            )}

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 32 }}>
              <button className="btn btn-soft" style={{ padding: '10px 14px', borderRadius: 8, fontSize: 13 }}><Icon name="chev-l" size={13} /></button>
              {[1, 2, 3, 4].map(n => (
                <button key={n} className="btn" style={{ padding: '10px 14px', borderRadius: 8, fontSize: 13, background: n === 1 ? 'var(--ink-950)' : 'transparent', color: n === 1 ? '#fff' : 'var(--ink-700)', border: n !== 1 ? '1.5px solid var(--ink-200)' : 'none' }}>{n}</button>
              ))}
              <button className="btn btn-soft" style={{ padding: '10px 14px', borderRadius: 8, fontSize: 13 }}><Icon name="chev" size={13} /></button>
            </div>
          </main>
        </div>

        {/* SEO copy — full content width */}
        <div style={{ maxWidth: 1280, margin: '56px auto 0' }}>
          <h3 className="display h-display" style={{ fontSize: 24, marginTop: 0 }}>About Big Puff Vapes at Vape Big</h3>
          <p style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.75 }}>Disposable vapes (sometimes called "puff bars") are pre-charged, pre-filled vape devices designed to be used straight out of the box. At Vape Big we stock the latest UK-legal devices from Hayati, Lost Mary, SKE Crystal, Elf Bar, IVG and more — including the new generation of refillable, pod-replaceable disposables that comply with the upcoming UK disposable ban.</p>
          <p style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.75 }}>All disposables on Vape Big ship with same-day dispatch from our Kington warehouse. Free delivery on orders over £35.</p>
        </div>

        {/* PLP FAQ — CSS-only, indexable without JS */}
        <div style={{ maxWidth: 1280, margin: '48px auto 0' }}>
          <div style={{ marginBottom: 14 }}>
            <span className="eyebrow">Big Puff Vapes FAQ</span>
            <h3 className="display h-display" style={{ fontSize: 32, margin: '6px 0 0', letterSpacing: '-.02em' }}>Frequently asked questions</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 32, rowGap: 0 }}>
            <ProductAccordion id="plp-faq-bigpuff-what" defaultOpen title="What are Big Puff Vapes?">
              Big Puff Vapes are the new generation of refillable, pod-replaceable vape kits — designed to look and feel like a disposable but with a USB-C rechargeable battery and swappable pre-filled pods. They comply with the UK's June 2026 disposable ban and typically deliver 6,000 to 50,000 puffs per kit.
            </ProductAccordion>
            <ProductAccordion id="plp-faq-bigpuff-vs-disposable" title="How are they different from disposable vapes?">
              The device body is reusable. Instead of binning the whole thing when the juice runs out, you click in a fresh pre-filled pod. That makes them cheaper per puff, far less wasteful, and post-June 2026 they're the only legal alternative.
            </ProductAccordion>
            <ProductAccordion id="plp-faq-bigpuff-puffs" title="How long does one pod last?">
              Pod capacity varies by kit. A 6K pod gives roughly a week of moderate use; a 25K Pro Ultra pod lasts most users 2–3 weeks. Real-world numbers depend on draw depth and frequency — every kit's product page shows its rated puff count.
            </ProductAccordion>
            <ProductAccordion id="plp-faq-bigpuff-flavours" title="Which flavours are available?">
              We stock the full UK-legal flavour ranges from every major brand — Blue Razz Cherry, Mr Blue, Cherry Cola, Triple Mango, Banana Ice, Strawberry Ice and dozens more. Use the Flavour filter in the sidebar to narrow down to your favourite category.
            </ProductAccordion>
            <ProductAccordion id="plp-faq-bigpuff-strength" title="10mg or 20mg — which should I choose?">
              20mg is closer to a cigarette throat hit and is what most ex-smokers prefer. 10mg is a milder option — good for lighter users or anyone stepping down their nicotine intake. Most kits are available in both strengths.
            </ProductAccordion>
            <ProductAccordion id="plp-faq-bigpuff-delivery" title="When will my order arrive?">
              Place your order before 8pm Mon–Sat and we'll dispatch it the same day from our Kington warehouse. Standard Royal Mail Tracked 48 is free over £35 (2–3 working days). Next-day Tracked 24 is £3.95.
            </ProductAccordion>
          </div>
        </div>
      </section>
    </div>
  );
};

const PDPDesktop = ({ onNav }) => {
  const p = HERO_PRODUCTS[0];
  const [flavour, setFlavour] = React.useState('Blue Razz Cherry');
  const [strength, setStrength] = React.useState('20mg');
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('Description');
  const flavours = ['Blue Razz Cherry', 'Mr Blue', 'Cherry Cola', 'Triple Mango', 'Banana Ice', 'Strawberry Ice', 'Pink Lemonade', 'Cola Ice'];
  return (
    <div data-screen-label="03 PDP — desktop">
      <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '14px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Breadcrumb items={['Home', 'Shop', 'Big Puff Vapes', 'Hayati', 'Pro Ultra Plus 25K']} />
        </div>
      </div>
      <section style={{ padding: '32px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 48 }}>
          {/* Gallery */}
          <div style={{ minWidth: 0 }}>
            <div style={{ aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--paper-2), var(--paper-3))', borderRadius: 18, display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden', minWidth: 0 }}>
              <span className="chip chip-lime" style={{ position: 'absolute', top: 18, left: 18, fontSize: 10, zIndex: 2 }}>Bestseller</span>
              <span className="chip chip-coral" style={{ position: 'absolute', top: 18, right: 18, fontSize: 10, zIndex: 2 }}>–17%</span>
              {p.img ? (
                <img src={p.img} alt={p.name} style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
              ) : (
                <div style={{ textAlign: 'center', padding: 24, color: 'var(--ink-500)' }}>
                  <div style={{ width: 84, height: 84, margin: '0 auto 14px', borderRadius: 18, background: 'rgba(255,255,255,.55)', display: 'grid', placeItems: 'center' }}>
                    <Icon name="package" size={36} stroke={1.5} />
                  </div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--violet-700)' }}>Product image</div>
                  <div className="display" style={{ fontSize: 18, fontWeight: 700, marginTop: 6, color: 'var(--ink-700)' }}>{p.brand}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-500)', marginTop: 2 }}>Drop hi-res product render here</div>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--violet-700)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{p.brand}</div>
            <h1 className="display h-display" style={{ fontSize: 44, margin: '8px 0 14px', letterSpacing: '-.025em' }}>Hayati Pro Ultra Plus 25,000 Pre-Filled Pod Kit</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <StarRow value={4.9} size={15} />
              <span style={{ fontSize: 13, color: 'var(--ink-700)' }}><strong>4.9</strong> · <a style={{ color: 'var(--violet-700)', cursor: 'pointer' }}>980 reviews</a></span>
              <span className="chip chip-good" style={{ fontSize: 10.5 }}><Icon name="check" size={11} /> In stock — ships today</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, paddingBottom: 18, borderBottom: '1px solid var(--paper-3)' }}>
              <PriceTag price={p.price} was={p.was} big />
              <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', borderRadius: 999, overflow: 'hidden', background: 'var(--ink-950)', color: '#fff', boxShadow: 'var(--shadow-sm)' }}>
                <span className="display" style={{ fontSize: 13.5, fontWeight: 700, padding: '7px 14px', letterSpacing: '-.005em' }}>3 for £42</span>
              </div>
            </div>

            {/* Rewards earn callout */}
            <div style={{ marginTop: 16, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, background: 'var(--violet-50)', border: '1px solid var(--violet-100)', borderRadius: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--blaze)', color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Icon name="trophy" size={20} stroke={2} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, color: 'var(--ink-900)', lineHeight: 1.4 }}>
                  Order this for £14.99 and earn <strong style={{ color: 'var(--blaze-2)' }}>140 Big Points</strong> when logged in
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-600)', marginTop: 3 }}>
                  Worth £1.40 off your next order · <a onClick={() => onNav?.('bigpoints')} style={{ color: 'var(--violet-700)', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>How rewards work</a>
                </div>
              </div>
              <a style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--blaze-2)', textDecoration: 'underline', cursor: 'pointer', whiteSpace: 'nowrap' }}>Sign in →</a>
            </div>

            <div style={{ marginTop: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span className="display" style={{ fontWeight: 700, fontSize: 14 }}>Flavour</span>
              </div>
              <div style={{ position: 'relative' }}>
                <select
                  value={flavour}
                  onChange={(e) => setFlavour(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 44px 14px 16px',
                    borderRadius: 10,
                    border: '1.5px solid var(--ink-200)',
                    background: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--ink-900)',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {flavours.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
                <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-500)', display: 'inline-flex' }}>
                  <Icon name="chev-d" size={14} />
                </span>
              </div>
            </div>

            <div style={{ marginTop: 22 }}>
              <div className="display" style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Strength: <span style={{ fontWeight: 500, color: 'var(--ink-700)' }}>{strength}</span></div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['10mg', '20mg'].map(s => (
                  <button key={s} onClick={() => setStrength(s)} style={{ padding: '12px 22px', borderRadius: 10, border: strength === s ? '2px solid var(--ink-950)' : '1.5px solid var(--ink-200)', background: strength === s ? 'var(--ink-50)' : '#fff', fontSize: 14, fontWeight: 600 }}>{s}</button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 22, display: 'flex', gap: 10, alignItems: 'stretch' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--ink-200)', borderRadius: 10, overflow: 'hidden' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '0 14px', height: 52 }}><Icon name="minus" size={14} /></button>
                <span className="display" style={{ minWidth: 32, textAlign: 'center', fontWeight: 700, fontSize: 16 }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ padding: '0 14px', height: 52 }}><Icon name="plus" size={14} /></button>
              </div>
              <button onClick={() => onNav?.('cart')} className="btn btn-ink" style={{ flex: 1, padding: '0 22px', height: 52, borderRadius: 10, fontSize: 14.5 }}><Icon name="bag" size={16} /> Add to bag — £{(p.price * qty).toFixed(2)}</button>
              <button className="btn btn-soft" style={{ width: 52, height: 52, borderRadius: 10, padding: 0 }}><Icon name="heart" size={18} /></button>
            </div>

            <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
              {[
                ['truck', 'Free delivery over £35', <>Order in <strong style={{ color: 'var(--blaze-2)', fontFamily: 'JetBrains Mono', fontWeight: 700, letterSpacing: '.03em' }}>04:21:30</strong> for same-day dispatch</>],
                ['shield', '100% authentic', 'Direct from authorised UK distributor'],
                ['rotate', '14-day returns', 'Unopened, no questions asked'],
                ['lock', 'Secure checkout', 'Credit, Debit, Apple Pay & Google Pay'],
              ].map(([ic, h, s]) => (
                <div key={h} style={{ display: 'flex', gap: 10, padding: 12, background: 'var(--paper-2)', borderRadius: 10 }}>
                  <span style={{ color: 'var(--violet-700)' }}><Icon name={ic} size={18} /></span>
                  <div>
                    <div className="display" style={{ fontWeight: 600, fontSize: 13 }}>{h}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--ink-600)', marginTop: 1 }}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ maxWidth: 1280, margin: '64px auto 0' }}>
          <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--paper-3)', marginBottom: 28 }}>
            {['Description', 'Specifications', 'Replacement Item', 'Reviews (980)', 'Delivery & Returns'].map(t => (
              <button key={t} onClick={() => setTab(t)} className="display" style={{ padding: '14px 18px', fontSize: 14.5, fontWeight: tab === t ? 700 : 500, color: tab === t ? 'var(--ink-950)' : 'var(--ink-500)', borderBottom: tab === t ? '2px solid var(--ink-950)' : '2px solid transparent' }}>{t}</button>
            ))}
          </div>
          {tab === 'Description' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48 }}>
              <div>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-800)', margin: '0 0 16px' }}>The Hayati Pro Ultra Plus 25K is the latest in Hayati's flagship pod-vape line — a refillable, pod-replaceable kit designed to comply with the UK's upcoming disposable ban while delivering an industry-leading 25,000 puffs per kit.</p>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-800)', margin: '0 0 16px' }}>Featuring a dual-mesh coil, 1100mAh rechargeable battery and a translucent 18ml pod (split across 2 × 9ml), the Pro Ultra Plus combines the convenience of a disposable with the longevity and value of a refillable kit.</p>
                <h4 className="display" style={{ fontSize: 17, fontWeight: 700, margin: '24px 0 10px' }}>What's in the box</h4>
                <ul style={{ paddingLeft: 18, fontSize: 14.5, color: 'var(--ink-800)', lineHeight: 1.85 }}>
                  <li>1× Hayati Pro Ultra Plus battery device</li>
                  <li>2× pre-filled flavour pods (your selection)</li>
                  <li>1× USB-C charging cable</li>
                  <li>User manual</li>
                </ul>
              </div>
              <div style={{ background: 'var(--cream)', borderRadius: 16, padding: 24, border: '1px solid var(--paper-3)' }}>
                <h4 className="display" style={{ fontSize: 16, fontWeight: 700, margin: '0 0 14px' }}>Key specs</h4>
                {[
                  ['Puff capacity', '25,000'],
                  ['Battery', '1100 mAh, USB-C rechargeable'],
                  ['E-liquid', '18ml (2 × 9ml pods)'],
                  ['Strength', '10mg / 20mg salt nic'],
                  ['Coil', 'Dual mesh'],
                  ['Compliance', 'TPD-compliant (UK)'],
                ].map(([k, v], i) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid var(--paper-3)', fontSize: 13.5 }}>
                    <span style={{ color: 'var(--ink-600)' }}>{k}</span>
                    <span style={{ fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'Reviews (980)' && (
            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48 }}>
              <div>
                <div className="display" style={{ fontSize: 56, fontWeight: 800, color: 'var(--ink-950)' }}>4.9<span style={{ fontSize: 22, color: 'var(--ink-400)', fontWeight: 500 }}>/5</span></div>
                <StarRow value={4.9} size={18} />
                <div style={{ fontSize: 13, color: 'var(--ink-600)', marginTop: 8 }}>Based on 980 verified buyers</div>
                <div style={{ marginTop: 18 }}>
                  {[5, 4, 3, 2, 1].map(s => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', fontSize: 12 }}>
                      <span style={{ width: 12 }}>{s}</span><Icon name="star" size={11} />
                      <div style={{ flex: 1, height: 6, background: 'var(--paper-2)', borderRadius: 99 }}>
                        <div style={{ width: ['86%', '11%', '2%', '1%', '0%'][5 - s], height: '100%', background: 'var(--violet-500)', borderRadius: 99 }} />
                      </div>
                      <span style={{ color: 'var(--ink-500)', minWidth: 36, textAlign: 'right' }}>{[842, 108, 20, 8, 2][5 - s]}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-ink" style={{ marginTop: 18, padding: '12px 18px', borderRadius: 10, fontSize: 13 }}>Write a review</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { n: 'Charlie T.', d: '3 days ago', r: 5, t: 'Best Hayati yet', b: 'Switched from the 6K Pro Max. Flavour is significantly cleaner and the pod swap is genuinely two seconds. Battery lasts me about 2.5 days at heavy use.' },
                  { n: 'Maria S.', d: '1 week ago', r: 5, t: 'Excellent value', b: 'Got the 3 for £42 deal — works out at £14 a pod kit which is unbeatable. Blue Razz Cherry is the standout.' },
                  { n: 'James W.', d: '2 weeks ago', r: 4, t: 'Solid, but pod is fiddly first time', b: 'Sound device once you figure out the pod orientation. Vape Big shipped same day, arrived next morning, packaging was fine.' },
                ].map(r => (
                  <div key={r.n} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <div>
                        <div className="display" style={{ fontWeight: 700, fontSize: 15 }}>{r.n} <span className="chip chip-good" style={{ marginLeft: 8, fontSize: 10 }}>Verified</span></div>
                        <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{r.d}</div>
                      </div>
                      <StarRow value={r.r} size={13} />
                    </div>
                    <div className="display" style={{ fontWeight: 700, fontSize: 16, margin: '10px 0 6px' }}>{r.t}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.65 }}>{r.b}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'Specifications' && (
            <div style={{ background: 'var(--cream)', borderRadius: 18, padding: 32, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, border: '1px solid var(--paper-3)' }}>
              {[['Brand', 'Hayati'], ['Model', 'Pro Ultra Plus 25K'], ['Form factor', 'Pod kit (refillable)'], ['Puff count', '~25,000'], ['Battery', '1100 mAh, USB-C'], ['E-liquid', '18 ml (2 × 9 ml)'], ['Strength', '10mg / 20mg'], ['Coil', 'Dual mesh, 1.0Ω'], ['Compliance', 'TPD compliant'], ['Country of origin', 'UK distributed']].map(([k, v], i) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderTop: i < 2 ? 'none' : '1px solid var(--paper-3)', fontSize: 14, paddingLeft: i % 2 === 1 ? 24 : 0, paddingRight: i % 2 === 0 ? 24 : 0 }}>
                  <span style={{ color: 'var(--ink-600)' }}>{k}</span><span style={{ fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          )}
          {tab === 'Replacement Item' && (
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-700)', margin: '0 0 22px', maxWidth: 760 }}>
                When your pre-filled pod is empty, simply click in a replacement. Hayati Pro Ultra Plus 25K is designed to take its own dedicated pod range — available in every flavour, sold separately.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
                {HERO_PRODUCTS.filter(x => /Pods|Refill/i.test(x.name) || x.puffs === 'Refill').concat(HERO_PRODUCTS.slice(0, 3)).slice(0, 4).map((rp, i) => <ProductCard key={i} p={rp} />)}
              </div>
            </div>
          )}
          {tab === 'Delivery & Returns' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
              {[
                ['Standard — Free over £35', '2–3 working days · Royal Mail Tracked 48'],
                ['Express — £3.95', 'Next working day if ordered by 8pm'],
                ['Returns — 14 days', 'Unopened only · contact us first'],
              ].map(([h, s]) => (
                <div key={h} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
                  <div className="display" style={{ fontWeight: 700, fontSize: 17 }}>{h}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-700)', marginTop: 6, lineHeight: 1.6 }}>{s}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PDP FAQ — CSS-only accordion, indexable without JS */}
        <div style={{ maxWidth: 1280, margin: '64px auto 0' }}>
          <div style={{ marginBottom: 14 }}>
            <span className="eyebrow">Help & support</span>
            <h3 className="display h-display" style={{ fontSize: 32, margin: '6px 0 0', letterSpacing: '-.02em' }}>Frequently asked questions</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 32, rowGap: 0 }}>
            <ProductAccordion id="pdp-faq-charge" defaultOpen title="How long does the Pro Ultra Plus take to charge?">
              The Hayati Pro Ultra Plus charges from empty to full in roughly 45 minutes via USB-C. LEDs on the device indicate charging progress. Use the supplied cable — any standard USB-C wall plug at 5W works fine.
            </ProductAccordion>
            <ProductAccordion id="pdp-faq-pods" title="How many puffs does each pod give?">
              The kit comes with two pre-filled 9 ml pods, giving you around 25,000 puffs in total. Real-world numbers vary based on how deep your draws are — most users get 7–10 days of heavy use per pod.
            </ProductAccordion>
            <ProductAccordion id="pdp-faq-compliant" title="Is this device UK / TPD compliant?">
              Yes. The Pro Ultra Plus 25K is fully TPD-compliant — refillable, rechargeable, and uses replaceable pre-filled pods. It complies with the upcoming UK ban on single-use disposables.
            </ProductAccordion>
            <ProductAccordion id="pdp-faq-strength" title="Which strength should I pick — 10mg or 20mg?">
              20mg is closer to a cigarette throat hit and is what most ex-smokers prefer. 10mg is a milder option — better for lighter users or anyone stepping down their nicotine intake.
            </ProductAccordion>
            <ProductAccordion id="pdp-faq-delivery" title="When will my order arrive?">
              Order before 8pm Monday–Saturday for same-day dispatch. Standard delivery (Royal Mail Tracked 48) is free over £35 and lands in 2–3 working days. Next-day Tracked 24 is £3.95.
            </ProductAccordion>
            <ProductAccordion id="pdp-faq-returns" title="Can I return it if I change my mind?">
              We accept returns on unopened pod kits within 14 days. For hygiene reasons we can't accept opened pods or used devices. Contact us first and we'll arrange the return.
            </ProductAccordion>
          </div>
        </div>

        {/* Related */}
        <div style={{ maxWidth: 1280, margin: '72px auto 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
            <h3 className="display h-display" style={{ fontSize: 32, margin: 0 }}>People also bought</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {HERO_PRODUCTS.slice(1, 5).map(p => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

window.PLPDesktop = PLPDesktop;
window.PDPDesktop = PDPDesktop;
window.Breadcrumb = Breadcrumb;
