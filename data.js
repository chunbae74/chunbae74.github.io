// 포트폴리오 내용들
const portfolioData = [
    {
        title: "Internship in IMPACSYS",
        category: "Internship",
        desc: "\"우리울릉\" QA in IMPACSYS Co., Ltd",
        tags: ["Spring", "JS"]
    },
    {
        title: "BitNet-MCP Hybrid System",
        category: "Paper",
        desc: "Efficient Query Processing. ASK Submission as First Author.",
        tags: ["BitNet", "MCP"]
    },

    // ... 나머지 데이터들을 여기에 모두 넣으세요.
    {
        title: "Software Development Security Contest",
        category: "Award",
        desc: "Korea Institute of Information Security & Cryptology President's Award",
        tags: ["AI", "Android", "Voice Data"]
    }
];

// 사용자 개인 정보 (#home에서 사용됨)
const userConfig = {
    name: "Junyoung Bae",
    title: "Junyoung Bae | 포트폴리오",
    role: "KNU Computer Science Student",
    initial: "JYB.",
    description: "해보고 싶은 것이 많은 대학생입니다.",
    email: "chunbaekim74@gmail.com"
};

// about user (#about 페이지에서 사용됨)
const userDetails = {

};


// 카테고리별 아이콘 및 색상 설정 (유지보수 편의성)
const categoryConfig = {
    'Internship': { icon: 'briefcase', colorClass: 'text-accent', bgClass: 'bg-blue-50' },
    'Paper':      { icon: 'file-text', colorClass: 'text-purple-600', bgClass: 'bg-purple-50' },
    'Activity':   { icon: 'users',     colorClass: 'text-green-600', bgClass: 'bg-green-50' },
    'Award':      { icon: 'trophy',    colorClass: 'text-yellow-600', bgClass: 'bg-yellow-50' },
    'Contest':  { icon: 'code',      colorClass: 'text-gray-600', bgClass: 'bg-gray-50' },
    'Volunteering': { icon: 'mic',     colorClass: 'text-pink-600', bgClass: 'bg-pink-50' },
    'Research':   { icon: 'cpu',       colorClass: 'text-indigo-600', bgClass: 'bg-indigo-50' },
    'PM':         { icon: 'zap',       colorClass: 'text-orange-600', bgClass: 'bg-orange-50' },
    'Default':    { icon: 'star',      colorClass: 'text-gray-600', bgClass: 'bg-gray-50' }
};