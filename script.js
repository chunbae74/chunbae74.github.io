
function renderPortfolio() {
    const container = document.getElementById('portfolio-grid');
    if(!container) return;
    
    let html = '';
    portfolioData.forEach(item => {
        // 설정된 카테고리 스타일 가져오기 (없으면 Default 사용)
        const config = categoryConfig[item.category] || categoryConfig['Default'];

        // 태그 HTML 사용
        const tagsHtml = item.tags.map(tag => 
            `<span class="text-xs px-2 py-1 bg-gray-50 border border-gray-100 rounded text-gray-600">${tag}</span>`
        ).join('');

        // 카드 HTML 생성
        html += `
            <div class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                </div>`;
    });
    container.innerHTML = html;
}

// 초기화 및 라우팅 로직
document.addEventListener('DOMContentLoaded', function () {
    // 사이트 기본 설정들 (이름, contact 정보 등) 입력
    document.getElementById('site-title').innerText = userConfig.title;
    document.getElementById('user-name').innerText = userConfig.name;
    document.getElementById('about-user-name').innerText = userConfig.name;
    document.getElementById('nav-logo').innerText = userConfig.initial;
    document.getElementById('role').innerText = userConfig.role;
    document.getElementById('home-description').innerText = userConfig.description;
    document.getElementById('email').innerText = userConfig.email;
   
    


    renderPortfolio(); 
    lucide.createIcons();

// Routing Logic (SPA)
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active', 'animate-fade-in-up'));
        navLinks.forEach(link => {
            if(link.classList.contains('text-black')) {
                link.classList.remove('text-black');
                link.classList.add('text-gray-500');
            }
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
            e.preventDefault();
            showPage(this.getAttribute('href'));
        });
    });

    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    window.addEventListener('popstate', () => showPage(window.location.hash || '#home'));
    
    showPage(window.location.hash || '#home');
});
