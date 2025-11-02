document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold:0
    };
    const onEntry = (enteries, observer) => {
        enteries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(onEntry, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const sc = window.scrollY;
        if(sc>60) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
        lastScroll = sc;
    })
})