// Mouse gradient effect
var gradient = document.getElementById('mouseGradient');
document.addEventListener('mousemove', function (e) {
  gradient.style.setProperty('--mouse-x', e.clientX + 'px');
  gradient.style.setProperty('--mouse-y', e.clientY + 'px');
});

// Language toggle
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// Scroll spy
var sections = document.querySelectorAll('.content-section');
var navLinks = document.querySelectorAll('.nav-link');

var sectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var id = entry.target.id;
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-20% 0px -60% 0px' });

sections.forEach(function (section) { sectionObserver.observe(section); });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    var target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ==========================================
// Project Modal System
// ==========================================

// Project data - media 배열에 이미지/영상 경로를 추가하면 모달에 표시됩니다.
// type: 'image' | 'video' | 'youtube'
// src: 파일 경로 또는 YouTube embed URL
//
// 예시:
//   { type: 'image', src: 'assets/projects/singtogether-1.png' }
//   { type: 'video', src: 'assets/projects/singtogether-demo.mp4' }
//   { type: 'youtube', src: 'https://www.youtube.com/embed/VIDEO_ID' }

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
      { type: 'image', src: 'assets/projects/singtogether-3.png' },
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
      { type: 'image', src: 'assets/projects/anipang3.png' },
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
      { type: 'youtube', src: 'https://www.youtube.com/embed/8rM4EwbmaTc' },
    ]
  }
};

var overlay = document.getElementById('modalOverlay');
var modalTitle = document.getElementById('modalTitle');
var modalSub = document.getElementById('modalSub');
var modalGallery = document.getElementById('modalGallery');
var modalDesc = document.getElementById('modalDesc');
var modalTags = document.getElementById('modalTags');
var modalClose = document.getElementById('modalClose');

function openModal(projectId) {
  var data = projectData[projectId];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalSub.textContent = data.sub;
  modalDesc.textContent = data.desc;

  // Tags
  modalTags.innerHTML = '';
  data.tags.forEach(function (tag) {
    var span = document.createElement('span');
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  // Gallery
  modalGallery.innerHTML = '';
  if (data.media && data.media.length > 0) {
    data.media.forEach(function (item) {
      var div = document.createElement('div');
      div.className = 'modal-gallery-item';

      if (item.type === 'image') {
        var img = document.createElement('img');
        img.src = item.src;
        img.alt = data.title;
        img.loading = 'lazy';
        div.appendChild(img);
      } else if (item.type === 'video') {
        var video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.preload = 'metadata';
        div.appendChild(video);
      } else if (item.type === 'youtube') {
        var iframe = document.createElement('iframe');
        iframe.src = item.src;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        div.appendChild(iframe);
      }

      modalGallery.appendChild(div);
    });
  } else {
    // Placeholder when no media
    var placeholder = document.createElement('div');
    placeholder.className = 'modal-gallery-item';
    placeholder.innerHTML = '<div class="modal-media-placeholder">' +
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>' +
      '<span>이미지/영상을 추가하세요</span>' +
      '<span>assets/projects/ 폴더에 파일을 넣고 main.js의 projectData를 수정</span>' +
      '</div>';
    modalGallery.appendChild(placeholder);
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  // Stop any playing videos
  modalGallery.querySelectorAll('video').forEach(function (v) { v.pause(); });
}

// Click on project cards
document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function (e) {
    e.preventDefault();
    openModal(card.dataset.project);
  });
});

// Close modal
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
