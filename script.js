document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  // 1. NAV Animation
  tl.from("#navbar", { y: -20, opacity: 0, duration: 0.6, ease: "cubic.out" })
    .to(".nav-item", { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "cubic.out" }, "-=0.4");

  // SCROLL BEHAVIOR
  let lastScroll = 0, stickyTimeout;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    const navbar = document.getElementById('navbar');
    const sticky = document.getElementById('mobile-sticky');
    
    navbar.style.boxShadow = current > lastScroll && current > 100
      ? '0 8px 20px rgba(26,62,108,0.15)'
      : '0 2px 4px rgba(0,0,0,0.1)';

    if (current > 300) {
      sticky.classList.add('visible');
      clearTimeout(stickyTimeout);
      stickyTimeout = setTimeout(() => {
        if (window.scrollY === current) sticky.classList.remove('visible');
      }, 3000);
    } else {
      sticky.classList.remove('visible');
    }
    lastScroll = current;
  });

  // 2. SEARCH Animation
  const searchInput = document.querySelector('.search-input');
  const mag = document.querySelector('.magnifying-glass');
  searchInput.addEventListener('focus', () => {
    searchInput.style.width = window.innerWidth < 768 ? '100%' : '24rem';
    searchInput.style.boxShadow = '0 0 0 3px rgba(52,152,219,0.3)';
    gsap.to(mag, { scale: 1.2, rotation: 360, duration: 0.5 });
  });
  searchInput.addEventListener('blur', () => {
    searchInput.style.width = '16rem';
    searchInput.style.boxShadow = 'none';
    gsap.to(mag, { scale: 1, rotation: 0, duration: 0.3 });
  });

  // 3. NOTIFICATION
  function showNotification(count = 3) {
    const badge = document.querySelector('.noti-btn .badge');
    badge.textContent = count;
    badge.style.opacity = 1;
    gsap.fromTo(badge, { scale: 0 }, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    gsap.to('.noti-btn svg', { rotation: 8, repeat: 5, yoyo: true, duration: 0.1 });

    for (let i = 0; i < 3; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = `${50 + i * 12}px`;
      c.style.top = '12px';
      document.querySelector('.noti-btn').appendChild(c);
      setTimeout(() => c.remove(), 600);
    }
  }

  // 4. WELCOME Text
  gsap.to(".welcome-text", { x: 0, opacity: 1, duration: 0.7, delay: 0.8 });

  // 5. STREAK Fill
  gsap.to(".streak-fill", { width: "75%", duration: 1.5, ease: "power2.out", delay: 1.5 });

  // 6. PROFILE Parallax
  const profileCard = document.getElementById('profile-card');
  profileCard.addEventListener('mousemove', (e) => {
    const rect = profileCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const tiltX = (y - cy) / 8;
    const tiltY = (cx - x) / 8;
    gsap.to(profileCard.querySelector('img'), { rotationX: tiltX, rotationY: tiltY, duration: 0.3, ease: "none" });
  });

  // 7. SIMULATION CARDS
  gsap.utils.toArray('.simulation-card').forEach((card, i) => {
    gsap.to(card, {
      rotateY: 0,
      opacity: 1,
      duration: 0.6,
      delay: 0.3 + i * 0.2,
      ease: "cubic.out",
      onComplete: () => {
        gsap.to(card.querySelector('img'), { opacity: 1, duration: 0.5 });
        const pb = card.querySelector('.progress-bar');
        pb.classList.add('filled');
        if (parseFloat(pb.style.getPropertyValue('--progress') || '0') > 0) {
          gsap.fromTo(card.querySelector('.continue-btn'), { scale: 0.9 }, { scale: 1.1, yoyo: true, repeat: 1, duration: 0.3 });
        }
      }
    });
  });

  // 8. CONTINUE BUTTON Ripple + Feedback
  document.querySelectorAll('.continue-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
      setTimeout(() => {
        btn.style.backgroundColor = '#28A745';
        btn.innerHTML = 'Resumed';
      }, 300);
    });
  });

  // 9. ACCORDION
  document.querySelectorAll('.assignment-row').forEach(row => {
    row.addEventListener('click', () => {
      const expanded = row.dataset.expanded === 'true';
      const details = row.querySelector('.assignment-details');
      const icon = row.querySelector('svg');
      if (!expanded) {
        details.classList.remove('hidden');
        gsap.fromTo(details, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4 });
        icon.style.transform = 'rotate(180deg)';
        row.dataset.expanded = 'true';
      } else {
        gsap.to(details, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => details.classList.add('hidden')
        });
        icon.style.transform = 'rotate(0deg)';
        row.dataset.expanded = 'false';
      }
    });
  });

  // Simulate notification
  setTimeout(() => showNotification(3), 3000);
});
