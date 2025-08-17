
['.profile', '.achievements', '.education', '.area'].forEach(function(selector) {
    document.querySelectorAll(selector).forEach(function(section) {
        section.addEventListener('mouseenter', function() {
            // Dot stars
            section.querySelectorAll('.profile-dot-star').forEach(dot => dot.remove());
            for (let i = 0; i < 8; i++) {
                const dot = document.createElement('div');
                dot.className = 'profile-dot-star';
                const x = Math.random() * (section.offsetWidth - 10);
                const y = Math.random() * (section.offsetHeight - 10);
                dot.style.left = x + 'px';
                dot.style.top = y + 'px';
                section.appendChild(dot);
                setTimeout(() => {
                    dot.style.opacity = 1;
                    const angle = Math.random() * 2 * Math.PI;
                    const distance = 40 + Math.random() * 40;
                    const dx = Math.cos(angle) * distance;
                    const dy = Math.sin(angle) * distance;
                    dot.animate([
                        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                        { transform: `translate(${dx}px, ${dy}px) scale(1.2)`, opacity: 1 },
                        { transform: `translate(${dx * 1.2}px, ${dy * 1.2}px) scale(0.5)`, opacity: 0 }
                    ], {
                        duration: 1200,
                        easing: 'ease-out',
                        fill: 'forwards'
                    });
                }, 50);
                setTimeout(() => {
                    dot.remove();
                }, 1300);
            }
            // Flash effect
            section.classList.remove('flash-left');
            section.classList.add('flash-right');
        });
        section.addEventListener('mouseleave', function() {
            section.classList.remove('flash-right');
            section.classList.add('flash-left');
        });
    });
});