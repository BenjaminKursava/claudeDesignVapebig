// pages-desktop-4.jsx — About, Contact, Blog Index, Blog Post

const AboutDesktop = ({ onNav }) => (
  <div data-screen-label="10 About — desktop">
    <section style={{ background: 'var(--ink-950)', color: '#fff', padding: '96px 32px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -80, left: '50%', width: 600, height: 600, borderRadius: 999, background: 'radial-gradient(circle, var(--violet-500), transparent 60%)', opacity: .3 }} />
      <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <span className="eyebrow" style={{ color: 'var(--lime)' }}>About Vape Big</span>
        <h1 className="display h-display" style={{ fontSize: 96, color: '#fff', margin: '14px 0 18px' }}>The UK's online<br/>vape shop, done right.</h1>
        <p style={{ fontSize: 18, color: '#cfc6dd', maxWidth: 660, margin: '0 auto', lineHeight: 1.6 }}>We're a Kington-based independent retailer dispatching 7,000+ products across the UK — six days a week, with the kind of service you'd get from your local shop.</p>
      </div>
    </section>

    <section style={{ background: 'var(--paper)', padding: '0 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, transform: 'translateY(-40px)' }}>
        {[
          ['2019', 'Founded', 'Started selling out of a Kington shop unit'],
          ['7K+', 'SKUs', 'Across 80+ vape & e-liquid brands'],
          ['180K+', 'Orders', 'Shipped UK-wide since launch'],
          ['4.6★', 'Trustpilot', 'From 3,400+ verified reviews'],
        ].map(([n, l, s], i) => (
          <div key={l} style={{ background: ['#fff', 'var(--violet-500)', 'var(--ink-950)', 'var(--lime)'][i], color: [1, 2].includes(i) ? '#fff' : 'var(--ink-950)', padding: 28, borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
            <div className="display" style={{ fontWeight: 800, fontSize: 44, letterSpacing: '-.03em' }}>{n}</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', marginTop: 4, opacity: .8 }}>{l}</div>
            <div style={{ fontSize: 12.5, marginTop: 8, opacity: .85, lineHeight: 1.5 }}>{s}</div>
          </div>
        ))}
      </div>
    </section>

    <section style={{ padding: '40px 32px 64px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="display h-display" style={{ fontSize: 48, margin: '12px 0 18px' }}>Started by smokers,<br/>built for vapers.</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-700)', lineHeight: 1.75 }}>Vape Big started in 2019 when our founders — three lifelong smokers who'd just made the switch — got fed up of paying high-street prices for products they could buy direct. So they took over a small unit in Kington, started buying in bulk, and passed the savings on.</p>
          <p style={{ fontSize: 16, color: 'var(--ink-700)', lineHeight: 1.75 }}>Six years on, we ship around the country every day. The mission's the same: best products, best prices, best service.</p>
        </div>
        <div style={{ aspectRatio: '4/5', borderRadius: 24, background: 'var(--paper-3)', display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, var(--paper-2) 0 12px, var(--paper-3) 12px 13px)' }} />
          <div style={{ position: 'relative', textAlign: 'center', padding: 28 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--violet-700)', letterSpacing: '.16em', textTransform: 'uppercase' }}>Photo placeholder</div>
            <div className="display" style={{ fontSize: 24, fontWeight: 700, marginTop: 8, color: 'var(--ink-700)' }}>Founders / Kington shop</div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: '64px 32px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span className="eyebrow">What we believe</span>
          <h2 className="display h-display" style={{ fontSize: 44, margin: '10px 0 0' }}>Three rules we live by.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {[
            ['01', 'Genuine, always.', 'Every vape, e-liquid and pod is sourced direct from the UK distributor. No grey-market, no fakes — we test every drop before it hits our shelves.'],
            ['02', 'Pass on savings.', 'We buy big and we buy direct. The discount goes to you in the form of multibuys, members\' bundles and the lowest sticker price you\'ll find online.'],
            ['03', 'Real service.', 'Real humans answer the phone. Mon–Fri 10–3, weekends online. We\'ve got a real shop in Kington if you ever want to drop in.'],
          ].map(([n, h, s]) => (
            <div key={h} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 18, padding: 28 }}>
              <div className="display" style={{ fontSize: 56, fontWeight: 800, color: 'var(--violet-500)', letterSpacing: '-.04em' }}>{n}</div>
              <div className="display" style={{ fontWeight: 700, fontSize: 22, margin: '8px 0 10px' }}>{h}</div>
              <div style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.65 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ padding: '64px 32px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span className="eyebrow">Team</span>
          <h2 className="display h-display" style={{ fontSize: 44, margin: '10px 0 0' }}>The faces behind Vape Big.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {[['Daniel', 'Founder & Buyer'], ['Sarah', 'Customer Care Lead'], ['Marcus', 'Warehouse Manager'], ['Priya', 'Brand & Content']].map(([n, r]) => (
            <div key={n} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 18, padding: 18, textAlign: 'center' }}>
              <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 14, marginBottom: 14, display: 'grid', placeItems: 'center', fontFamily: 'Bricolage Grotesque', fontSize: 56, fontWeight: 800, color: 'var(--violet-500)' }}>{n[0]}</div>
              <div className="display" style={{ fontWeight: 700, fontSize: 17 }}>{n}</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-500)' }}>{r}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ContactDesktop = ({ onNav }) => (
  <div data-screen-label="11 Contact — desktop">
    <section style={{ padding: '64px 32px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
        <div>
          <span className="eyebrow">Get in touch</span>
          <h1 className="display h-display" style={{ fontSize: 64, margin: '12px 0 18px' }}>We're real people.<br/>Drop us a line.</h1>
          <p style={{ fontSize: 16, color: 'var(--ink-700)', lineHeight: 1.7, maxWidth: 460 }}>Customer support: Mon–Fri 10am–5pm — call, chat or email and a real person will answer. Outside those hours, email gets a reply within 4 working hours.</p>
          <div style={{ marginTop: 14, padding: '12px 14px', background: 'var(--violet-50)', border: '1px solid var(--violet-100)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10, maxWidth: 460 }}>
            <span style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--blaze)', color: '#fff', display: 'inline-grid', placeItems: 'center', flexShrink: 0 }}><Icon name="bolt" size={14} stroke={2.2} /></span>
            <div style={{ fontSize: 13, color: 'var(--ink-800)', lineHeight: 1.45 }}>
              Heads up: support hours <strong>only apply to enquiries</strong> — our <strong>dispatch cut-off is 8pm</strong>. Orders placed before then ship the same day, every day Mon–Sat.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
            {[
              { i: 'phone', l: 'Call', v: '03332 244263' },
              { i: 'mail', l: 'Email', v: 'support@vapebig.co.uk' },
              { i: 'chat', l: 'Live chat', v: 'Chat now — typically replies in 4 mins' },
            ].map(c => (
              <div key={c.l} style={{ display: 'flex', gap: 14, padding: 16, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--violet-100)', color: 'var(--violet-700)', display: 'grid', placeItems: 'center' }}><Icon name={c.i} size={18} /></div>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{c.l}</div>
                  <div className="display" style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>{c.v}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, padding: 18, background: 'var(--ink-950)', color: '#fff', borderRadius: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
            <Icon name="clock" size={20} />
            <div>
              <div className="display" style={{ fontWeight: 700, fontSize: 14 }}>Customer support hours</div>
              <div style={{ fontSize: 12.5, color: '#a89cb8', marginTop: 2 }}>Mon–Fri 10:00–17:00 · Closed Sat & Sun</div>
            </div>
          </div>
        </div>
        <div>
          <form style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 18, padding: 28 }}>
            <h3 className="display h-display" style={{ fontSize: 24, margin: '0 0 18px' }}>Send us a message</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input placeholder="First name" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
              <input placeholder="Last name" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
              <input placeholder="Email" type="email" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14, gridColumn: 'span 2' }} />
              <input placeholder="Order number (optional)" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14, gridColumn: 'span 2' }} />
              <select style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14, gridColumn: 'span 2', background: '#fff' }}>
                <option>Reason — please choose</option>
                <option>Order issue</option><option>Delivery query</option><option>Product question</option><option>Wholesale enquiry</option><option>Other</option>
              </select>
              <textarea rows={5} placeholder="Message" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14, gridColumn: 'span 2', resize: 'vertical' }}></textarea>
            </div>
            <button type="button" className="btn btn-ink" style={{ width: '100%', padding: 16, fontSize: 14, borderRadius: 10, marginTop: 14 }}>Send message <Icon name="arrow-r" size={15} /></button>
            <div style={{ fontSize: 11.5, color: 'var(--ink-500)', marginTop: 10, textAlign: 'center' }}>We typically reply within 4 working hours.</div>
          </form>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section style={{ padding: '64px 32px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="eyebrow">Maybe we've already answered it</span>
          <h2 className="display h-display" style={{ fontSize: 36, margin: '8px 0 0' }}>Quick answers</h2>
        </div>
        {['Where\'s my order?', 'Can I return an opened vape?', 'Do you ship internationally?', 'How does the multibuy discount work?'].map((q, i) => (
          <details key={q} style={{ borderTop: '1px solid var(--paper-3)', padding: '18px 0' }}>
            <summary style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', listStyle: 'none' }}>
              <span className="display" style={{ fontWeight: 600, fontSize: 17 }}>{q}</span>
              <Icon name="plus" size={16} />
            </summary>
            <p style={{ marginTop: 10, color: 'var(--ink-700)', fontSize: 14, lineHeight: 1.7 }}>Real answer copy goes here. Replace with full FAQ entry from the existing site.</p>
          </details>
        ))}
      </div>
    </section>
  </div>
);

const BlogIndexDesktop = ({ onNav }) => {
  const featured = { tag: 'Guides', date: '12 Apr 2026', read: '6 min', title: 'The Disposable Ban: what changes in June 2026 and what to buy now.', excerpt: 'From 1 June 2026, single-use disposable vapes are banned in the UK. Here\'s what it means for vapers, what\'s replacing them, and the kits we recommend stocking up on.' };
  const posts = [
    { tag: 'Reviews', date: '08 Apr 2026', read: '5 min', title: 'Hayati Pro Ultra Plus 25K — full review', excerpt: 'We tested all 8 launch flavours over a fortnight. Here\'s how it stacks up against the 6K Pro Max.' },
    { tag: 'Guides', date: '05 Apr 2026', read: '4 min', title: 'Choosing your first vape: a beginner\'s guide', excerpt: 'Mouth-to-lung vs. direct-to-lung, mg strengths, and which kit is right for ex-smokers.' },
    { tag: 'News', date: '01 Apr 2026', read: '3 min', title: 'Vape Tax UK 2026: what you\'ll actually pay', excerpt: 'The new excise duty on e-liquid kicks in this October. Here\'s the maths.' },
    { tag: 'Guides', date: '28 Mar 2026', read: '5 min', title: 'How to charge a vape pod kit safely', excerpt: 'A short guide to USB-C, fast charging, and why your pod\'s LED keeps blinking red.' },
    { tag: 'Reviews', date: '22 Mar 2026', read: '7 min', title: 'IVG XL 35K vs. Hyola 30K — head to head', excerpt: 'Two flagship 30K+ pod kits compared on flavour, battery, build quality and price.' },
    { tag: 'News', date: '14 Mar 2026', read: '2 min', title: 'New 50K Pyne Pod Click — first look', excerpt: 'Out next week. Here\'s a first look at the device, the click-pod system, and the launch flavours.' },
  ];
  const tags = ['All', 'Guides', 'Reviews', 'News', 'How-to', 'Flavour drops'];
  return (
    <div data-screen-label="12 Blog Index — desktop">
      <section style={{ padding: '56px 32px 24px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="eyebrow">The Vape Big Journal</span>
            <h1 className="display h-display" style={{ fontSize: 72, margin: '14px 0 14px' }}>Reviews. Guides.<br/>Real talk on vaping.</h1>
            <p style={{ fontSize: 16, color: 'var(--ink-700)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>Honest product reviews and practical guides — written by people who actually vape, for people who actually vape.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            {tags.map((t, i) => (
              <button key={t} className="btn" style={{ padding: '9px 16px', fontSize: 13, borderRadius: 999, background: i === 0 ? 'var(--ink-950)' : 'transparent', color: i === 0 ? '#fff' : 'var(--ink-800)', border: i === 0 ? 'none' : '1.5px solid var(--ink-200)' }}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '32px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Featured */}
          <a onClick={() => onNav?.('blogpost')} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, background: 'var(--ink-950)', color: '#fff', borderRadius: 22, overflow: 'hidden', cursor: 'pointer', marginBottom: 32 }}>
            <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, var(--violet-700), var(--violet-900))', position: 'relative', display: 'grid', placeItems: 'center' }}>
              <span className="chip chip-lime" style={{ position: 'absolute', top: 24, left: 24, fontSize: 10 }}>Featured · {featured.tag}</span>
              <Icon name="cloud" size={120} stroke={1} />
            </div>
            <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="mono" style={{ fontSize: 11, color: '#a89cb8', letterSpacing: '.1em', textTransform: 'uppercase' }}>{featured.date} · {featured.read} read</div>
              <h2 className="display h-display" style={{ fontSize: 44, color: '#fff', margin: '14px 0 14px' }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: '#cfc6dd', lineHeight: 1.6 }}>{featured.excerpt}</p>
              <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--lime)', fontWeight: 600, fontSize: 14 }}>Read the article <Icon name="arrow-r" size={15} /></div>
            </div>
          </a>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {posts.map(p => (
              <a key={p.title} onClick={() => onNav?.('blogpost')} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 18, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/10', background: ['var(--paper-3)', 'var(--violet-100)', 'var(--lime)', 'var(--paper-2)', 'var(--ink-950)', 'var(--coral)'][posts.indexOf(p)], display: 'grid', placeItems: 'center', color: posts.indexOf(p) === 4 ? '#fff' : 'var(--ink-700)', position: 'relative' }}>
                  <span className="chip" style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,.85)', color: 'var(--ink-950)', backdropFilter: 'blur(4px)', fontSize: 10 }}>{p.tag}</span>
                  <Icon name={p.tag === 'Reviews' ? 'star' : p.tag === 'News' ? 'spark' : 'info'} size={56} />
                </div>
                <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '.08em' }}>{p.date} · {p.read} read</div>
                  <div className="display" style={{ fontWeight: 700, fontSize: 19, margin: '10px 0 10px', lineHeight: 1.25 }}>{p.title}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-700)', lineHeight: 1.6, marginBottom: 14 }}>{p.excerpt}</div>
                  <span style={{ marginTop: 'auto', fontSize: 13, color: 'var(--violet-700)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Read more <Icon name="arrow-r" size={13} /></span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <button className="btn btn-soft" style={{ padding: '14px 28px', borderRadius: 999, fontSize: 14 }}>Load more articles</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPostDesktop = ({ onNav }) => (
  <div data-screen-label="13 Blog Post — desktop">
    {/* Breadcrumb band (matches PDP) */}
    <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '14px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Breadcrumb items={['Home', 'Blog', 'Guides', 'The Disposable Ban']} />
      </div>
    </div>
    <article style={{ background: 'var(--paper)' }}>
      <header style={{ padding: '64px 32px 40px', background: 'var(--ink-950)', color: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span className="chip chip-lime" style={{ fontSize: 10 }}>Guides</span>
          </div>
          <h1 className="display h-display" style={{ fontSize: 64, color: '#fff', margin: '0 0 18px', maxWidth: 760 }}>The Disposable Ban: what changes in June 2026 and what to buy now.</h1>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontSize: 13.5, color: '#a89cb8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--violet-500)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13, color: '#fff' }}>P</div>
              <span>Priya Shah</span>
            </div>
            <span>·</span>
            <span>12 April 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </header>

      <div style={{ aspectRatio: '21/9', background: 'linear-gradient(135deg, var(--violet-700), var(--violet-500), var(--lime))', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <Icon name="cloud" size={140} stroke={1} />
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 32px 80px', display: 'grid', gridTemplateColumns: '220px 1fr 220px', gap: 36 }}>
        <aside>
          <div style={{ position: 'sticky', top: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12 }}>On this page</div>
            {['What\'s changing', 'Refillable disposables', 'What we recommend', 'FAQ'].map((t, i) => (
              <a key={t} style={{ display: 'block', padding: '8px 0', fontSize: 13, color: i === 0 ? 'var(--ink-900)' : 'var(--ink-500)', borderLeft: i === 0 ? '2px solid var(--violet-500)' : '2px solid var(--paper-3)', paddingLeft: 12, fontWeight: i === 0 ? 600 : 500, cursor: 'pointer' }}>{t}</a>
            ))}
            <div style={{ marginTop: 22, padding: 14, background: 'var(--cream)', borderRadius: 12, border: '1px solid var(--paper-3)' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-500)', letterSpacing: '.12em', textTransform: 'uppercase' }}>Share</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                {['twitter', 'facebook', 'mail'].map(s => <button key={s} style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', border: '1px solid var(--paper-3)', display: 'grid', placeItems: 'center' }}><Icon name={s} size={13} /></button>)}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <p style={{ fontSize: 19, color: 'var(--ink-800)', lineHeight: 1.55, fontWeight: 500, marginTop: 0 }}>From 1 June 2026, the UK government's ban on single-use disposable vapes comes into effect. If you're a regular disposable user, here's what it actually means for you, and what we'd suggest swapping to.</p>

          <h2 className="display" style={{ fontSize: 30, fontWeight: 700, marginTop: 36, marginBottom: 14 }}>What's actually changing?</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-800)', lineHeight: 1.75 }}>The new regulation prohibits the sale of any disposable vape that is not refillable and not rechargeable. Single-use Crystal Bars, original Lost Mary BM600s and equivalent devices will be cleared from shelves — both online and in store — by 31 May 2026.</p>
          <p style={{ fontSize: 16, color: 'var(--ink-800)', lineHeight: 1.75 }}>What replaces them is a generation of pod-replaceable, rechargeable kits that look and feel like a disposable but use a clip-in flavour pod and a USB-C battery. The Hayati Pro Max Plus 6K and Pro Ultra Plus 25K are the most popular examples we stock.</p>

          <blockquote style={{ background: 'var(--violet-100)', borderLeft: '4px solid var(--violet-500)', padding: 22, borderRadius: 12, fontSize: 17, fontStyle: 'italic', color: 'var(--violet-900)', margin: '28px 0', lineHeight: 1.6 }}>
            "Refillable disposables aren't a workaround — they're genuinely better products. More puffs, cleaner flavour, and you can swap pods without buying a new device."
          </blockquote>

          <h2 className="display" style={{ fontSize: 30, fontWeight: 700, marginTop: 36, marginBottom: 14 }}>What we recommend buying now</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-800)', lineHeight: 1.75 }}>If you're shopping for a new device today, three kits offer the closest disposable-style experience while complying with the upcoming regulation:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, margin: '20px 0' }}>
            {HERO_PRODUCTS.slice(0, 3).map(p => <ProductCard key={p.name} p={p} />)}
          </div>

          <p style={{ fontSize: 16, color: 'var(--ink-800)', lineHeight: 1.75 }}>All three are in stock at Vape Big and ship same day on orders before 8pm. Pods are widely available and cost 30–50% less per puff than the disposable they replace.</p>

          <h2 className="display" style={{ fontSize: 30, fontWeight: 700, marginTop: 36, marginBottom: 14 }}>What to do if you've stockpiled disposables</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-800)', lineHeight: 1.75 }}>Single-use disposables you already own are fine to keep using after the ban — the regulation covers sale, not possession. But local councils are setting up vape recycling drop-offs in most major towns; we'd recommend bringing them in rather than binning them, given the lithium battery inside.</p>

          <div style={{ background: 'var(--ink-950)', color: '#fff', borderRadius: 18, padding: 28, marginTop: 36 }}>
            <span className="eyebrow" style={{ color: 'var(--lime)' }}>Got a question?</span>
            <div className="display" style={{ fontWeight: 700, fontSize: 24, color: '#fff', margin: '8px 0 6px' }}>Need help picking a kit?</div>
            <p style={{ fontSize: 14, color: '#cfc6dd', lineHeight: 1.6, margin: 0 }}>Our team will recommend the right device for your old disposable. Quick chat — Mon–Fri 10–3.</p>
            <button onClick={() => onNav?.('contact')} className="btn btn-lime" style={{ marginTop: 14, padding: '12px 18px', borderRadius: 999, fontSize: 13 }}>Chat with our team</button>
          </div>
        </div>

        <aside>
          <div style={{ position: 'sticky', top: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 14 }}>Mentioned in this post</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {HERO_PRODUCTS.slice(0, 3).map(p => (
                <a key={p.name} style={{ display: 'flex', gap: 12, padding: 12, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 12, cursor: 'pointer' }}>
                  <div style={{ width: 56, aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 8, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <img src={p.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>{p.name}</div>
                    <div className="display" style={{ fontWeight: 700, fontSize: 14, marginTop: 4 }}>£{p.price}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div style={{ background: 'var(--cream)', padding: '48px 32px', borderTop: '1px solid var(--paper-3)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h3 className="display h-display" style={{ fontSize: 32, margin: '0 0 22px' }}>Keep reading</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {['Hayati Pro Ultra Plus 25K — full review', 'Choosing your first vape: a beginner\'s guide', 'Vape Tax UK 2026: what you\'ll actually pay'].map((t, i) => (
              <a key={t} onClick={() => onNav?.('blogpost')} style={{ background: '#fff', borderRadius: 16, padding: 22, border: '1px solid var(--paper-3)', cursor: 'pointer' }}>
                <span className="chip chip-paper" style={{ fontSize: 10 }}>{['Reviews', 'Guides', 'News'][i]}</span>
                <div className="display" style={{ fontWeight: 700, fontSize: 18, marginTop: 12, lineHeight: 1.3 }}>{t}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  </div>
);

window.AboutDesktop = AboutDesktop;
window.ContactDesktop = ContactDesktop;
window.BlogIndexDesktop = BlogIndexDesktop;
window.BlogPostDesktop = BlogPostDesktop;

// ============================================================
// BIG POINTS — rewards programme explainer page
// ============================================================
const BigPointsDesktop = ({ onNav }) => (
  <div data-screen-label="14 Big Points — desktop">
    {/* Breadcrumb band (matches PDP) */}
    <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '14px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Breadcrumb items={['Home', 'Help', 'Big Points rewards']} />
      </div>
    </div>

    {/* Hero — dark blaze panel with point counter */}
    <section style={{ background: 'var(--ink-950)', color: '#fff', padding: '56px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -80, right: -100, width: 360, height: 360, borderRadius: 999, background: 'radial-gradient(circle, var(--blaze), transparent 65%)', opacity: .55 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--blaze)', fontWeight: 700 }}>Big Points · Vape Big rewards</span>
          <h1 className="display h-display" style={{ fontSize: 64, color: '#fff', margin: '14px 0 14px', letterSpacing: '-.025em', lineHeight: 1.02 }}>Earn 5 points for every £1 you spend.</h1>
          <p style={{ fontSize: 16.5, color: '#cfc6dd', lineHeight: 1.6, maxWidth: 580, margin: 0 }}>
            Big Points stack up on every order, no membership fee, no expiry. Redeem them at checkout — 100 points knocks £1 off the bill. Effectively 5% back, for being a regular.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <button onClick={() => onNav?.('signin')} className="btn btn-violet" style={{ padding: '14px 22px', borderRadius: 8, fontSize: 13.5 }}>Sign up & start earning <Icon name="arrow-r" size={14} /></button>
            <button onClick={() => onNav?.('account')} className="btn" style={{ padding: '14px 22px', borderRadius: 8, fontSize: 13.5, color: '#fff', border: '1.5px solid rgba(255,255,255,.25)' }}>View my balance</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: '22px 24px' }}>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--blaze)', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 700 }}>Earn rate</div>
            <div className="display h-display" style={{ fontSize: 46, fontWeight: 800, color: '#fff', marginTop: 6, letterSpacing: '-.02em' }}>5 pts <span style={{ color: '#a89cb8', fontSize: 22, fontWeight: 500 }}>per £1</span></div>
          </div>
          <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: '22px 24px' }}>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--lime)', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 700 }}>Redeem rate</div>
            <div className="display h-display" style={{ fontSize: 46, fontWeight: 800, color: '#fff', marginTop: 6, letterSpacing: '-.02em' }}>100 pts <span style={{ color: '#a89cb8', fontSize: 22, fontWeight: 500 }}>= £1</span></div>
          </div>
        </div>
      </div>
    </section>

    {/* How it works — 3 steps */}
    <section style={{ background: 'var(--paper)', padding: '64px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span className="eyebrow">Three steps</span>
          <h2 className="display h-display" style={{ fontSize: 40, margin: '6px 0 0', letterSpacing: '-.025em' }}>How Big Points work</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            { n: '01', h: 'Spend', s: 'Place an order while signed in. Every £1 you spend (excluding shipping, taxes, discounts and coupons) earns you 5 Big Points.', ico: 'bag' },
            { n: '02', h: 'Earn', s: 'Points land in your account once the order ships. View your live balance any time in Account → Rewards.', ico: 'trophy' },
            { n: '03', h: 'Redeem', s: 'At checkout, choose how many points to spend — every 100 points takes £1 off your order total. Mix with any active discount.', ico: 'tag' },
          ].map(step => (
            <div key={step.n} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 16, padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="display" style={{ fontSize: 32, fontWeight: 800, color: 'var(--blaze)', letterSpacing: '-.02em' }}>{step.n}</span>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--violet-50)', color: 'var(--blaze-2)', display: 'grid', placeItems: 'center' }}><Icon name={step.ico} size={20} /></span>
              </div>
              <div className="display" style={{ fontWeight: 700, fontSize: 22, margin: '18px 0 8px', color: 'var(--ink-950)' }}>{step.h}</div>
              <p style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.65, margin: 0 }}>{step.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Worked example */}
    <section style={{ background: 'var(--cream)', padding: '56px 32px', borderTop: '1px solid var(--paper-3)', borderBottom: '1px solid var(--paper-3)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 22 }}>
          <span className="eyebrow">A worked example</span>
          <h2 className="display h-display" style={{ fontSize: 32, margin: '6px 0 0', letterSpacing: '-.02em' }}>What you'd earn on a typical order</h2>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 18, overflow: 'hidden' }}>
          {[
            ['Cart subtotal', '£42.00'],
            ['– WELCOME10 discount', '−£4.50'],
            ['– Free delivery', 'FREE'],
            ['Eligible spend', '£37.50'],
          ].map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderTop: i ? '1px solid var(--paper-3)' : 'none', fontSize: 14.5, color: i === 3 ? 'var(--ink-950)' : 'var(--ink-700)', fontWeight: i === 3 ? 700 : 500, background: i === 3 ? 'var(--paper-2)' : 'transparent' }}>
              <span>{k}</span><span className={i === 3 ? 'display' : ''}>{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderTop: '1px solid var(--paper-3)', background: 'var(--ink-950)', color: '#fff' }}>
            <span className="display" style={{ fontWeight: 700, fontSize: 17 }}>You earn</span>
            <span className="display h-display" style={{ fontWeight: 800, fontSize: 28, color: 'var(--lime)', letterSpacing: '-.02em' }}>187 Big Points <span style={{ fontSize: 13, color: '#a89cb8', fontWeight: 500 }}>(worth £1.87)</span></span>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink-600)', marginTop: 14, lineHeight: 1.6 }}>
          Points are calculated on the eligible spend only — your order subtotal <strong>after</strong> discounts and coupons, and <strong>before</strong> shipping. Same rule applies whether you pay with card, Klarna, or Apple Pay.
        </p>
      </div>
    </section>

    {/* FAQ — CSS-only */}
    <section style={{ background: 'var(--paper)', padding: '64px 32px 88px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 18 }}>
          <span className="eyebrow">Big Points FAQ</span>
          <h2 className="display h-display" style={{ fontSize: 32, margin: '6px 0 0', letterSpacing: '-.025em' }}>Things you might be wondering</h2>
        </div>
        <div>
          <ProductAccordion id="bp-faq-rate" defaultOpen title="How many points do I earn per £1?">
            5 Big Points for every £1 of eligible spend. Eligible spend = order subtotal after discounts and coupons, but before shipping and taxes.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-value" title="What is 1 point worth?">
            1 Big Point = £0.01. So 100 points = £1, 500 points = £5, 1,000 points = £10. There's no minimum redemption — apply any amount at checkout.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-eligible" title="Why don't shipping costs earn points?">
            Big Points reward what you actually spend on products. Delivery fees and any redeemed coupons / promo discounts are stripped out before the 5×£1 calculation runs.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-when" title="When do points land in my account?">
            Points are pending as soon as you place the order, and convert to a usable balance the moment your order is dispatched. You can see both pending and available points in Account → Rewards.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-failed" title="My order failed — what happens to the points I used?">
            If you redeemed points on an order that subsequently failed (payment declined, address rejected, fraud check, etc.), those points stay attached to that order until it's resolved. To re-use them on a new order, you'll need to <strong>cancel the failed order first</strong> from Account → Orders — that releases the points back to your balance.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-expire" title="Do Big Points expire?">
            Big Points don't expire as long as your account is active. If you don't log in or place an order for 24 months your account becomes dormant, at which point any unredeemed points are forfeited — but a single sign-in resets the clock.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-stack" title="Can I stack points with other discounts?">
            Yes. Points can be redeemed on top of any promo code or sale price. Just remember points are earned on the discounted total, not the original price.
          </ProductAccordion>
          <ProductAccordion id="bp-faq-returns" title="What if I return a product I earned points on?">
            If you return part or all of an order, the points earned on the returned items are reversed from your balance. If that would take your balance negative, the remainder is deducted from your refund.
          </ProductAccordion>
        </div>
      </div>
    </section>
  </div>
);
window.BigPointsDesktop = BigPointsDesktop;
