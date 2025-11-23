
const PRODUCTS = [
  {
    id: 'p1',
    name: 'Cars & Truck',
    brand: 'Fisher-Price',
    age: '4-7',
    price: '45.32',
    features: 'Colorful mini cars with fun designs — perfect for kids',
    img: 'images/cars.jpg',
    doc: 'docs/lego-info.pdf',
    featured: true
  },
  {
    id: 'p2',
    name: 'Kitchen Set',
    brand: 'Fisher-Price',
    age: '4-7',
    price: '120',
    features: 'Pretend cooking set for imaginative role-play.',
    img: 'images/kitchen.jpg',
    doc: 'docs/lego-info.pdf',
    featured: false
  },
    {
    id: 'p3',
    name: 'Animal Set',
    brand: 'Fisher-Price',
    age: '4-7',
    price: '60.20',
    features: 'Learn animals with fun playtime.',
    img: 'images/animal.jpg',
    doc: 'docs/lego-info.pdf',
    featured: false
  },
   {
    id: 'p4',
    name: 'piano',
    brand: 'Fisher-Price',
    age: '4-7',
    price: '99.99',
    features: 'Play tunes and sing along.',
    img: 'images/piano.jpg',
    doc: 'docs/lego-info.pdf',
    featured: false
  },
  {
    id: 'p5',
    name: 'Race Track',
    brand: 'Fisher-Price',
    age: '4-7',
    price: '50.00',
    features: 'racing fun — easy to assemble and perfect',
    img: 'images/track.jpg',
    doc: 'docs/lego-info.pdf',
    featured: false
  },
  {
    id: 'p6',
    name: 'Musical Toy Train',
    brand: 'Fisher-Price',
    age: '4-7',
    price: '24.99',
    features: 'Light and music, push-and-go, battery included.',
    img: 'images/train.jpg',
    doc: 'docs/train-info.pdf',
    featured: false
  },
  {
    id: 'p7',
    name: 'Puzzle Cubes ',
    brand: 'LEGO',
    age: '13+',
    price: '80.30',
    features: 'Challenge your brain and improve focus for kids.',
    img: 'images/puzzle.jpg',
    doc: 'docs/blocks-info.pdf',
    featured: true
  },
   {
    id: 'p8',
    name: 'Skateboard',
    brand: 'LEGO',
    age: '13+',
    price: '150',
    features: 'Ride with balance and fun on the go for kids.',
    img: 'images/skateboard.jpg',
    doc: 'docs/blocks-info.pdf',
    featured: false
  },
   {
    id: 'p9',
    name: 'Model Building Kit',
    brand: 'LEGO',
    age: '13+',
    price: '80.10',
    features: 'Assemble cars, planes, or robots creatively for kids.',
    img: 'images/building.jpg',
    doc: 'docs/blocks-info.pdf',
    featured: false
  },
   {
    id: 'p10',
    name: 'Science Project Kit',
    brand: 'LEGO',
    age: '13+',
    price: '130.80',
    features: 'Build and experiment with scientific ideas for kids.',
    img: 'images/science.jpg',
    doc: 'docs/blocks-info.pdf',
    featured: false
  },
   {
    id: 'p11',
    name: 'Art Painting Set',
    brand: 'LEGO',
    age: '13+',
    price: '90.20',
    features: 'Express creativity with colors and brushes for kids.',
    img: 'images/art.webp',
    doc: 'docs/blocks-info.pdf',
    featured: false
  },
   {
    id: 'p12',
    name: 'Cricket Sports Kit',
    brand: 'LEGO',
    age: '13+',
    price: '220',
    features: 'Includes bat, ball, and stumps for exciting outdoor play for kids.',
    img: 'images/kit.webp',
    doc: 'docs/blocks-info.pdf',
    featured: false
  },

  {
    id: 'p13',
    name: 'Drum Set',
    brand: 'MATTEL',
    age: '1-3',
    price: '60.70',
    features: 'Light and rhythm fun for kids.',
    img: 'images/drum.jpg',
    doc: 'docs/train-info.pdf',
    featured: true
  },
  {
    id: 'p14',
    name: 'Stacking Rings',
    brand: 'MATTEL',
    age: '1-3',
    price: '15.80',
    features: 'Colorful rings to stack and learn shapes for kids.',
    img: 'images/rings.jpg',
    doc: 'docs/train-info.pdf',
    featured: false
  },
  {
    id: 'p15',
    name: 'Rolling Ball Tower',
    brand: 'MATTEL',
    age: '1-3',
    price: '25.99',
    features: 'Drop balls and watch them roll down for kids.',
    img: 'images/tower.jpg',
    doc: 'docs/train-info.pdf',
    featured: false
  },
  {
    id: 'p16',
    name: 'Stuffed Animal - Bear',
    brand: 'MATTEL',
    age: '1-3',
    price: '14.99',
    features: 'Soft fabric, washable, safety eyes.',
    img: 'images/bear.jpg',
    doc: 'docs/bear-info.pdf',
    featured: false
  },
  
  {
    id: 'p17',
    name: 'Stuffed Animal - Rabbit',
    brand: 'MATTEL',
    age: '1-3',
    price: '13.49',
    features: 'Soft fabric, Plussy Toy, Custom Clothes.',
    img: 'images/rabbit.jpg',
    doc: 'docs/Rabbit-info.pdf',
    featured: false
  },
  {
    id: 'p18',
    name: 'Rocking Horse',
    brand: 'MATTEL',
    age: '1-3',
    price: '150.50',
    features: 'Classic ride-on fun for little toddlers for kids..',
    img: 'images/horse.jpg',
    doc: 'docs/Rabbit-info.pdf',
    featured: false
  },
  {
    id: 'p19',
    name: 'RC Racing Car',
    brand: 'Hasbro',
    age: '8-12',
    price: '49.99',
    features: '2.4GHz remote, rechargeable battery.',
    img: 'images/rc-car.jpg',
    doc: 'docs/rccar-info.pdf',
    featured: false
    
  },
  {
    id: 'p20',
    name: 'Sports Ball Set',
    brand: 'Hasbro',
    age: '8-12',
    price: '90.99',
    features: 'Play football, basketball, or cricket for kids.',
    img: 'images/ball.webp',
    doc: 'docs/rccar-info.pdf',
    featured: false
    
  },
  {
    id: 'p21',
    name: 'Action Figures',
    brand: 'Hasbro',
    age: '8-12',
    price: '80.90',
    features: 'Play heroic adventures and create stories for kids.',
    img: 'images/marvel.webp',
    doc: 'docs/rccar-info.pdf',
    featured: false
    
  },
   
  {
    id: 'p22',
    name: 'Nerf Gun',
    brand: 'Hasbro',
    age: '8-12',
    price: '68.10',
    features: 'Action-packed shooting fun indoors or outdoors for kids.',
    img: 'images/nerf.jpg',
    doc: 'docs/rccar-info.pdf',
    featured: false
    
  },
  {
    id: 'p23',
    name: 'RC Helicopters',
    brand: 'Hasbro',
    age: '8-12',
    price: '180',
    features: 'Experience real flying fun with easy control for kids.',
    img: 'images/RC.webp',
    doc: 'docs/rccar-info.pdf',
    featured: false
    
  },
  {
    id: 'p24',
    name: 'Remote Aeroplane',
    brand: 'Hasbro',
    age: '8-12',
    price: '39.99',
    features: '2.4GHz remote, rechargeable battery. Long Live Battery',
    img: 'images/aeroplane.jpg',
    doc: 'docs/aeroplane-info.pdf',
    featured: false
  }
];

/* --- Wishlist logic (localStorage) --- */
const W_KEY = 'toyo_wishlist_v1';

function getWishlist(){
  try{
    const raw = localStorage.getItem(W_KEY);
    if(!raw) return [];
    return JSON.parse(raw);
  }catch(e){
    console.error('Wishlist parse error', e);
    return [];
  }
}

function saveWishlist(list){
  localStorage.setItem(W_KEY, JSON.stringify(list));
}

function isInWishlist(id){
  return getWishlist().includes(id);
}

function toggleWishlist(id){
  let list = getWishlist();
  if(list.includes(id)){
    list = list.filter(x=>x!==id);
  } else {
    list.push(id);
  }
  saveWishlist(list);
  // update UI hearts
  document.querySelectorAll('.wishlist-heart').forEach(el=>{
    if(el.dataset && el.dataset.id){
      el.classList.toggle('active', isInWishlist(el.dataset.id));
    }
  });
  // update any "Add to Wishlist" buttons text
  document.querySelectorAll('.add-wishlist-btn').forEach(b=>{
    if(b.dataset && b.dataset.id){
      b.textContent = isInWishlist(b.dataset.id) ? 'Remove from Wishlist' : 'Add to Wishlist';
    }
  });
  // if on wishlist page, re-render
  if(document.getElementById('wishlist-grid')) renderWishlist();
}


function createProductCard(p){
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4';
  col.innerHTML = `
    <div class="card product-card shadow-sm">
      <div class="wishlist-heart ${isInWishlist(p.id)?'active':''}" data-id="${p.id}" title="Add to wishlist">❤</div>
      <img src="${p.img}" class="product-img" alt="${p.name}">
      <div class="card-body">
        <div>
          <h5 class="card-title">${p.name}</h5>
          <p class="text-muted mb-2 small">${p.brand} • Age: ${p.age}</p>
          <p class="mb-2">${p.features}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="fw-bold">$${p.price}</div>
          <div>
            <a class="btn btn-sm btn-outline-primary me-2 add-wishlist-btn" data-id="${p.id}" href="javascript:void(0)">` + (isInWishlist(p.id)?'Remove from Wishlist':'Add to Wishlist') + `</a>
            <a class="btn btn-sm btn-primary" href="javascript:void(0)" onclick="openProductModal('${p.id}')">View</a>
          </div>
        </div>
      </div>
    </div>
  `;
  // attach heart click
  setTimeout(()=>{ // ensure element in DOM
    const heart = col.querySelector('.wishlist-heart');
    const btn = col.querySelector('.add-wishlist-btn');
    if(heart){
      heart.addEventListener('click', ()=> toggleWishlist(heart.dataset.id));
    }
    if(btn){
      btn.addEventListener('click', ()=> toggleWishlist(btn.dataset.id));
    }
  },10);
  return col;
}

/* Populate featured grid on index */
function populateFeatured(){
  const container = document.getElementById('featured-grid');
  if(!container) return;
  container.innerHTML = '';
  PRODUCTS.filter(p=>p.featured).forEach(p=>{
    container.appendChild(createProductCard(p));
  });
}

/* Brands page */
function populateBrands(){
  const pillsWrap = document.getElementById('brand-pills');
  const productsWrap = document.getElementById('brand-products');
  if(!pillsWrap || !productsWrap) return;


  // unique brands
  const brands = [...new Set(PRODUCTS.map(p=>p.brand))].sort();

  // create pills
  pillsWrap.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'btn btn-outline-primary me-2 mb-2';
  allBtn.textContent = 'All';
  allBtn.onclick = ()=>renderBrandProducts('');
  pillsWrap.appendChild(allBtn);

  brands.forEach(b=>{
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary me-2 mb-2';
    btn.textContent = b;
    btn.onclick = ()=>renderBrandProducts(b);
    pillsWrap.appendChild(btn);
  });

  // initial render all
  renderBrandProducts('');
}

function renderBrandProducts(brand){
  const wrap = document.getElementById('brand-products');
  wrap.innerHTML = '';
  let list = PRODUCTS;
  if(brand) list = PRODUCTS.filter(p=>p.brand===brand);
  if(list.length === 0){
    wrap.innerHTML = '<div class="col-12"><div class="alert alert-info">No products found.</div></div>';
    return;
  }
  list.forEach(p=> wrap.appendChild(createProductCard(p)));
}

/* Age page */
function populateAge(){
  const grid = document.getElementById('age-grid');
  if(!grid) return;
  renderAgeProducts(''); // initial all

  // attach handlers
  document.querySelectorAll('.age-filter').forEach(btn=>{
    btn.addEventListener('click', function(){
      document.querySelectorAll('.age-filter').forEach(x=>x.classList.remove('active'));
      this.classList.add('active');
      const age = this.dataset.age;
      renderAgeProducts(age);
    });
  });
  const showAll = document.getElementById('show-all-age');
  if(showAll) showAll.addEventListener('click', ()=>renderAgeProducts(''));
}

function renderAgeProducts(age){
  const grid = document.getElementById('age-grid');
  grid.innerHTML = '';
  let list = PRODUCTS;
  if(age){
    list = PRODUCTS.filter(p=> {
      return p.age === age || p.age.includes(age) || (age==='0-3' && p.age==='1-3');
    });
  }
  if(list.length===0){
    grid.innerHTML = '<div class="col-12"><div class="alert alert-info">No toys in this age group.</div></div>';
    return;
  }
  list.forEach(p=> grid.appendChild(createProductCard(p)));
}

/* Compare page code */
function setupCompare(){
  const sel1 = document.getElementById('compare-select-1');
  const sel2 = document.getElementById('compare-select-2');
  if(!sel1 || !sel2) return;

  PRODUCTS.forEach(p=>{
    const o1 = document.createElement('option');
    o1.value = p.id; o1.text = `${p.name} — ${p.brand}`;
    sel1.appendChild(o1);

    const o2 = document.createElement('option');
    o2.value = p.id; o2.text = `${p.name} — ${p.brand}`;
    sel2.appendChild(o2);
  });

  document.getElementById('compare-button').addEventListener('click', function(){
    const v1 = sel1.value; const v2 = sel2.value;
    if(!v1 || !v2 || v1===v2){
      alert('Please select two different toys to compare.');
      return;
    }
    const p1 = PRODUCTS.find(x=>x.id===v1);
    const p2 = PRODUCTS.find(x=>x.id===v2);
    if(!p1 || !p2) return;

    // fill table
    document.getElementById('compare-table-wrap').classList.remove('d-none');
    document.getElementById('c1-name').textContent = p1.name;
    document.getElementById('c2-name').textContent = p2.name;
    document.getElementById('c1-brand').textContent = p1.brand;
    document.getElementById('c2-brand').textContent = p2.brand;
    document.getElementById('c1-age').textContent = p1.age;
    document.getElementById('c2-age').textContent = p2.age;
    document.getElementById('c1-price').textContent = `$${p1.price}`;
    document.getElementById('c2-price').textContent = `$${p2.price}`;
    document.getElementById('c1-feat').textContent = p1.features;
    document.getElementById('c2-feat').textContent = p2.features;
    document.getElementById('c1-img').innerHTML = `<img src="${p1.img}" style="max-width:120px" alt="${p1.name}">`;
    document.getElementById('c2-img').innerHTML = `<img src="${p2.img}" style="max-width:120px" alt="${p2.name}">`;
    document.getElementById('c1-doc').innerHTML = `<a class="btn btn-sm btn-outline-primary" href="${p1.doc}" download>Download</a>`;
    document.getElementById('c2-doc').innerHTML = `<a class="btn btn-sm btn-outline-primary" href="${p2.doc}" download>Download</a>`;
  });
}

/* Render wishlist page */
function renderWishlist(){
  const wrap = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  if(!wrap) return;
  const list = getWishlist();
  wrap.innerHTML = '';
  if(!list || list.length===0){
    empty.classList.remove('d-none');
    return;
  }
  empty.classList.add('d-none');
  list.forEach(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    if(p){
      // reuse product card but with a remove button visible
      const col = createProductCard(p);
      // replace add button text
      setTimeout(()=>{
        const btn = col.querySelector('.add-wishlist-btn');
        if(btn){ btn.textContent = 'Remove from Wishlist'; }
      },50);
      wrap.appendChild(col);
    }
  });
}

/* Simple 'open' function for view button - shows a modal-like basic window */
function openProductModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return alert('Product not found.');
  // open small details window (also includes Add to Wishlist button)
  const w = window.open('', '_blank', 'width=500,height=700,scrollbars=yes');
  w.document.write(`<html><head><title>${p.name}</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></head><body style="font-family:Poppins,Arial;padding:20px"><h3>${p.name}</h3><p><strong>Brand:</strong> ${p.brand}</p><p><strong>Age:</strong> ${p.age}</p><p><strong>Price:</strong> $${p.price}</p><img src="${p.img}" style="max-width:100%;height:auto;border-radius:12px;margin-bottom:12px"><p>${p.features}</p><div style="margin-top:12px"><a class="btn btn-primary" id="modal-wish">${isInWishlist(p.id)?'Remove from Wishlist':'Add to Wishlist'}</a> <a class="btn btn-outline-primary" href="${p.doc}" download>Download Info</a></div><script>document.getElementById('modal-wish').addEventListener('click', function(){ try{ window.opener.postMessage({cmd:'toggleWishlist', id:'${p.id}'}, '*'); }catch(e){ } if(window.close) window.close(); });</script></body></html>`);
  w.document.close();
}

/* Listen for messages from popup windows to toggle wishlist */
window.addEventListener('message', function(ev){
  if(ev.data && ev.data.cmd==='toggleWishlist' && ev.data.id){
    toggleWishlist(ev.data.id);
  }
});

/* On DOM ready, try to initialize relevant parts based on page */
document.addEventListener('DOMContentLoaded', function(){
  populateFeatured();
  populateBrands();
  populateAge();
  setupCompare();

  // attach global wishlist-heart handlers initial state
  setTimeout(()=> {
    document.querySelectorAll('.wishlist-heart').forEach(el=>{
      el.classList.toggle('active', isInWishlist(el.dataset.id));
      el.addEventListener('click', ()=> toggleWishlist(el.dataset.id));
    });
    document.querySelectorAll('.add-wishlist-btn').forEach(b=>{
      b.textContent = isInWishlist(b.dataset.id)?'Remove from Wishlist':'Add to Wishlist';
      b.addEventListener('click', ()=> toggleWishlist(b.dataset.id));
    });
  },100);

  // if wishlist page present, render wishlist
  if(document.getElementById('wishlist-grid')) renderWishlist();
});
