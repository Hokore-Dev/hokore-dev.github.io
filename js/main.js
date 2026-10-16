/* ==========================================================================
   Project data — media 배열에 이미지/영상 경로를 추가하면 모달에 표시됩니다.
   type: 'image' | 'video' | 'youtube'
   ========================================================================== */
var projectData = {
  vrecord: {
    title: 'VRECORD Live Solution',
    sub: 'CTO · 2025.02 ~ Present',
    desc: '버추얼 엔터테인먼트를 위한 라이브 솔루션입니다. 언리얼 엔진 기반 리타게팅 시스템으로 모션캡처 데이터를 실시간으로 버추얼 캐릭터에 적용합니다. 비율 기반 간편 3D 트래킹 시스템은 사용자의 체형 변화에 유연하게 대응하며, 모션 트래킹 학습 시스템으로 정확도를 지속적으로 개선합니다. 버추얼 아이돌 그룹 MEU(뮤)의 라이브 콘서트와 AR 공연을 지원하며, TIPS R&D 지원사업에 선정되었습니다.',
    tags: ['Unreal Engine', 'Motion Capture', '3D Tracking', 'AR', 'Live Streaming', 'Virtual Entertainment'],
    media: []
  },
  singtogether: {
    title: 'Sing Together',
    sub: 'Co-founder & Developer · StasisField · 2022.03 ~ Present',
    desc: 'VR 환경에서 친구들과 함께 노래를 부르는 소셜 VR 노래방 앱입니다. Steam, Meta Quest, Pico 플랫폼에 출시했으며, VR 카테고리 시장점유율 1위를 달성했습니다. 멀티유저 실시간 동기화 알고리즘은 VRChat보다 높은 정확도를 보이며, 지역별 비디오/오디오 서버와 딜레이 보정 시스템을 구축했습니다. 마케팅 비용 0원으로 커뮤니티 기반 성장을 이루어 7,000+ 설치, 50,000곡+ 글로벌 재생, 한국 40%, 미국 35%의 글로벌 유저 분포를 기록했습니다. Unity 커스텀 WebSocket 플러그인을 개발하고, Meta SDK(Avatar, Friends, IAP), Steam SDK, Discord SDK 연동을 구현했습니다.',
    tags: ['Unity', 'C#', 'VR', 'Photon', 'Vivox', 'Node.js', 'GCP', 'Azure', 'YouTube API', 'Meta SDK', 'Steam SDK'],
    media: [
      { type: 'image', src: 'assets/projects/singtogether-1.png' },
      { type: 'image', src: 'assets/projects/singtogether-2.png' },
      { type: 'image', src: 'assets/projects/singtogether-3.png' }
    ]
  },
  xociety: {
    title: 'Xociety',
    sub: 'Blockchain Game Developer · UNOPND / Hashed · 2021.12 ~ Present',
    desc: '블록체인 기반 AAA급 게임 메타버스입니다. NFT 캐릭터 커스터마이징 시스템을 개발하여 Facial Morph, Decal Shader, Mesh Clipping을 구현했습니다. Three.js를 활용한 3D 웹 렌더링으로 GLB 포맷 모델을 브라우저에서 실시간 렌더링하며, OpenSea와 LookRare 등 NFT 마켓플레이스 최적화 및 IPFS 리소스 관리를 수행했습니다.',
    tags: ['Unreal 5', 'C++', 'Three.js', 'TypeScript', 'Blockchain', 'NFT', 'IPFS', 'OpenSea'],
    media: []
  },
  universe: {
    title: 'Universe',
    sub: 'Client Developer · NC Soft · 2021.04 ~ 2021.12',
    desc: 'NC Soft의 글로벌 K-POP 팬덤 플랫폼으로 2,400만 다운로드를 달성했습니다. Unity와 Native(Kotlin/Swift)를 결합한 크로스 플랫폼 개발을 수행했으며, 중국 본토 서비스를 위해 AWS 인프라 구축, WeChat SDK 연동, 전면 중국어 로컬라이징을 완료했습니다. M-Net 걸스플래닛999의 실시간 투표 인프라를 구축하여 대규모 트래픽을 안정적으로 처리했습니다.',
    tags: ['Unity', 'Kotlin', 'Swift', 'AWS', 'WeChat SDK', 'Cross-platform'],
    media: []
  },
  yumeiro: {
    title: '유메이로가든 (ゆめいろガーデン)',
    sub: 'Game Client Developer · Wemade Play (선데이토즈) · 2017 ~ 2021',
    desc: '50명이 각자의 집과 아바타를 가지고 한 마을을 경영하는 소셜 게임으로, 일본 LINE 플랫폼에서 800K DAU를 달성했습니다. 프로젝트 킥오프부터 라이브 운영까지 3년간 전체 개발 사이클에 참여했습니다.\n\n월드는 쿼드트리로 구역을 나눠 데이터 로드를 분산하고 플레이어 주변만 관리/연산되도록 처리했습니다. Grid 기반 A* 길찾기와 주변 높낮이 계산도 구현했습니다. 5,000개 아바타 파츠와 1,400개 가든 파츠를 개별 패키지로 만들어 추가·제거·변경에 용이하도록 개발했습니다.\n\nPhoenix/Elixir 기반 릴레이 소켓 서버를 개발하고, MessagePack 직렬화와 AES 암호화로 보안 통신을 구현했습니다. iPhone 6 기준 메모리 1.4GB 제한 내에서 iOS 최적화를 진행하며 Xcode Instruments, Unity Memory Capture, Frame Debugger를 활용했습니다.',
    tags: ['Unity', 'C#', 'Lua', 'Phoenix', 'Elixir', 'WebSocket', 'MessagePack', 'AES', 'QuadTree', 'A*'],
    media: []
  },
  anipang: {
    title: '애니팡3',
    sub: 'Game Client Developer · Wemade Play (선데이토즈) · 2016.11 ~ 2017',
    desc: '수십만 명이 즐기는 3매치 스테이지 퍼즐 게임으로, 첫 회사 프로젝트입니다. 안정성을 최우선으로 라이브 서비스를 운영했습니다.\n\nSpine 캐릭터 애니메이션과 이펙트 최적화 R&D로 메모리 점유율을 낮췄고, 모든 컨텐츠가 신규 클라이언트 배포 없이 운영 가능하도록 설계했습니다. 스테이지/밸런스 정보는 JSON으로 관리하여 매주 20개 이상의 맵을 업데이트했으며, 추가 리소스는 에셋번들 시스템으로 네트워크에서 다운로드하도록 구현했습니다.\n\nLua REPL 원격 테스트 도구를 개발하여, 릴리즈된 앱에서 버그 확인, 맵 테스트, 컨텐츠 변경을 실시간으로 수행할 수 있게 했습니다. C# Winform PC 클라이언트에서 AWS EC2 Socket.IO 서버를 통해 게임 클라이언트에 Lua 스크립트를 전달하는 구조입니다.',
    tags: ['Unity', 'C#', 'Lua', 'Spine', 'Asset Bundle', 'JSON', 'Socket.IO', 'AWS EC2'],
    media: [
      { type: 'image', src: 'assets/projects/anipang3.png' }
    ]
  },
  booster: {
    title: 'Booster',
    sub: 'Sub-client Programmer · Billbird Startup · 2014 ~ 2015',
    desc: '고등학교 시절 스타트업에서 개발한 4인 실시간 리듬게임입니다. 서울창조경제혁신센터 6개월 챌린지 플랫폼에 선정되었으며, MWC 바르셀로나(Mobile World Congress)에 출품되었습니다. C++과 Cocos2d-x 엔진을 사용했고, Socket.IO 기반 실시간 4인 대전 시스템을 구현했습니다. 유명 작곡가의 커스텀 음악을 활용한 리듬게임입니다.\n\n같은 시기에 Beat Spin(타이밍 리듬게임), 상모워리어(하이퍼 캐주얼, 헝그리앱 인터뷰 및 Google Play 신규 인기 13위), Memory(두뇌 퍼즐) 등 다수의 인디 게임을 개발했습니다. 또한 DirectX 기반 3D 프레임워크를 개발하고, 기능경기대회에서 20시간 내 게임을 완성하는 대회에 2년 연속 출전했습니다.',
    tags: ['C++', 'Cocos2d-x', 'Socket.IO', 'DirectX', 'Real-time Multiplayer'],
    media: [
      { type: 'image', src: 'assets/projects/booster.png' },
      { type: 'image', src: 'assets/projects/booster-beatspin.png' },
      { type: 'image', src: 'assets/projects/booster-memory.png' },
      { type: 'youtube', src: 'https://www.youtube-nocookie.com/embed/8rM4EwbmaTc' }
    ]
  }
};

var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   Navigation — scrolled state, mobile drawer
   ========================================================================== */
(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  function syncNav() {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  syncNav();
  window.addEventListener('scroll', syncNav, { passive: true });

  // 모바일에서만 접었다 펴며, 데스크톱 폭으로 돌아오면 hidden 상태를 해제한다.
  var mobile = window.matchMedia('(max-width: 960px)');
  function applyMobileState() {
    if (mobile.matches) {
      links.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      links.hidden = false;
    }
  }
  applyMobileState();
  mobile.addEventListener('change', applyMobileState);

  toggle.addEventListener('click', function () {
    var open = links.hidden;
    links.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.addEventListener('click', function (e) {
    if (e.target.closest('.nav-link') && mobile.matches) {
      links.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('langToggle').addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-lang]');
    if (btn) setLanguage(btn.dataset.lang);
  });
}());

/* ==========================================================================
   Scroll spy — nav links + right-hand dots
   ========================================================================== */
(function () {
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var dotsHost = document.getElementById('dots');

  var dots = navLinks.map(function (link) {
    var id = link.dataset.section;
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.title = link.textContent.trim();
    dot.dataset.section = id;
    dot.tabIndex = -1;
    dot.addEventListener('click', function () {
      var target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
    dotsHost.appendChild(dot);
    return dot;
  });

  function activate(id) {
    navLinks.forEach(function (l) { l.classList.toggle('is-active', l.dataset.section === id); });
    dots.forEach(function (d) { d.classList.toggle('is-active', d.dataset.section === id); });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) activate(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  navLinks.forEach(function (link) {
    var section = document.getElementById(link.dataset.section);
    if (section) observer.observe(section);
  });

  activate('home');
}());

/* ==========================================================================
   Hero typewriter
   ========================================================================== */
(function () {
  var host = document.getElementById('heroTyped');
  var words = [];
  var wordIndex = 0;
  var charIndex = 0;
  var deleting = false;
  var timer = null;

  function loadWords() {
    words = t('hero.roles').split('|');
    wordIndex = 0;
    charIndex = 0;
    deleting = false;
  }

  function step() {
    var word = words[wordIndex] || '';
    charIndex += deleting ? -1 : 1;
    host.textContent = word.slice(0, charIndex);

    var delay = deleting ? 45 : 95;
    if (!deleting && charIndex === word.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }
    timer = setTimeout(step, delay);
  }

  function start() {
    clearTimeout(timer);
    loadWords();
    if (prefersReducedMotion) {
      host.textContent = words[0] || '';
      return;
    }
    step();
  }

  start();
  document.addEventListener('languagechange', start);
}());

/* ==========================================================================
   Tenure dial — 경력 연차 카운터
   ========================================================================== */
(function () {
  var dial = document.getElementById('tenureDial');
  var bar = document.getElementById('tenureBar');
  var yearsEl = document.getElementById('tenureYears');
  var monthsEl = document.getElementById('tenureMonths');

  var start = dial.dataset.start.split('-');
  var startDate = new Date(Number(start[0]), Number(start[1]) - 1, 1);
  var now = new Date();
  var totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  var years = Math.floor(totalMonths / 12);
  var months = totalMonths % 12;

  var CIRCUMFERENCE = 289.03;
  // 10년(120개월)을 한 바퀴로 본다.
  var ratio = Math.min(1, totalMonths / 120);

  function render(y, m) {
    yearsEl.textContent = y;
    monthsEl.textContent = m;
  }
  render(0, 0);

  function run() {
    bar.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - ratio));

    if (prefersReducedMotion) {
      render(years, months);
      return;
    }

    var duration = 1600;
    var t0 = performance.now();
    (function tick(now) {
      var p = Math.min(1, (now - t0) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var current = Math.round(totalMonths * eased);
      render(Math.floor(current / 12), current % 12);
      if (p < 1) requestAnimationFrame(tick);
    }(t0));
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(dial);
}());

/* ==========================================================================
   Reveal on scroll
   ========================================================================== */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (prefersReducedMotion) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  items.forEach(function (el) { observer.observe(el); });
}());

/* ==========================================================================
   Project tags — 카드에 접힌 태그 수를 실제 데이터에서 계산한다.
   @NOTE: 손으로 적어두면 틀린다(실제로 VRECORD가 +2로 잘못 적혀 있었다).
   ========================================================================== */
(function () {
  document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
    var data = projectData[card.dataset.project];
    var row = card.querySelector('.tag-row');
    if (!data || !row) return;

    var shown = Array.prototype.map.call(row.querySelectorAll('.pill'), function (p) {
      return p.textContent.trim();
    });
    var rest = data.tags.filter(function (tag) { return shown.indexOf(tag) === -1; });
    if (!rest.length) return;

    var more = document.createElement('span');
    more.className = 'pill';
    more.textContent = '+' + rest.length;
    more.title = rest.join(', ');
    row.appendChild(more);
  });
}());

/* ==========================================================================
   Project filter
   ========================================================================== */
(function () {
  var tabs = document.getElementById('filterTabs');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card'));
  var countEl = document.getElementById('projectCount');

  function apply(filter) {
    var shown = 0;
    cards.forEach(function (card) {
      var match = filter === 'all' || card.dataset.cat === filter;
      card.hidden = !match;
      if (match) shown++;
    });
    countEl.textContent = shown;
  }

  tabs.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    tabs.querySelectorAll('button').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    apply(btn.dataset.filter);

    // 그리드가 짧아지면서 탭이 화면 밖으로 밀려나면 다시 끌어온다.
    if (tabs.getBoundingClientRect().top < 80) {
      tabs.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  });

  apply('all');
}());

/* ==========================================================================
   Project modal
   ========================================================================== */
(function () {
  var overlay = document.getElementById('modalOverlay');
  var titleEl = document.getElementById('modalTitle');
  var subEl = document.getElementById('modalSub');
  var galleryEl = document.getElementById('modalGallery');
  var descEl = document.getElementById('modalDesc');
  var tagsEl = document.getElementById('modalTags');
  var closeBtn = document.getElementById('modalClose');
  var lastFocused = null;

  function buildMedia(item, title) {
    var wrap = document.createElement('div');
    wrap.className = 'modal-gallery-item';

    if (item.type === 'image') {
      var img = document.createElement('img');
      img.src = item.src;
      img.alt = title;
      img.loading = 'lazy';
      wrap.appendChild(img);
    } else if (item.type === 'video') {
      var video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.preload = 'metadata';
      wrap.appendChild(video);
    } else if (item.type === 'youtube') {
      var iframe = document.createElement('iframe');
      iframe.src = item.src;
      iframe.title = title;
      iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.loading = 'lazy';
      iframe.allowFullscreen = true;
      wrap.appendChild(iframe);
    }
    return wrap;
  }

  function openModal(id) {
    var data = projectData[id];
    if (!data) return;

    lastFocused = document.activeElement;
    titleEl.textContent = data.title;
    subEl.textContent = data.sub;
    descEl.textContent = data.desc;

    tagsEl.innerHTML = '';
    data.tags.forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'pill';
      span.textContent = tag;
      tagsEl.appendChild(span);
    });

    galleryEl.innerHTML = '';
    data.media.forEach(function (item) {
      galleryEl.appendChild(buildMedia(item, data.title));
    });

    overlay.showModal();
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    if (overlay.open) overlay.close();
    document.body.style.overflow = '';
    galleryEl.querySelectorAll('video').forEach(function (v) { v.pause(); });
    galleryEl.innerHTML = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-project]').forEach(function (card) {
    card.addEventListener('click', function () { openModal(card.dataset.project); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.project);
      }
    });
  });

  document.querySelectorAll('[data-open-project]').forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn.dataset.openProject); });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  // Escape 는 <dialog> 가 스스로 닫는다. 닫힌 뒤 뒷정리만 붙인다.
  overlay.addEventListener('close', function () {
    document.body.style.overflow = '';
    galleryEl.querySelectorAll('video').forEach(function (v) { v.pause(); });
    galleryEl.innerHTML = '';
    if (lastFocused) lastFocused.focus();
  });
}());
