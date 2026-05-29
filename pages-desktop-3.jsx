// pages-desktop-3.jsx — Cart, Checkout, OrderConfirm, SignIn, Account

const CartDesktop = ({ onNav }) => {
  const initial = [
    { ...HERO_PRODUCTS[0], qty: 2, flavour: 'Blue Razz Cherry', strength: '20mg' },
    { ...HERO_PRODUCTS[1], qty: 1, flavour: 'Banana Ice', strength: '20mg' },
    { ...HERO_PRODUCTS[3], qty: 3, flavour: 'Cola Ice', strength: '10mg' },
  ];
  const [items, setItems] = React.useState(initial);
  const [savedItems, setSavedItems] = React.useState([]);
  const [toast, setToast] = React.useState(null); // { msg, undo }
  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  const setQty = (i, delta) => {
    setItems(items.map((it, idx) => idx === i ? { ...it, qty: Math.max(1, it.qty + delta) } : it));
  };
  const saveForLater = (i) => {
    const it = items[i];
    setItems(items.filter((_, idx) => idx !== i));
    setSavedItems([it, ...savedItems]);
    setToast({
      msg: <><strong>{it.name}</strong> saved for later</>,
      undo: () => { setItems(prev => [...prev, it]); setSavedItems(prev => prev.filter(x => x !== it)); setToast(null); },
    });
  };
  const moveToBag = (it) => {
    setSavedItems(savedItems.filter(x => x !== it));
    setItems([...items, it]);
    setToast({ msg: <><strong>{it.name}</strong> moved back to your bag</>, undo: null });
  };
  const removeItem = (i) => {
    const it = items[i];
    setItems(items.filter((_, idx) => idx !== i));
    setToast({
      msg: <><strong>{it.name}</strong> removed</>,
      undo: () => { setItems(prev => [...prev, it]); setToast(null); },
    });
  };

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= 35 ? 0 : 3.95;
  const total = subtotal + shipping;
  return (
    <div data-screen-label="05 Cart — desktop">
      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', background: 'var(--ink-950)', color: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 16, zIndex: 200, fontSize: 13.5, maxWidth: 460 }}>
          <span style={{ color: 'var(--lime)', display: 'inline-flex' }}><Icon name="check" size={16} stroke={2.4} /></span>
          <span style={{ flex: 1 }}>{toast.msg}</span>
          {toast.undo && <button onClick={toast.undo} style={{ color: 'var(--lime)', fontWeight: 700, textDecoration: 'underline' }}>Undo</button>}
          <button onClick={() => setToast(null)} style={{ color: '#a89cb8', display: 'inline-flex' }}><Icon name="x" size={14} /></button>
        </div>
      )}
      <div style={{ background: 'var(--paper)', borderBottom: '1px solid var(--paper-3)', padding: '14px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}><Breadcrumb items={['Home', 'Shopping Bag']} /></div>
      </div>
      <section style={{ padding: '40px 32px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
            <h1 className="display h-display" style={{ fontSize: 56, margin: 0 }}>Your bag</h1>
            <span style={{ fontSize: 14, color: 'var(--ink-600)' }}>{items.length} items · {items.reduce((s, it) => s + it.qty, 0)} in total</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32 }}>
            <div>
              {/* Free delivery progress */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 18, marginBottom: 14 }}>
                {shipping === 0 ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontSize: 13.5, color: 'var(--ink-700)' }}>You qualify for <strong style={{ color: 'var(--good)' }}>FREE delivery</strong> — nice one.</span>
                    <Icon name="check" size={16} stroke={2.4} />
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontSize: 13.5, color: 'var(--ink-700)' }}>Add <strong style={{ color: 'var(--blaze-2)' }}>£{(35 - subtotal).toFixed(2)}</strong> more to qualify for <strong>FREE delivery</strong>.</span>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-500)' }}>£{subtotal.toFixed(2)} / £35</span>
                  </div>
                )}
                <div style={{ height: 6, background: 'var(--paper-2)', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ width: `${Math.min(100, (subtotal / 35) * 100)}%`, height: '100%', background: shipping === 0 ? 'linear-gradient(90deg, var(--violet-500), var(--lime))' : 'var(--blaze)', borderRadius: 99, transition: 'width .3s' }} />
                </div>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--paper-3)', fontSize: 12, color: 'var(--ink-600)', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--blaze-2)', display: 'inline-flex', flexShrink: 0, marginTop: 1 }}><Icon name="info" size={13} stroke={2} /></span>
                  <span>Adding a coupon or redeeming Big Points at checkout? Heads up — if your discount drops the subtotal under £35, free delivery no longer applies.</span>
                </div>
              </div>

              {/* Items */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 6 }}>
                {items.map((it, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr auto', gap: 18, padding: 18, borderTop: i ? '1px solid var(--paper-3)' : 'none' }}>
                    <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 10, display: 'grid', placeItems: 'center' }}>
                      <img src={it.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 10.5, color: 'var(--violet-700)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{it.brand}</div>
                      <div className="display" style={{ fontWeight: 600, fontSize: 16, marginTop: 2 }}>{it.name}</div>
                      <div style={{ fontSize: 12.5, color: 'var(--ink-600)', marginTop: 4, display: 'flex', gap: 12 }}>
                        <span>Flavour: <strong>{it.flavour}</strong></span><span>Strength: <strong>{it.strength}</strong></span>
                      </div>
                      <div style={{ display: 'flex', gap: 14, marginTop: 12, fontSize: 12, alignItems: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid var(--ink-200)', borderRadius: 8 }}>
                          <button onClick={() => setQty(i, -1)} style={{ width: 30, height: 30 }}><Icon name="minus" size={12} /></button>
                          <span style={{ minWidth: 26, textAlign: 'center', fontWeight: 700 }}>{it.qty}</span>
                          <button onClick={() => setQty(i, 1)} style={{ width: 30, height: 30 }}><Icon name="plus" size={12} /></button>
                        </div>
                        <a onClick={() => saveForLater(i)} style={{ color: 'var(--ink-500)', cursor: 'pointer', display: 'inline-flex', gap: 4, alignItems: 'center' }}><Icon name="heart" size={12} /> Save for later</a>
                        <a onClick={() => removeItem(i)} style={{ color: 'var(--ink-500)', cursor: 'pointer', display: 'inline-flex', gap: 4, alignItems: 'center' }}><Icon name="trash" size={12} /> Remove</a>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <PriceTag price={it.price * it.qty} was={it.was ? it.was * it.qty : null} />
                      <div style={{ fontSize: 11, color: 'var(--ink-500)', marginTop: 6 }}>£{it.price.toFixed(2)} each</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Saved for later */}
              {savedItems.length > 0 && (
                <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 18, marginTop: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <h3 className="display" style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>Saved for later <span style={{ color: 'var(--ink-500)', fontWeight: 500, fontSize: 13 }}>({savedItems.length})</span></h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {savedItems.map((it, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto auto', gap: 14, alignItems: 'center' }}>
                        <div style={{ width: 64, height: 64, background: 'var(--paper-2)', borderRadius: 10, display: 'grid', placeItems: 'center' }}>
                          <img src={it.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div className="display" style={{ fontWeight: 600, fontSize: 14 }}>{it.name}</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-500)', marginTop: 2 }}>{it.flavour} · {it.strength} · qty {it.qty}</div>
                        </div>
                        <div className="display" style={{ fontWeight: 700, fontSize: 14 }}>£{(it.price * it.qty).toFixed(2)}</div>
                        <button onClick={() => moveToBag(it)} className="btn btn-soft" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 12.5 }}>Move to bag</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside>
              <div style={{ position: 'sticky', top: 16, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 16, padding: 24 }}>
                <h3 className="display" style={{ fontWeight: 700, fontSize: 18, margin: '0 0 16px' }}>Order summary</h3>
                {[
                  ['Subtotal', subtotal.toFixed(2)],
                  ['Delivery', shipping === 0 ? 'FREE' : shipping.toFixed(2)],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 13.5, color: 'var(--ink-700)' }}>
                    <span>{k}</span><span>{typeof v === 'string' && v === 'FREE' ? <span style={{ color: 'var(--good)', fontWeight: 700 }}>FREE</span> : `£${v}`}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 4px', borderTop: '1px solid var(--paper-3)', marginTop: 8 }}>
                  <span className="display" style={{ fontWeight: 700, fontSize: 18 }}>Total</span>
                  <span className="display" style={{ fontWeight: 800, fontSize: 24 }}>£{total.toFixed(2)}</span>
                </div>
                <button onClick={() => onNav?.('checkout')} className="btn btn-ink" style={{ width: '100%', padding: 16, fontSize: 15, borderRadius: 10, marginTop: 16 }}>Checkout securely <Icon name="arrow-r" size={15} /></button>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', marginTop: 14, fontSize: 11, color: 'var(--ink-500)' }}>
                  <Icon name="lock" size={12} /> Secure SSL · 256-bit encryption
                </div>
                <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12 }}>
                  {['VISA', 'MC', 'AMEX', 'PAY', 'KLR'].map(p => (<div key={p} style={{ background: 'var(--paper-2)', color: 'var(--ink-800)', borderRadius: 6, padding: '4px 8px', fontSize: 9.5, fontWeight: 800 }}>{p}</div>))}
                </div>
              </div>
            </aside>
          </div>

          {/* Cross-sell — full width */}
          <div style={{ marginTop: 40 }}>
            <h3 className="display h-display" style={{ fontSize: 22, margin: '0 0 14px' }}>Related products</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
              {ELIQUIDS.slice(0, 4).map(p => <ProductCard key={p.name} p={p} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckoutDesktop = ({ onNav }) => {
  const [step, setStep] = React.useState(2);
  const [delivery, setDelivery] = React.useState('t48');
  const [pay, setPay] = React.useState('card');
  return (
    <div data-screen-label="06 Checkout — desktop">
      <div style={{ background: 'var(--ink-950)', color: '#fff', padding: '18px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a onClick={() => onNav?.('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}><LogoMark size={32} /><Wordmark light size={20} /></a>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 12.5, color: '#a89cb8' }}>
            <Icon name="lock" size={14} /> Secure checkout
          </div>
          <a onClick={() => onNav?.('cart')} style={{ fontSize: 13, color: '#a89cb8', cursor: 'pointer' }}>← Back to cart</a>
        </div>
      </div>
      <section style={{ padding: '40px 32px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          {/* Stepper */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            {[
              { n: 1, l: 'Account' },
              { n: 2, l: 'Delivery' },
              { n: 3, l: 'Payment' },
              { n: 4, l: 'Review' },
            ].map((s, i) => (
              <React.Fragment key={s.n}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: step >= s.n ? 1 : .45 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 999, background: step > s.n ? 'var(--violet-500)' : step === s.n ? 'var(--ink-950)' : '#fff', color: step >= s.n ? '#fff' : 'var(--ink-700)', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, border: step < s.n ? '1.5px solid var(--ink-200)' : 'none' }}>
                    {step > s.n ? <Icon name="check" size={13} stroke={2.4} /> : s.n}
                  </div>
                  <span className="display" style={{ fontWeight: step === s.n ? 700 : 500, fontSize: 14 }}>{s.l}</span>
                </div>
                {i < 3 && <div style={{ flex: 1, height: 2, background: step > s.n ? 'var(--violet-500)' : 'var(--paper-3)' }} />}
              </React.Fragment>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Account */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="display" style={{ margin: 0, fontWeight: 700, fontSize: 17 }}>1. Account · charlie@example.com</h3>
                  <button style={{ fontSize: 12, color: 'var(--violet-700)', fontWeight: 600 }}>Change</button>
                </div>
              </div>

              {/* Delivery */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
                <h3 className="display" style={{ margin: '0 0 16px', fontWeight: 700, fontSize: 17 }}>2. Delivery</h3>
                {(() => {
                  const fieldBox = { padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 13.5, background: '#fff', position: 'relative' };
                  const labelStyle = { fontSize: 11, color: 'var(--ink-500)', fontWeight: 500, display: 'block', marginBottom: 4 };
                  const reqDot = <span style={{ color: '#c63e3e', marginLeft: 2 }}>*</span>;
                  const Field = ({ label, required, children }) => (
                    <div style={fieldBox}>
                      <label style={labelStyle}>{label}{required && reqDot}</label>
                      {children}
                    </div>
                  );
                  const inputStyle = { width: '100%', border: 0, outline: 0, background: 'transparent', fontSize: 14, color: 'var(--ink-900)', fontFamily: 'inherit', padding: 0 };
                  return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 16 }}>
                      <Field label="First name" required><input defaultValue="Charlie" style={inputStyle} /></Field>
                      <Field label="Last name" required><input defaultValue="Thomas" style={inputStyle} /></Field>
                      <div style={{ ...fieldBox, gridColumn: 'span 2' }}>
                        <label style={labelStyle}>Country{reqDot}</label>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <select defaultValue="UK" style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                            <option value="UK">United Kingdom</option>
                            <option value="IE">Ireland</option>
                          </select>
                          <Icon name="chev-d" size={13} />
                        </div>
                      </div>
                      <div style={{ gridColumn: 'span 2' }}><Field label="Company (optional)"><input style={inputStyle} /></Field></div>
                      <div style={{ gridColumn: 'span 2' }}><Field label="Address line 1" required><input defaultValue="124 Old Street" style={inputStyle} /></Field></div>
                      <div style={{ gridColumn: 'span 2' }}><Field label="Address line 2 (optional)"><input style={inputStyle} /></Field></div>
                      <Field label="City" required><input defaultValue="London" style={inputStyle} /></Field>
                      <Field label="County"><input defaultValue="Greater London" style={inputStyle} /></Field>
                      <Field label="Postcode" required><input defaultValue="EC1V 9HX" style={inputStyle} /></Field>
                      <Field label="Phone number" required><input defaultValue="07700 900123" style={inputStyle} /></Field>
                    </div>
                  );
                })()}
                <h4 className="display" style={{ margin: '12px 0 10px', fontWeight: 700, fontSize: 14 }}>Shipping method</h4>
                {[
                  { k: 't48', l: 'Tracked 48', s: '2–4 working days', p: 'FREE', sub: ['Free when over £35', 'Track your parcel', 'Tracked 48 hours', '2–4 working days', 'Same-day dispatch for orders before 4pm (Mon–Fri)'] },
                  { k: 't24', l: 'Tracked 24', s: '1–2 working days', p: '£3.99', sub: ['Track your parcel', 'Tracked 24 hours', '1–2 working days', 'Same-day dispatch for orders before 4pm (Mon–Fri)'] },
                ].map(d => (
                  <label key={d.k} style={{ display: 'block', padding: 16, border: delivery === d.k ? '2px solid var(--ink-950)' : '1.5px solid var(--ink-200)', borderRadius: 10, cursor: 'pointer', marginBottom: 10, background: delivery === d.k ? 'var(--ink-50)' : '#fff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <input type="radio" checked={delivery === d.k} onChange={() => setDelivery(d.k)} style={{ accentColor: 'var(--blaze)', width: 18, height: 18, cursor: 'pointer', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="display" style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-950)' }}>{d.l} <span style={{ color: 'var(--ink-500)', fontSize: 13, fontWeight: 500 }}>({d.s})</span></div>
                      </div>
                      <div className="display" style={{ fontWeight: 800, fontSize: 17, color: d.p === 'FREE' ? 'var(--good)' : 'var(--ink-950)', flexShrink: 0 }}>{d.p}</div>
                    </div>
                    <ul style={{ margin: '10px 0 0 30px', padding: 0, listStyle: 'disc', fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.75 }}>
                      {d.sub.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </label>
                ))}
              </div>

              {/* Coupon */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
                <h3 className="display" style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 17 }}>Have a coupon?</h3>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input placeholder="COUPON" style={{ flex: 1, padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 13.5, letterSpacing: '.04em', textTransform: 'uppercase', fontFamily: 'inherit', outline: 0 }} />
                  <button className="btn" style={{ padding: '0 22px', borderRadius: 10, fontSize: 13.5, fontWeight: 700, background: 'var(--good)', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Icon name="tag" size={14} /> Apply
                  </button>
                </div>
                <div style={{ marginTop: 10, padding: '10px 12px', background: 'var(--paper-2)', borderRadius: 8, fontSize: 12, color: 'var(--ink-700)', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--blaze-2)', display: 'inline-flex', flexShrink: 0, marginTop: 1 }}><Icon name="info" size={13} stroke={2} /></span>
                  <span>Heads up — if your coupon or redeemed Big Points drop the subtotal below <strong>£35</strong>, free delivery will no longer apply.</span>
                </div>
              </div>

              {/* Payment */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
                <h3 className="display" style={{ margin: '0 0 16px', fontWeight: 700, fontSize: 17 }}>3. Payment</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { k: 'card',  l: 'Credit / Debit', cta: 'Place order — £53.97' },
                    { k: 'pay',   l: 'Apple Pay',      cta: 'Continue with Apple Pay' },
                    { k: 'gpay',  l: 'Google Pay',     cta: 'Continue with Google Pay' },
                  ].map(opt => {
                    const active = pay === opt.k;
                    return (
                      <div key={opt.k} style={{ border: active ? '2px solid var(--ink-950)' : '1.5px solid var(--ink-200)', borderRadius: 10, overflow: 'hidden', background: active ? '#fff' : 'var(--paper)' }}>
                        <button onClick={() => setPay(opt.k)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', cursor: 'pointer', background: 'transparent' }}>
                          <span style={{ width: 18, height: 18, borderRadius: 999, border: active ? '5px solid var(--blaze)' : '1.5px solid var(--ink-300)', background: '#fff', flexShrink: 0 }} />
                          <span style={{ flex: 1, textAlign: 'left', fontSize: 14.5, fontWeight: 600, color: 'var(--ink-950)' }}>{opt.l}</span>
                        </button>
                        {active && (
                          <div style={{ padding: '0 16px 16px', borderTop: '1px dashed var(--paper-3)' }}>
                            {opt.k === 'card' ? (
                              <div style={{ paddingTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                                <input placeholder="Card number" style={{ padding: 12, borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13.5, gridColumn: 'span 2', fontFamily: 'inherit', outline: 0 }} />
                                <input placeholder="MM / YY" style={{ padding: 12, borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13.5, fontFamily: 'inherit', outline: 0 }} />
                                <input placeholder="CVC" style={{ padding: 12, borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13.5, fontFamily: 'inherit', outline: 0 }} />
                                <input placeholder="Name on card" style={{ padding: 12, borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13.5, gridColumn: 'span 2', fontFamily: 'inherit', outline: 0 }} />
                                <button onClick={() => onNav?.('order')} className="btn btn-ink" style={{ gridColumn: 'span 2', padding: 14, fontSize: 14, borderRadius: 10, marginTop: 4 }}><Icon name="lock" size={14} /> {opt.cta}</button>
                              </div>
                            ) : (
                              <div style={{ paddingTop: 14 }}>
                                <button onClick={() => onNav?.('order')} className="btn btn-ink" style={{ width: '100%', padding: 14, fontSize: 14, borderRadius: 10 }}>
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

              {/* Age verify removed */}

              {/* Consent + T&Cs */}
              <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13.5, color: 'var(--ink-800)' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: 'var(--blaze)', width: 17, height: 17, marginTop: 2, flexShrink: 0, cursor: 'pointer' }} />
                  <span>Sign me up to receive email updates and news <span style={{ color: 'var(--ink-500)' }}>(optional)</span></span>
                </label>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--blaze)', width: 17, height: 17, marginTop: 2, flexShrink: 0, cursor: 'pointer' }} />
                  <span>I have read and agree to the website <a href="https://www.vapebig.co.uk/page/terms-and-conditions/" onClick={(e) => e.preventDefault()} style={{ color: 'var(--blaze-2)', textDecoration: 'underline', fontWeight: 600 }}>terms and conditions</a> <span style={{ color: '#c63e3e' }}>*</span></span>
                </label>
              </div>

              {/* Place order lives inside each payment method now */}
            </div>

            <aside>
              <div style={{ position: 'sticky', top: 16, background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 16, padding: 22 }}>
                <h4 className="display" style={{ fontWeight: 700, fontSize: 16, margin: '0 0 14px' }}>Your order (3 items)</h4>
                {[HERO_PRODUCTS[0], HERO_PRODUCTS[1], HERO_PRODUCTS[3]].map((it, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: 12, padding: '10px 0', borderTop: i ? '1px solid var(--paper-3)' : 'none' }}>
                    <div style={{ aspectRatio: '1/1', background: 'var(--paper-2)', borderRadius: 8, display: 'grid', placeItems: 'center', position: 'relative' }}>
                      <img src={it.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                      <span style={{ position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: 999, background: 'var(--ink-950)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>{[2, 1, 3][i]}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.3 }}>{it.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink-500)', marginTop: 2 }}>20mg · {['Blue Razz Cherry', 'Banana Ice', 'Cola Ice'][i]}</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>£{(it.price * [2, 1, 3][i]).toFixed(2)}</div>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid var(--paper-3)', marginTop: 12, paddingTop: 12 }}>
                  {[['Subtotal', '54.93'], ['Discount', '−4.50'], ['Delivery (Next-day)', '3.95'], ['VAT (incl.)', '8.99']].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '4px 0', color: 'var(--ink-700)' }}>
                      <span>{k}</span><span>£{v}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 0', borderTop: '1px solid var(--paper-3)', marginTop: 8 }}>
                    <span className="display" style={{ fontWeight: 700, fontSize: 16 }}>Total</span>
                    <span className="display" style={{ fontWeight: 800, fontSize: 22 }}>£53.97</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

const OrderConfirmDesktop = ({ onNav }) => (
  <div data-screen-label="07 Order Confirm — desktop">
    <section style={{ padding: '64px 32px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ width: 84, height: 84, borderRadius: 999, background: 'var(--lime)', color: 'var(--ink-950)', display: 'grid', placeItems: 'center', margin: '0 auto 22px', boxShadow: '0 20px 60px -20px rgba(184,224,43,.6)' }}><Icon name="check" size={40} stroke={2.4} /></div>
          <span className="eyebrow">Order confirmed</span>
          <h1 className="display h-display" style={{ fontSize: 56, margin: '10px 0 12px' }}>Cheers, Charlie. Your vapes are on their way.</h1>
          <p style={{ fontSize: 15.5, color: 'var(--ink-700)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            We've received your order <strong>#VB-208461</strong>. A confirmation email is on its way to <strong>charlie@example.com</strong>. Royal Mail tracking will follow once we ship — usually within 4 hours.
          </p>
        </div>

        {/* Tracker */}
        <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 18, padding: 28, marginBottom: 22 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', left: '12.5%', right: '12.5%', top: 17, height: 2, background: 'var(--paper-3)' }} />
            <div style={{ position: 'absolute', left: '12.5%', top: 17, width: '37.5%', height: 2, background: 'var(--violet-500)' }} />
            {[['Confirmed', 'Just now', true], ['Picking', 'In ~1 hour', true], ['Dispatched', 'Today by 8pm', false], ['Delivered', 'Tomorrow', false]].map(([l, t, done], i) => (
              <div key={l} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: 36, height: 36, borderRadius: 999, background: done ? 'var(--violet-500)' : '#fff', color: '#fff', border: done ? 'none' : '2px solid var(--paper-3)', display: 'grid', placeItems: 'center', margin: '0 auto', position: 'relative', zIndex: 1, fontWeight: 700, fontSize: 13 }}>
                  {done ? <Icon name="check" size={16} stroke={2.4} /> : <span style={{ color: 'var(--ink-400)' }}>{i + 1}</span>}
                </div>
                <div className="display" style={{ fontWeight: 700, fontSize: 13, marginTop: 10 }}>{l}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-500)', marginTop: 2 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
            <h4 className="display" style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 14 }}>Delivery to</h4>
            <div style={{ fontSize: 13.5, color: 'var(--ink-800)', lineHeight: 1.7 }}>
              Charlie Thomas<br />124 Old Street<br />London EC1V 9HX<br />07700 900123
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
            <h4 className="display" style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 14 }}>Payment</h4>
            <div style={{ fontSize: 13.5, color: 'var(--ink-800)', lineHeight: 1.7 }}>
              Visa ending •• 4242<br />Total: <strong>£53.97</strong> incl. VAT<br /><span className="chip chip-good" style={{ fontSize: 10, marginTop: 6, display: 'inline-flex' }}>Verified · Yoti</span>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--ink-950)', color: '#fff', borderRadius: 18, padding: 28, marginTop: 22, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--lime)' }}>Members club</span>
            <div className="display" style={{ fontWeight: 700, fontSize: 22, color: '#fff', marginTop: 8 }}>Earn Big Points on every order.</div>
            <p style={{ color: '#cfc6dd', fontSize: 13.5, marginTop: 6, lineHeight: 1.6 }}>Create your account to track this order and start collecting Big Points — 5 points for every £1, 100 points = £1 off.</p>
          </div>
          <button onClick={() => onNav?.('signin')} className="btn btn-lime" style={{ padding: '14px 22px', borderRadius: 10, fontSize: 14 }}>Create account</button>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'center' }}>
          <button onClick={() => onNav?.('account')} className="btn btn-soft" style={{ padding: '12px 18px', borderRadius: 10, fontSize: 13.5 }}>Track order</button>
          <button onClick={() => onNav?.('home')} className="btn btn-ink" style={{ padding: '12px 18px', borderRadius: 10, fontSize: 13.5 }}>Continue shopping <Icon name="arrow-r" size={14} /></button>
        </div>
      </div>
    </section>
  </div>
);

const SignInDesktop = ({ onNav }) => {
  const [tab, setTab] = React.useState('signin');
  return (
    <div data-screen-label="08 SignIn — desktop">
      <section style={{ minHeight: 720, background: 'var(--paper)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 520, marginLeft: 'auto' }}>
          <a onClick={() => onNav?.('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 36, cursor: 'pointer' }}><LogoMark size={36} /><Wordmark size={22} /></a>
          <div className="seg" style={{ alignSelf: 'flex-start', marginBottom: 24 }}>
            <button className={tab === 'signin' ? 'active' : ''} onClick={() => setTab('signin')} style={{ padding: '10px 20px' }}>Sign in</button>
            <button className={tab === 'signup' ? 'active' : ''} onClick={() => setTab('signup')} style={{ padding: '10px 20px' }}>Create account</button>
          </div>
          {tab === 'signin' ? (
            <>
              <h1 className="display h-display" style={{ fontSize: 44, margin: '0 0 10px' }}>Welcome back.</h1>
              <p style={{ fontSize: 14.5, color: 'var(--ink-700)' }}>Sign in to track orders, manage favourites, and access members-only multibuy bundles.</p>
              <form style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <label className="mono" style={{ fontSize: 11, color: 'var(--ink-600)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: -6 }}>Email</label>
                <input type="email" defaultValue="charlie@example.com" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                <label className="mono" style={{ fontSize: 11, color: 'var(--ink-600)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: -6, marginTop: 6 }}>Password</label>
                <input type="password" defaultValue="••••••••" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
                  <label style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><input type="checkbox" defaultChecked style={{ accentColor: 'var(--violet-500)' }} /> Keep me signed in</label>
                  <a style={{ color: 'var(--violet-700)', cursor: 'pointer', fontWeight: 600 }}>Forgotten password</a>
                </div>
                <button type="button" onClick={() => onNav?.('account')} className="btn btn-ink" style={{ padding: 16, borderRadius: 10, fontSize: 14, marginTop: 8 }}>Sign in <Icon name="arrow-r" size={15} /></button>
              </form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 12, margin: '24px 0 16px' }}>
                <div style={{ height: 1, background: 'var(--paper-3)' }} /><span className="mono" style={{ fontSize: 11, color: 'var(--ink-500)' }}>OR</span><div style={{ height: 1, background: 'var(--paper-3)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {['Google', 'Apple', 'Facebook'].map(p => (
                  <button key={p} className="btn btn-soft" style={{ padding: 13, borderRadius: 10, fontSize: 13 }}>{p}</button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="display h-display" style={{ fontSize: 44, margin: '0 0 10px' }}>Join the club.</h1>
              <p style={{ fontSize: 14.5, color: 'var(--ink-700)' }}>Get 10% off your first order, exclusive bundles and early access to drops.</p>
              <form style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <input placeholder="First name" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                  <input placeholder="Last name" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                </div>
                <input type="email" placeholder="Email address" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                <input type="password" placeholder="Password (min 8 chars)" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                <input placeholder="Date of birth (DD/MM/YYYY)" style={{ padding: 14, borderRadius: 10, border: '1.5px solid var(--ink-200)', fontSize: 14 }} />
                <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12.5, color: 'var(--ink-700)', marginTop: 4 }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: 'var(--violet-500)', marginTop: 2 }} /> Yes, I'm 18+ and agree to the Terms & Privacy Policy.
                </label>
                <button type="button" onClick={() => onNav?.('account')} className="btn btn-ink" style={{ padding: 16, borderRadius: 10, fontSize: 14, marginTop: 8 }}>Create account & save 10%</button>
              </form>
            </>
          )}
        </div>
        <div style={{ background: 'linear-gradient(135deg, var(--violet-700), var(--ink-950))', color: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 56 }}>
          <div style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, borderRadius: 999, background: 'radial-gradient(circle, var(--lime) 0%, transparent 60%)', opacity: .3 }} />
          <div style={{ position: 'relative', maxWidth: 480 }}>
            <span className="eyebrow" style={{ color: 'var(--lime)' }}>Members get more</span>
            <h2 className="display h-display" style={{ fontSize: 44, color: '#fff', margin: '14px 0 18px' }}>Earn Big Points on every order.</h2>
            <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['5 Big Points earned per £1 you spend', '100 points = £1 off — redeem any amount at checkout', 'Members-only multibuy bundles', 'Early access to new drops', 'Free delivery on every order over £35', 'One-click reorder'].map(t => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#cfc6dd' }}>
                  <span style={{ color: 'var(--lime)' }}><Icon name="check" size={16} stroke={2.4} /></span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const AccountDesktop = ({ onNav }) => {
  const [tab, setTab] = React.useState('orders');
  const tabs = [
    { k: 'overview', l: 'Overview', i: 'cloud' },
    { k: 'orders', l: 'Orders', i: 'package' },
    { k: 'addresses', l: 'Addresses', i: 'pin' },
    { k: 'wishlist', l: 'Wishlist', i: 'heart' },
    { k: 'rewards', l: 'Rewards', i: 'trophy' },
  ];
  return (
    <div data-screen-label="09 Account — desktop">
      <section style={{ background: 'var(--ink-950)', color: '#fff', padding: '36px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--lime)', color: 'var(--ink-950)', display: 'grid', placeItems: 'center', fontSize: 26, fontFamily: 'Bricolage Grotesque', fontWeight: 800 }}>CT</div>
            <div>
              <span className="eyebrow" style={{ color: 'var(--lime)' }}>Member since 2024</span>
              <h1 className="display h-display" style={{ fontSize: 40, color: '#fff', margin: '4px 0 0' }}>Hi, Charlie.</h1>
              <div style={{ fontSize: 13, color: '#a89cb8', marginTop: 4 }}>charlie@example.com</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 28 }}>
            <div><div className="display" style={{ fontSize: 28, fontWeight: 700, color: 'var(--lime)' }}>£124</div><div style={{ fontSize: 11, color: '#a89cb8', fontFamily: 'JetBrains Mono', letterSpacing: '.1em', textTransform: 'uppercase' }}>saved this year</div></div>
            <div><div className="display" style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>14</div><div style={{ fontSize: 11, color: '#a89cb8', fontFamily: 'JetBrains Mono', letterSpacing: '.1em', textTransform: 'uppercase' }}>orders</div></div>
            <div><div className="display" style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>240</div><div style={{ fontSize: 11, color: '#a89cb8', fontFamily: 'JetBrains Mono', letterSpacing: '.1em', textTransform: 'uppercase' }}>club points</div></div>
          </div>
        </div>
      </section>
      <section style={{ padding: '32px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 28 }}>
          <aside>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {tabs.map(t => (
                <button key={t.k} onClick={() => t.nav ? onNav?.(t.nav) : setTab(t.k)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', fontSize: 13.5, borderRadius: 10, background: tab === t.k ? 'var(--ink-950)' : 'transparent', color: tab === t.k ? '#fff' : 'var(--ink-700)', fontWeight: tab === t.k ? 600 : 500, textAlign: 'left' }}>
                  <Icon name={t.i} size={16} /> {t.l}
                </button>
              ))}
              <div style={{ height: 1, background: 'var(--paper-3)', margin: '8px 0' }} />
              <button onClick={() => onNav?.('home')} style={{ padding: '10px 14px', fontSize: 13, color: 'var(--ink-500)', textAlign: 'left' }}>Sign out</button>
            </nav>
          </aside>
          <main>
            {tab === 'orders' && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <h2 className="display h-display" style={{ fontSize: 32, margin: 0 }}>Your orders</h2>
                  <select style={{ padding: '9px 12px', borderRadius: 8, border: '1.5px solid var(--ink-200)', fontSize: 13, background: '#fff' }}><option>Last 6 months</option><option>All time</option></select>
                </div>
                {[
                  { n: 'VB-208461', d: '12 Apr 2026', t: '£53.97', s: 'In transit', c: 'violet', items: HERO_PRODUCTS.slice(0, 3) },
                  { n: 'VB-204189', d: '02 Mar 2026', t: '£28.45', s: 'Delivered', c: 'good', items: HERO_PRODUCTS.slice(2, 4) },
                  { n: 'VB-198772', d: '14 Feb 2026', t: '£71.00', s: 'Delivered', c: 'good', items: HERO_PRODUCTS.slice(4, 6) },
                ].map(o => (
                  <div key={o.n} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 20, marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
                      <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
                        <div>
                          <div className="display" style={{ fontWeight: 700, fontSize: 16 }}>#{o.n}</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>Placed {o.d}</div>
                        </div>
                        <span className={`chip chip-${o.c === 'good' ? 'good' : 'violet'}`}>{o.s}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button className="btn btn-soft" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 12.5 }}>Track</button>
                        <button className="btn btn-ink" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 12.5 }}>Reorder</button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', overflowX: 'auto' }}>
                      {o.items.map(it => (
                        <div key={it.name} style={{ width: 56, height: 56, borderRadius: 8, background: 'var(--paper-2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                          <img src={it.img} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                        </div>
                      ))}
                      <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{o.items.length} items</div>
                        <div className="display" style={{ fontWeight: 700, fontSize: 18 }}>{o.t}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {tab === 'rewards' && (
              <div>
                <h2 className="display h-display" style={{ fontSize: 32, margin: '0 0 16px' }}>Vape Big Club</h2>
                <div style={{ background: 'linear-gradient(135deg, var(--violet-500), var(--ink-950))', color: '#fff', borderRadius: 18, padding: 28, marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span className="eyebrow" style={{ color: 'var(--lime)' }}>Tier · Plus</span>
                      <div className="display" style={{ fontWeight: 700, fontSize: 36, color: '#fff', marginTop: 6 }}>240 points</div>
                      <div style={{ fontSize: 13, color: '#cfc6dd', marginTop: 4 }}>60 points to Premier · saves 7%</div>
                    </div>
                    <button className="btn btn-lime" style={{ borderRadius: 999 }}>Spend points</button>
                  </div>
                  <div style={{ marginTop: 18, height: 8, background: 'rgba(255,255,255,.15)', borderRadius: 99 }}>
                    <div style={{ width: '80%', height: '100%', background: 'var(--lime)', borderRadius: 99 }} />
                  </div>
                </div>
                <div style={{ marginTop: 18, padding: 16, background: 'var(--paper-2)', borderRadius: 12, fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--ink-950)' }}>How Big Points work:</strong> Earn 5 points for every £1 spent. 100 points = £1 off. Redeem any amount at checkout. <a onClick={() => onNav?.('bigpoints')} style={{ color: 'var(--blaze-2)', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>See full rewards explainer →</a>
                </div>
              </div>
            )}
            {tab === 'addresses' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <h2 className="display h-display" style={{ fontSize: 32, margin: 0 }}>Saved addresses</h2>
                  <button className="btn btn-ink" style={{ padding: '10px 16px', borderRadius: 8, fontSize: 13 }}><Icon name="plus" size={14} /> Add address</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
                  {[
                    { l: 'Home', n: 'Charlie Thomas', a: '124 Old Street\nLondon EC1V 9HX', def: true },
                    { l: 'Work', n: 'Charlie Thomas', a: '5 Hatton Garden\nLondon EC1N 8AD', def: false },
                  ].map(ad => (
                    <div key={ad.l} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="chip chip-paper">{ad.l}</span>
                        {ad.def && <span className="chip chip-violet">Default</span>}
                      </div>
                      <div className="display" style={{ fontWeight: 700, fontSize: 17, marginTop: 12 }}>{ad.n}</div>
                      <div style={{ fontSize: 13.5, color: 'var(--ink-700)', marginTop: 6, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{ad.a}</div>
                      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                        <button style={{ fontSize: 12.5, color: 'var(--violet-700)', fontWeight: 600 }}>Edit</button>
                        <button style={{ fontSize: 12.5, color: 'var(--ink-500)' }}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === 'wishlist_removed' && null}
            {tab === 'overview' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
                {[
                  ['package', 'Recent order', '#VB-208461 · in transit', 'Track'],
                  ['heart', 'Wishlist', '6 items saved', 'View'],
                  ['trophy', 'Club points', '240 · 60 to next reward', 'Redeem'],
                ].map(([i, h, s, b]) => (
                  <div key={h} style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22 }}>
                    <span style={{ color: 'var(--violet-600)' }}><Icon name={i} size={20} /></span>
                    <div className="display" style={{ fontWeight: 700, fontSize: 18, marginTop: 8 }}>{h}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-600)', marginTop: 4 }}>{s}</div>
                    <button className="btn btn-soft" style={{ marginTop: 12, padding: '8px 14px', borderRadius: 8, fontSize: 12.5 }}>{b}</button>
                  </div>
                ))}
              </div>
            )}
            {tab === 'wishlist' && (
              <div>
                <h2 className="display h-display" style={{ fontSize: 32, margin: '0 0 18px' }}>Saved for later</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
                  {HERO_PRODUCTS.slice(0, 6).map(p => <ProductCard key={p.name} p={p} />)}
                </div>
              </div>
            )}
            {tab === 'subs_removed' && null}
            {tab === 'settings' && (
              <div>
                <h2 className="display h-display" style={{ fontSize: 32, margin: '0 0 18px' }}>Account settings</h2>
                <div style={{ background: '#fff', border: '1px solid var(--paper-3)', borderRadius: 14, padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {[
                    ['Personal details', 'Charlie Thomas · charlie@example.com'],
                    ['Password', 'Last changed 4 months ago'],
                    ['Marketing preferences', 'Email: on · SMS: off'],
                    ['Privacy & data', 'Download data · Delete account'],
                  ].map(([k, v], i) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i ? '1px solid var(--paper-3)' : 'none', paddingTop: i ? 18 : 0 }}>
                      <div>
                        <div className="display" style={{ fontWeight: 700, fontSize: 14 }}>{k}</div>
                        <div style={{ fontSize: 12.5, color: 'var(--ink-500)', marginTop: 2 }}>{v}</div>
                      </div>
                      <button style={{ fontSize: 12.5, color: 'var(--violet-700)', fontWeight: 600 }}>Edit</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

window.CartDesktop = CartDesktop;
window.CheckoutDesktop = CheckoutDesktop;
window.OrderConfirmDesktop = OrderConfirmDesktop;
window.SignInDesktop = SignInDesktop;
window.AccountDesktop = AccountDesktop;
