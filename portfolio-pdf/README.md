# 포트폴리오 PDF

`index.html`(16:9 슬라이드 덱) → Chrome 인쇄 경로로 PDF를 만든다.
웹사이트(`../index.html`)와는 독립적이며, GitHub Pages 배포 내용에 영향을 주지 않는다.

## 빌드

```bash
./build.sh          # → out/하민준_포트폴리오.pdf
```

Chrome headless가 `index.html`을 그대로 인쇄한다. 슬라이드 1장 = PDF 1페이지(960×540px, 16:9).

## 수정

| 무엇을 | 어디서 |
|---|---|
| 슬라이드 내용·순서 | `index.html` — `<section class="slide">` 하나가 한 장 |
| 색·타이포·컴포넌트 | `deck.css` — 상단 `:root` 토큰이 단일 소스 |
| 이미지 | `../assets/projects/` 참조 (웹사이트와 공유) |

미리보기는 `index.html`을 브라우저로 열면 된다 — 슬라이드가 세로로 이어져 스크롤로 확인된다.

## 슬라이드 구성

```
01 표지
02 10년째 실시간으로 움직이는 것을 만듭니다
03 다섯 곳에서 기획 · 개발 · 운영을 모두 겪었습니다
04 Part · VRECORD
05 버추얼 아이돌이 무대에 서는 데 필요한 것을 만듭니다
06 장비에서 송출까지 한 줄로 이어 붙였습니다
07 화면이 밀리는 원인은 한 곳이 아니었습니다
08 체형이 다르면 모션은 캐릭터를 관통합니다
09 비율을 계산해 벡터를 스케일링했습니다
10 바디는 모캡대로, 손가락만 덮어썼습니다
11 휴먼 스케일을 기준으로 거리를 스케일로 바꿨습니다
12 한 번 보정한 결과를 프로필로 남겨 재사용합니다
13 클리닝 비용을 1/8로 줄였습니다
14 150명에서 2,000명 규모까지 무대가 커졌습니다
15 버추얼 아이돌을 지상파 음악방송 무대에 올렸습니다
16 방송을 돌리는 도구를 전부 사내에서 만듭니다
17 Part · Sing Together
18 VR에서 친구와 같은 노래를 함께 부르게 만들었습니다
19 클라이언트부터 인프라까지 직접 세운 구조
20 세 플랫폼 빌드를 브랜치 하나로 갈랐습니다
21 지연을 각자 다르게 먹여 같은 시점을 만들었습니다
22 컨트롤러를 마이크로 삼아 음향을 입체로 만들었습니다
23 마케팅 비용 0원으로 카테고리 1위가 됐습니다
24 Part · 이전 커리어
25 온체인 메타버스의 캐릭터를 웹에서 렌더했습니다
26 233개국 팬덤 플랫폼을 세 갈래 플랫폼에 올렸습니다
27 아바타 파츠 5,000종을 800K DAU에서 돌렸습니다
28 매주 맵 20개+를 프로그래머 없이 올리게 만들었습니다
29 엔진 · 실시간 · 인프라를 한 사람이 이어서 다룹니다
30 만든 기술을 권리로 남겼습니다
31 마무리
```

## 컴포넌트

`deck.css`에 정의된 조각들. 새 슬라이드는 이것들을 조합해 만든다.

- `.slide` → `.eyebrow` / `.slide-title` / `.rule` / `.pill` / `.body` / `.note` / `.pageno`
- 카드: `.card`, `.row`(가로 키-값), `.grid-2` `.grid-3`
- 다이어그램: `.flow` + `.node` + `.arrow` + `.group`
- 비교: `.panel-before` / `.panel-after` + `.item`
- 데이터: `.metrics` + `.metric`, `.tbl`, `.tags` + `.tag`
- 특수 페이지: `.cover`, `.divider`, `.tl`(타임라인), `.award-row`, `.skill-row`

## 제목 위계

27장이 같은 크기로 이어지면 강약이 사라진다. 3단계로 쓴다.

| 클래스 | 크기 | 쓰는 곳 |
|---|---|---|
| `.slide-title.is-lead` | 33px | 파트의 훅과 결론 (문제 제기, 핵심 성과) — 파트당 1~2장 |
| `.slide-title` | 27px | 기본 |
| `.slide-title.is-quiet` | 23.5px | 구조 설명 — 다이어그램이 주인공인 장 |

## 색 사용 규칙

브랜드 라임 `#CCFD50`은 흰 배경에서 대비 1.18:1 이라 **텍스트로 쓸 수 없다.** 축을 나눠 쓴다.

| 토큰 | 역할 |
|---|---|
| `--brand` | pill 배지, 제목 마커, 세로선 — 배경 전용 (위에 잉크 텍스트) |
| `--accent` | eyebrow, 카드 제목, 화살표, 링크 (4.8:1) |
| `--accent-deep` | 다이어그램 강조 텍스트 (6.2:1) |
| `--accent-soft` | 강조 노드·표 강조 열 배경 |

제목 강조는 색이 아니라 `<em>` 라임 마커로 한다. 한글 베이스라인에 맞춰 그라디언트 시작점이 62%(본문) / 70%(표지)로 잡혀 있다.

## 라벨 규칙

- **eyebrow** = 어디의 무엇인가 (`VRECORD · 리타게팅 라이브`, `Xociety · UNOPND / Hashed`)
- **pill** = 이 장이 보여주는 것 (`설계 배경`, `해결 구조`, `맡은 작업`, `성과`)

프로젝트명·시스템명·특허번호를 pill에 넣지 않는다. 번호(`Project 01`)를 eyebrow에 쓰면 파트가 다를 때 중복되므로 고유명을 쓴다.

## 밀도 보정

카드가 짧아 지면 위쪽에만 몰릴 때:
- `.grid-3.is-tall` / `.grid-2.is-tall` — 카드 `min-height: 172px`, 내용 세로 중앙
- `.col-fill` — 좌우 컬럼 높이 맞춤 (카드 열이 이미지보다 짧아지는 것 방지)
- `.body.is-spread` / `.body.is-center` — 본문 세로 분배

## 폰트

`fonts/`에 자가호스팅 (Pretendard Variable, JetBrains Mono). PDF에 임베드되므로
다른 기기에서 열어도 동일하게 보인다.

## 외부 에셋 출처

포트폴리오에 넣은 외부 이미지와 QR의 출처. 저작권 확인이 필요하면 여기서 추적한다.

| 파일 | 출처 | 비고 |
|---|---|---|
| `assets/yt/W7G8NAhG6l8.jpg` | YouTube `youtu.be/W7G8NAhG6l8` 썸네일 | MW:MEU 'Paper Plane' 퍼포먼스 — BEREO/VRECORD 자산 |
| `assets/yt/*.jpg` (그 외) | 동 채널 썸네일 (미사용, 후보) | z2EOoFnFqCI(MV) · dyb5XA_F1Fg(쇼케이스) 등 |
| `assets/meu-hero.png` | bereo.me 히어로 이미지 | 세계관 일러스트 — 기술 포트폴리오에는 부적합해 미사용 |
| `assets/qr/meu-performance.png` | 자체 생성 (CoreImage) | → youtu.be/W7G8NAhG6l8 |
| `assets/qr/singroom-store.png` | 자체 생성 (CoreImage) | → SingRoom Meta 스토어 |

QR 재생성은 `scratchpad/qr.swift` 방식(CIQRCodeGenerator, 보정 레벨 H)을 쓴다.

## 사실 확인 기준 (2026.09)

수치는 **공개 보도 기준**으로 통일했다. 사내 수치와 다를 때 검증 가능한 쪽을 택한다.

| 항목 | 채택값 | 근거 |
|---|---|---|
| Universe 다운로드 | 2,000만 · 233개국 · 아티스트 30팀 | 2021.12 언론 보도 (2023.02 서비스 종료, 디어유 이관) |
| MW:MEU | 2026.04.17 데뷔 · 5인(지한·이비·수아·카나·초은) · 음원 3장 · 음악방송 3회 | 나무위키/보도, 리츠 2026.07 탈퇴 |
| Xociety | 프리시리즈A $7.5M(Hashed·Sui Foundation) · Epic Games Store 얼리 액세스 | 공식 Medium/Sui 블로그 — 재직 이후 성과이므로 "이후" 로 표기 |
| Sing Together | 현재 SingRoom으로 Meta 스토어 서비스 중 | Meta 스토어 |

VRECORD 클리닝 비용(800만→100만원)과 Sing Together 지표(#1·7,000설치·50,000곡)는
사내 IR 자료 기준이며 외부 검증 출처가 없다.

## 사내 자료 출처 (2026.09 보강)

| 슬라이드 | 출처 |
|---|---|
| 라이브 파이프라인 (장비→UE5→NDI 송출) | Notion `브이레코드 직원 / 호코레 / 개발 스펙 요약` |
| 사내 개발 인프라 | GitHub org `VRECORD` 저장소 30개 (blender-retarget, warudo, obs-dock, intranet 등) |
| Sing Together 빌드·배포 자동화 | GitHub org `StasisFieldStudio` — SingTogether 저장소의 Actions 워크플로우 6종 |
| Sing Together 저장소 구성 | 동 org — Client / Server / Video-Server / Admin / Admin-API / AndroidMicrophone |
| 프레임 페이싱 트러블슈팅 | Notion `개발팀 작업 트래커 / 언리얼 수직동기화 확인` |
| 손가락 IK·FK 하이브리드 | Notion `개발팀 작업 트래커 / IK FK 신기술 리서치` |

Notion 워크스페이스는 VRECORD 사내이며 `개발팀 작업 트래커`에 UE 안티앨리어싱·VSync·
IK FK·StretchSense 연동 등 개별 작업 기록이 더 있다. 필요하면 개별 슬라이드로 확장 가능.
