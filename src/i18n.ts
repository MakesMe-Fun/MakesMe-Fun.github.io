import type { Lang } from './data/site';

export const ui = {
  ko: {
    home: '홈', blog: '블로그', projects: '프로젝트', resume: '이력',
    latest: '최근 글', allPosts: '전체 글 보기', minRead: '분',
    back: '← 블로그로', updated: '수정', switchLang: 'English',
    education: '학력', experience: '경험', skills: '기술', awards: '수상',
    noPosts: '아직 글이 없어요.', view: '보기 →',
    blogIntro: '배운 것, 겪은 것, 만든 것을 씁니다.',
    projectsIntro: '만들고 참여한 것들.',
  },
  en: {
    home: 'Home', blog: 'Blog', projects: 'Projects', resume: 'Resume',
    latest: 'Latest posts', allPosts: 'All posts', minRead: 'min read',
    back: '← Back to blog', updated: 'Updated', switchLang: '한국어',
    education: 'Education', experience: 'Experience', skills: 'Skills', awards: 'Awards',
    noPosts: 'No posts yet.', view: 'View →',
    blogIntro: 'Things I learned, lived through, and built.',
    projectsIntro: 'Things I made and took part in.',
  },
} as const;

export const t = (lang: Lang) => ui[lang];

/** 언어별 경로: ko는 /blog, en은 /en/blog */
export const path = (lang: Lang, p = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = p.startsWith('/') ? p : `/${p}`;
  return lang === 'ko' ? `${base}${clean}` : `${base}/en${clean === '/' ? '/' : clean}`;
};

/** 현재 경로를 반대 언어 경로로 바꿈 */
export const swapLang = (pathname: string, lang: Lang) => {
  if (lang === 'ko') return `/en${pathname === '/' ? '/' : pathname}`;
  const stripped = pathname.replace(/^\/en/, '');
  return stripped === '' ? '/' : stripped;
};

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-CA', {
    timeZone: 'UTC', year: 'numeric', month: lang === 'ko' ? 'long' : 'short', day: 'numeric',
  });

export const readingMinutes = (body = '') => {
  const words = body.trim().split(/\s+/).length;
  const hangul = (body.match(/[가-힣]/g) || []).length;
  return Math.max(1, Math.round(words / 200 + hangul / 900));
};
