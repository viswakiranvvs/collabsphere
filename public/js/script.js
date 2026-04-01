// ─── DATA ───────────────────────────────────────────────────────────────────
const COLORS = ['#4d9cf6','#34d399','#fbbf24','#a78bfa','#f97316','#ec4899','#06b6d4'];
const DOMAINS = ['Materials Science','Computational','Chemistry','Biotech','Physics','Electronics','Environmental','Aeronautical','Robotics','AI/ML','Game Theory','Industries'];

const SEED_POSTS = [
  {
    id:1, title:"Optimising sintering temperature for Y₂O₃-stabilised ZrO₂ ceramics",
    desc:"We've been attempting to achieve >98% theoretical density in YSZ at 1400°C but consistently get residual porosity (2–3%). Has anyone successfully employed two-step sintering (TSS) protocols? Our powder is 8 mol% Y₂O₃, median particle size ~150 nm, no binder burnout issues observed.",
    domain:"Materials Science", tags:["sintering","YSZ","ceramics","densification","TZP"],
    author:{name:"Dr. Ramesh Kumar",role:"Professor",inst:"IIT Hyderabad",color:"#4d9cf6"},
    vis:"public", votes:18, solved:false, createdAt:Date.now()-172800000,
    comments:[
      {id:101,author:{name:"Priya Sharma",role:"PhD Student",inst:"IISc Bangalore",color:"#34d399"},text:"Have you tried flash sintering? We achieved 99.1% density at 1100°C with an applied field of 300 V/cm. The key was controlling the incubation time. Check: Raj et al. JECS 2012.",time:Date.now()-160000000,helpful:4},
      {id:102,author:{name:"Dr. Vikram Nair",role:"Professor",inst:"NIT Trichy",color:"#a78bfa"},text:"Two-step sintering works well for nanosized YSZ. Try T1=1500°C (hold 5 min), then drop to 1200°C and hold for 20 hours. The trick is suppressing grain boundary diffusion in the second step. See Chen & Wang 2000 for the theoretical basis.",time:Date.now()-140000000,helpful:7},
      {id:103,author:{name:"Arun Mehta",role:"Industry",inst:"Tata Advanced Materials",color:"#fbbf24"},text:"From a manufacturing standpoint — have you checked your green density? If it's below 52% TD your sintering problems likely start at compaction. We use CIP at 200 MPa before sintering and it makes a significant difference.",time:Date.now()-100000000,helpful:3}
    ]
  },
  {
    id:2, title:"DFT convergence failure in vdW-corrected MoS₂/graphene heterostructure",
    desc:"Running VASP 6.3 with DFT-D3 (BJ damping) on MoS₂/graphene heterostructure. EDIFF not reaching below 1e-4 eV even after 300 ionic steps. ENCUT=520 eV, k-mesh 9×9×1 Γ-centred, ALGO=Fast, ISMEAR=0. The system is a 4×4 MoS₂ / 5×5 graphene supercell with ~2% lattice mismatch.",
    domain:"Computational", tags:["DFT","VASP","2D-materials","vdW","heterostructure"],
    author:{name:"Anjali Verma",role:"Student",inst:"IISc Bangalore",color:"#34d399"},
    vis:"public", votes:31, solved:true, createdAt:Date.now()-432000000,
    comments:[
      {id:201,author:{name:"Dr. Suresh Iyer",role:"Professor",inst:"IIT Bombay",color:"#4d9cf6"},text:"Classic VASP convergence issue with vdW heterostructures. A few things: (1) Try ALGO=All instead of Fast for better self-consistency, (2) Add LREAL=A for large supercells, (3) Reduce POTIM to 0.3. The 4×4/5×5 supercell is large — are you doing spin-polarised? That adds another degree of freedom.",time:Date.now()-420000000,helpful:12},
      {id:202,author:{name:"Rahul Singh",role:"Student",inst:"JNCASR",color:"#f97316"},text:"I had the exact same problem. Solution: set IBRION=2 with NSW=500 and add EDIFFG=-0.01. More importantly, pre-relax each layer independently before combining into the heterostructure — the initial forces in your combined structure are probably enormous.",time:Date.now()-400000000,helpful:15}
    ]
  },
  {
    id:3, title:"Selective leaching of gold from e-waste PCBs without aqua regia",
    desc:"We're developing a sustainable hydrometallurgical process for Au recovery from printed circuit boards. Trying to avoid aqua regia due to NOx emissions and safety concerns. Attempted thiosulfate leaching (Na₂S₂O₃ 0.1M, Cu²⁺ 10mM, pH 10) but Au extraction is only 35% after 24h. Literature claims 85–90%. What are we missing?",
    domain:"Chemistry", tags:["e-waste","gold-recovery","hydrometallurgy","thiosulfate","leaching"],
    author:{name:"Rio Nakamura",role:"Student",inst:"IIT Hyderabad",color:"#ec4899"},
    vis:"public", votes:44, solved:false, createdAt:Date.now()-86400000,
    comments:[
      {id:301,author:{name:"Dr. Meera Pillai",role:"Professor",inst:"IIT Madras",color:"#06b6d4"},text:"The thiosulfate system is notoriously tricky. Your Cu²⁺ concentration might be too low — it's the oxidant. Try 20–50 mM CuSO₄. Also check your thiosulfate consumption rate; it degrades to tetrathionate at high [Cu]. Some groups use ammonia buffer (NH₃/NH₄⁺ at pH 10–11) which stabilises the system significantly.",time:Date.now()-80000000,helpful:18},
      {id:302,author:{name:"Prashanth K.",role:"Industry",inst:"Recycletek Systems",color:"#fbbf24"},text:"At industrial scale we use glycine-based leaching (glycine 0.5M, H₂O₂ 0.1M, pH 11). It's selective, non-toxic, and we get >90% Au extraction. Published by Oraby & Eksteen 2014 — highly recommend.",time:Date.now()-72000000,helpful:21}
    ]
  },
  {
    id:4, title:"Replicating Seebeck coefficient measurements — lab-to-lab variability",
    desc:"Our thermoelectric group measures Bi₂Te₃ samples and consistently gets S values 15–20% lower than published results. We use a ZEM-3 instrument, standard 4-probe setup, temperature gradient 5 K. Same sample was measured at two other labs and they also got different values from each other. Is there a standard calibration protocol I'm missing?",
    domain:"Materials Science", tags:["thermoelectrics","Seebeck","ZEM-3","measurement","Bi2Te3"],
    author:{name:"Kavitha Rao",role:"Student",inst:"JNCASR",color:"#a78bfa"},
    vis:"public", votes:12, solved:false, createdAt:Date.now()-259200000,
    comments:[
      {id:401,author:{name:"Dr. Ramesh Kumar",role:"Professor",inst:"IIT Hyderabad",color:"#4d9cf6"},text:"ZEM-3 calibration drift is well-known. Make sure you're using Ni standard (not just the internal Pt) and always run a reference Bi₂Te₃ sample at the start of each session. Contact angle of the probes is often the culprit — 5° misalignment gives ~12% systematic error.",time:Date.now()-250000000,helpful:8}
    ]
  },
  {
    id:5, title:"PEDOT:PSS thin films losing conductivity after 48h in ambient conditions",
    desc:"We're fabricating flexible biosensors with PEDOT:PSS (Clevios PH1000) as the active layer, spin-coated at 1000 RPM, EG-doped (5 vol%). Initial sheet resistance ~60 Ω/sq, but after 48h in ambient (25°C, 40–60% RH) it climbs to 400–600 Ω/sq. Film thickness ~150 nm by profilometry. No obvious delamination.",
    domain:"Electronics", tags:["PEDOT:PSS","conducting-polymers","biosensor","degradation","thin-film"],
    author:{name:"Nandini Krishnan",role:"Student",inst:"IIT Madras",color:"#06b6d4"},
    vis:"students", votes:9, solved:false, createdAt:Date.now()-604800000,
    comments:[
      {id:501,author:{name:"Anjali Verma",role:"Student",inst:"IISc Bangalore",color:"#34d399"},text:"This is moisture ingress. Try adding 1 wt% GOPS (3-glycidoxypropyltrimethoxysilane) as a crosslinker — it chemically bonds PEDOT:PSS to the substrate and dramatically improves stability. We saw <10% change in resistance over 2 weeks with this treatment.",time:Date.now()-590000000,helpful:11}
    ]
  },
  {
    id:6, title:"Collaboration needed: Mg-based hydrogen storage alloys — absorption kinetics",
    desc:"We have an industry project on solid-state H₂ storage using Mg₂NiH₄ system. Seeing slow absorption kinetics below 250°C despite ball milling to nanoscale. Looking to collaborate with groups who have expertise in catalytic doping (TiO₂, Ni nanoparticles) or surface activation protocols. We can offer XRD, SEM, and TGA characterisation in exchange.",
    domain:"Materials Science", tags:["hydrogen-storage","Mg-alloys","Mg2NiH4","kinetics","collaboration"],
    author:{name:"Dr. Vinod Sharma",role:"Industry",inst:"BHEL R&D Centre",color:"#f97316"},
    vis:"profs", votes:27, solved:false, createdAt:Date.now()-518400000,
    comments:[
      {id:601,author:{name:"Dr. Meera Pillai",role:"Professor",inst:"IIT Madras",color:"#06b6d4"},text:"We've been working on TiO₂-doped MgH₂ for the past year. 2 wt% TiO₂ reduced absorption time from 45 min to under 8 min at 200°C. Would be glad to collaborate — can you share your ball milling parameters?",time:Date.now()-510000000,helpful:9}
    ]
  }
];

const CONTRIBUTORS = [
  {name:"Dr. Meera Pillai",inst:"IIT Madras",role:"Professor",points:47,color:"#06b6d4"},
  {name:"Rahul Singh",inst:"JNCASR",role:"Student",points:38,color:"#f97316"},
  {name:"Dr. Suresh Iyer",inst:"IIT Bombay",role:"Professor",points:35,color:"#4d9cf6"},
  {name:"Prashanth K.",inst:"Recycletek Systems",role:"Industry",points:29,color:"#fbbf24"},
  {name:"Anjali Verma",inst:"IISc Bangalore",role:"Student",points:26,color:"#34d399"},
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let user = null;
let users = {}; // email -> {password, name, inst, role, color}
let posts = [];
let tags = [];
let currentVis = 'public';
let currentSort = 'latest';
let currentFilter = 'all'; // 'all' | 'my' | 'saved' | domain
let savedIds = new Set();
let votedIds = new Set();
let currentPostId = null;

function loadState() {
  const saved = localStorage.getItem('crux_state');
  if (saved) {
    const s = JSON.parse(saved);
    user = s.user;
    users = s.users || {};
    posts = s.posts || SEED_POSTS;
    savedIds = new Set(s.savedIds || []);
    votedIds = new Set(s.votedIds || []);
  } else {
    posts = JSON.parse(JSON.stringify(SEED_POSTS));
  }
}

function saveState() {
  localStorage.setItem('crux_state', JSON.stringify({user, users, posts, savedIds:[...savedIds], votedIds:[...votedIds]}));
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
document.querySelectorAll('.role-btn').forEach(b => {
  b.onclick = () => { document.querySelectorAll('.role-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); };
});

function switchAuth(mode) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.auth-tab[onclick="switchAuth('${mode}')"]`).classList.add('active');
  const signupFields = document.getElementById('signup-fields');
  const submitBtn = document.querySelector('.auth-submit');
  if (mode === 'signup') {
    signupFields.style.display = 'block';
    submitBtn.textContent = 'Sign Up →';
  } else {
    signupFields.style.display = 'none';
    submitBtn.textContent = 'Login →';
  }
}

function doAuth() {
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const password = document.getElementById('auth-password').value;
  const mode = document.querySelector('.auth-tab.active').textContent.toLowerCase().replace(' ', '');

  if (!email || !password) {
    alert('Email and password are required.');
    return;
  }

  if (mode === 'signup') {
    const name = document.getElementById('auth-name').value.trim();
    const inst = document.getElementById('auth-inst').value.trim();
    const role = document.querySelector('.role-btn.active')?.dataset.role || 'Student';
    if (!name) {
      alert('Name is required for signup.');
      return;
    }
    users[email] = { password, name, inst: inst || 'Independent Researcher', role, color: COLORS[Math.floor(Math.random()*COLORS.length)] };
    user = { email, ...users[email] };
  } else {
    // Mock login: allow any email/password, create user if not exists
    if (!users[email]) {
      users[email] = { password, name: 'User', inst: 'Independent Researcher', role: 'Student', color: COLORS[Math.floor(Math.random()*COLORS.length)] };
    }
    user = { email, ...users[email] };
  }

  saveState();
  document.getElementById('home').style.display = 'none';
  document.getElementById('auth').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  initApp();
}

function showAuth(mode) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('auth').style.display = 'block';
  document.getElementById('app').style.display = 'none';
  if (mode === 'signup') {
    document.querySelector('.auth-tab[onclick="switchAuth(\'signup\')"]').click();
  } else {
    document.querySelector('.auth-tab[onclick="switchAuth(\'login\')"]').click();
  }
}

function doSignout() {
  user = null;
  saveState();
  document.getElementById('home').style.display = 'block';
  document.getElementById('auth').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  window.scrollTo(0, 0);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function initApp() {
  const av = document.getElementById('sidebar-avatar');
  av.style.background = user.color + '22';
  av.style.color = user.color;
  av.style.border = `1px solid ${user.color}44`;
  av.textContent = initials(user.name);
  document.getElementById('sidebar-name').textContent = user.name;
  document.getElementById('sidebar-role-badge').textContent = `${user.role} · ${user.inst}`;
  updateStats();
  renderDomains();
  renderContributors();
  renderFeed();
}

function initials(name) { return name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(); }

function colorFor(role) {
  if (role==='Professor') return '#4d9cf6';
  if (role==='Industry') return '#fbbf24';
  return '#34d399';
}

function timeAgo(ts) {
  const d = Date.now() - ts;
  if (d < 3600000) return Math.floor(d/60000)+'m ago';
  if (d < 86400000) return Math.floor(d/3600000)+'h ago';
  if (d < 604800000) return Math.floor(d/86400000)+'d ago';
  return Math.floor(d/604800000)+'w ago';
}

// ─── STATS / DOMAINS / CONTRIBUTORS ─────────────────────────────────────────
function updateStats() {
  const visible = visiblePosts();
  document.getElementById('stat-total').textContent = posts.length;
  document.getElementById('stat-solved').textContent = posts.filter(p=>p.solved).length;
  document.getElementById('stat-users').textContent = new Set(posts.map(p=>p.author.name)).size + 1;
  document.getElementById('stat-comments').textContent = posts.reduce((a,p)=>a+p.comments.length,0);
}

function renderDomains() {
  const counts = {};
  posts.forEach(p=>{ counts[p.domain]=(counts[p.domain]||0)+1; });
  const el = document.getElementById('domain-pills');
  el.innerHTML = DOMAINS.map(d=>`<div class="domain-pill" onclick="filterDomain('${d}')">
    <span class="dot" style="background:${COLORS[DOMAINS.indexOf(d)%COLORS.length]}"></span>${d} <span style="color:var(--text-3);margin-left:2px">${counts[d]||0}</span></div>`).join('');
}

function renderContributors() {
  document.getElementById('contributors').innerHTML = CONTRIBUTORS.map(c=>`
    <div class="contributor" onclick="showProfile(null,'${c.name}')">
      <div class="avatar" style="background:${c.color}22;color:${c.color};border:1px solid ${c.color}44;width:32px;height:32px;font-size:12px">${initials(c.name)}</div>
      <div class="c-info"><div class="c-name">${c.name}</div><div class="c-inst">${c.inst}</div></div>
      <div class="c-badge">+${c.points}</div>
    </div>`).join('');
}

// ─── FEED ─────────────────────────────────────────────────────────────────────
function visiblePosts() {
  return posts.filter(p => {
    if (p.vis==='private' && p.author.name !== user.name) return false;
    if (p.vis==='profs' && user.role==='Student' && p.author.name !== user.name) return false;
    if (p.vis==='students' && user.role!=='Student' && user.role!=='Professor' && p.author.name !== user.name) return false;
    return true;
  });
}

function showFeed(filter='all') {
  currentFilter = filter;
  document.getElementById('feed-view').style.display='block';
  document.getElementById('detail').style.display='none';
  document.getElementById('profile').style.display='none';
  document.getElementById('about-view').style.display='none';
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if(filter==='all') document.getElementById('nav-feed').classList.add('active');
  else if(filter==='my') document.getElementById('nav-my').classList.add('active');
  else if(filter==='saved') document.getElementById('nav-saved').classList.add('active');
  document.getElementById('feed-label').textContent = filter==='all'?'All Problems':filter==='my'?'My Problems':'Saved Problems';
  document.getElementById('search-input').value='';
  renderFeed();
}

function filterDomain(domain) {
  currentFilter = 'domain:'+domain;
  document.getElementById('feed-view').style.display='block';
  document.getElementById('detail').style.display='none';
  document.getElementById('profile').style.display='none';
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('feed-label').textContent = domain;
  document.getElementById('search-input').value='';
  renderFeed();
}

function showAbout() {
  document.getElementById('feed-view').style.display='none';
  document.getElementById('detail').style.display='none';
  document.getElementById('profile').style.display='none';
  document.getElementById('about-view').style.display='block';
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  // No active nav for about
}

function setSort(s, el) {
  currentSort = s;
  document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderFeed();
}

function doSearch() {
  currentFilter = 'search:'+document.getElementById('search-input').value;
  renderFeed();
}

function renderFeed() {
  let list = visiblePosts();
  if (currentFilter.startsWith('domain:')) list = list.filter(p=>p.domain===currentFilter.slice(7));
  else if (currentFilter==='my') list = list.filter(p=>p.author.name===user.name);
  else if (currentFilter==='saved') list = list.filter(p=>savedIds.has(p.id));
  else if (currentFilter.startsWith('search:')) {
    const q = currentFilter.slice(7).toLowerCase();
    if(q) list = list.filter(p=>p.title.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)||p.tags.some(t=>t.toLowerCase().includes(q)));
  }
  if (currentSort==='votes') list.sort((a,b)=>b.votes-a.votes);
  else if (currentSort==='unsolved') { list = list.filter(p=>!p.solved); list.sort((a,b)=>b.createdAt-a.createdAt); }
  else if (currentSort==='solved') { list = list.filter(p=>p.solved); list.sort((a,b)=>b.createdAt-a.createdAt); }
  else list.sort((a,b)=>b.createdAt-a.createdAt);

  const c = document.getElementById('cards-container');
  if (!list.length) {
    c.innerHTML = `<div class="empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><h3>No problems found</h3><p>Try a different filter or be the first to post here.</p></div>`;
    return;
  }
  c.innerHTML = list.map(p=>renderCard(p)).join('');
}

function renderCard(p) {
  const visLabel = {public:'🌍 Public',profs:'🔬 Profs Only',students:'🎓 Students',private:'🔒 Private'}[p.vis];
  const visClass = {public:'vis-public',profs:'vis-profs',students:'vis-students',private:'vis-private'}[p.vis];
  const isSaved = savedIds.has(p.id);
  const isVoted = votedIds.has(p.id);
  return `<div class="card" onclick="openDetail(${p.id})">
    ${p.solved?'<div class="solved-badge"><svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Solved</div>':''}
    <div class="card-top">
      <div class="vote-col">
        <button class="vote-btn ${isVoted?'voted':''}" onclick="event.stopPropagation();toggleVote(${p.id})">▲</button>
        <span class="vote-count">${p.votes}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-meta">
          <span class="tag tag-domain">${p.domain}</span>
          ${p.tags.slice(0,3).map(t=>`<span class="tag tag-keyword">${t}</span>`).join('')}
          <div class="card-stats">
            <span class="stat"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/></svg>${p.comments.length}</span>
            <span class="stat" onclick="event.stopPropagation();toggleSave(${p.id})" title="${isSaved?'Unsave':'Save'}"><svg viewBox="0 0 20 20" fill="${isSaved?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8" style="color:${isSaved?'var(--accent)':'inherit'}"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg></span>
          </div>
        </div>
        <div class="author-row">
          <div class="author-avatar" style="background:${p.author.color}22;color:${p.author.color}">${initials(p.author.name)}</div>
          <span class="author-name" onclick="event.stopPropagation();showProfile(null,'${p.author.name}')">${p.author.name}</span>
          <span>· ${p.author.role} · ${p.author.inst}</span>
          <span>· ${timeAgo(p.createdAt)}</span>
          <span class="vis-badge ${visClass}">${visLabel}</span>
        </div>
      </div>
    </div>
  </div>`;
}

function toggleVote(id) {
  const p = posts.find(x=>x.id===id);
  if (!p) return;
  if (votedIds.has(id)) { votedIds.delete(id); p.votes--; }
  else { votedIds.add(id); p.votes++; }
  saveState(); updateStats(); renderFeed();
}
function toggleSave(id) {
  if (savedIds.has(id)) savedIds.delete(id); else savedIds.add(id);
  saveState(); renderFeed();
}

// ─── DETAIL ───────────────────────────────────────────────────────────────────
function openDetail(id) {
  currentPostId = id;
  const p = posts.find(x=>x.id===id);
  if (!p) return;
  document.getElementById('feed-view').style.display='none';
  document.getElementById('profile').style.display='none';
  const el = document.getElementById('detail');
  el.style.display='block';

  // Find similar problems (keyword matching)
  const similar = posts.filter(x=>x.id!==id && visiblePosts().includes(x) &&
    (x.domain===p.domain || p.tags.some(t=>x.tags.includes(t)))).slice(0,3);

  const visLabel = {public:'🌍 Public',profs:'🔬 Profs Only',students:'🎓 Students Only',private:'🔒 Private'}[p.vis];
  const visClass = {public:'vis-public',profs:'vis-profs',students:'vis-students',private:'vis-private'}[p.vis];

  el.innerHTML = `
    <div class="back-btn" onclick="showFeed()">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M15 10H5M9 14l-4-4 4-4"/></svg>
      Back to Feed
    </div>
    ${similar.length?`<div class="similar-box">
      <div class="similar-title">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><path d="M13 10a4 4 0 00-4-4M7 16a6 6 0 006-6"/><circle cx="7" cy="7" r="2"/><circle cx="15" cy="15" r="2"/></svg>
        Similar Problems on CRUX
      </div>
      ${similar.map(s=>`<div class="similar-item" onclick="openDetail(${s.id})"><div class="s-title">${s.title}</div><div class="s-meta">${s.domain} · ${s.comments.length} comments · ${timeAgo(s.createdAt)}</div></div>`).join('')}
    </div>`:''}
    <div class="detail-card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">
        <span class="tag tag-domain">${p.domain}</span>
        ${p.tags.map(t=>`<span class="tag tag-keyword">${t}</span>`).join('')}
        ${p.solved?`<span class="tag" style="background:var(--green-dim);color:var(--green);border:1px solid rgba(52,211,153,.2)">✓ Solved</span>`:''}
        <span class="vis-badge ${visClass}" style="margin-left:auto">${visLabel}</span>
      </div>
      <div class="detail-title">${p.title}</div>
      <div class="detail-desc">${p.desc}</div>
      <div class="detail-footer">
        <div class="author-avatar" style="background:${p.author.color}22;color:${p.author.color};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">${initials(p.author.name)}</div>
        <span style="font-size:13px;color:var(--text-2);font-weight:500">${p.author.name}</span>
        <span style="font-size:13px;color:var(--text-3)">· ${p.author.role} · ${p.author.inst} · Posted ${timeAgo(p.createdAt)}</span>
        <div style="margin-left:auto;display:flex;gap:8px">
          <button class="vote-btn ${votedIds.has(id)?'voted':''}" onclick="toggleVote(${id});openDetail(${id})" style="width:auto;padding:0 12px;gap:6px">▲ ${p.votes} votes</button>
          ${p.author.name===user.name?`<button class="vote-btn" onclick="toggleSolved(${id})" style="width:auto;padding:0 12px;color:var(--green);border-color:var(--green)">${p.solved?'✓ Mark Unsolved':'Mark as Solved'}</button>`:''}
        </div>
      </div>
    </div>
    <div class="comments-section">
      <div class="comments-title">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/></svg>
        ${p.comments.length} Comments & Suggestions
      </div>
      ${p.comments.length?p.comments.map(c=>renderComment(c,id)).join(''):`<div style="text-align:center;padding:30px;color:var(--text-3);font-size:14px">No comments yet. Be the first to help!</div>`}
      <div class="comment-form">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div class="avatar" style="background:${user.color}22;color:${user.color};border:1px solid ${user.color}44;width:30px;height:30px;font-size:11px;flex-shrink:0">${initials(user.name)}</div>
          <span style="font-size:13px;font-weight:500;color:var(--text-2)">${user.name} · ${user.role}</span>
        </div>
        <textarea id="comment-input" placeholder="Share your experience, suggest a method, cite a paper…"></textarea>
        <div class="comment-actions">
          <span style="font-size:12px;color:var(--text-3)">Markdown supported</span>
          <button class="btn-cancel" onclick="document.getElementById('comment-input').value=''">Clear</button>
          <button class="btn-submit" onclick="postComment(${id})">Post Comment →</button>
        </div>
      </div>
    </div>`;
  el.scrollTop = 0;
  window.scrollTo(0,0);
}

function renderComment(c, postId) {
  return `<div class="comment" id="comment-${c.id}">
    <div class="comment-header">
      <div class="avatar" style="background:${c.author.color}22;color:${c.author.color};border:1px solid ${c.author.color}44;width:28px;height:28px;font-size:10px;flex-shrink:0">${initials(c.author.name)}</div>
      <div>
        <div class="comment-author">${c.author.name}</div>
        <div style="font-size:11px;color:var(--text-3)">${c.author.role} · ${c.author.inst}</div>
      </div>
      <div class="comment-time">${timeAgo(c.time)}</div>
    </div>
    <div class="comment-body">${c.text}</div>
    <button class="helpful-btn ${c.helpfulVoted?'marked':''}" onclick="markHelpful(${postId},${c.id})">
      <svg viewBox="0 0 20 20" fill="${c.helpfulVoted?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
      Helpful · ${c.helpful}
    </button>
  </div>`;
}

function markHelpful(postId, commentId) {
  const p = posts.find(x=>x.id===postId);
  const c = p?.comments.find(x=>x.id===commentId);
  if (!c) return;
  if (c.helpfulVoted) { c.helpful--; c.helpfulVoted=false; }
  else { c.helpful++; c.helpfulVoted=true; }
  saveState(); openDetail(postId);
}

function toggleSolved(id) {
  const p = posts.find(x=>x.id===id);
  if (p) { p.solved = !p.solved; saveState(); updateStats(); openDetail(id); }
}

function postComment(postId) {
  const text = document.getElementById('comment-input').value.trim();
  if (!text) return;
  const p = posts.find(x=>x.id===postId);
  if (!p) return;
  p.comments.push({
    id: Date.now(), author: { name:user.name, role:user.role, inst:user.inst, color:user.color },
    text, time:Date.now(), helpful:0, helpfulVoted:false
  });
  saveState(); updateStats();
  showToast('Comment posted!','success');
  openDetail(postId);
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function showProfile(e, nameOverride) {
  const name = nameOverride || user.name;
  const isMe = name === user.name;
  const u = isMe ? user : { name, role: posts.find(p=>p.author.name===name)?.author.role||'Researcher', inst: posts.find(p=>p.author.name===name)?.author.inst||'—', color: posts.find(p=>p.author.name===name)?.author.color || '#4d9cf6' };
  const userPosts = posts.filter(p=>p.author.name===name);
  const totalComments = posts.reduce((a,p)=>a+p.comments.filter(c=>c.author.name===name).length,0);
  document.getElementById('feed-view').style.display='none';
  document.getElementById('detail').style.display='none';
  const el = document.getElementById('profile');
  el.style.display='block';
  document.getElementById('about-view').style.display='none';
  el.innerHTML = `
    <div class="back-btn" onclick="showFeed()">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M15 10H5M9 14l-4-4 4-4"/></svg>
      Back to Feed
    </div>
    <div class="profile-header">
      <div class="profile-avatar" style="background:${u.color}22;color:${u.color};border:2px solid ${u.color}44">${initials(u.name)}</div>
      <div style="flex:1">
        <div class="profile-name">${u.name} ${isMe?'<span style="font-size:13px;color:var(--text-3);font-weight:400">(You)</span>':''}</div>
        <div class="profile-meta">${u.role} · ${u.inst}</div>
        <div class="profile-stats">
          <div class="p-stat"><div class="n">${userPosts.length}</div><div class="l">Problems</div></div>
          <div class="p-stat"><div class="n">${totalComments}</div><div class="l">Comments</div></div>
          <div class="p-stat"><div class="n">${userPosts.reduce((a,p)=>a+p.votes,0)}</div><div class="l">Votes</div></div>
          <div class="p-stat"><div class="n">${userPosts.filter(p=>p.solved).length}</div><div class="l">Solved</div></div>
        </div>
      </div>
    </div>
    <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:15px;margin-bottom:14px;color:var(--text-2)">Problems Posted</div>
    ${userPosts.length ? userPosts.map(p=>renderCard(p)).join('') : '<div class="empty"><h3>No problems posted yet</h3></div>'}`;
  window.scrollTo(0,0);
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openModal() {
  tags = [];
  document.getElementById('m-title').value='';
  document.getElementById('m-desc').value='';
  document.getElementById('m-domain').value='Materials Science';
  document.getElementById('tag-input').value='';
  renderTagsInput();
  document.querySelectorAll('.vis-option').forEach(v=>{v.classList.remove('selected');if(v.dataset.vis==='public')v.classList.add('selected');});
  currentVis='public';
  document.getElementById('modal-overlay').classList.add('open');
  setTimeout(()=>document.getElementById('m-title').focus(),100);
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); }
document.getElementById('modal-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('modal-overlay'))closeModal();});

function selectVis(el) { document.querySelectorAll('.vis-option').forEach(v=>v.classList.remove('selected')); el.classList.add('selected'); currentVis=el.dataset.vis; }

function addTag(e) {
  if (e.key==='Enter'||e.key===',') {
    e.preventDefault();
    const val = e.target.value.trim().replace(/,/g,'');
    if (val && !tags.includes(val) && tags.length<8) { tags.push(val); renderTagsInput(); e.target.value=''; }
  }
}
function removeTag(t) { tags=tags.filter(x=>x!==t); renderTagsInput(); }
function renderTagsInput() {
  const ti=document.getElementById('tag-input');
  const container=document.getElementById('tags-input');
  container.innerHTML='';
  tags.forEach(t=>{
    const span=document.createElement('span'); span.className='tag-item';
    span.innerHTML=`${t}<span class="tag-remove" onclick="removeTag('${t}')">×</span>`;
    container.appendChild(span);
  });
  container.appendChild(ti);
  ti.focus();
}

function submitProblem() {
  const title = document.getElementById('m-title').value.trim();
  const desc = document.getElementById('m-desc').value.trim();
  const domain = document.getElementById('m-domain').value;
  if (!title||!desc) { showToast('Please fill in title and description.'); return; }
  const post = {
    id: Date.now(), title, desc, domain, tags:[...tags],
    author:{name:user.name,role:user.role,inst:user.inst,color:user.color},
    vis:currentVis, votes:0, solved:false, createdAt:Date.now(), comments:[]
  };
  posts.unshift(post);
  saveState(); updateStats(); renderDomains();
  closeModal();
  showToast('Problem posted successfully!','success');
  showFeed();
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type='') {
  const t=document.getElementById('toast');
  t.textContent=msg; t.className='toast '+(type?type:'');
  setTimeout(()=>t.classList.add('show'),10);
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
loadState();
if (user) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('auth').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  initApp();
} else {
  document.getElementById('home').style.display = 'block';
  document.getElementById('auth').style.display = 'none';
  document.getElementById('app').style.display = 'none';
}