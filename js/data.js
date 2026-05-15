

const IMG = {
  // iPhones 17
  ip17pm_bt: './assets/17pro.jfif',
  ip17pm_dt: './assets/17pro.jfif',
  ip17p_bt: './assets/17pro.jfif',
  ip17p_wt: './assets/17pro.jfif',
  ip17_black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip17_pink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip17_air: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927886867',
  // iPhones 16
  ip16pm_bt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1725388369680',
  ip16pm_dt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927879412',
  ip16p_bt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1725388369680',
  ip16p_wt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1725388369680',
  ip16_black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip16_pink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip16_teal: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip16pl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927886867',
  // iPhones 15
  ip15pm_bt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1692845702708',
  ip15pm_nt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1692845702708',
  ip15p_bt: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1692845702708',
  ip15_black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1693009261221',
  ip15_pink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1693009261221',
  ip15pl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1693009818788',
  // iPhones 14
  ip14pm_dp: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1663703841896',
  ip14pm_g: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1663703841896',
  ip14p_sp: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1663703841896',
  ip14_mid: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1660803619946',
  ip14pl_mid: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1660803619946',
  // iPhones 13
  ip13_mid: './assets/13.jfif',
  ip13_red: './assets/13.jfif',
  ip13pm_g: './assets/13pro.jfif',
  ip13mini: './assets/13.jfif',
  // iPhones 12
  ip12pm_pb: './assets/12pro.jfif',
  ip12_black: './assets/12.jfif',
  ip12mini: './assets/12.jfif',
  // iPhone 11
  ip11pm_sg: './assets/11pro.jfif',
  ip11_blk: './assets/11.jfif',
  ip11xr: './assets/xr.jfif',
  // iPhone SE
  ipse_red: './assets/se.jfif',
  ipse_mid: './assets/se.jfif',
  // MacBooks
  mbp14: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1664497359481',
  mba13: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1653084303665',
  // AirPods
  ap_pro2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1660803972361',
  ap4: './assets/air4.jfif',
  watch10: './assets/series10.jfif',
  // PlayStation
  ps5: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
  // Samsung
  s25u: './assets/s25 ultra.jfif',
  s25p: './assets/s25 plus.jfif',
  s25: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2501/gallery/levant-galaxy-s25-s931-sm-s931bzadeub-thumb-542380949',
  zfold6: './assets/zfold6.jfif',
  zflip6: './assets/zflip6.jfif',
  a55: './assets/a55.jfif',
  a35: './assets/a35.jfif',
  a16: './assets/a16.jfif',
};

const PRODUCTS = [

  // ══════════════════════════════════════════════════════════
  //  iPHONE 17 SERIES  (Brand New)
  //  Source prices from image + 100k markup
  // ══════════════════════════════════════════════════════════
  {
    id: 101, name: 'iPhone 17 Pro Max 1TB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 12, badge: 'New', year: 2025,
    price: 2800000, old: null,
    imgs: [IMG.ip17pm_bt, IMG.ip17pm_dt],
    desc: 'The ultimate iPhone 17. 1TB of storage, titanium build, A19 Pro chip, and the most advanced iPhone camera system ever. Physical SIM.',
    specs: [['Storage', '1TB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 102, name: 'iPhone 17 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 28, badge: 'New', year: 2025,
    price: 2400000, old: null,
    imgs: [IMG.ip17pm_bt, IMG.ip17pm_dt],
    desc: 'iPhone 17 Pro Max in 512GB. A19 Pro chip, titanium frame, stunning 6.9" display. Physical SIM version.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 103, name: 'iPhone 17 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 41, badge: 'New', year: 2025,
    price: 2100000, old: null,
    imgs: [IMG.ip17pm_bt, IMG.ip17pm_dt],
    desc: 'iPhone 17 Pro Max 256GB. A19 Pro, Camera Control, titanium finish. Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 104, name: 'iPhone 17 Pro Max 2TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 5, badge: 'New', year: 2025,
    price: 2700000, old: null,
    imgs: [IMG.ip17pm_dt, IMG.ip17pm_bt],
    desc: 'Massive 2TB storage on the iPhone 17 Pro Max — eSIM only. Perfect for power users and content creators.',
    specs: [['Storage', '2TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 105, name: 'iPhone 17 Pro Max 1TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 9, badge: 'New', year: 2025,
    price: 2450000, old: null,
    imgs: [IMG.ip17pm_bt, IMG.ip17pm_dt],
    desc: 'iPhone 17 Pro Max 1TB eSIM. Everything you need — nothing held back.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 106, name: 'iPhone 17 Pro Max 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 14, badge: 'New', year: 2025,
    price: 2300000, old: null,
    imgs: [IMG.ip17pm_bt, IMG.ip17pm_dt],
    desc: 'iPhone 17 Pro Max 512GB eSIM variant. Top-tier performance with A19 Pro.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 107, name: 'iPhone 17 Pro Max 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 22, badge: 'New', year: 2025,
    price: 1950000, old: null,
    imgs: [IMG.ip17pm_dt, IMG.ip17pm_bt],
    desc: 'iPhone 17 Pro Max 256GB eSIM. Great entry into the Pro Max range.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  // iPhone 17 Pro
  {
    id: 108, name: 'iPhone 17 Pro 1TB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 8, badge: 'New', year: 2025,
    price: 2600000, old: null,
    imgs: [IMG.ip17p_bt, IMG.ip17p_wt],
    desc: 'iPhone 17 Pro 1TB Physical SIM. A19 Pro chip, titanium body, pro-grade triple camera system.',
    specs: [['Storage', '1TB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 109, name: 'iPhone 17 Pro 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 17, badge: 'New', year: 2025,
    price: 2300000, old: null,
    imgs: [IMG.ip17p_bt, IMG.ip17p_wt],
    desc: 'iPhone 17 Pro 512GB Physical SIM. Pro performance in a refined titanium package.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 110, name: 'iPhone 17 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 31, badge: 'New', year: 2025,
    price: 1950000, old: null,
    imgs: [IMG.ip17p_wt, IMG.ip17p_bt],
    desc: 'iPhone 17 Pro 256GB Physical SIM. The perfect balance of storage and performance.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 111, name: 'iPhone 17 Pro 1TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 6, badge: 'New', year: 2025,
    price: 2400000, old: null,
    imgs: [IMG.ip17p_bt, IMG.ip17p_wt],
    desc: 'iPhone 17 Pro 1TB eSIM. Maximum storage for pro creators.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 112, name: 'iPhone 17 Pro 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 11, badge: 'New', year: 2025,
    price: 2100000, old: null,
    imgs: [IMG.ip17p_wt, IMG.ip17p_bt],
    desc: 'iPhone 17 Pro 512GB eSIM variant.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 113, name: 'iPhone 17 Pro 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 19, badge: 'New', year: 2025,
    price: 1850000, old: null,
    imgs: [IMG.ip17p_bt, IMG.ip17p_wt],
    desc: 'iPhone 17 Pro 256GB eSIM. Compact pro power.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  // iPhone 17 standard
  {
    id: 114, name: 'iPhone 17 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 21, badge: 'New', year: 2025,
    price: 1600000, old: null,
    imgs: [IMG.ip17_black, IMG.ip17_pink],
    desc: 'iPhone 17 512GB Physical SIM. A19 chip, Camera Control, Apple Intelligence.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 115, name: 'iPhone 17 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 38, badge: 'New', year: 2025,
    price: 1300000, old: null,
    imgs: [IMG.ip17_black, IMG.ip17_pink],
    desc: 'iPhone 17 256GB Physical SIM. The best standard iPhone ever made.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 116, name: 'iPhone 17 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 14, badge: 'New', year: 2025,
    price: 1500000, old: null,
    imgs: [IMG.ip17_pink, IMG.ip17_black],
    desc: 'iPhone 17 512GB eSIM. A19 chip, full Apple Intelligence suite.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 117, name: 'iPhone 17 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 29, badge: 'New', year: 2025,
    price: 1250000, old: null,
    imgs: [IMG.ip17_black, IMG.ip17_pink],
    desc: 'iPhone 17 256GB eSIM variant.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  // iPhone 17 Air
  {
    id: 118, name: 'iPhone 17 Air 1TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 7, badge: 'New', year: 2025,
    price: 1850000, old: null,
    imgs: [IMG.ip17_air, IMG.ip17_black],
    desc: 'iPhone 17 Air — the thinnest iPhone ever. Ultra-slim design, A19 chip, 1TB of storage. eSIM Only.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Ultra-thin design']]
  },
  {
    id: 119, name: 'iPhone 17 Air 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 18, badge: 'New', year: 2025,
    price: 1650000, old: null,
    imgs: [IMG.ip17_air, IMG.ip17_black],
    desc: 'iPhone 17 Air 512GB. Impossibly slim, impressively capable. eSIM Only.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Ultra-thin design']]
  },
  {
    id: 120, name: 'iPhone 17 Air 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 23, badge: 'New', year: 2025,
    price: 1380000, old: null,
    imgs: [IMG.ip17_air, IMG.ip17_black],
    desc: 'iPhone 17 Air 256GB eSIM. Sleek, light and powerful.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Ultra-thin design']]
  },
  // iPhone 17 UK Used (ESIM)
  {
    id: 121, name: 'iPhone 17 Pro Max 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 6, badge: null, year: 2025,
    price: 1950000, old: null,
    imgs: [IMG.ip17pm_bt, IMG.ip17pm_dt],
    desc: 'Excellent condition UK used iPhone 17 Pro Max 512GB. Fully tested and verified. eSIM only.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 122, name: 'iPhone 17 Pro Max 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 9, badge: null, year: 2025,
    price: 1850000, old: null,
    imgs: [IMG.ip17pm_dt, IMG.ip17pm_bt],
    desc: 'UK used iPhone 17 Pro Max 256GB eSIM. Top condition, fully verified.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 123, name: 'iPhone 17 Pro 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 5, badge: null, year: 2025,
    price: 1850000, old: null,
    imgs: [IMG.ip17p_bt, IMG.ip17p_wt],
    desc: 'UK used iPhone 17 Pro 512GB eSIM. Excellent condition.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 124, name: 'iPhone 17 Pro 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 8, badge: null, year: 2025,
    price: 1700000, old: null,
    imgs: [IMG.ip17p_wt, IMG.ip17p_bt],
    desc: 'UK used iPhone 17 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 125, name: 'iPhone 17 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.7, reviews: 11, badge: null, year: 2025,
    price: 1100000, old: null,
    imgs: [IMG.ip17_black, IMG.ip17_pink],
    desc: 'UK used iPhone 17 256GB eSIM. Great value on the latest standard iPhone.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 126, name: 'iPhone 17 Air 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.7, reviews: 4, badge: null, year: 2025,
    price: 1200000, old: null,
    imgs: [IMG.ip17_air, IMG.ip17_black],
    desc: 'UK used iPhone 17 Air 256GB eSIM. Slim design, solid performance.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE 16 SERIES  (source price + 100k markup)
  // ══════════════════════════════════════════════════════════

  // iPhone 16 Pro Max — New
  {
    id: 1, name: 'iPhone 16 Pro Max 512GB New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 567, badge: 'New', year: 2024,
    price: 1750000, old: null,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'Brand new iPhone 16 Pro Max 512GB. A18 Pro chip, 6.9" ProMotion display, Camera Control, Apple Intelligence. eSIM version.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 2, name: 'iPhone 16 Pro Max 256GB New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 423, badge: 'New', year: 2024,
    price: 1550000, old: null,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'Brand new iPhone 16 Pro Max 256GB. Apple Intelligence, A18 Pro, titanium design. eSIM version.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 201, name: 'iPhone 16 Pro Max 256GB Physical New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 311, badge: 'New', year: 2024,
    price: 1750000, old: null,
    imgs: [IMG.ip16pm_dt, IMG.ip16pm_bt],
    desc: 'Brand new iPhone 16 Pro Max 256GB Physical SIM. Full Apple Intelligence, A18 Pro, Camera Control.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 202, name: 'iPhone 16 Pro Max 1TB Physical New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 89, badge: 'New', year: 2024,
    price: 1600000, old: null,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'Brand new iPhone 16 Pro Max 1TB Physical SIM. Maximum storage for serious users.',
    specs: [['Storage', '1TB'], ['SIM', 'Physical SIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  // iPhone 16 Pro Max — Used
  {
    id: 203, name: 'iPhone 16 Pro Max 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 74, badge: null, year: 2024,
    price: 1500000, old: null,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'UK used iPhone 16 Pro Max 1TB eSIM. Excellent condition, fully tested.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 204, name: 'iPhone 16 Pro Max 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 112, badge: null, year: 2024,
    price: 1500000, old: null,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'UK used iPhone 16 Pro Max 512GB Physical SIM. Tested and verified.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 205, name: 'iPhone 16 Pro Max 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 88, badge: null, year: 2024,
    price: 1350000, old: null,
    imgs: [IMG.ip16pm_dt, IMG.ip16pm_bt],
    desc: 'UK used iPhone 16 Pro Max 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 206, name: 'iPhone 16 Pro Max 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 156, badge: null, year: 2024,
    price: 1400000, old: null,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'UK used iPhone 16 Pro Max 256GB Physical SIM. Great value on a flagship device.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 207, name: 'iPhone 16 Pro Max 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 201, badge: null, year: 2024,
    price: 1200000, old: null,
    imgs: [IMG.ip16pm_dt, IMG.ip16pm_bt],
    desc: 'UK used iPhone 16 Pro Max 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  // iPhone 16 Pro — New
  {
    id: 208, name: 'iPhone 16 Pro 512GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 198, badge: 'New', year: 2024,
    price: 1600000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'Brand new iPhone 16 Pro 512GB eSIM. A18 Pro, 5x zoom, Camera Control.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.3" ProMotion Super Retina XDR']]
  },
  {
    id: 209, name: 'iPhone 16 Pro 256GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 312, badge: 'New', year: 2024,
    price: 1500000, old: null,
    imgs: [IMG.ip16p_wt, IMG.ip16p_bt],
    desc: 'Brand new iPhone 16 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.3" ProMotion Super Retina XDR']]
  },
  {
    id: 210, name: 'iPhone 16 Pro 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.8, reviews: 267, badge: 'New', year: 2024,
    price: 1370000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'Brand new iPhone 16 Pro 128GB eSIM. Entry into Pro with full A18 Pro power.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.3" ProMotion Super Retina XDR']]
  },
  // iPhone 16 Pro — UK Used
  {
    id: 211, name: 'iPhone 16 Pro 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 143, badge: null, year: 2024,
    price: 1350000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'UK used iPhone 16 Pro 512GB Physical SIM. Fully tested.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 212, name: 'iPhone 16 Pro 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 198, badge: null, year: 2024,
    price: 1250000, old: null,
    imgs: [IMG.ip16p_wt, IMG.ip16p_bt],
    desc: 'UK used iPhone 16 Pro 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 213, name: 'iPhone 16 Pro 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 224, badge: null, year: 2024,
    price: 1150000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'UK used iPhone 16 Pro 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 214, name: 'iPhone 16 Pro 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 189, badge: null, year: 2024,
    price: 1050000, old: null,
    imgs: [IMG.ip16p_wt, IMG.ip16p_bt],
    desc: 'UK used iPhone 16 Pro 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 215, name: 'iPhone 16 Pro 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 167, badge: null, year: 2024,
    price: 1150000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'UK used iPhone 16 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 216, name: 'iPhone 16 Pro 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 121, badge: null, year: 2024,
    price: 1250000, old: null,
    imgs: [IMG.ip16p_wt, IMG.ip16p_bt],
    desc: 'UK used iPhone 16 Pro 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 217, name: 'iPhone 16 Pro 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 67, badge: null, year: 2024,
    price: 1300000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'UK used iPhone 16 Pro 1TB eSIM. Maximum storage at a great price.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  // iPhone 16 Plus — New
  {
    id: 218, name: 'iPhone 16 Plus 512GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 145, badge: 'New', year: 2024,
    price: 1600000, old: null,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'Brand new iPhone 16 Plus 512GB Physical SIM. Big screen, A18 chip, Camera Control.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 219, name: 'iPhone 16 Plus 256GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 189, badge: 'New', year: 2024,
    price: 1350000, old: null,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'Brand new iPhone 16 Plus 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 220, name: 'iPhone 16 Plus 128GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 212, badge: 'New', year: 2024,
    price: 1200000, old: null,
    imgs: [IMG.ip16_pink, IMG.ip16pl],
    desc: 'Brand new iPhone 16 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 221, name: 'iPhone 16 Plus 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 178, badge: 'New', year: 2024,
    price: 1100000, old: null,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'Brand new iPhone 16 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  // iPhone 16 Plus — UK Used
  {
    id: 222, name: 'iPhone 16 Plus 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 134, badge: null, year: 2024,
    price: 1100000, old: null,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'UK used iPhone 16 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 223, name: 'iPhone 16 Plus 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 98, badge: null, year: 2024,
    price: 1150000, old: null,
    imgs: [IMG.ip16_pink, IMG.ip16pl],
    desc: 'UK used iPhone 16 Plus 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 224, name: 'iPhone 16 Plus 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 76, badge: null, year: 2024,
    price: 1300000, old: null,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'UK used iPhone 16 Plus 512GB Physical SIM.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 225, name: 'iPhone 16 Plus 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 89, badge: null, year: 2024,
    price: 1000000, old: null,
    imgs: [IMG.ip16_pink, IMG.ip16pl],
    desc: 'UK used iPhone 16 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 226, name: 'iPhone 16 Plus 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 71, badge: null, year: 2024,
    price: 1100000, old: null,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'UK used iPhone 16 Plus 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  // iPhone 16 standard — New
  {
    id: 3, name: 'iPhone 16 256GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 612, badge: 'New', year: 2024,
    price: 1200000, old: null,
    imgs: [IMG.ip16_black, IMG.ip16_teal],
    desc: 'Brand new iPhone 16 256GB Physical SIM. A18 chip, Camera Control, Apple Intelligence.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 4, name: 'iPhone 16 128GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 489, badge: 'New', year: 2024,
    price: 1100000, old: null,
    imgs: [IMG.ip16_teal, IMG.ip16_black],
    desc: 'Brand new iPhone 16 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 227, name: 'iPhone 16 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 398, badge: 'New', year: 2024,
    price: 980000, old: null,
    imgs: [IMG.ip16_black, IMG.ip16_teal],
    desc: 'Brand new iPhone 16 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A18'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE 15 SERIES  (source price + 50–70k markup)
  // ══════════════════════════════════════════════════════════

  {
    id: 5, name: 'iPhone 15 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.9, reviews: 789, badge: null, year: 2023,
    price: 870000, old: null,
    imgs: [IMG.ip15pm_bt, IMG.ip15pm_nt],
    desc: 'Titanium. A17 Pro. 5x zoom. USB 3. iPhone 15 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Display', '6.7" ProMotion Super Retina XDR'], ['Port', 'USB-C (USB 3)'], ['Condition', 'New']]
  },
  {
    id: 6, name: 'iPhone 15 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.9, reviews: 543, badge: null, year: 2023,
    price: 920000, old: null,
    imgs: [IMG.ip15pm_nt, IMG.ip15pm_bt],
    desc: 'iPhone 15 Pro Max 512GB. Outstanding pro performance at a great price.',
    specs: [['Storage', '512GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Display', '6.7" ProMotion Super Retina XDR'], ['Port', 'USB-C (USB 3)'], ['Condition', 'New']]
  },
  {
    id: 301, name: 'iPhone 15 Pro Max 512GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.8, reviews: 312, badge: null, year: 2023,
    price: 850000, old: null,
    imgs: [IMG.ip15pm_bt, IMG.ip15pm_nt],
    desc: 'UK used iPhone 15 Pro Max 512GB. Excellent condition, fully tested.',
    specs: [['Storage', '512GB'], ['Chip', 'A17 Pro'], ['Camera', '5x Periscope Zoom'], ['Display', '6.7" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 302, name: 'iPhone 15 Pro Max 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.8, reviews: 421, badge: null, year: 2023,
    price: 800000, old: null,
    imgs: [IMG.ip15pm_nt, IMG.ip15pm_bt],
    desc: 'UK used iPhone 15 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '5x Periscope Zoom'], ['Display', '6.7" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 7, name: 'iPhone 15 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.8, reviews: 654, badge: null, year: 2023,
    price: 770000, old: null,
    imgs: [IMG.ip15p_bt, IMG.ip15pm_nt],
    desc: 'iPhone 15 Pro 256GB. Titanium, Action Button, USB-C, A17 Pro.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple System'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Port', 'USB-C (USB 3)'], ['Condition', 'New']]
  },
  {
    id: 303, name: 'iPhone 15 Pro 512GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.7, reviews: 234, badge: null, year: 2023,
    price: 720000, old: null,
    imgs: [IMG.ip15p_bt, IMG.ip15pm_nt],
    desc: 'UK used iPhone 15 Pro 512GB. Great condition.',
    specs: [['Storage', '512GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple System'], ['Display', '6.1" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 304, name: 'iPhone 15 Pro 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.7, reviews: 356, badge: null, year: 2023,
    price: 670000, old: null,
    imgs: [IMG.ip15pm_nt, IMG.ip15p_bt],
    desc: 'UK used iPhone 15 Pro 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple System'], ['Display', '6.1" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 8, name: 'iPhone 15 Plus 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.6, reviews: 301, badge: null, year: 2023,
    price: 620000, old: null,
    imgs: [IMG.ip15pl, IMG.ip15_pink],
    desc: 'iPhone 15 Plus 256GB. Big screen, big battery, USB-C, Dynamic Island.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Main + 12MP Ultra Wide'], ['Display', '6.7" Super Retina XDR'], ['Battery', 'Up to 26 hrs'], ['Condition', 'New']]
  },
  {
    id: 9, name: 'iPhone 15 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.6, reviews: 812, badge: null, year: 2023,
    price: 550000, old: null,
    imgs: [IMG.ip15_black, IMG.ip15_pink],
    desc: 'iPhone 15 256GB. Dynamic Island, USB-C, 48MP camera, A16 Bionic.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Main + 12MP Ultra Wide'], ['Display', '6.1" Super Retina XDR'], ['Battery', 'Up to 20 hrs'], ['Condition', 'New']]
  },
  {
    id: 305, name: 'iPhone 15 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.6, reviews: 445, badge: null, year: 2023,
    price: 480000, old: null,
    imgs: [IMG.ip15_black, IMG.ip15_pink],
    desc: 'UK used iPhone 15 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 306, name: 'iPhone 15 128GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.5, reviews: 567, badge: null, year: 2023,
    price: 430000, old: null,
    imgs: [IMG.ip15_pink, IMG.ip15_black],
    desc: 'UK used iPhone 15 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 307, name: 'iPhone 15 FU 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.6, reviews: 198, badge: null, year: 2023,
    price: 850000, old: null,
    imgs: [IMG.ip15_black, IMG.ip15_pink],
    desc: 'UK used iPhone 15 (FU) 256GB — Factory Unlocked. Works on all networks.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Unlocked', 'Factory Unlocked (All Networks)'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used'], ['Origin', 'United Kingdom']]
  },
  {
    id: 308, name: 'iPhone 15 FU 128GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.6, reviews: 223, badge: null, year: 2023,
    price: 750000, old: null,
    imgs: [IMG.ip15_pink, IMG.ip15_black],
    desc: 'UK used iPhone 15 (FU) 128GB — Factory Unlocked.',
    specs: [['Storage', '128GB'], ['Chip', 'A16 Bionic'], ['Unlocked', 'Factory Unlocked (All Networks)'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used'], ['Origin', 'United Kingdom']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE 14 SERIES
  // ══════════════════════════════════════════════════════════

  {
    id: 401, name: 'iPhone 14 Pro Max 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 187, badge: null, year: 2022,
    price: 1000000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14pm_g],
    desc: 'UK used iPhone 14 Pro Max 1TB eSIM. Always-On display, Dynamic Island, 48MP camera.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 402, name: 'iPhone 14 Pro Max 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 243, badge: null, year: 2022,
    price: 900000, old: null,
    imgs: [IMG.ip14pm_g, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 Pro Max 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 403, name: 'iPhone 14 Pro Max 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 312, badge: null, year: 2022,
    price: 850000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14pm_g],
    desc: 'UK used iPhone 14 Pro Max 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 404, name: 'iPhone 14 Pro Max 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 389, badge: null, year: 2022,
    price: 800000, old: null,
    imgs: [IMG.ip14pm_g, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 Pro Max 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 405, name: 'iPhone 14 Pro Max 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 356, badge: null, year: 2022,
    price: 900000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14pm_g],
    desc: 'UK used iPhone 14 Pro Max 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 406, name: 'iPhone 14 Pro Max 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 289, badge: null, year: 2022,
    price: 950000, old: null,
    imgs: [IMG.ip14pm_g, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 Pro Max 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 407, name: 'iPhone 14 Pro Max 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 201, badge: null, year: 2022,
    price: 1050000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14pm_g],
    desc: 'UK used iPhone 14 Pro Max 512GB Physical SIM.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 408, name: 'iPhone 14 Pro 512GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.8, reviews: 134, badge: null, year: 2022,
    price: 1180000, old: null,
    imgs: [IMG.ip14p_sp, IMG.ip14pm_dp],
    desc: 'Brand new iPhone 14 Pro 512GB Physical SIM.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'Brand New'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 409, name: 'iPhone 14 Pro 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 98, badge: null, year: 2022,
    price: 850000, old: null,
    imgs: [IMG.ip14p_sp, IMG.ip14pm_g],
    desc: 'UK used iPhone 14 Pro 1TB eSIM.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 410, name: 'iPhone 14 Pro 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 167, badge: null, year: 2022,
    price: 750000, old: null,
    imgs: [IMG.ip14pm_g, IMG.ip14p_sp],
    desc: 'UK used iPhone 14 Pro 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 411, name: 'iPhone 14 Pro 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 234, badge: null, year: 2022,
    price: 700000, old: null,
    imgs: [IMG.ip14p_sp, IMG.ip14pm_g],
    desc: 'UK used iPhone 14 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 412, name: 'iPhone 14 Pro 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 298, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14p_sp],
    desc: 'UK used iPhone 14 Pro 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 413, name: 'iPhone 14 Pro 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 267, badge: null, year: 2022,
    price: 720000, old: null,
    imgs: [IMG.ip14p_sp, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 Pro 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 414, name: 'iPhone 14 Pro 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 198, badge: null, year: 2022,
    price: 820000, old: null,
    imgs: [IMG.ip14pm_g, IMG.ip14p_sp],
    desc: 'UK used iPhone 14 Pro 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 415, name: 'iPhone 14 Plus 128GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.6, reviews: 145, badge: null, year: 2022,
    price: 900000, old: null,
    imgs: [IMG.ip14pl_mid, IMG.ip14_mid],
    desc: 'Brand new iPhone 14 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Battery', 'Up to 26 hrs']]
  },
  {
    id: 416, name: 'iPhone 14 Plus 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.6, reviews: 112, badge: null, year: 2022,
    price: 800000, old: null,
    imgs: [IMG.ip14pl_mid, IMG.ip14_mid],
    desc: 'Brand new iPhone 14 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Battery', 'Up to 26 hrs']]
  },
  {
    id: 417, name: 'iPhone 14 Plus 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 134, badge: null, year: 2022,
    price: 720000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pl_mid],
    desc: 'UK used iPhone 14 Plus 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 418, name: 'iPhone 14 Plus 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 98, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: [IMG.ip14pl_mid, IMG.ip14_mid],
    desc: 'UK used iPhone 14 Plus 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 419, name: 'iPhone 14 Plus 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 156, badge: null, year: 2022,
    price: 590000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pl_mid],
    desc: 'UK used iPhone 14 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 420, name: 'iPhone 14 Plus 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 145, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: [IMG.ip14pl_mid, IMG.ip14_mid],
    desc: 'UK used iPhone 14 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 10, name: 'iPhone 14 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.5, reviews: 312, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pm_dp],
    desc: 'Brand new iPhone 14 128GB eSIM. A15 Bionic, Crash Detection, Emergency SOS via Satellite.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual System'], ['Condition', 'Brand New'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 421, name: 'iPhone 14 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 421, badge: null, year: 2022,
    price: 540000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 422, name: 'iPhone 14 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 378, badge: null, year: 2022,
    price: 600000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14_mid],
    desc: 'UK used iPhone 14 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 423, name: 'iPhone 14 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 289, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 424, name: 'iPhone 14 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 245, badge: null, year: 2022,
    price: 600000, old: null,
    imgs: [IMG.ip14pm_dp, IMG.ip14_mid],
    desc: 'UK used iPhone 14 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 425, name: 'iPhone 14 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 167, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pm_dp],
    desc: 'UK used iPhone 14 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE 13 SERIES
  // ══════════════════════════════════════════════════════════

  {
    id: 11, name: 'iPhone 13 Pro Max 1TB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 402, badge: null, year: 2021,
    price: 780000, old: null,
    imgs: [IMG.ip13pm_g, IMG.ip13_mid],
    desc: 'iPhone 13 Pro Max 1TB. ProMotion, A15 Bionic, 3x zoom. Maximum storage.',
    specs: [['Storage', '1TB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 501, name: 'iPhone 13 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 312, badge: null, year: 2021,
    price: 700000, old: null,
    imgs: [IMG.ip13pm_g, IMG.ip13_mid],
    desc: 'iPhone 13 Pro Max 512GB. ProMotion display, stellar battery life, 3x zoom.',
    specs: [['Storage', '512GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 502, name: 'iPhone 13 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 445, badge: null, year: 2021,
    price: 650000, old: null,
    imgs: [IMG.ip13_mid, IMG.ip13pm_g],
    desc: 'iPhone 13 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 503, name: 'iPhone 13 Pro Max 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 521, badge: null, year: 2021,
    price: 580000, old: null,
    imgs: [IMG.ip13pm_g, IMG.ip13_mid],
    desc: 'iPhone 13 Pro Max 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 504, name: 'iPhone 13 Pro 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 234, badge: null, year: 2021,
    price: 620000, old: null,
    imgs: [IMG.ip13_mid, IMG.ip13pm_g],
    desc: 'iPhone 13 Pro 512GB.',
    specs: [['Storage', '512GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 22 hrs']]
  },
  {
    id: 505, name: 'iPhone 13 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 312, badge: null, year: 2021,
    price: 570000, old: null,
    imgs: [IMG.ip13pm_g, IMG.ip13_mid],
    desc: 'iPhone 13 Pro 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 22 hrs']]
  },
  {
    id: 506, name: 'iPhone 13 Pro 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 389, badge: null, year: 2021,
    price: 530000, old: null,
    imgs: [IMG.ip13_mid, IMG.ip13pm_g],
    desc: 'iPhone 13 Pro 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 22 hrs']]
  },
  {
    id: 12, name: 'iPhone 13 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 634, badge: null, year: 2021,
    price: 530000, old: null,
    imgs: [IMG.ip13_red, IMG.ip13_mid],
    desc: 'iPhone 13 512GB. A15 Bionic, 12MP dual camera, long battery life.',
    specs: [['Storage', '512GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 19 hrs']]
  },
  {
    id: 507, name: 'iPhone 13 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 712, badge: null, year: 2021,
    price: 480000, old: null,
    imgs: [IMG.ip13_mid, IMG.ip13_red],
    desc: 'iPhone 13 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 19 hrs']]
  },
  {
    id: 508, name: 'iPhone 13 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 891, badge: null, year: 2021,
    price: 430000, old: null,
    imgs: [IMG.ip13_red, IMG.ip13_mid],
    desc: 'iPhone 13 128GB. Great everyday iPhone at a fantastic price.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 19 hrs']]
  },
  {
    id: 509, name: 'iPhone 13 Mini 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.4, reviews: 278, badge: null, year: 2021,
    price: 450000, old: null,
    imgs: [IMG.ip13mini, IMG.ip13_mid],
    desc: 'iPhone 13 Mini 256GB. Compact, powerful, and packed with features.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '5.4" Super Retina XDR'], ['Condition', 'Used — Good'], ['Feature', 'Compact form factor']]
  },
  {
    id: 510, name: 'iPhone 13 Mini 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.4, reviews: 334, badge: null, year: 2021,
    price: 395000, old: null,
    imgs: [IMG.ip13mini, IMG.ip13_mid],
    desc: 'iPhone 13 Mini 128GB. The smallest iPhone with big performance.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '5.4" Super Retina XDR'], ['Condition', 'Used — Good'], ['Feature', 'Compact form factor']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE 12 SERIES
  // ══════════════════════════════════════════════════════════

  {
    id: 601, name: 'iPhone 12 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 234, badge: null, year: 2020,
    price: 590000, old: null,
    imgs: [IMG.ip12pm_pb, IMG.ip12_black],
    desc: 'iPhone 12 Pro Max 512GB. A14 Bionic, 6.7" OLED, 5G support, stellar camera.',
    specs: [['Storage', '512GB'], ['Chip', 'A14 Bionic'], ['Display', '6.7" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 602, name: 'iPhone 12 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 312, badge: null, year: 2020,
    price: 550000, old: null,
    imgs: [IMG.ip12_black, IMG.ip12pm_pb],
    desc: 'iPhone 12 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A14 Bionic'], ['Display', '6.7" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 603, name: 'iPhone 12 Pro Max 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 389, badge: null, year: 2020,
    price: 500000, old: null,
    imgs: [IMG.ip12pm_pb, IMG.ip12_black],
    desc: 'iPhone 12 Pro Max 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A14 Bionic'], ['Display', '6.7" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 604, name: 'iPhone 12 Pro 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 198, badge: null, year: 2020,
    price: 520000, old: null,
    imgs: [IMG.ip12_black, IMG.ip12pm_pb],
    desc: 'iPhone 12 Pro 512GB. A14 Bionic, LiDAR scanner, 6.1" OLED, 5G.',
    specs: [['Storage', '512GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', 'LiDAR + 5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 605, name: 'iPhone 12 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 267, badge: null, year: 2020,
    price: 470000, old: null,
    imgs: [IMG.ip12pm_pb, IMG.ip12_black],
    desc: 'iPhone 12 Pro 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', 'LiDAR + 5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 606, name: 'iPhone 12 Pro 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 334, badge: null, year: 2020,
    price: 435000, old: null,
    imgs: [IMG.ip12_black, IMG.ip12pm_pb],
    desc: 'iPhone 12 Pro 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', 'LiDAR + 5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 607, name: 'iPhone 12 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.3, reviews: 456, badge: null, year: 2020,
    price: 380000, old: null,
    imgs: [IMG.ip12_black, IMG.ip12mini],
    desc: 'iPhone 12 128GB. 5G capable, A14 Bionic, OLED display.',
    specs: [['Storage', '128GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 608, name: 'iPhone 12 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.2, reviews: 534, badge: null, year: 2020,
    price: 330000, old: null,
    imgs: [IMG.ip12_black, IMG.ip12mini],
    desc: 'iPhone 12 64GB. 5G, A14 Bionic, OLED at an entry-level price.',
    specs: [['Storage', '64GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 609, name: 'iPhone 12 Mini 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.2, reviews: 312, badge: null, year: 2020,
    price: 310000, old: null,
    imgs: [IMG.ip12mini, IMG.ip12_black],
    desc: 'iPhone 12 Mini 64GB. Compact 5G iPhone at a budget-friendly price.',
    specs: [['Storage', '64GB'], ['Chip', 'A14 Bionic'], ['Display', '5.4" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 15 hrs']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE 11 SERIES
  // ══════════════════════════════════════════════════════════

  {
    id: 701, name: 'iPhone 11 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.2, reviews: 289, badge: null, year: 2019,
    price: 480000, old: null,
    imgs: [IMG.ip11pm_sg, IMG.ip11_blk],
    desc: 'iPhone 11 Pro Max 512GB. Triple camera system, A13 Bionic, 6.5" Super Retina XDR.',
    specs: [['Storage', '512GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '6.5" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 702, name: 'iPhone 11 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.2, reviews: 356, badge: null, year: 2019,
    price: 430000, old: null,
    imgs: [IMG.ip11_blk, IMG.ip11pm_sg],
    desc: 'iPhone 11 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '6.5" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 703, name: 'iPhone 11 Pro Max 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.1, reviews: 423, badge: null, year: 2019,
    price: 380000, old: null,
    imgs: [IMG.ip11pm_sg, IMG.ip11_blk],
    desc: 'iPhone 11 Pro Max 64GB.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '6.5" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 704, name: 'iPhone 11 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.2, reviews: 267, badge: null, year: 2019,
    price: 400000, old: null,
    imgs: [IMG.ip11_blk, IMG.ip11pm_sg],
    desc: 'iPhone 11 Pro 256GB. Triple camera, A13 Bionic, 5.8" OLED.',
    specs: [['Storage', '256GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '5.8" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 18 hrs']]
  },
  {
    id: 705, name: 'iPhone 11 Pro 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.1, reviews: 334, badge: null, year: 2019,
    price: 350000, old: null,
    imgs: [IMG.ip11pm_sg, IMG.ip11_blk],
    desc: 'iPhone 11 Pro 64GB.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '5.8" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 18 hrs']]
  },
  {
    id: 706, name: 'iPhone 11 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.0, reviews: 489, badge: null, year: 2019,
    price: 330000, old: null,
    imgs: [IMG.ip11_blk, IMG.ip11pm_sg],
    desc: 'iPhone 11 128GB. Great budget pick — dual cameras and solid battery.',
    specs: [['Storage', '128GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Dual System'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 707, name: 'iPhone 11 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.0, reviews: 567, badge: null, year: 2019,
    price: 295000, old: null,
    imgs: [IMG.ip11_blk, IMG.ip11pm_sg],
    desc: 'iPhone 11 64GB. Entry-level Apple performance.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Dual System'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 708, name: 'iPhone XR 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.0, reviews: 398, badge: null, year: 2018,
    price: 290000, old: null,
    imgs: [IMG.ip11xr, IMG.ip11_blk],
    desc: 'iPhone XR 128GB. A12 Bionic, 6.1" Liquid Retina LCD, Face ID.',
    specs: [['Storage', '128GB'], ['Chip', 'A12 Bionic'], ['Camera', '12MP Wide'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Feature', 'Face ID']]
  },
  {
    id: 709, name: 'iPhone XR 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 3.9, reviews: 456, badge: null, year: 2018,
    price: 230000, old: null,
    imgs: [IMG.ip11xr, IMG.ip11_blk],
    desc: 'iPhone XR 64GB. Budget-friendly Face ID iPhone.',
    specs: [['Storage', '64GB'], ['Chip', 'A12 Bionic'], ['Camera', '12MP Wide'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Feature', 'Face ID']]
  },

  // ══════════════════════════════════════════════════════════
  //  iPHONE SE SERIES
  // ══════════════════════════════════════════════════════════

  {
    id: 13, name: 'iPhone SE 3 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'New', rating: 4.4, reviews: 287, badge: null, year: 2022,
    price: 320000, old: null,
    imgs: [IMG.ipse_red, IMG.ipse_mid],
    desc: 'iPhone SE (3rd Gen) 256GB. A15 Bionic, 5G, Touch ID — most affordable iPhone with flagship chip.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID + 5G'], ['Condition', 'New']]
  },
  {
    id: 801, name: 'iPhone SE 3 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'New', rating: 4.4, reviews: 345, badge: null, year: 2022,
    price: 270000, old: null,
    imgs: [IMG.ipse_mid, IMG.ipse_red],
    desc: 'iPhone SE (3rd Gen) 128GB. A15 Bionic, 5G. Best-value iPhone.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID + 5G'], ['Condition', 'New']]
  },
  {
    id: 802, name: 'iPhone SE 3 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'New', rating: 4.3, reviews: 412, badge: null, year: 2022,
    price: 230000, old: null,
    imgs: [IMG.ipse_red, IMG.ipse_mid],
    desc: 'iPhone SE (3rd Gen) 64GB. Entry-level with A15 Bionic power and 5G.',
    specs: [['Storage', '64GB'], ['Chip', 'A15 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID + 5G'], ['Condition', 'New']]
  },
  {
    id: 803, name: 'iPhone SE 2 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'Used', rating: 4.1, reviews: 289, badge: null, year: 2020,
    price: 200000, old: null,
    imgs: [IMG.ipse_mid, IMG.ipse_red],
    desc: 'iPhone SE (2nd Gen) 64GB. A13 Bionic, Touch ID, compact 4.7" design.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID'], ['Condition', 'Used — Good']]
  },

  // ══════════════════════════════════════════════════════════
  //  SAMSUNG
  // ══════════════════════════════════════════════════════════

  {
    id: 20, name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', cat: 'Phones', model: 'Galaxy S25',
    cond: 'New', rating: 4.9, reviews: 312, badge: 'New', year: 2025,
    price: 2100000, old: null,
    imgs: [IMG.s25u],
    desc: 'The ultimate Samsung. Snapdragon 8 Elite, 200MP camera, built-in S Pen, 6.9" Dynamic AMOLED display. Galaxy AI on every shot.',
    specs: [['Storage', '256GB / 512GB / 1TB'], ['Display', '6.9" Dynamic AMOLED 2X 120Hz'], ['Chip', 'Snapdragon 8 Elite'], ['Camera', '200MP Quad System'], ['Battery', '5000mAh'], ['Feature', 'Built-in S Pen + Galaxy AI']]
  },
  {
    id: 21, name: 'Samsung Galaxy S25+', brand: 'Samsung', cat: 'Phones', model: 'Galaxy S25',
    cond: 'New', rating: 4.8, reviews: 198, badge: 'New', year: 2025,
    price: 1600000, old: null,
    imgs: [IMG.s25p],
    desc: 'Big screen, big battery, pro camera. Galaxy S25+ brings Snapdragon 8 Elite power, 50MP triple camera and Galaxy AI to a stunning 6.7" display.',
    specs: [['Storage', '256GB / 512GB'], ['Display', '6.7" Dynamic AMOLED 2X 120Hz'], ['Chip', 'Snapdragon 8 Elite'], ['Camera', '50MP Triple System'], ['Battery', '4900mAh'], ['Feature', 'Galaxy AI']]
  },
  {
    id: 22, name: 'Samsung Galaxy S25', brand: 'Samsung', cat: 'Phones', model: 'Galaxy S25',
    cond: 'New', rating: 4.7, reviews: 245, badge: 'New', year: 2025,
    price: 1200000, old: null,
    imgs: [IMG.s25],
    desc: 'Compact flagship power. Galaxy S25 packs Snapdragon 8 Elite, 50MP triple camera and Galaxy AI into a sleek 6.2" form factor.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.2" Dynamic AMOLED 2X 120Hz'], ['Chip', 'Snapdragon 8 Elite'], ['Camera', '50MP Triple System'], ['Battery', '4000mAh'], ['Feature', 'Galaxy AI']]
  },
  {
    id: 23, name: 'Samsung Galaxy Z Fold 6', brand: 'Samsung', cat: 'Phones', model: 'Galaxy Z',
    cond: 'New', rating: 4.8, reviews: 134, badge: 'Hot', year: 2024,
    price: 2800000, old: 3000000,
    imgs: [IMG.zfold6],
    desc: 'The future of smartphones. Galaxy Z Fold 6 opens into a 7.6" tablet display. Snapdragon 8 Gen 3, S Pen support, and a refined book-style fold.',
    specs: [['Storage', '256GB / 512GB / 1TB'], ['Display', '7.6" Main + 6.3" Cover'], ['Chip', 'Snapdragon 8 Gen 3'], ['Camera', '50MP Triple System'], ['Battery', '4400mAh'], ['Feature', 'S Pen Support + Flex Mode']]
  },
  {
    id: 24, name: 'Samsung Galaxy Z Flip 6', brand: 'Samsung', cat: 'Phones', model: 'Galaxy Z',
    cond: 'New', rating: 4.7, reviews: 167, badge: 'Hot', year: 2024,
    price: 1450000, old: null,
    imgs: [IMG.zflip6],
    desc: 'Flip it. Own it. Galaxy Z Flip 6 with Snapdragon 8 Gen 3, enlarged FlexWindow cover display, and improved 50MP camera. Style meets power.',
    specs: [['Storage', '256GB / 512GB'], ['Display', '6.7" Foldable + 3.4" Cover'], ['Chip', 'Snapdragon 8 Gen 3'], ['Camera', '50MP Dual System'], ['Battery', '4000mAh'], ['Feature', 'FlexMode + Flex Window']]
  },
  {
    id: 25, name: 'Samsung Galaxy A55 5G', brand: 'Samsung', cat: 'Phones', model: 'Galaxy A',
    cond: 'New', rating: 4.5, reviews: 289, badge: null, year: 2024,
    price: 480000, old: null,
    imgs: [IMG.a55],
    desc: 'Premium mid-range excellence. Galaxy A55 5G with 50MP OIS camera, 6.6" Super AMOLED display, and IP67 water resistance.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.6" Super AMOLED 120Hz'], ['Chip', 'Exynos 1480'], ['Camera', '50MP Triple with OIS'], ['Battery', '5000mAh'], ['Feature', 'IP67 + 5G']]
  },
  {
    id: 26, name: 'Samsung Galaxy A35 5G', brand: 'Samsung', cat: 'Phones', model: 'Galaxy A',
    cond: 'New', rating: 4.4, reviews: 312, badge: null, year: 2024,
    price: 320000, old: null,
    imgs: [IMG.a35],
    desc: 'Great camera, great price. Galaxy A35 5G delivers 50MP OIS camera, 6.6" Super AMOLED display and 5000mAh battery.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.6" Super AMOLED 120Hz'], ['Chip', 'Exynos 1380'], ['Camera', '50MP Triple with OIS'], ['Battery', '5000mAh'], ['Feature', 'IP67 + 5G']]
  },
  {
    id: 27, name: 'Samsung Galaxy A16 5G', brand: 'Samsung', cat: 'Phones', model: 'Galaxy A',
    cond: 'New', rating: 4.3, reviews: 198, badge: null, year: 2024,
    price: 180000, old: null,
    imgs: [IMG.a16],
    desc: 'Affordable 5G done right. Galaxy A16 5G with 50MP camera, 6.7" display and 5000mAh battery.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.7" Super AMOLED 90Hz'], ['Chip', 'MediaTek Dimensity 6300'], ['Camera', '50MP Triple'], ['Battery', '5000mAh'], ['Feature', '5G + 6 years OS updates']]
  },

  // ══════════════════════════════════════════════════════════
  //  LAPTOPS
  // ══════════════════════════════════════════════════════════

  {
    id: 14, name: 'MacBook Pro M4 — 14"', brand: 'Apple', cat: 'Laptops', model: null,
    cond: 'New', rating: 4.9, reviews: 98, badge: 'New', year: 2024,
    price: 3200000, old: null,
    imgs: [IMG.mbp14],
    desc: 'The most powerful MacBook Pro ever made. M4 chip, Liquid Retina XDR display, fanless silence, and up to 24 hours of battery life.',
    specs: [['Chip', 'Apple M4'], ['RAM', '16GB Unified Memory'], ['Storage', '512GB SSD'], ['Display', '14.2" Liquid Retina XDR'], ['Battery', 'Up to 24 hrs'], ['Weight', '1.55 kg']]
  },
  {
    id: 15, name: 'MacBook Air M3 — 13"', brand: 'Apple', cat: 'Laptops', model: null,
    cond: 'New', rating: 4.8, reviews: 156, badge: null, year: 2024,
    price: 1950000, old: null,
    imgs: [IMG.mba13],
    desc: 'Impossibly thin. Fanless and completely silent. MacBook Air M3 — world\'s best consumer laptop.',
    specs: [['Chip', 'Apple M3'], ['RAM', '8GB / 16GB'], ['Storage', '256GB – 2TB SSD'], ['Display', '13.6" Liquid Retina'], ['Battery', 'Up to 18 hrs'], ['Weight', '1.24 kg']]
  },

  // ══════════════════════════════════════════════════════════
  //  GAMING
  // ══════════════════════════════════════════════════════════

  {
    id: 16, name: 'PlayStation 5 Pro', brand: 'Sony', cat: 'Gaming', model: null,
    cond: 'New', rating: 4.8, reviews: 203, badge: 'Hot', year: 2024,
    price: 850000, old: 950000,
    imgs: [IMG.ps5],
    desc: 'The most powerful PlayStation ever. Enhanced GPU, 2TB SSD, 8K support.',
    specs: [['GPU', 'Enhanced RDNA (45% faster than PS5)'], ['CPU', 'AMD Zen 2 (3.85GHz)'], ['Storage', '2TB NVMe SSD'], ['Resolution', 'Up to 8K'], ['Frame Rate', 'Up to 120fps'], ['Feature', 'PlayStation Spectral Super Resolution']]
  },

  // ══════════════════════════════════════════════════════════
  //  AUDIO
  // ══════════════════════════════════════════════════════════

  {
    id: 17, name: 'AirPods Pro 2', brand: 'Apple', cat: 'Audio', model: null,
    cond: 'New', rating: 4.9, reviews: 567, badge: 'Hot', year: 2024,
    price: 198000, old: 220000,
    imgs: [IMG.ap_pro2],
    desc: 'H2 chip. Adaptive Audio. Personalised Spatial Audio. Best wireless earbuds for iPhone.',
    specs: [['Chip', 'H2'], ['ANC', 'Adaptive Transparency'], ['Battery', '6hrs + 30hrs with case'], ['Connectivity', 'Bluetooth 5.3'], ['Feature', 'Conversation Awareness + Personalised Spatial Audio'], ['Case', 'MagSafe + USB-C']]
  },
  {
    id: 18, name: 'AirPods 4', brand: 'Apple', cat: 'Audio', model: null,
    cond: 'New', rating: 4.7, reviews: 312, badge: null, year: 2024,
    price: 148000, old: null,
    imgs: [IMG.ap4],
    desc: 'The biggest AirPods redesign ever. Open-ear comfort with optional ANC. H2 chip.',
    specs: [['Chip', 'H2'], ['ANC', 'Active Noise Cancellation (optional)'], ['Battery', '5hrs + 30hrs with case'], ['Connectivity', 'Bluetooth 5.3'], ['Feature', 'Conversation Awareness'], ['Case', 'USB-C']]
  },

  // ══════════════════════════════════════════════════════════
  //  ACCESSORIES
  // ══════════════════════════════════════════════════════════

  {
    id: 19, name: 'Apple Watch Series 10', brand: 'Apple', cat: 'Accessories', model: null,
    cond: 'New', rating: 4.8, reviews: 188, badge: 'Sale', year: 2024,
    price: 520000, old: 580000,
    imgs: [IMG.watch10],
    desc: 'The thinnest Apple Watch ever. ECG, blood oxygen, crash detection, sleep apnoea detection and double tap gesture.',
    specs: [['Display', 'Always-On Retina LTPO OLED'], ['Health', 'ECG + Blood Oxygen + Sleep Apnoea'], ['Battery', 'Up to 18hrs (36hrs Low Power)'], ['Connectivity', 'GPS + Cellular'], ['Water', '50m Water Resistant'], ['Feature', 'Double Tap Gesture']]
  },
];

const CATEGORIES = [
  { name: 'Phones', icon: '📱' },
  { name: 'Laptops', icon: '💻' },
  { name: 'Gaming', icon: '🎮' },
  { name: 'Audio', icon: '🎧' },
  { name: 'Accessories', icon: '⌚' },
];

const IPHONE_MODELS = [
  'iPhone 17', 'iPhone 16', 'iPhone 15', 'iPhone 14',
  'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone SE',
  'Galaxy S25', 'Galaxy Z', 'Galaxy A'
];