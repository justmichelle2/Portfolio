document.querySelectorAll('.profile').forEach(function(profile) {
    profile.addEventListener('mouseenter', function() {
        // Dot stars
        profile.querySelectorAll('.profile-dot-star').forEach(dot => dot.remove());
        for (let i = 0; i < 8; i++) {
            const dot = document.createElement('div');
            dot.className = 'profile-dot-star';
            const x = Math.random() * (profile.offsetWidth - 10);
            const y = Math.random() * (profile.offsetHeight - 10);
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            profile.appendChild(dot);
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
        profile.classList.remove('flash-left');
        profile.classList.add('flash-right');
    });
    profile.addEventListener('mouseleave', function() {
        profile.classList.remove('flash-right');
        profile.classList.add('flash-left');
    });
});