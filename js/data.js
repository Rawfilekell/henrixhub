const PRODUCTS = [

  {
    id: 101, name: 'iPhone 17 Pro Max 1TB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 12, badge: 'New', year: 2025,
    price: 2800000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'The ultimate iPhone 17. 1TB of storage, titanium build, A19 Pro chip, and the most advanced iPhone camera system ever. Physical SIM.',
    specs: [['Storage', '1TB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 102, name: 'iPhone 17 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 28, badge: 'New', year: 2025,
    price: 2400000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro Max in 512GB. A19 Pro chip, titanium frame, stunning 6.9" display. Physical SIM version.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 103, name: 'iPhone 17 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 41, badge: 'New', year: 2025,
    price: 2100000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro Max 256GB. A19 Pro, Camera Control, titanium finish. Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 104, name: 'iPhone 17 Pro Max 2TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 5, badge: 'New', year: 2025,
    price: 2700000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'Massive 2TB storage on the iPhone 17 Pro Max — eSIM only. Perfect for power users and content creators.',
    specs: [['Storage', '2TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 105, name: 'iPhone 17 Pro Max 1TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 9, badge: 'New', year: 2025,
    price: 2450000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro Max 1TB eSIM. Everything you need — nothing held back.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 106, name: 'iPhone 17 Pro Max 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 14, badge: 'New', year: 2025,
    price: 2300000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro Max 512GB eSIM variant. Top-tier performance with A19 Pro.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 107, name: 'iPhone 17 Pro Max 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 22, badge: 'New', year: 2025,
    price: 1950000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro Max 256GB eSIM. Great entry into the Pro Max range.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.9" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 121, name: 'iPhone 17 Pro Max 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 6, badge: null, year: 2025,
    price: 1950000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'Excellent condition UK used iPhone 17 Pro Max 512GB. Fully tested and verified. eSIM only.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 122, name: 'iPhone 17 Pro Max 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 9, badge: null, year: 2025,
    price: 1850000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'UK used iPhone 17 Pro Max 256GB eSIM. Top condition, fully verified.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },


  {
    id: 108, name: 'iPhone 17 Pro 1TB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 8, badge: 'New', year: 2025,
    price: 2600000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro 1TB Physical SIM. A19 Pro chip, titanium body, pro-grade triple camera system.',
    specs: [['Storage', '1TB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 109, name: 'iPhone 17 Pro 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 17, badge: 'New', year: 2025,
    price: 2300000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro 512GB Physical SIM. Pro performance in a refined titanium package.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 110, name: 'iPhone 17 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 31, badge: 'New', year: 2025,
    price: 1950000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro 256GB Physical SIM. The perfect balance of storage and performance.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 111, name: 'iPhone 17 Pro 1TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 6, badge: 'New', year: 2025,
    price: 2400000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro 1TB eSIM. Maximum storage for pro creators.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 112, name: 'iPhone 17 Pro 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 11, badge: 'New', year: 2025,
    price: 2100000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro 512GB eSIM variant.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 113, name: 'iPhone 17 Pro 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.9, reviews: 19, badge: 'New', year: 2025,
    price: 1850000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'iPhone 17 Pro 256GB eSIM. Compact pro power.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19 Pro'], ['Display', '6.3" Super Retina XDR ProMotion'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 123, name: 'iPhone 17 Pro 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 5, badge: null, year: 2025,
    price: 1850000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'UK used iPhone 17 Pro 512GB eSIM. Excellent condition.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 124, name: 'iPhone 17 Pro 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.8, reviews: 8, badge: null, year: 2025,
    price: 1700000, old: null,
    imgs: ['./assets/17pro.png'],
    desc: 'UK used iPhone 17 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },


  {
    id: 114, name: 'iPhone 17 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 21, badge: 'New', year: 2025,
    price: 1600000, old: null,
    imgs: ['./assets/17.jfif'],
    desc: 'iPhone 17 512GB Physical SIM. A19 chip, Camera Control, Apple Intelligence.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 115, name: 'iPhone 17 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 38, badge: 'New', year: 2025,
    price: 1300000, old: null,
    imgs: ['./assets/17.jfif'],
    desc: 'iPhone 17 256GB Physical SIM. The best standard iPhone ever made.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 116, name: 'iPhone 17 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 14, badge: 'New', year: 2025,
    price: 1500000, old: null,
    imgs: ['./assets/17.jfif'],
    desc: 'iPhone 17 512GB eSIM. A19 chip, full Apple Intelligence suite.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 117, name: 'iPhone 17 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 29, badge: 'New', year: 2025,
    price: 1250000, old: null,
    imgs: ['./assets/17.jfif'],
    desc: 'iPhone 17 256GB eSIM variant.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Origin', 'International']]
  },
  {
    id: 125, name: 'iPhone 17 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.7, reviews: 11, badge: null, year: 2025,
    price: 1100000, old: null,
    imgs: ['./assets/17.jfif'],
    desc: 'UK used iPhone 17 256GB eSIM. Great value on the latest standard iPhone.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19'], ['Display', '6.1" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },

 
  {
    id: 118, name: 'iPhone 17 Air 1TB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 7, badge: 'New', year: 2025,
    price: 1850000, old: null,
    imgs: ['./assets/17air.jfif'],
    desc: 'iPhone 17 Air — the thinnest iPhone ever. Ultra-slim design, A19 chip, 1TB of storage. eSIM Only.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Ultra-thin design']]
  },
  {
    id: 119, name: 'iPhone 17 Air 512GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 18, badge: 'New', year: 2025,
    price: 1650000, old: null,
    imgs: ['./assets/17air.jfif'],
    desc: 'iPhone 17 Air 512GB. Impossibly slim, impressively capable. eSIM Only.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Ultra-thin design']]
  },
  {
    id: 120, name: 'iPhone 17 Air 256GB (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'New', rating: 4.8, reviews: 23, badge: 'New', year: 2025,
    price: 1380000, old: null,
    imgs: ['./assets/17air.jfif'],
    desc: 'iPhone 17 Air 256GB eSIM. Sleek, light and powerful.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Ultra-thin design']]
  },
  {
    id: 126, name: 'iPhone 17 Air 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 17',
    cond: 'Used', rating: 4.7, reviews: 4, badge: null, year: 2025,
    price: 1200000, old: null,
    imgs: ['./assets/17air.jfif'],
    desc: 'UK used iPhone 17 Air 256GB eSIM. Slim design, solid performance.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM Only'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A19'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },


  {
    id: 1, name: 'iPhone 16 Pro Max 512GB New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 567, badge: 'New', year: 2024,
    price: 1750000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro Max 512GB. A18 Pro chip, 6.9" ProMotion display, Camera Control, Apple Intelligence. eSIM version.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 2, name: 'iPhone 16 Pro Max 256GB New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 423, badge: 'New', year: 2024,
    price: 1550000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro Max 256GB. Apple Intelligence, A18 Pro, titanium design. eSIM version.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 201, name: 'iPhone 16 Pro Max 256GB Physical New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 311, badge: 'New', year: 2024,
    price: 1750000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro Max 256GB Physical SIM. Full Apple Intelligence, A18 Pro, Camera Control.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 202, name: 'iPhone 16 Pro Max 1TB Physical New', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 89, badge: 'New', year: 2024,
    price: 1600000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro Max 1TB Physical SIM. Maximum storage for serious users.',
    specs: [['Storage', '1TB'], ['SIM', 'Physical SIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.9" ProMotion Super Retina XDR']]
  },
  {
    id: 203, name: 'iPhone 16 Pro Max 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 74, badge: null, year: 2024,
    price: 1500000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro Max 1TB eSIM. Excellent condition, fully tested.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 204, name: 'iPhone 16 Pro Max 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 112, badge: null, year: 2024,
    price: 1500000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro Max 512GB Physical SIM. Tested and verified.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 205, name: 'iPhone 16 Pro Max 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 88, badge: null, year: 2024,
    price: 1350000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro Max 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 206, name: 'iPhone 16 Pro Max 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 156, badge: null, year: 2024,
    price: 1400000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro Max 256GB Physical SIM. Great value on a flagship device.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 207, name: 'iPhone 16 Pro Max 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 201, badge: null, year: 2024,
    price: 1200000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro Max 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.9" ProMotion'], ['Origin', 'United Kingdom']]
  },

  {
    id: 208, name: 'iPhone 16 Pro 512GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 198, badge: 'New', year: 2024,
    price: 1600000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro 512GB eSIM. A18 Pro, 5x zoom, Camera Control.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.3" ProMotion Super Retina XDR']]
  },
  {
    id: 209, name: 'iPhone 16 Pro 256GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 312, badge: 'New', year: 2024,
    price: 1500000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.3" ProMotion Super Retina XDR']]
  },
  {
    id: 210, name: 'iPhone 16 Pro 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.8, reviews: 267, badge: 'New', year: 2024,
    price: 1370000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'Brand new iPhone 16 Pro 128GB eSIM. Entry into Pro with full A18 Pro power.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A18 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Condition', 'Brand New'], ['Display', '6.3" ProMotion Super Retina XDR']]
  },
  {
    id: 211, name: 'iPhone 16 Pro 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 143, badge: null, year: 2024,
    price: 1350000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 512GB Physical SIM. Fully tested.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 212, name: 'iPhone 16 Pro 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 198, badge: null, year: 2024,
    price: 1250000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 213, name: 'iPhone 16 Pro 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 224, badge: null, year: 2024,
    price: 1150000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 214, name: 'iPhone 16 Pro 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 189, badge: null, year: 2024,
    price: 1050000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 215, name: 'iPhone 16 Pro 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 167, badge: null, year: 2024,
    price: 1150000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 216, name: 'iPhone 16 Pro 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 121, badge: null, year: 2024,
    price: 1250000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },
  {
    id: 217, name: 'iPhone 16 Pro 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.8, reviews: 67, badge: null, year: 2024,
    price: 1300000, old: null,
    imgs: ['./assets/16pro.jfif'],
    desc: 'UK used iPhone 16 Pro 1TB eSIM. Maximum storage at a great price.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18 Pro'], ['Display', '6.3" ProMotion'], ['Origin', 'United Kingdom']]
  },

  {
    id: 218, name: 'iPhone 16 Plus 512GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 145, badge: 'New', year: 2024,
    price: 1600000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'Brand new iPhone 16 Plus 512GB Physical SIM. Big screen, A18 chip, Camera Control.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 219, name: 'iPhone 16 Plus 256GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 189, badge: 'New', year: 2024,
    price: 1350000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'Brand new iPhone 16 Plus 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 220, name: 'iPhone 16 Plus 128GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 212, badge: 'New', year: 2024,
    price: 1200000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'Brand new iPhone 16 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 221, name: 'iPhone 16 Plus 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 178, badge: 'New', year: 2024,
    price: 1100000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'Brand new iPhone 16 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 222, name: 'iPhone 16 Plus 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 134, badge: null, year: 2024,
    price: 1100000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'UK used iPhone 16 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 223, name: 'iPhone 16 Plus 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 98, badge: null, year: 2024,
    price: 1150000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'UK used iPhone 16 Plus 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 224, name: 'iPhone 16 Plus 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.7, reviews: 76, badge: null, year: 2024,
    price: 1300000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'UK used iPhone 16 Plus 512GB Physical SIM.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 225, name: 'iPhone 16 Plus 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 89, badge: null, year: 2024,
    price: 1000000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'UK used iPhone 16 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },
  {
    id: 226, name: 'iPhone 16 Plus 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'Used', rating: 4.6, reviews: 71, badge: null, year: 2024,
    price: 1100000, old: null,
    imgs: ['./assets/16plus.jfif'],
    desc: 'UK used iPhone 16 Plus 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Condition', 'UK Used — Excellent'], ['Chip', 'A18'], ['Display', '6.7" Super Retina XDR'], ['Origin', 'United Kingdom']]
  },

  {
    id: 3, name: 'iPhone 16 256GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 612, badge: 'New', year: 2024,
    price: 1200000, old: null,
    imgs: ['./assets/16.jfif'],
    desc: 'Brand new iPhone 16 256GB Physical SIM. A18 chip, Camera Control, Apple Intelligence.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 4, name: 'iPhone 16 128GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 489, badge: 'New', year: 2024,
    price: 1100000, old: null,
    imgs: ['./assets/16.jfif'],
    desc: 'Brand new iPhone 16 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A18'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },
  {
    id: 227, name: 'iPhone 16 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 398, badge: 'New', year: 2024,
    price: 980000, old: null,
    imgs: ['./assets/16.jfif'],
    desc: 'Brand new iPhone 16 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A18'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Brand New'], ['Feature', 'Camera Control + Action Button']]
  },


  {
    id: 5, name: 'iPhone 15 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.9, reviews: 789, badge: null, year: 2023,
    price: 870000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'Titanium. A17 Pro. 5x zoom. USB 3. iPhone 15 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Display', '6.7" ProMotion Super Retina XDR'], ['Port', 'USB-C (USB 3)'], ['Condition', 'New']]
  },
  {
    id: 6, name: 'iPhone 15 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.9, reviews: 543, badge: null, year: 2023,
    price: 920000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'iPhone 15 Pro Max 512GB. Outstanding pro performance at a great price.',
    specs: [['Storage', '512GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple (5x Zoom)'], ['Display', '6.7" ProMotion Super Retina XDR'], ['Port', 'USB-C (USB 3)'], ['Condition', 'New']]
  },
  {
    id: 301, name: 'iPhone 15 Pro Max 512GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.8, reviews: 312, badge: null, year: 2023,
    price: 850000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'UK used iPhone 15 Pro Max 512GB. Excellent condition, fully tested.',
    specs: [['Storage', '512GB'], ['Chip', 'A17 Pro'], ['Camera', '5x Periscope Zoom'], ['Display', '6.7" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 302, name: 'iPhone 15 Pro Max 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.8, reviews: 421, badge: null, year: 2023,
    price: 800000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'UK used iPhone 15 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '5x Periscope Zoom'], ['Display', '6.7" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 7, name: 'iPhone 15 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.8, reviews: 654, badge: null, year: 2023,
    price: 770000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'iPhone 15 Pro 256GB. Titanium, Action Button, USB-C, A17 Pro.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple System'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Port', 'USB-C (USB 3)'], ['Condition', 'New']]
  },
  {
    id: 303, name: 'iPhone 15 Pro 512GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.7, reviews: 234, badge: null, year: 2023,
    price: 720000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'UK used iPhone 15 Pro 512GB. Great condition.',
    specs: [['Storage', '512GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple System'], ['Display', '6.1" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 304, name: 'iPhone 15 Pro 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.7, reviews: 356, badge: null, year: 2023,
    price: 670000, old: null,
    imgs: ['./assets/15pro.jfif'],
    desc: 'UK used iPhone 15 Pro 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A17 Pro'], ['Camera', '48MP Triple System'], ['Display', '6.1" ProMotion'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 8, name: 'iPhone 15 Plus 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.6, reviews: 301, badge: null, year: 2023,
    price: 620000, old: null,
    imgs: ['./assets/15plus.jfif'],
    desc: 'iPhone 15 Plus 256GB. Big screen, big battery, USB-C, Dynamic Island.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Main + 12MP Ultra Wide'], ['Display', '6.7" Super Retina XDR'], ['Battery', 'Up to 26 hrs'], ['Condition', 'New']]
  },
  {
    id: 9, name: 'iPhone 15 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'New', rating: 4.6, reviews: 812, badge: null, year: 2023,
    price: 550000, old: null,
    imgs: ['./assets/15.jfif'],
    desc: 'iPhone 15 256GB. Dynamic Island, USB-C, 48MP camera, A16 Bionic.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Main + 12MP Ultra Wide'], ['Display', '6.1" Super Retina XDR'], ['Battery', 'Up to 20 hrs'], ['Condition', 'New']]
  },
  {
    id: 305, name: 'iPhone 15 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.6, reviews: 445, badge: null, year: 2023,
    price: 480000, old: null,
    imgs: ['./assets/15.jfif'],
    desc: 'UK used iPhone 15 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 306, name: 'iPhone 15 128GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.5, reviews: 567, badge: null, year: 2023,
    price: 430000, old: null,
    imgs: ['./assets/15.jfif'],
    desc: 'UK used iPhone 15 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 307, name: 'iPhone 15 FU 256GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.6, reviews: 198, badge: null, year: 2023,
    price: 850000, old: null,
    imgs: ['./assets/15.jfif'],
    desc: 'UK used iPhone 15 (FU) 256GB — Factory Unlocked. Works on all networks.',
    specs: [['Storage', '256GB'], ['Chip', 'A16 Bionic'], ['Unlocked', 'Factory Unlocked (All Networks)'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used'], ['Origin', 'United Kingdom']]
  },
  {
    id: 308, name: 'iPhone 15 FU 128GB UK Used', brand: 'Apple', cat: 'Phones', model: 'iPhone 15',
    cond: 'Used', rating: 4.6, reviews: 223, badge: null, year: 2023,
    price: 750000, old: null,
    imgs: ['./assets/15.jfif'],
    desc: 'UK used iPhone 15 (FU) 128GB — Factory Unlocked.',
    specs: [['Storage', '128GB'], ['Chip', 'A16 Bionic'], ['Unlocked', 'Factory Unlocked (All Networks)'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'UK Used'], ['Origin', 'United Kingdom']]
  },


  {
    id: 401, name: 'iPhone 14 Pro Max 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 187, badge: null, year: 2022,
    price: 1000000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 1TB eSIM. Always-On display, Dynamic Island, 48MP camera.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 402, name: 'iPhone 14 Pro Max 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 243, badge: null, year: 2022,
    price: 900000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 403, name: 'iPhone 14 Pro Max 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 312, badge: null, year: 2022,
    price: 850000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 404, name: 'iPhone 14 Pro Max 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 389, badge: null, year: 2022,
    price: 800000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 405, name: 'iPhone 14 Pro Max 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 356, badge: null, year: 2022,
    price: 900000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 406, name: 'iPhone 14 Pro Max 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 289, badge: null, year: 2022,
    price: 950000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 407, name: 'iPhone 14 Pro Max 512GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 201, badge: null, year: 2022,
    price: 1050000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro Max 512GB Physical SIM.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On Display']]
  },
  {
    id: 408, name: 'iPhone 14 Pro 512GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.8, reviews: 134, badge: null, year: 2022,
    price: 1180000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'Brand new iPhone 14 Pro 512GB Physical SIM.',
    specs: [['Storage', '512GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'Brand New'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 409, name: 'iPhone 14 Pro 1TB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 98, badge: null, year: 2022,
    price: 850000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro 1TB eSIM.',
    specs: [['Storage', '1TB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 410, name: 'iPhone 14 Pro 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 167, badge: null, year: 2022,
    price: 750000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 411, name: 'iPhone 14 Pro 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 234, badge: null, year: 2022,
    price: 700000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 412, name: 'iPhone 14 Pro 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 298, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 413, name: 'iPhone 14 Pro 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 267, badge: null, year: 2022,
    price: 720000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 414, name: 'iPhone 14 Pro 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.7, reviews: 198, badge: null, year: 2022,
    price: 820000, old: null,
    imgs: ['./assets/14pro.jfif'],
    desc: 'UK used iPhone 14 Pro 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A16 Bionic'], ['Camera', '48MP Triple'], ['Condition', 'UK Used — Excellent'], ['Feature', 'Always-On + Dynamic Island']]
  },
  {
    id: 415, name: 'iPhone 14 Plus 128GB New (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.6, reviews: 145, badge: null, year: 2022,
    price: 900000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'Brand new iPhone 14 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Battery', 'Up to 26 hrs']]
  },
  {
    id: 416, name: 'iPhone 14 Plus 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.6, reviews: 112, badge: null, year: 2022,
    price: 800000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'Brand new iPhone 14 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'Brand New'], ['Battery', 'Up to 26 hrs']]
  },
  {
    id: 417, name: 'iPhone 14 Plus 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 134, badge: null, year: 2022,
    price: 720000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 Plus 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 418, name: 'iPhone 14 Plus 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 98, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 Plus 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 419, name: 'iPhone 14 Plus 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 156, badge: null, year: 2022,
    price: 590000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 Plus 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 420, name: 'iPhone 14 Plus 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 145, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 Plus 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Display', '6.7" Super Retina XDR'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 10, name: 'iPhone 14 128GB New (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'New', rating: 4.5, reviews: 312, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'Brand new iPhone 14 128GB eSIM. A15 Bionic, Crash Detection, Emergency SOS via Satellite.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual System'], ['Condition', 'Brand New'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 421, name: 'iPhone 14 128GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 421, badge: null, year: 2022,
    price: 540000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 128GB eSIM.',
    specs: [['Storage', '128GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 422, name: 'iPhone 14 128GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 378, badge: null, year: 2022,
    price: 600000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 128GB Physical SIM.',
    specs: [['Storage', '128GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 423, name: 'iPhone 14 256GB UK Used (Physical)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 289, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 256GB Physical SIM.',
    specs: [['Storage', '256GB'], ['SIM', 'Physical SIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 424, name: 'iPhone 14 256GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 245, badge: null, year: 2022,
    price: 600000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 256GB eSIM.',
    specs: [['Storage', '256GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },
  {
    id: 425, name: 'iPhone 14 512GB UK Used (eSIM)', brand: 'Apple', cat: 'Phones', model: 'iPhone 14',
    cond: 'Used', rating: 4.6, reviews: 167, badge: null, year: 2022,
    price: 650000, old: null,
    imgs: ['./assets/14.jfif'],
    desc: 'UK used iPhone 14 512GB eSIM.',
    specs: [['Storage', '512GB'], ['SIM', 'eSIM'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Condition', 'UK Used — Excellent'], ['Origin', 'United Kingdom']]
  },



  {
    id: 11, name: 'iPhone 13 Pro Max 1TB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 402, badge: null, year: 2021,
    price: 780000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro Max 1TB. ProMotion, A15 Bionic, 3x zoom. Maximum storage.',
    specs: [['Storage', '1TB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 501, name: 'iPhone 13 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 312, badge: null, year: 2021,
    price: 700000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro Max 512GB. ProMotion display, stellar battery life, 3x zoom.',
    specs: [['Storage', '512GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 502, name: 'iPhone 13 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 445, badge: null, year: 2021,
    price: 650000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 503, name: 'iPhone 13 Pro Max 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 521, badge: null, year: 2021,
    price: 580000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro Max 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.7" ProMotion'], ['Condition', 'Used — Good'], ['Battery', 'Up to 28 hrs']]
  },
  {
    id: 504, name: 'iPhone 13 Pro 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 234, badge: null, year: 2021,
    price: 620000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro 512GB.',
    specs: [['Storage', '512GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 22 hrs']]
  },
  {
    id: 505, name: 'iPhone 13 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 312, badge: null, year: 2021,
    price: 570000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 22 hrs']]
  },
  {
    id: 506, name: 'iPhone 13 Pro 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 389, badge: null, year: 2021,
    price: 530000, old: null,
    imgs: ['./assets/13pro.jfif'],
    desc: 'iPhone 13 Pro 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Triple (3x Zoom)'], ['Display', '6.1" ProMotion Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 22 hrs']]
  },
  {
    id: 12, name: 'iPhone 13 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 634, badge: null, year: 2021,
    price: 530000, old: null,
    imgs: ['./assets/13.jfif'],
    desc: 'iPhone 13 512GB. A15 Bionic, 12MP dual camera, long battery life.',
    specs: [['Storage', '512GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 19 hrs']]
  },
  {
    id: 507, name: 'iPhone 13 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 712, badge: null, year: 2021,
    price: 480000, old: null,
    imgs: ['./assets/13.jfif'],
    desc: 'iPhone 13 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 19 hrs']]
  },
  {
    id: 508, name: 'iPhone 13 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 891, badge: null, year: 2021,
    price: 430000, old: null,
    imgs: ['./assets/13.jfif'],
    desc: 'iPhone 13 128GB. Great everyday iPhone at a fantastic price.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '6.1" Super Retina XDR'], ['Condition', 'Used — Good'], ['Battery', 'Up to 19 hrs']]
  },
  {
    id: 509, name: 'iPhone 13 Mini 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.4, reviews: 278, badge: null, year: 2021,
    price: 450000, old: null,
    imgs: ['./assets/13mini.jfif'],
    desc: 'iPhone 13 Mini 256GB. Compact, powerful, and packed with features.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '5.4" Super Retina XDR'], ['Condition', 'Used — Good'], ['Feature', 'Compact form factor']]
  },
  {
    id: 510, name: 'iPhone 13 Mini 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 13',
    cond: 'Used', rating: 4.4, reviews: 334, badge: null, year: 2021,
    price: 395000, old: null,
    imgs: ['./assets/13mini.jfif'],
    desc: 'iPhone 13 Mini 128GB. The smallest iPhone with big performance.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Camera', '12MP Dual'], ['Display', '5.4" Super Retina XDR'], ['Condition', 'Used — Good'], ['Feature', 'Compact form factor']]
  },



  {
    id: 601, name: 'iPhone 12 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 234, badge: null, year: 2020,
    price: 590000, old: null,
    imgs: ['./assets/12pro.jfif'],
    desc: 'iPhone 12 Pro Max 512GB. A14 Bionic, 6.7" OLED, 5G support, stellar camera.',
    specs: [['Storage', '512GB'], ['Chip', 'A14 Bionic'], ['Display', '6.7" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 602, name: 'iPhone 12 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 312, badge: null, year: 2020,
    price: 550000, old: null,
    imgs: ['./assets/12pro.jfif'],
    desc: 'iPhone 12 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A14 Bionic'], ['Display', '6.7" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 603, name: 'iPhone 12 Pro Max 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 389, badge: null, year: 2020,
    price: 500000, old: null,
    imgs: ['./assets/12pro.jfif'],
    desc: 'iPhone 12 Pro Max 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A14 Bionic'], ['Display', '6.7" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 604, name: 'iPhone 12 Pro 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 198, badge: null, year: 2020,
    price: 520000, old: null,
    imgs: ['./assets/12pro.jfif'],
    desc: 'iPhone 12 Pro 512GB. A14 Bionic, LiDAR scanner, 6.1" OLED, 5G.',
    specs: [['Storage', '512GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', 'LiDAR + 5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 605, name: 'iPhone 12 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 267, badge: null, year: 2020,
    price: 470000, old: null,
    imgs: ['./assets/12pro.jfif'],
    desc: 'iPhone 12 Pro 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', 'LiDAR + 5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 606, name: 'iPhone 12 Pro 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.4, reviews: 334, badge: null, year: 2020,
    price: 435000, old: null,
    imgs: ['./assets/12pro.jfif'],
    desc: 'iPhone 12 Pro 128GB.',
    specs: [['Storage', '128GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', 'LiDAR + 5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 607, name: 'iPhone 12 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.3, reviews: 456, badge: null, year: 2020,
    price: 380000, old: null,
    imgs: ['./assets/12.jfif'],
    desc: 'iPhone 12 128GB. 5G capable, A14 Bionic, OLED display.',
    specs: [['Storage', '128GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 608, name: 'iPhone 12 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.2, reviews: 534, badge: null, year: 2020,
    price: 330000, old: null,
    imgs: ['./assets/12.jfif'],
    desc: 'iPhone 12 64GB. 5G, A14 Bionic, OLED at an entry-level price.',
    specs: [['Storage', '64GB'], ['Chip', 'A14 Bionic'], ['Display', '6.1" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 609, name: 'iPhone 12 Mini 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 12',
    cond: 'Used', rating: 4.2, reviews: 312, badge: null, year: 2020,
    price: 310000, old: null,
    imgs: ['./assets/12mini.jfif'],
    desc: 'iPhone 12 Mini 64GB. Compact 5G iPhone at a budget-friendly price.',
    specs: [['Storage', '64GB'], ['Chip', 'A14 Bionic'], ['Display', '5.4" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Feature', '5G'], ['Battery', 'Up to 15 hrs']]
  },


  {
    id: 701, name: 'iPhone 11 Pro Max 512GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.2, reviews: 289, badge: null, year: 2019,
    price: 480000, old: null,
    imgs: ['./assets/11pro.jfif'],
    desc: 'iPhone 11 Pro Max 512GB. Triple camera system, A13 Bionic, 6.5" Super Retina XDR.',
    specs: [['Storage', '512GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '6.5" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 702, name: 'iPhone 11 Pro Max 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.2, reviews: 356, badge: null, year: 2019,
    price: 430000, old: null,
    imgs: ['./assets/11pro.jfif'],
    desc: 'iPhone 11 Pro Max 256GB.',
    specs: [['Storage', '256GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '6.5" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 703, name: 'iPhone 11 Pro Max 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.1, reviews: 423, badge: null, year: 2019,
    price: 380000, old: null,
    imgs: ['./assets/11pro.jfif'],
    desc: 'iPhone 11 Pro Max 64GB.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '6.5" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 20 hrs']]
  },
  {
    id: 704, name: 'iPhone 11 Pro 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.2, reviews: 267, badge: null, year: 2019,
    price: 400000, old: null,
    imgs: ['./assets/11pro.jfif'],
    desc: 'iPhone 11 Pro 256GB. Triple camera, A13 Bionic, 5.8" OLED.',
    specs: [['Storage', '256GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '5.8" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 18 hrs']]
  },
  {
    id: 705, name: 'iPhone 11 Pro 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.1, reviews: 334, badge: null, year: 2019,
    price: 350000, old: null,
    imgs: ['./assets/11pro.jfif'],
    desc: 'iPhone 11 Pro 64GB.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Triple System'], ['Display', '5.8" Super Retina XDR OLED'], ['Condition', 'Used — Good'], ['Battery', 'Up to 18 hrs']]
  },
  {
    id: 706, name: 'iPhone 11 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.0, reviews: 489, badge: null, year: 2019,
    price: 330000, old: null,
    imgs: ['./assets/11.jfif'],
    desc: 'iPhone 11 128GB. Great budget pick — dual cameras and solid battery.',
    specs: [['Storage', '128GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Dual System'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 707, name: 'iPhone 11 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.0, reviews: 567, badge: null, year: 2019,
    price: 295000, old: null,
    imgs: ['./assets/11.jfif'],
    desc: 'iPhone 11 64GB. Entry-level Apple performance.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Camera', '12MP Dual System'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Battery', 'Up to 17 hrs']]
  },
  {
    id: 708, name: 'iPhone XR 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 4.0, reviews: 398, badge: null, year: 2018,
    price: 290000, old: null,
    imgs: ['./assets/xr.jfif'],
    desc: 'iPhone XR 128GB. A12 Bionic, 6.1" Liquid Retina LCD, Face ID.',
    specs: [['Storage', '128GB'], ['Chip', 'A12 Bionic'], ['Camera', '12MP Wide'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Feature', 'Face ID']]
  },
  {
    id: 709, name: 'iPhone XR 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone 11',
    cond: 'Used', rating: 3.9, reviews: 456, badge: null, year: 2018,
    price: 230000, old: null,
    imgs: ['./assets/xr.jfif'],
    desc: 'iPhone XR 64GB. Budget-friendly Face ID iPhone.',
    specs: [['Storage', '64GB'], ['Chip', 'A12 Bionic'], ['Camera', '12MP Wide'], ['Display', '6.1" Liquid Retina LCD'], ['Condition', 'Used — Good'], ['Feature', 'Face ID']]
  },


  {
    id: 13, name: 'iPhone SE 3 256GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'New', rating: 4.4, reviews: 287, badge: null, year: 2022,
    price: 320000, old: null,
    imgs: ['./assets/se.jfif'],
    desc: 'iPhone SE (3rd Gen) 256GB. A15 Bionic, 5G, Touch ID — most affordable iPhone with flagship chip.',
    specs: [['Storage', '256GB'], ['Chip', 'A15 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID + 5G'], ['Condition', 'New']]
  },
  {
    id: 801, name: 'iPhone SE 3 128GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'New', rating: 4.4, reviews: 345, badge: null, year: 2022,
    price: 270000, old: null,
    imgs: ['./assets/se.jfif'],
    desc: 'iPhone SE (3rd Gen) 128GB. A15 Bionic, 5G. Best-value iPhone.',
    specs: [['Storage', '128GB'], ['Chip', 'A15 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID + 5G'], ['Condition', 'New']]
  },
  {
    id: 802, name: 'iPhone SE 3 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'New', rating: 4.3, reviews: 412, badge: null, year: 2022,
    price: 230000, old: null,
    imgs: ['./assets/se.jfif'],
    desc: 'iPhone SE (3rd Gen) 64GB. Entry-level with A15 Bionic power and 5G.',
    specs: [['Storage', '64GB'], ['Chip', 'A15 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID + 5G'], ['Condition', 'New']]
  },
  {
    id: 803, name: 'iPhone SE 2 64GB', brand: 'Apple', cat: 'Phones', model: 'iPhone SE',
    cond: 'Used', rating: 4.1, reviews: 289, badge: null, year: 2020,
    price: 200000, old: null,
    imgs: ['./assets/se.jfif'],
    desc: 'iPhone SE (2nd Gen) 64GB. A13 Bionic, Touch ID, compact 4.7" design.',
    specs: [['Storage', '64GB'], ['Chip', 'A13 Bionic'], ['Display', '4.7" Retina HD'], ['Camera', '12MP Wide'], ['Feature', 'Touch ID'], ['Condition', 'Used — Good']]
  },



  {
    id: 20, name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', cat: 'Phones', model: 'Galaxy S25',
    cond: 'New', rating: 4.9, reviews: 312, badge: 'New', year: 2025,
    price: 2100000, old: null,
    imgs: ['./assets/s25 ultra.jfif'],
    desc: 'The ultimate Samsung. Snapdragon 8 Elite, 200MP camera, built-in S Pen, 6.9" Dynamic AMOLED display. Galaxy AI on every shot.',
    specs: [['Storage', '256GB / 512GB / 1TB'], ['Display', '6.9" Dynamic AMOLED 2X 120Hz'], ['Chip', 'Snapdragon 8 Elite'], ['Camera', '200MP Quad System'], ['Battery', '5000mAh'], ['Feature', 'Built-in S Pen + Galaxy AI']]
  },
  {
    id: 21, name: 'Samsung Galaxy S25+', brand: 'Samsung', cat: 'Phones', model: 'Galaxy S25',
    cond: 'New', rating: 4.8, reviews: 198, badge: 'New', year: 2025,
    price: 1600000, old: null,
    imgs: ['./assets/s25 plus.jfif'],
    desc: 'Big screen, big battery, pro camera. Galaxy S25+ brings Snapdragon 8 Elite power, 50MP triple camera and Galaxy AI to a stunning 6.7" display.',
    specs: [['Storage', '256GB / 512GB'], ['Display', '6.7" Dynamic AMOLED 2X 120Hz'], ['Chip', 'Snapdragon 8 Elite'], ['Camera', '50MP Triple System'], ['Battery', '4900mAh'], ['Feature', 'Galaxy AI']]
  },
  {
    id: 22, name: 'Samsung Galaxy S25', brand: 'Samsung', cat: 'Phones', model: 'Galaxy S25',
    cond: 'New', rating: 4.7, reviews: 245, badge: 'New', year: 2025,
    price: 1200000, old: null,
    imgs: ['./assets/s25.jfif'],
    desc: 'Compact flagship power. Galaxy S25 packs Snapdragon 8 Elite, 50MP triple camera and Galaxy AI into a sleek 6.2" form factor.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.2" Dynamic AMOLED 2X 120Hz'], ['Chip', 'Snapdragon 8 Elite'], ['Camera', '50MP Triple System'], ['Battery', '4000mAh'], ['Feature', 'Galaxy AI']]
  },
  {
    id: 23, name: 'Samsung Galaxy Z Fold 6', brand: 'Samsung', cat: 'Phones', model: 'Galaxy Z',
    cond: 'New', rating: 4.8, reviews: 134, badge: 'Hot', year: 2024,
    price: 2800000, old: 3000000,
    imgs: ['./assets/zfold6.jfif'],
    desc: 'The future of smartphones. Galaxy Z Fold 6 opens into a 7.6" tablet display. Snapdragon 8 Gen 3, S Pen support, and a refined book-style fold.',
    specs: [['Storage', '256GB / 512GB / 1TB'], ['Display', '7.6" Main + 6.3" Cover'], ['Chip', 'Snapdragon 8 Gen 3'], ['Camera', '50MP Triple System'], ['Battery', '4400mAh'], ['Feature', 'S Pen Support + Flex Mode']]
  },
  {
    id: 24, name: 'Samsung Galaxy Z Flip 6', brand: 'Samsung', cat: 'Phones', model: 'Galaxy Z',
    cond: 'New', rating: 4.7, reviews: 167, badge: 'Hot', year: 2024,
    price: 1450000, old: null,
    imgs: ['./assets/zflip6.png'],
    desc: 'Flip it. Own it. Galaxy Z Flip 6 with Snapdragon 8 Gen 3, enlarged FlexWindow cover display, and improved 50MP camera. Style meets power.',
    specs: [['Storage', '256GB / 512GB'], ['Display', '6.7" Foldable + 3.4" Cover'], ['Chip', 'Snapdragon 8 Gen 3'], ['Camera', '50MP Dual System'], ['Battery', '4000mAh'], ['Feature', 'FlexMode + Flex Window']]
  },
  {
    id: 25, name: 'Samsung Galaxy A55 5G', brand: 'Samsung', cat: 'Phones', model: 'Galaxy A',
    cond: 'New', rating: 4.5, reviews: 289, badge: null, year: 2024,
    price: 480000, old: null,
    imgs: ['./assets/a55.jfif'],
    desc: 'Premium mid-range excellence. Galaxy A55 5G with 50MP OIS camera, 6.6" Super AMOLED display, and IP67 water resistance.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.6" Super AMOLED 120Hz'], ['Chip', 'Exynos 1480'], ['Camera', '50MP Triple with OIS'], ['Battery', '5000mAh'], ['Feature', 'IP67 + 5G']]
  },
  {
    id: 26, name: 'Samsung Galaxy A35 5G', brand: 'Samsung', cat: 'Phones', model: 'Galaxy A',
    cond: 'New', rating: 4.4, reviews: 312, badge: null, year: 2024,
    price: 320000, old: null,
    imgs: ['./assets/a35.jfif'],
    desc: 'Great camera, great price. Galaxy A35 5G delivers 50MP OIS camera, 6.6" Super AMOLED display and 5000mAh battery.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.6" Super AMOLED 120Hz'], ['Chip', 'Exynos 1380'], ['Camera', '50MP Triple with OIS'], ['Battery', '5000mAh'], ['Feature', 'IP67 + 5G']]
  },
  {
    id: 27, name: 'Samsung Galaxy A16 5G', brand: 'Samsung', cat: 'Phones', model: 'Galaxy A',
    cond: 'New', rating: 4.3, reviews: 198, badge: null, year: 2024,
    price: 180000, old: null,
    imgs: ['./assets/a16.jfif'],
    desc: 'Affordable 5G done right. Galaxy A16 5G with 50MP camera, 6.7" display and 5000mAh battery.',
    specs: [['Storage', '128GB / 256GB'], ['Display', '6.7" Super AMOLED 90Hz'], ['Chip', 'MediaTek Dimensity 6300'], ['Camera', '50MP Triple'], ['Battery', '5000mAh'], ['Feature', '5G + 6 years OS updates']]
  },

  {
    id: 14, name: 'MacBook Pro M4 — 14"', brand: 'Apple', cat: 'Laptops', model: null,
    cond: 'New', rating: 4.9, reviews: 98, badge: 'New', year: 2024,
    price: 3200000, old: null,
    imgs: ['./assets/mac.jfif'],
    desc: 'The most powerful MacBook Pro ever made. M4 chip, Liquid Retina XDR display, fanless silence, and up to 24 hours of battery life.',
    specs: [['Chip', 'Apple M4'], ['RAM', '16GB Unified Memory'], ['Storage', '512GB SSD'], ['Display', '14.2" Liquid Retina XDR'], ['Battery', 'Up to 24 hrs'], ['Weight', '1.55 kg']]
  },
  {
    id: 15, name: 'MacBook Air M3 — 13"', brand: 'Apple', cat: 'Laptops', model: null,
    cond: 'New', rating: 4.8, reviews: 156, badge: null, year: 2024,
    price: 1950000, old: null,
    imgs: ['./assets/mac.jfif'],
    desc: "Impossibly thin. Fanless and completely silent. MacBook Air M3 — world's best consumer laptop.",
    specs: [['Chip', 'Apple M3'], ['RAM', '8GB / 16GB'], ['Storage', '256GB – 2TB SSD'], ['Display', '13.6" Liquid Retina'], ['Battery', 'Up to 18 hrs'], ['Weight', '1.24 kg']]
  },

  {
    id: 16, name: 'PlayStation 5 Pro', brand: 'Sony', cat: 'Gaming', model: null,
    cond: 'New', rating: 4.8, reviews: 203, badge: 'Hot', year: 2024,
    price: 850000, old: 950000,
    imgs: ['./assets/pes5.jfif'],
    desc: 'The most powerful PlayStation ever. Enhanced GPU, 2TB SSD, 8K support.',
    specs: [['GPU', 'Enhanced RDNA (45% faster than PS5)'], ['CPU', 'AMD Zen 2 (3.85GHz)'], ['Storage', '2TB NVMe SSD'], ['Resolution', 'Up to 8K'], ['Frame Rate', 'Up to 120fps'], ['Feature', 'PlayStation Spectral Super Resolution']]
  },

  {
    id: 17, name: 'AirPods Pro 2', brand: 'Apple', cat: 'Audio', model: null,
    cond: 'New', rating: 4.9, reviews: 567, badge: 'Hot', year: 2024,
    price: 198000, old: 220000,
    imgs: ['./assets/air2.jfif'],
    desc: 'H2 chip. Adaptive Audio. Personalised Spatial Audio. Best wireless earbuds for iPhone.',
    specs: [['Chip', 'H2'], ['ANC', 'Adaptive Transparency'], ['Battery', '6hrs + 30hrs with case'], ['Connectivity', 'Bluetooth 5.3'], ['Feature', 'Conversation Awareness + Personalised Spatial Audio'], ['Case', 'MagSafe + USB-C']]
  },
  {
    id: 18, name: 'AirPods 4', brand: 'Apple', cat: 'Audio', model: null,
    cond: 'New', rating: 4.7, reviews: 312, badge: null, year: 2024,
    price: 148000, old: null,
    imgs: ['./assets/air4.jfif'],
    desc: 'The biggest AirPods redesign ever. Open-ear comfort with optional ANC. H2 chip.',
    specs: [['Chip', 'H2'], ['ANC', 'Active Noise Cancellation (optional)'], ['Battery', '5hrs + 30hrs with case'], ['Connectivity', 'Bluetooth 5.3'], ['Feature', 'Conversation Awareness'], ['Case', 'USB-C']]
  },


  {
    id: 19, name: 'Apple Watch Series 10', brand: 'Apple', cat: 'Accessories', model: null,
    cond: 'New', rating: 4.8, reviews: 188, badge: 'Sale', year: 2024,
    price: 520000, old: 580000,
    imgs: ['./assets/series10.jfif'],
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