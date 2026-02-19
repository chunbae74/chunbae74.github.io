// 포트폴리오 내용들
const portfolioData = [
    {
        title: "외국인 유학생 튜터링 프로그램",
        category: "Volunteering",
        desc: "25년도 2학기 튜터로 활동",
        tags: ["튜터링"]
    },
    {
        title: "APOC 해커톤",
        category: "Contest",
        desc: "APOC 해커톤 1기 수료 (25.08.15 ~ 08.16)",
        tags: ["AR", "XR"]
    },
    {
        title: "Upstage Agentic Workflow 해커톤",
        category: "Award",
        desc: "최우수상 수상 (25.11.16 ~ 11.14)",
        tags: ["n8n", "Upstage", "LLM", "자동화"]
    },
    {
        title: "International Collegiate Programming Contest - ICPC",
        category: "Contest",
        desc: "ICPC 본선 진출",
        tags: ["PS", "Algorithm"]
    },
    {
        title: "SDU COSS 소프트웨어 개발보안 시큐어코딩",
        category: "Award",
        desc: "우수상(한국정보보호학회장상) 수상 (25.10.17 ~ 25.11.28)",
        tags: ["AI", "치매진단 서비스", "시큐어코딩"]
    },
    {
        title: "KNU Google Developer Groups",
        category: "Activity",
        desc: "AI 세션 소속 (2025 - Present)",
        tags: ["AI"]
    },
    {
        title: "AlLerGy Club Leader",
        category: "Activity",
        desc: "강원대학교 알고리즘 스터디 동아리 회장 (2026 - Present)",
        tags: ["PS", "Algorithm"]
    },
    {
        title: "Coding Apple Spring Boot & JPA",
        category: "Study",
        desc: "Spring Boot & JPA 강의 수료 (2026.01.13)",
        tags: ["Study"]
    },
    {
        title: "AI BOOTCAMP AWARDS 해커톤",
        category: "Award",
        desc: "최우수상 수상 (26.01.19 ~ 01.20)",
        tags: ["AI", "Android", "공공데이터"]
    },
    {
        title: "AI 학습법 및 대학생활 노하우 공모전",
        category: "Award",
        desc: "장려상(강원권 공동 교육혁신센터장상) 수상 (25.12.12 ~ 26.01.26)",
        tags: ["AI"]
    }
];

// 사용자 개인 정보 (#home에서 사용됨)
const userConfig = {
    name: "배준영",
    title: "Junyoung Bae | 포트폴리오",
    role: "KNU Computer Science Student",
    initial: "JYB.",
    description: "해보고 싶은 것이 많은 대학생입니다 !!",
    email: "chunbaekim74@gmail.com",
    githubId: "chunbae74",
    blog: "https://chunbae74.tistory.com/",
    baekjoonId: "chunbae74",
};

// about user (#about 페이지에서 사용됨)
const userDetails = {

};


// 카테고리별 아이콘 및 색상 설정 (유지보수 편의성)
// 아이콘: https://lucide.dev/icons/code-xml
// 색상: https://tailwindcss.com/docs/colors
const categoryConfig = {
    'Internship': { icon: 'briefcase', colorClass: 'text-accent', bgClass: 'bg-blue-50' },
    'Paper':      { icon: 'file-text', colorClass: 'text-purple-600', bgClass: 'bg-purple-50' },
    'Activity':   { icon: 'users',     colorClass: 'text-green-600', bgClass: 'bg-green-50' },
    'Award':      { icon: 'trophy',    colorClass: 'text-yellow-600', bgClass: 'bg-yellow-50' },
    'Contest':  { icon: 'code',      colorClass: 'text-gray-600', bgClass: 'bg-gray-50' },
    'Volunteering': { icon: 'mic',     colorClass: 'text-pink-600', bgClass: 'bg-pink-50' },
    'Research':   { icon: 'cpu',       colorClass: 'text-indigo-600', bgClass: 'bg-indigo-50' },
    'Study':    {'icon': 'book-open-text', colorClass: 'text-purple-500', bgClass: 'bg-purple-50'},
    'PM':         { icon: 'zap',       colorClass: 'text-orange-600', bgClass: 'bg-orange-50' },
    'Default':    { icon: 'star',      colorClass: 'text-gray-600', bgClass: 'bg-gray-50' }
};