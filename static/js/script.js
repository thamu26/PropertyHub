/* =========================================================
   PROPERTYHUB — single-file SPA
   Sections: DATA -> STATE -> ICONS -> UTILS -> COMPONENTS -> PAGES -> ROUTER
========================================================= */

/* ============ DATA ============ */
const PROPERTIES = [
  {
    id:1, title:"Skyline Penthouse", type:"Penthouse", listingType:"sale", city:"Mumbai",
    address:"Lodha Sea Face, Worli, Mumbai", price:85000000, priceLabel:"₹8.50 Cr",
    beds:4, baths:4, area:3200, featured:true, status:"active", views:1240, ownerId:"u2",
    posted:"2026-04-02",
    images:[
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A rare crown-level residence overlooking the Arabian Sea, where double-height glazing frames an unbroken horizon. Every interior surface — Italian marble, brushed brass, smoked oak — has been chosen for restraint over excess, letting the view remain the loudest thing in the room.",
    amenities:["Infinity Pool","Private Elevator","Sea View","24x7 Security","Smart Home","Clubhouse","Power Backup","Valet Parking"],
    agent:{name:"Aarav Mehta", role:"Senior Listing Agent", phone:"+91 98200 11234", email:"aarav.mehta@propertyhub.in"}
  },
  {
    id:2, title:"The Aurelia Villa", type:"Villa", listingType:"sale", city:"Goa",
    address:"Candolim Beach Road, North Goa", price:42000000, priceLabel:"₹4.20 Cr",
    beds:5, baths:5, area:4500, featured:true, status:"active", views:980, ownerId:"u3",
    posted:"2026-03-18",
    images:[
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3f901e7b9?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"Tucked behind a curtain of coconut palms three minutes from the sand, this Portuguese-influenced villa pairs laterite stone walls with a courtyard pool. Built for long weekends that turn into long seasons.",
    amenities:["Private Pool","Garden","Outdoor Kitchen","Staff Quarters","Covered Parking","Power Backup"],
    agent:{name:"Priya Nair", role:"Goa Region Specialist", phone:"+91 98220 55678", email:"priya.nair@propertyhub.in"}
  },
  {
    id:3, title:"Cedar Heights Residency", type:"Apartment", listingType:"sale", city:"Pune",
    address:"Koregaon Park, Pune", price:18500000, priceLabel:"₹1.85 Cr",
    beds:3, baths:3, area:1650, featured:false, status:"active", views:540, ownerId:"u1",
    posted:"2026-05-01",
    images:[
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A bright, tree-lined apartment in Pune's most walkable neighbourhood. Wide-plank floors, a window-seat reading nook, and a kitchen built for people who actually cook.",
    amenities:["Clubhouse","Gym","Lift","24x7 Security","Power Backup","Children's Play Area"],
    agent:{name:"Rohan Kapoor", role:"Listing Agent", phone:"+91 98230 77891", email:"rohan.kapoor@propertyhub.in"}
  },
  {
    id:4, title:"Lakeview Residency", type:"Apartment", listingType:"rent", city:"Bengaluru",
    address:"Indiranagar, Bengaluru", price:65000, priceLabel:"₹65,000/mo",
    beds:2, baths:2, area:1200, featured:false, status:"active", views:710, ownerId:"u4",
    posted:"2026-05-22",
    images:[
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A quiet second-floor apartment two lanes off 100 Feet Road, with a wraparound balcony that catches the evening light. Fully furnished, ready to move in this month.",
    amenities:["Furnished","Lift","Covered Parking","Power Backup","24x7 Security"],
    agent:{name:"Sneha Iyer", role:"Rentals Specialist", phone:"+91 98450 23456", email:"sneha.iyer@propertyhub.in"}
  },
  {
    id:5, title:"Heritage Bungalow", type:"House", listingType:"sale", city:"Delhi",
    address:"Civil Lines, Delhi", price:67500000, priceLabel:"₹6.75 Cr",
    beds:4, baths:4, area:3800, featured:true, status:"active", views:865, ownerId:"u5",
    posted:"2026-02-09",
    images:[
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3f901e7b9?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A 1930s colonial bungalow restored beam by beam — original teak rafters, lime-plastered walls, and a verandah deep enough for a Delhi summer. Set on a 900 sq.yd. plot behind a private gate.",
    amenities:["Private Garden","Verandah","Servant Quarters","Covered Parking","Power Backup","Borewell"],
    agent:{name:"Aarav Mehta", role:"Senior Listing Agent", phone:"+91 98200 11234", email:"aarav.mehta@propertyhub.in"}
  },
  {
    id:6, title:"Oceanfront Studio", type:"Studio", listingType:"rent", city:"Goa",
    address:"Baga, North Goa", price:38000, priceLabel:"₹38,000/mo",
    beds:1, baths:1, area:650, featured:false, status:"active", views:430, ownerId:"u3",
    posted:"2026-06-02",
    images:[
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A compact, design-forward studio one street back from Baga's shoreline. Floor-to-ceiling shutters open onto a private balcony — perfect for a long stay or a permanent escape.",
    amenities:["Furnished","Balcony","Wi-Fi Ready","Covered Parking"],
    agent:{name:"Priya Nair", role:"Goa Region Specialist", phone:"+91 98220 55678", email:"priya.nair@propertyhub.in"}
  },
  {
    id:7, title:"Tech Park Towers", type:"Apartment", listingType:"sale", city:"Hyderabad",
    address:"Gachibowli, Hyderabad", price:12000000, priceLabel:"₹1.20 Cr",
    beds:2, baths:2, area:1100, featured:false, status:"active", views:390, ownerId:"u6",
    posted:"2026-04-28",
    images:[
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A low-maintenance two-bedroom in Hyderabad's IT corridor, ten minutes from the main campuses. Practical layout, generous storage, and a balcony big enough for a morning coffee ritual.",
    amenities:["Gym","Clubhouse","Lift","24x7 Security","Power Backup"],
    agent:{name:"Vikram Rao", role:"Listing Agent", phone:"+91 98480 99021", email:"vikram.rao@propertyhub.in"}
  },
  {
    id:8, title:"The Crown Estate", type:"Villa", listingType:"sale", city:"Mumbai",
    address:"Juhu Tara Road, Mumbai", price:125000000, priceLabel:"₹12.50 Cr",
    beds:5, baths:6, area:5200, featured:true, status:"active", views:1510, ownerId:"u2",
    posted:"2026-01-30",
    images:[
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3f901e7b9?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"One of only four private beachfront estates on Juhu Tara Road. A sunken living room opens directly onto a lawn that runs to the high-tide line, with a guest pavilion and rooftop deck built for entertaining.",
    amenities:["Private Beach Access","Infinity Pool","Home Theatre","Guest Pavilion","Staff Quarters","Smart Home","Valet Parking","24x7 Security"],
    agent:{name:"Aarav Mehta", role:"Senior Listing Agent", phone:"+91 98200 11234", email:"aarav.mehta@propertyhub.in"}
  },
  {
    id:9, title:"Garden Court Residences", type:"Apartment", listingType:"rent", city:"Pune",
    address:"Baner, Pune", price:42000, priceLabel:"₹42,000/mo",
    beds:3, baths:2, area:1450, featured:false, status:"pending", views:265, ownerId:"u1",
    posted:"2026-06-10",
    images:[
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&q=80&auto=format&fit=crop"
    ],
    description:"A family-sized three-bedroom set around a landscaped central courtyard in Baner. Cross-ventilated, with a dedicated study nook and two covered parking slots.",
    amenities:["Garden","Clubhouse","Covered Parking","Power Backup","Children's Play Area"],
    agent:{name:"Rohan Kapoor", role:"Listing Agent", phone:"+91 98230 77891", email:"rohan.kapoor@propertyhub.in"}
  }
];

/* ============ STATE ============ */
const state = {
  properties: PROPERTIES.slice(),
  wishlist: new Set([1,8]),
  isAuthed: JSON.parse(localStorage.getItem("isAuthed")) || false,
  user: JSON.parse(localStorage.getItem("user")) || {
    id:"",
    name:"",
    email:"",
    phone:"",
    role:"Buyer",
    initials:""
},
  filters:{ city:"any", type:"any", price:"any", beds:"any", q:"" },
  sort:"newest",
  galleryIndex:0,
  mobileMenuOpen:false,
  uploadPreviews:[],
  roleSelect:"buyer"
};

/* ============ ICONS ============ */
const ICONS = {
  heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  pin:'<svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  bed:'<svg viewBox="0 0 24 24"><path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 13h18"/><path d="M5 9V6a2 2 0 0 1 2-2h4v5"/></svg>',
  bath:'<svg viewBox="0 0 24 24"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 12V5a2 2 0 0 1 3-1.7"/></svg>',
  area:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>',
  menu:'<svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close:'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  chart:'<svg viewBox="0 0 24 24"><path d="M3 21V9M10 21V3M17 21v-7"/></svg>',
  eye:'<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  inbox:'<svg viewBox="0 0 24 24"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.4 5h13.2L22 12v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7z"/></svg>',
  home:'<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  list:'<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.16.36.25.75.25 1.15"/></svg>',
  phone:'<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/></svg>',
  mail:'<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>',
  shield:'<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z"/></svg>',
  spark:'<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
  upload:'<svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 20h14"/></svg>',
  empty:'<svg viewBox="0 0 24 24"><path d="M21 21l-4.3-4.3"/><circle cx="10" cy="10" r="7"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
};
function icon(name, cls){ return ICONS[name] ? ICONS[name].replace('<svg ', `<svg class="${cls||''}" `) : ''; }

/* ============ UTILS ============ */
function money(n){ return '₹' + n.toLocaleString('en-IN'); }
function fmtSqft(n){ return n.toLocaleString('en-IN') + ' sq.ft'; }
function getProp(id){ return state.properties.find(p => p.id === Number(id)); }
function uniqueCities(){ return [...new Set(state.properties.map(p=>p.city))].sort(); }
function escapeAttr(s){ return String(s).replace(/'/g,"&#39;").replace(/"/g,"&quot;"); }

function toast(msg, iconName){
  const root = document.getElementById('toast-root');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = icon(iconName || 'check') + `<span>${msg}</span>`;
  root.appendChild(el);
  requestAnimationFrame(()=> el.classList.add('show'));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=> el.remove(), 350);
  }, 2600);
}

function navigate(hash){
  window.location.hash = '#/' + hash.replace(/^#?\/?/, '');
  window.scrollTo({top:0, behavior:'instant'});
}

function toggleWishlist(id, ev){
  if(ev){ ev.preventDefault(); ev.stopPropagation(); }
  id = Number(id);
  if(state.wishlist.has(id)){ state.wishlist.delete(id); toast('Removed from wishlist','heart'); }
  else { state.wishlist.add(id); toast('Saved to wishlist','heart'); }
  render();
}

/* ============ SHARED COMPONENTS ============ */
function Navbar(active, light){
  const wcount = state.wishlist.size;
  return `
  <header class="navbar ${light?'is-light':''}" id="navbar">
    <div class="container">
      <div class="nav-inner">
        <a href="#/home" class="brand" onclick="navigate('home')">
          <span class="mark">PH</span> PropertyHub
        </a>
        <nav class="nav-links">
          <a class="nav-link ${active==='home'?'active':''}" onclick="navigate('home')">Home</a>
          <a class="nav-link ${active==='listings'?'active':''}" onclick="navigate('listings')">Browse</a>
          <a class="nav-link ${active==='add-property'?'active':''}" onclick="navigate('add-property')">List Property</a>
          <a class="nav-link ${active==='dashboard'?'active':''}" onclick="navigate('dashboard')">Dashboard</a>
        </nav>
        <div class="nav-actions">
          <button class="icon-btn" title="Wishlist" onclick="navigate('dashboard/wishlist')">
            ${icon('heart')}
            ${wcount ? `<span class="wish-count">${wcount}</span>` : ''}
          </button>
          ${state.isAuthed
            ? `<button class="icon-btn" title="Account" onclick="navigate('dashboard')">${icon('user')}</button>`
            : `<a class="btn btn-outline ${light?'':'on-dark'} btn-sm" onclick="navigate('login')">Sign in</a>`}
          <button class="hamburger" onclick="toggleMobileMenu()">${icon(state.mobileMenuOpen?'close':'menu')}</button>
        </div>
      </div>
      <div class="mobile-menu ${state.mobileMenuOpen?'open':''}">
        <a class="nav-link" onclick="navigate('home')">Home</a>
        <a class="nav-link" onclick="navigate('listings')">Browse Properties</a>
        <a class="nav-link" onclick="navigate('add-property')">List Property</a>
        <a class="nav-link" onclick="navigate('dashboard')">Dashboard</a>
        ${state.isAuthed
    ? `<a class="nav-link" onclick="logout()">Sign out</a>` : `<a class="nav-link" onclick="navigate('login')">Sign in</a>`}
      </div>
    </div>
  </header>`;
}
function toggleMobileMenu(){ state.mobileMenuOpen = !state.mobileMenuOpen; render(); }

function Footer(){
  return `
  <footer>
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="brand"><span class="mark">PH</span> PropertyHub</div>
          <p>A curated marketplace for distinctive homes — from sea-facing penthouses to garden-court apartments. Built for buyers, sellers and agents who care about the details.</p>
        </div>
        <div class="foot-col">
          <h5>Explore</h5>
          <a onclick="navigate('listings')">Browse Properties</a>
          <a onclick="navigate('add-property')">List a Property</a>
          <a onclick="navigate('dashboard')">Dashboard</a>
        </div>
        <div class="foot-col">
          <h5>Company</h5>
          <a onclick="navigate('home')">About Us</a>
          <a onclick="navigate('home')">Careers</a>
          <a onclick="navigate('home')">Press</a>
        </div>
        <div class="foot-col">
          <h5>Account</h5>
          <a onclick="navigate('login')">Sign In</a>
          <a onclick="navigate('register')">Create Account</a>
          <a onclick="navigate('dashboard')">My Dashboard</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 PropertyHub. All rights reserved.</span>
        <span>Made for buyers, sellers &amp; agents across India.</span>
      </div>
    </div>
  </footer>`;
}

function PropertyCard(p){
  const wished = state.wishlist.has(p.id);
  return `
  <article class="card-prop" onclick="navigate('property/${p.id}')" style="cursor:pointer">
    <div class="card-media">
      <img src="${p.images[0]}" alt="${escapeAttr(p.title)}">
      <span class="card-tag">${p.listingType === 'rent' ? 'For Rent' : 'For Sale'}</span>
      <button class="card-wish ${wished?'active':''}" onclick="toggleWishlist(${p.id}, event)" title="Save to wishlist">${icon('heart')}</button>
      <div class="card-price-tag">${p.priceLabel}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${p.title}</h3>
      <div class="card-loc">${icon('pin')} ${p.address}</div>
      <div class="card-specs">
        <span>${icon('bed')} ${p.beds} Beds</span>
        <span>${icon('bath')} ${p.baths} Baths</span>
        <span>${icon('area')} ${p.area.toLocaleString('en-IN')} sqft</span>
      </div>
      <div class="card-foot">
        <a class="btn btn-outline btn-block btn-sm" onclick="event.stopPropagation(); navigate('property/${p.id}')">View Details</a>
      </div>
    </div>
  </article>`;
}

/* ============ PAGES ============ */

function PageHome(){
  const featured = state.properties.filter(p=>p.featured).slice(0,6);
  const cities = uniqueCities();
  return `
  ${Navbar('home', false)}
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <span class="eyebrow on-dark">Premium Real Estate, Curated</span>
        <h1 class="h-display">Find an address<br>worth <em>arriving home to</em>.</h1>
        <p class="lead">PropertyHub brings together India's most distinctive homes — penthouses, villas, and quiet city apartments — in one considered place.</p>
        <div class="hero-ctas">
          <a class="btn btn-gold" onclick="navigate('listings')">${icon('search')} Browse Properties</a>
          <a class="btn btn-outline on-dark" onclick="navigate('add-property')">List Your Property</a>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="search-panel">
      <div class="search-card">
        <div class="field">
          <label>City</label>
          <select id="hs-city">
            <option value="any">Any city</option>
            ${cities.map(c=>`<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Property Type</label>
          <select id="hs-type">
            <option value="any">Any type</option>
            <option>Apartment</option><option>Villa</option><option>Penthouse</option><option>House</option><option>Studio</option>
          </select>
        </div>
        <div class="field">
          <label>Budget</label>
          <select id="hs-price">
            <option value="any">Any budget</option>
            <option value="lt5000000">Under ₹50 L</option>
            <option value="5000000-20000000">₹50 L – ₹2 Cr</option>
            <option value="20000000-50000000">₹2 Cr – ₹5 Cr</option>
            <option value="gt50000000">Above ₹5 Cr</option>
          </select>
        </div>
        <button class="btn btn-gold" onclick="homeSearch()">${icon('search')} Search</button>
      </div>
    </div>
  </div>

  <div class="trust-strip">
    <div class="container">
      <div class="trust-grid">
        <div><div class="trust-num"><span>500</span>+</div><div class="trust-label">Verified Listings</div></div>
        <div><div class="trust-num"><span>18</span></div><div class="trust-label">Cities Covered</div></div>
        <div><div class="trust-num"><span>12k</span>+</div><div class="trust-label">Happy Clients</div></div>
        <div><div class="trust-num"><span>9</span></div><div class="trust-label">Years of Trust</div></div>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Hand-Picked</span>
          <h2 class="h-display" style="font-size:34px;margin:8px 0 0;">Featured Properties</h2>
        </div>
        <a class="btn btn-outline" onclick="navigate('listings')">View All Properties</a>
      </div>
      <div class="grid-cards">
        ${featured.map(PropertyCard).join('')}
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Why PropertyHub</span>
          <h2 class="h-display" style="font-size:34px;margin:8px 0 0;">Built for serious buyers.</h2>
        </div>
      </div>
      <div class="feature-grid">
        <div class="feature-box">
          <div class="fi">${icon('shield')}</div>
          <h4>Verified Listings</h4>
          <p>Every property is checked for ownership documents and accurate pricing before it goes live.</p>
        </div>
        <div class="feature-box">
          <div class="fi">${icon('spark')}</div>
          <h4>Curated Quality</h4>
          <p>We list distinctive homes, not inventory — each one reviewed for build quality and location.</p>
        </div>
        <div class="feature-box">
          <div class="fi">${icon('user')}</div>
          <h4>Dedicated Agents</h4>
          <p>A named specialist for every region, reachable directly — no call centres, no chasing.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="cta-band">
        <h2>Have a property to sell or rent? List it with PropertyHub in minutes.</h2>
        <a class="btn btn-gold" onclick="navigate('add-property')">${icon('plus')} List Your Property</a>
      </div>
    </div>
  </section>
  ${Footer()}
  `;
}

function homeSearch(){
  const city = document.getElementById('hs-city').value;
  const type = document.getElementById('hs-type').value;
  const price = document.getElementById('hs-price').value;
  state.filters = { city, type, price, beds:'any', q:'' };
  navigate('listings');
}

function PageLogin(){
  return `
  ${Navbar('login', true)}
  <div class="auth-wrap">
    <div class="auth-card page-enter">
      <span class="eyebrow on-dark">Welcome back</span>
      <h2>Sign in to PropertyHub</h2>
      <p class="sub">Access your saved properties, listings and dashboard.</p>
      <form onsubmit="handleLogin(event)">
        <div class="form-row">
          <label>Email address</label>
          <input id="login_email" type="email" placeholder="you@example.com" required>
        </div>
        <div class="form-row">
          <label>Password</label>
          <input id="login_password" type="password" placeholder="••••••••" required>
        </div>
        <button class="btn btn-gold btn-block" type="submit">Sign In</button>
      </form>
      <div class="auth-divider">OR</div>
      <button class="btn btn-outline on-dark btn-block" onclick="handleGuestLogin()">Continue as Guest</button>
      <p class="auth-foot">Don't have an account? <a onclick="navigate('register')">Create one</a></p>
    </div>
  </div>
  `;
}
async function handleLogin(ev) {
    ev.preventDefault();

    const data = {
        email: document.getElementById("login_email").value,
        password: document.getElementById("login_password").value
    };

    try {

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {

            state.isAuthed = true;

            state.user = {
                id: result.user.id,
                name: result.user.name,
                email: result.user.email,
                initials: result.user.name
                    .split(" ")
                    .map(n => n[0])
                    .join("")
                    .toUpperCase()
            };

            localStorage.setItem("isAuthed", true);
    localStorage.setItem("user", JSON.stringify(state.user));

            navigate("dashboard");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
}function handleGuestLogin(){
  state.isAuthed = true;
  toast('Signed in as guest', 'check');
  navigate('home');
}
function logout() {

    localStorage.removeItem("isAuthed");
    localStorage.removeItem("user");

    state.isAuthed = false;

    state.user = {
        id: "",
        name: "",
        email: "",
        phone: "",
        role: "Buyer",
        initials: ""
    };

    alert("Logged out successfully");

    navigate("login");
}
function PageRegister(){
  return `
  ${Navbar('register', true)}
  <div class="auth-wrap">
    <div class="auth-card page-enter" style="max-width:500px;">
      <span class="eyebrow on-dark">Join PropertyHub</span>
      <h2>Create your account</h2>
      <p class="sub">It takes less than a minute. List properties, save favourites, and message agents directly.</p>
      <form onsubmit="handleRegister(event)">
        <div class="form-split">
          <div class="form-row"><label>Full name</label><input id="full_name" type="text" placeholder="Aditya Rao" required></div>
          <div class="form-row"><label>Phone</label><input id="phone" type="tel" placeholder="+91 98765 43210" required></div>
        </div>
        <div class="form-row"><label>Email address</label><input id="email" type="email" placeholder="you@example.com" required></div>
        <div class="form-row"><label>Password</label><input id="password" type="password" placeholder="Create a password" required></div>
        <div class="form-row">
          <label>I am a...</label>
          <div class="role-pick">
            <div class="role-opt ${state.roleSelect==='buyer'?'active':''}" onclick="setRole('buyer')">Buyer / Renter</div>
            <div class="role-opt ${state.roleSelect==='owner'?'active':''}" onclick="setRole('owner')">Owner</div>
            <div class="role-opt ${state.roleSelect==='agent'?'active':''}" onclick="setRole('agent')">Agent</div>
          </div>
        </div>
        <button class="btn btn-gold btn-block" type="submit" style="margin-top:6px;">Create Account</button>
      </form>
      <p class="auth-foot">Already have an account? <a onclick="navigate('login')">Sign in</a></p>
    </div>
  </div>
  `;
}
function setRole(r){ state.roleSelect = r; render(); }
async function handleRegister(ev) {
    ev.preventDefault();

    const data = {
        full_name: document.getElementById("full_name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {

            state.isAuthed = true;

            state.user = {
                id: result.user.id,
                name: result.user.name,
                email: result.user.email,
                phone: result.user.phone,
                role: result.user.role,
                initials: result.user.name
                    .split(" ")
                    .map(n => n[0])
                    .join("")
                    .toUpperCase()
            };

            navigate("dashboard");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
}
function PageListings(){
  const f = state.filters;
  let list = state.properties.filter(p=>{
    if(f.city !== 'any' && p.city !== f.city) return false;
    if(f.type !== 'any' && p.type !== f.type) return false;
    if(f.beds !== 'any' && p.beds < Number(f.beds)) return false;
    if(f.q && !(p.title.toLowerCase().includes(f.q.toLowerCase()) || p.city.toLowerCase().includes(f.q.toLowerCase()))) return false;
    if(f.price !== 'any'){
      if(f.price === 'lt5000000' && !(p.price < 5000000)) return false;
      if(f.price === 'gt50000000' && !(p.price > 50000000)) return false;
      if(f.price.includes('-')){
        const [lo,hi] = f.price.split('-').map(Number);
        if(!(p.price >= lo && p.price <= hi)) return false;
      }
    }
    return true;
  });
  if(state.sort === 'price-asc') list = list.slice().sort((a,b)=>a.price-b.price);
  if(state.sort === 'price-desc') list = list.slice().sort((a,b)=>b.price-a.price);
  if(state.sort === 'newest') list = list.slice().sort((a,b)=> new Date(b.posted) - new Date(a.posted));

  const cities = uniqueCities();
  const types = [...new Set(state.properties.map(p=>p.type))];

  return `
  ${Navbar('listings', true)}
  <section class="section" style="padding-top:40px;">
    <div class="container">
      <span class="eyebrow">${list.length} Results</span>
      <h1 class="h-display" style="font-size:36px;margin:8px 0 26px;">Browse Properties</h1>

      <div class="listing-layout">
        <aside class="filters-card">
          <h4>Filters</h4>
          <div class="filter-group">
            <label>Search</label>
            <input type="text" id="f-q" placeholder="Title or city..." value="${escapeAttr(f.q)}" oninput="updateFilter('q', this.value)">
          </div>
          <div class="filter-group">
            <label>City</label>
            <select id="f-city" onchange="updateFilter('city', this.value)">
              <option value="any" ${f.city==='any'?'selected':''}>Any city</option>
              ${cities.map(c=>`<option value="${c}" ${f.city===c?'selected':''}>${c}</option>`).join('')}
            </select>
          </div>
          <div class="filter-group">
            <label>Property Type</label>
            <div class="chip-row">
              <span class="chip ${f.type==='any'?'active':''}" onclick="updateFilter('type','any')">All</span>
              ${types.map(t=>`<span class="chip ${f.type===t?'active':''}" onclick="updateFilter('type','${t}')">${t}</span>`).join('')}
            </div>
          </div>
          <div class="filter-group">
            <label>Price Range</label>
            <select onchange="updateFilter('price', this.value)">
              <option value="any" ${f.price==='any'?'selected':''}>Any budget</option>
              <option value="lt5000000" ${f.price==='lt5000000'?'selected':''}>Under ₹50 L</option>
              <option value="5000000-20000000" ${f.price==='5000000-20000000'?'selected':''}>₹50 L – ₹2 Cr</option>
              <option value="20000000-50000000" ${f.price==='20000000-50000000'?'selected':''}>₹2 Cr – ₹5 Cr</option>
              <option value="gt50000000" ${f.price==='gt50000000'?'selected':''}>Above ₹5 Cr</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Minimum Bedrooms</label>
            <div class="chip-row">
              ${['any','1','2','3','4'].map(b=>`<span class="chip ${f.beds===b?'active':''}" onclick="updateFilter('beds','${b}')">${b==='any'?'Any':b+'+'}</span>`).join('')}
            </div>
          </div>
          <button class="btn btn-outline btn-block" onclick="resetFilters()">Reset Filters</button>
        </aside>

        <div>
          <div class="listing-toolbar">
            <span class="results-count"><b>${list.length}</b> properties found</span>
            <select class="sort-select" onchange="updateSort(this.value)">
              <option value="newest" ${state.sort==='newest'?'selected':''}>Newest First</option>
              <option value="price-asc" ${state.sort==='price-asc'?'selected':''}>Price: Low to High</option>
              <option value="price-desc" ${state.sort==='price-desc'?'selected':''}>Price: High to Low</option>
            </select>
          </div>
          ${list.length ? `<div class="grid-cards" style="grid-template-columns:repeat(2,1fr);">${list.map(PropertyCard).join('')}</div>` : `
          <div class="empty-state">
            ${icon('empty')}
            <h3 style="font-family:var(--ff-display);font-size:20px;color:var(--ink);margin-bottom:6px;">No properties match your filters</h3>
            <p>Try widening your search criteria or resetting filters.</p>
          </div>`}
        </div>
      </div>
    </div>
  </section>
  ${Footer()}
  `;
}
function updateFilter(key, val){ state.filters[key] = val; render(); }
function updateSort(val){ state.sort = val; render(); }
function resetFilters(){ state.filters = { city:'any', type:'any', price:'any', beds:'any', q:'' }; render(); }

function PageDetails(id){
  const p = getProp(id);
  if(!p){ return `${Navbar('listings', true)}<div class="container section"><p>Property not found. <a onclick="navigate('listings')" style="color:var(--gold-deep);font-weight:600;">Back to listings</a></p></div>`; }
  if(state.galleryIndex > p.images.length - 1) state.galleryIndex = 0;
  const mainImg = p.images[state.galleryIndex];
  const thumbs = p.images.slice(1, 4);
  const wished = state.wishlist.has(p.id);
  const related = state.properties.filter(r=> r.id !== p.id && r.city === p.city).slice(0,3);

  return `
  ${Navbar('listings', true)}
  <div class="container" style="padding-top:34px;">
    <span class="eyebrow">${p.city} · ${p.type}</span>

    <div class="gallery" style="margin-top:14px;">
      <div class="gallery-main"><img src="${mainImg}" alt="${escapeAttr(p.title)}"></div>
      <div class="gallery-thumbs">
        ${thumbs.map((img, i)=>`<div class="gt" onclick="setGalleryIndex(${i+1})"><img src="${img}"></div>`).join('')}
        ${thumbs.length === 0 ? '' : ''}
      </div>
    </div>

    <div class="detail-grid">
      <div>
        <div class="detail-head">
          <div>
            <h1 class="h-display" style="font-size:32px;margin:0 0 8px;">${p.title}</h1>
            <div class="card-loc" style="font-size:14.5px;">${icon('pin')} ${p.address}</div>
          </div>
          <div style="text-align:right;">
            <div class="detail-price">${p.priceLabel}</div>
            <button class="btn btn-outline btn-sm" style="margin-top:8px;" onclick="toggleWishlist(${p.id}, event)">
              ${icon('heart')} ${wished ? 'Saved' : 'Save to Wishlist'}
            </button>
          </div>
        </div>

        <div class="detail-specs">
          <div class="spec-box"><div class="num">${p.beds}</div><div class="lbl">Bedrooms</div></div>
          <div class="spec-box"><div class="num">${p.baths}</div><div class="lbl">Bathrooms</div></div>
          <div class="spec-box"><div class="num">${p.area.toLocaleString('en-IN')}</div><div class="lbl">Sq.Ft Area</div></div>
          <div class="spec-box"><div class="num">${p.listingType === 'rent' ? 'Rent' : 'Sale'}</div><div class="lbl">Listing Type</div></div>
        </div>

        <h3 class="h-display" style="font-size:21px;margin-bottom:10px;">Overview</h3>
        <p class="muted" style="line-height:1.75;font-size:15px;">${p.description}</p>

        <h3 class="h-display" style="font-size:21px;margin:28px 0 4px;">Amenities</h3>
        <div class="amenity-grid">
          ${p.amenities.map(a=>`<div class="amenity-item"><span class="dot"></span>${a}</div>`).join('')}
        </div>
      </div>

      <aside class="agent-card">
        <div class="agent-top">
          <div class="avatar">${p.agent.name.split(' ').map(w=>w[0]).join('')}</div>
          <div>
            <div class="agent-name">${p.agent.name}</div>
            <div class="agent-role">${p.agent.role}</div>
          </div>
        </div>
        <div class="contact-row">${icon('phone')} ${p.agent.phone}</div>
        <div class="contact-row">${icon('mail')} ${p.agent.email}</div>
        <button class="btn btn-gold btn-block" style="margin-top:8px;" onclick="openContactModal(${p.id})">Contact Owner</button>
        <button class="btn btn-outline btn-block" style="margin-top:10px;" onclick="toggleWishlist(${p.id}, event)">${icon('heart')} ${wished?'Remove from Wishlist':'Add to Wishlist'}</button>
      </aside>
    </div>

    ${related.length ? `
    <section style="margin:60px 0 20px;">
      <h3 class="h-display" style="font-size:24px;margin-bottom:20px;">More in ${p.city}</h3>
      <div class="grid-cards">${related.map(PropertyCard).join('')}</div>
    </section>` : ''}
  </div>
  <div style="height:30px;"></div>
  ${Footer()}
  `;
}
function setGalleryIndex(i){ state.galleryIndex = i; render(); }

function openContactModal(propId){
  const p = getProp(propId);
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-overlay open" id="contact-modal" onclick="if(event.target.id==='contact-modal') closeModal()">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal()">${icon('close')}</button>
      <span class="eyebrow">Contact Owner</span>
      <h2 style="font-family:var(--ff-display);font-size:23px;margin:8px 0 4px;">${p.agent.name}</h2>
      <p class="muted" style="font-size:13.5px;margin-bottom:20px;">Regarding: ${p.title}, ${p.city}</p>
      <form onsubmit="sendContactMessage(event, '${escapeAttr(p.agent.name)}')">
        <div class="form-light-row"><label>Your name</label><input type="text" placeholder="Your full name" required></div>
        <div class="form-light-row"><label>Your phone</label><input type="tel" placeholder="+91 ..." required></div>
        <div class="form-light-row"><label>Message</label><textarea rows="3" placeholder="I'm interested in this property...">Hi, I'm interested in ${p.title}. Could we schedule a visit?</textarea></div>
        <button class="btn btn-gold btn-block" type="submit">Send Message</button>
      </form>
    </div>
  </div>`;
}
function closeModal(){ document.getElementById('modal-root').innerHTML = ''; }
function sendContactMessage(ev, agentName){
  ev.preventDefault();
  closeModal();
  toast('Message sent to ' + agentName, 'mail');
}

function PageAddProperty(){
  return `
  ${Navbar('add-property', true)}
  <section class="section" style="padding-top:40px;">
    <div class="container" style="max-width:760px;">
      <span class="eyebrow">List a Property</span>
      <h1 class="h-display" style="font-size:34px;margin:8px 0 6px;">Add a new listing</h1>
      <p class="muted" style="margin-bottom:30px;">Fill in the details below — listings are reviewed and typically go live within 24 hours.</p>

      <form onsubmit="handleAddProperty(event)">
        <div class="dash-panel" style="margin-bottom:20px;">
          <h3 style="font-size:18px;">Basic Information</h3>
          <div class="form-light-row"><label>Property Title</label><input id="title" type="text" placeholder="e.g. Sunset Heights Apartment" required></div>
          <div class="form-split" style="margin-bottom:0;">
            <div class="form-light-row"><label>Property Type</label>
              <select id="property_type" required><option value="">Select type</option><option>Apartment</option><option>Villa</option><option>Penthouse</option><option>House</option><option>Studio</option></select>
            </div>
            <div class="form-light-row"><label>Listing Type</label>
              <select id="listing_type" required><option value="">Select</option><option>For Sale</option><option>For Rent</option></select>
            </div>
          </div>
        </div>

        <div class="dash-panel" style="margin-bottom:20px;">
          <h3 style="font-size:18px;">Location</h3>
          <div class="form-light-row"><label>City</label><input id="city" type="text" placeholder="e.g. Pune" required></div>
          <div class="form-light-row"><label>Full Address</label><input id="address" type="text" placeholder="Street, locality, landmark" required></div>
        </div>

        <div class="dash-panel" style="margin-bottom:20px;">
          <h3 style="font-size:18px;">Specifications</h3>
          <div class="form-split">
            <div class="form-light-row"><label>Price (₹)</label><input id="price" type="number" placeholder="e.g. 8500000" required></div>
            <div class="form-light-row"><label>Area (sq.ft)</label><input id="area" type="number" placeholder="e.g. 1600" required></div>
          </div>
          <div class="form-split" style="margin-bottom:0;">
            <div class="form-light-row"><label>Bedrooms</label><input id="beds" type="number" placeholder="e.g. 3" required></div>
            <div class="form-light-row"><label>Bathrooms</label><input id="baths" type="number" placeholder="e.g. 2" required></div>
          </div>
        </div>

        <div class="dash-panel" style="margin-bottom:20px;">
          <h3 style="font-size:18px;">Description</h3>
          <div class="form-light-row" style="margin-bottom:0;">
            <textarea id="description" rows="4" placeholder="Describe the property — layout, finishes, neighbourhood..." required></textarea>
          </div>
        </div>

        <div class="dash-panel" style="margin-bottom:20px;">
          <h3 style="font-size:18px;">Amenities</h3>
          <div class="amenity-checks">
            ${['Swimming Pool','Gym','Parking','24x7 Security','Clubhouse','Garden','Power Backup','Lift','Pet Friendly','Sea View','Furnished','Smart Home'].map(a=>`
              <label><input type="checkbox"> ${a}</label>`).join('')}
          </div>
        </div>

        <div class="dash-panel" style="margin-bottom:26px;">
          <h3 style="font-size:18px;">Photos</h3>
          <label class="upload-zone" for="photo-input">
            ${icon('upload')}
            <div style="font-weight:600;font-size:14px;">Click to upload property photos</div>
            <div class="muted" style="font-size:12.5px;margin-top:4px;">PNG or JPG, up to 10 images</div>
          </label>
          <input type="file" id="photo-input" accept="image/*" multiple style="display:none" onchange="handlePhotoPreview(event)">
          <div class="preview-strip" id="preview-strip"></div>
        </div>

        <button class="btn btn-gold btn-block" type="submit" style="padding:15px;">Submit Listing for Review</button>
      </form>
    </div>
  </section>
  ${Footer()}
  `;
}
function handlePhotoPreview(ev){
  const files = Array.from(ev.target.files || []).slice(0,10);
  const strip = document.getElementById('preview-strip');
  strip.innerHTML = '';
  files.forEach(f=>{
    const url = URL.createObjectURL(f);
    const img = document.createElement('img');
    img.src = url;
    strip.appendChild(img);
  });
}
async function handleAddProperty(ev) {
    ev.preventDefault();

    const data = {
        title: document.getElementById("title").value,
        city: document.getElementById("city").value,
        address: document.getElementById("address").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value
    };

    try {

    const response = await fetch("/add_property", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);

    if (response.ok) {
    navigate("dashboard");
}

} catch (error) {

    console.error(error);
    alert("Something went wrong!");

}
}
function PageDashboard(section){
  section = section || 'overview';
  const my = state.properties.filter(p=>p.ownerId === state.user.id);
  const wished = state.properties.filter(p=>state.wishlist.has(p.id));
  const totalViews = my.reduce((s,p)=>s+p.views,0);
  const activeCount = my.filter(p=>p.status==='active').length;

  const navItems = [
    {key:'overview', label:'Overview', icon:'chart'},
    {key:'my-properties', label:'My Properties', icon:'home'},
    {key:'wishlist', label:'Wishlist', icon:'heart'},
    {key:'profile', label:'Profile', icon:'settings'},
  ];

  let body = '';
  if(section === 'overview'){
    const byCity = {};
    state.properties.forEach(p=> byCity[p.city] = (byCity[p.city]||0)+1);
    const maxCity = Math.max(...Object.values(byCity));
    body = `
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-top"><div class="stat-icon">${icon('home')}</div><span class="stat-trend">+2</span></div><div class="stat-num">${my.length}</div><div class="stat-label">My Listings</div></div>
        <div class="stat-card"><div class="stat-top"><div class="stat-icon">${icon('chart')}</div><span class="stat-trend">+12%</span></div><div class="stat-num">${activeCount}</div><div class="stat-label">Active Listings</div></div>
        <div class="stat-card"><div class="stat-top"><div class="stat-icon">${icon('eye')}</div><span class="stat-trend">+${Math.round(totalViews*0.08)}</span></div><div class="stat-num">${totalViews.toLocaleString('en-IN')}</div><div class="stat-label">Total Views</div></div>
        <div class="stat-card"><div class="stat-top"><div class="stat-icon">${icon('heart')}</div><span class="stat-trend">live</span></div><div class="stat-num">${state.wishlist.size}</div><div class="stat-label">Wishlist Saved</div></div>
      </div>

      <div class="dash-panel">
        <h3>Listings by City</h3>
        ${Object.entries(byCity).sort((a,b)=>b[1]-a[1]).map(([city,count])=>`
          <div class="bar-row">
            <span class="bl">${city}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${(count/maxCity)*100}%"></div></div>
            <span class="bv">${count}</span>
          </div>`).join('')}
      </div>

      <div class="dash-panel">
        <h3>Recent Inquiries</h3>
        <table class="table-prop">
          <thead><tr><th>Name</th><th>Property</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Karan Mehta</td><td>Cedar Heights Residency</td><td>24 Jun 2026</td><td><span class="status-pill active">Responded</span></td></tr>
            <tr><td>Sana Qureshi</td><td>Garden Court Residences</td><td>22 Jun 2026</td><td><span class="status-pill pending">Pending</span></td></tr>
            <tr><td>Imran Sheikh</td><td>Cedar Heights Residency</td><td>19 Jun 2026</td><td><span class="status-pill active">Responded</span></td></tr>
          </tbody>
        </table>
      </div>
    `;
  } else if(section === 'my-properties'){
    body = `
      <div class="dash-panel">
        <h3>My Properties <a class="btn btn-gold btn-sm" onclick="navigate('add-property')">${icon('plus')} Add New</a></h3>
        ${my.length ? `
        <table class="table-prop">
          <thead><tr><th>Property</th><th>Price</th><th>Views</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${my.map(p=>`
            <tr>
              <td><div class="t-prop-cell"><img src="${p.images[0]}"><span>${p.title}</span></div></td>
              <td>${p.priceLabel}</td>
              <td>${p.views.toLocaleString('en-IN')}</td>
              <td><span class="status-pill ${p.status==='active'?'active':'pending'}">${p.status==='active'?'Active':'Pending'}</span></td>
              <td><a class="btn btn-outline btn-sm" onclick="navigate('property/${p.id}')">View</a></td>
            </tr>`).join('')}
          </tbody>
        </table>` : `
        <div class="empty-state">${icon('home')}<h3 style="font-family:var(--ff-display);font-size:19px;color:var(--ink);">No properties yet</h3><p>List your first property to see it here.</p>
          <a class="btn btn-gold" style="margin-top:14px;" onclick="navigate('add-property')">List a Property</a></div>`}
      </div>
    `;
  } else if(section === 'wishlist'){
    body = `
      <div class="dash-panel">
        <h3>Saved Properties</h3>
        ${wished.length ? `<div class="grid-cards" style="grid-template-columns:repeat(2,1fr);margin-top:8px;">${wished.map(PropertyCard).join('')}</div>` : `
        <div class="empty-state">${icon('heart')}<h3 style="font-family:var(--ff-display);font-size:19px;color:var(--ink);">Your wishlist is empty</h3><p>Tap the heart icon on any property to save it here.</p>
          <a class="btn btn-gold" style="margin-top:14px;" onclick="navigate('listings')">Browse Properties</a></div>`}
      </div>
    `;
  } else if(section === 'profile'){
    body = `
      <div class="dash-panel">
        <h3>Profile Details</h3>
        <form onsubmit="handleProfileSave(event)">
          <div class="profile-grid">
            <div class="form-light-row"><label>Full Name</label><input type="text" value="${escapeAttr(state.user.name)}"></div>
            <div class="form-light-row"><label>Phone</label><input type="tel" value="${escapeAttr(state.user.phone)}"></div>
          </div>
          <div class="form-light-row"><label>Email Address</label><input type="email" value="${escapeAttr(state.user.email)}"></div>
          <div class="form-light-row"><label>Role</label>
            <select>
              <option ${state.user.role==='Property Owner'?'selected':''}>Property Owner</option>
              <option ${state.user.role==='Buyer / Renter'?'selected':''}>Buyer / Renter</option>
              <option ${state.user.role==='Agent'?'selected':''}>Agent</option>
            </select>
          </div>
          <button class="btn btn-gold" type="submit">Save Changes</button>
        </form>
      </div>
    `;
  }

  return `
  ${Navbar('dashboard', true)}
  <section class="section" style="padding-top:36px;">
    <div class="container">
      <span class="eyebrow">My Account</span>
      <h1 class="h-display" style="font-size:32px;margin:8px 0 26px;">Dashboard</h1>
      <div class="dash-layout">
        <aside class="dash-side">
          <div class="dash-profile">
            <div class="avatar">${state.user.initials}</div>
            <div class="name">${state.user.name}</div>
            <div class="role">${state.user.role}</div>
          </div>
        
          <nav class="dash-nav">
            ${navItems.map(n=>`<a class="dash-nav-item ${section===n.key?'active':''}" onclick="navigate('dashboard/${n.key}')">${icon(n.icon)} ${n.label}</a>`).join('')}
          </nav>
        </aside>
        <div>${body}</div>
      </div>
    </div>
  </section>
  ${Footer()}
  `;
}
function handleProfileSave(ev){
  ev.preventDefault();
  toast('Profile updated', 'check');
}

async function loadProperties() {

    try {

        const response = await fetch("/properties");

        const properties = await response.json();

        state.properties = properties;

        render();

    } catch (error) {

        console.error(error);

    }

}/* ============ ROUTER ============ */
function render(){
  const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
  const parts = hash.split('/');
  const root = parts[0];
  let html = '';
  switch(root){
    case 'home': html = PageHome(); break;
    case 'login': html = PageLogin(); break;
    case 'register': html = PageRegister(); break;
    case 'listings': html = PageListings(); break;
    case 'property': html = PageDetails(parts[1]); break;
    case 'add-property': html = PageAddProperty(); break;
    case 'dashboard': html = PageDashboard(parts[1]); break;
    default: html = PageHome();
  }
  document.getElementById('app').innerHTML = `<div class="page-enter">${html}</div>`;
}
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
render();
loadProperties();