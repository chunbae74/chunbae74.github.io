function renderPortfolio() {
    const container = document.getElementById('portfolio-grid');
    if(!container) return;
    
    let html = '';
    portfolioData.forEach(item => {
        // 설정된 카테고리 스타일 가져오기 (없으면 Default 사용)
        const config = categoryConfig[item.category] || categoryConfig['Default'];

        // 태그 HTML 생성
        const tagsHtml = item.tags.map(tag => 
            `<span class="text-[10px] px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-gray-500 font-medium">${tag}</span>`
        ).join('');

        // 카드 HTML 생성 (비어있던 부분 채움)
        html += `
            <div class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/20 transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                    <div class="w-10 h-10 ${config.bgClass} ${config.colorClass} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i data-lucide="${config.icon}" class="w-5 h-5"></i>
                    </div>
                    <span class="text-[11px] font-bold uppercase tracking-wider ${config.colorClass}">${item.category}</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-accent transition-colors">${item.title}</h3>
                <p class="text-sm text-secondary mb-4 line-clamp-2">${item.desc}</p>
                <div class="flex flex-wrap gap-1.5 mt-auto">
                    ${tagsHtml}
                </div>
            </div>`;
    });
    container.innerHTML = html;
    lucide.createIcons(); // 아이콘 재생성
}

document.addEventListener('DOMContentLoaded', function () {
    // 1. 기본 설정 정보 입력
    document.getElementById('site-title').innerText = userConfig.title;
    document.getElementById('user-name').innerText = userConfig.name;
    document.getElementById('about-user-name').innerText = userConfig.name;
    document.getElementById('nav-logo').innerText = userConfig.initial;
    document.getElementById('role').innerText = userConfig.role;
    document.getElementById('home-description').innerText = userConfig.description;
    document.getElementById('email').innerText = userConfig.email;
    document.getElementById('email-link').href = `mailto:${userConfig.email}`;
    document.getElementById('blog-link').href = userConfig.blog;
    document.getElementById('baekjoon-link').href = `https://www.acmicpc.net/user/${userConfig.baekjoonId}`;
    document.getElementById('baekjoon').href = userConfig.baekjoonId;
    document.getElementById('about-description').innerText = userDetails.aboutMe;
    document.getElementById('github-link').href = `https://github.com/${userConfig.githubId}`;

    // asset 폴더에 profile.jpg 사진 넣어둘 것.
    document.getElementById('profile-img').src = `https://raw.githubusercontent.com/${userConfig.githubId}/${userConfig.githubId}.github.io/refs/heads/main/asset/profile.jpg`
    
    
    // 2. 타임라인(Experience) 렌더링
    const timelineContainer = document.querySelector('.space-y-8.border-l-2');
    if (timelineContainer && userDetails.timeline) {
        timelineContainer.innerHTML = userDetails.timeline.map((item, index) => `
            <div class="relative">
                <span class="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 ${index === 0 ? 'border-accent' : 'border-gray-300'} rounded-full"></span>
                <h4 class="font-bold text-lg">${item.title}</h4>
                <p class="text-sm text-gray-400 mb-1">${item.date}</p>
                <p class="text-sm text-secondary">${item.desc}</p>
            </div>
        `).join('');
    }

    // 3. 기술 스택(Focus Areas) 렌더링
    const skillContainer = document.querySelector('.flex.flex-wrap.gap-2');
    if (skillContainer && userDetails.skills) {
        skillContainer.innerHTML = userDetails.skills.map(skill => `
            <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-default">${skill}</span>
        `).join('');
    }

    renderPortfolio(); 
    
    // SPA 라우팅 로직 (기존 코드 유지)
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active', 'animate-fade-in-up'));
        navLinks.forEach(link => {
            link.classList.remove('text-black');
            link.classList.add('text-gray-500');
        });

        const targetPage = document.querySelector(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            setTimeout(() => targetPage.classList.add('animate-fade-in-up'), 10);
        }

        navLinks.forEach(link => {
            if (link.getAttribute('href') === pageId) {
                link.classList.remove('text-gray-500');
                link.classList.add('text-black');
            }
        });

        mobileMenu.classList.add('hidden');
        if(window.location.hash !== pageId) history.pushState(null, null, pageId);
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                showPage(href);
            }
        });
    });

    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    window.addEventListener('popstate', () => showPage(window.location.hash || '#home'));
    showPage(window.location.hash || '#home');
});