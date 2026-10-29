// ─────────────────────────────────────────────────────────────
//  내 정보는 전부 이 파일에서 고칩니다. (이름, 소개, 링크, 프로젝트, 이력)
//  ko = 한글 페이지, en = 영어 페이지에 표시됩니다.
// ─────────────────────────────────────────────────────────────

export type Lang = 'ko' | 'en';

export const site = {
  githubUser: 'MakesMe-Fun',
  name: { ko: '이름', en: 'Your Name' },
  tagline: {
    ko: '배우고, 만들고, 기록합니다.',
    en: 'I learn, build, and write things down.',
  },
  intro: {
    ko: '캐나다에서 공부하는 학생입니다. 코딩, 프로젝트, 학교생활을 이곳에 기록하고 있어요. 이 문장은 src/data/site.ts 에서 바꿀 수 있습니다.',
    en: 'A student based in Canada. This is where I keep notes on code, projects, and school life. Edit this sentence in src/data/site.ts.',
  },
  location: { ko: '캐나다 BC', en: 'British Columbia, Canada' },
  links: [
    { label: 'GitHub', url: 'https://github.com/MakesMe-Fun' },
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/아이디' },
    // { label: 'Instagram', url: 'https://www.instagram.com/아이디' },
    // { label: 'Email', url: 'mailto:you@example.com' },
  ],
};

export const projects = [
  {
    title: { ko: '프로젝트 이름 1', en: 'Project One' },
    summary: {
      ko: '무엇을 만들었고, 왜 만들었는지 한두 문장으로 적어주세요.',
      en: 'One or two sentences on what you built and why.',
    },
    tags: ['Python', 'AI'],
    year: '2026',
    url: '',
  },
  {
    title: { ko: '프로젝트 이름 2', en: 'Project Two' },
    summary: {
      ko: '동아리, 봉사, 대회 같은 활동도 프로젝트로 넣을 수 있어요.',
      en: 'Clubs, volunteering, and competitions count as projects too.',
    },
    tags: ['Leadership'],
    year: '2025',
    url: '',
  },
];

export const resume = {
  education: [
    {
      when: '2023 – 2027',
      title: { ko: '고등학교 이름', en: 'High School Name' },
      detail: { ko: '도시, 주 · 졸업 예정', en: 'City, Province · Expected graduation' },
    },
  ],
  experience: [
    {
      when: '2025 – ',
      title: { ko: '활동 / 직책', en: 'Role / Activity' },
      detail: { ko: '어디에서, 무엇을 했는지', en: 'Where, and what you did' },
    },
  ],
  skills: ['Python', 'C++', 'JavaScript', 'Git'],
  awards: [
    { when: '2025', title: { ko: '수상 내역', en: 'Award name' } },
  ],
};
