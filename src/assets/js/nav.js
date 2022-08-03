document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const footerLinks = document.querySelectorAll('.footer__nav-link');

    onNavHandler(navLinks);
    onNavHandler(footerLinks);

    function onNavHandler(navLinks) {
        navLinks.forEach((link, i , links) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                links.forEach((item) => item.classList.remove('active'));

                link.classList.add('active');

                const blockId = link.getAttribute('href').substring(1);

                document.getElementById(blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                const navMobile = link.closest(".nav--mobile");
                const body = document.body;

                if (navMobile) {
                    body.classList.remove("show-sidebar");
                }
            })
        })
    }
});