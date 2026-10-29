# MakesMe-Fun.github.io

개인 포트폴리오 + 블로그 (한국어 / English). Astro로 만들고 GitHub Pages에 무료로 올립니다.

완성되면 주소: **https://makesme-fun.github.io**

---

## 1. 처음 올리기 (한 번만)

1. GitHub에 로그인 → 오른쪽 위 **+** → **New repository**
2. Repository name에 정확히 **`MakesMe-Fun.github.io`** 입력 → **Public** → Create
3. 이 폴더 안의 파일을 전부 그 저장소에 올리기
   - 가장 쉬운 방법: [GitHub Desktop](https://desktop.github.com) 설치 → 저장소 Clone → 이 폴더 내용을 복사 → Commit → Push
   - 웹에서 드래그해서 올려도 되지만, **`.github` 폴더가 꼭 같이 올라가야** 합니다. (Mac Finder에서는 `Cmd + Shift + .` 을 누르면 숨김 폴더가 보입니다)
4. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 선택
5. **Actions** 탭에서 초록 체크가 뜨면 (1~2분) 위 주소로 접속

이후로는 파일을 고쳐서 Push 할 때마다 자동으로 사이트가 갱신됩니다.

## 2. 내 정보 바꾸기

| 바꿀 것 | 파일 |
|---|---|
| 이름, 소개, 위치, 링크(LinkedIn·Instagram 등) | `src/data/site.ts` |
| 프로젝트 카드 | `src/data/site.ts` 의 `projects` |
| 이력(학력·경험·수상·기술) | `src/data/site.ts` 의 `resume` |
| 블로그 글 (한글) | `src/content/blog/ko/*.md` |
| 블로그 글 (영어) | `src/content/blog/en/*.md` |
| 색상·글꼴 | `src/styles/global.css` 맨 위 `:root` |

## 3. 새 글 쓰기

`src/content/blog/ko/` 안에 `글주소.md` 파일을 만들고 맨 위에 아래처럼 적습니다.

```md
---
title: 글 제목
description: 목록에 보일 한 줄 설명
date: 2026-11-01
tags: [학교, 코딩]
---

여기부터 본문. ## 소제목, **굵게**, - 목록, 표, 이미지 다 됩니다.
```

- 영어판은 `src/content/blog/en/` 에 **같은 파일 이름**으로 만들면, 글 안에서 English 버튼을 눌렀을 때 서로 연결됩니다.
- 아직 공개하기 싫은 글은 `draft: true` 를 넣으면 사이트에 안 보입니다.
- 이미지는 `public/images/` 에 넣고 본문에서 `![설명](/images/사진.jpg)` 로 씁니다.

## 4. 내 컴퓨터에서 미리 보기 (선택)

[Node.js](https://nodejs.org) 설치 후 이 폴더에서:

```bash
npm install
npm run dev
```

→ http://localhost:4321 에서 저장할 때마다 바로 바뀌는 걸 볼 수 있어요.

## 5. 나중에 해볼 것

- **네이버 검색 노출**: [네이버 서치어드바이저](https://searchadvisor.naver.com)에서 사이트 등록 → 받은 코드를 `src/layouts/Base.astro` 의 `naver-site-verification` 주석에 넣기
- **구글 검색 노출**: Google Search Console에 주소 등록
- **내 도메인**(예: `myname.com`): 도메인 구입 후 저장소 Settings → Pages → Custom domain 에 입력 (연 1~2만 원). 안 사도 지금 주소로 계속 무료입니다.
- 이 경우 `astro.config.mjs` 의 `site` 주소도 새 도메인으로 바꿔주세요.
