// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--dark)';
        header.style.backdropFilter = 'none';
    }
});

// Animation for features on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe features for animation
document.querySelectorAll('.feature').forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(feature);
});

// Form validation for contact form (if added later)
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (!email.value || !message.value) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('يرجى إدخال بريد إلكتروني صحيح');
        return false;
    }
    
    return true;
}

// Load article content
document.addEventListener('DOMContentLoaded', function() {
    // This would typically load content from an external file or API
    // For now, we'll add some sample content
    const articleContent = `
        <h3>مقدمة عن لعبة GTA 5</h3>
        <p>جراند ثفت أوتو 5 (GTA V) هي واحدة من أكثر ألعاب الفيديو شهرة ونجاحاً في التاريخ. طورتها شركة روكستار جيمز وأصدرت لأول مرة في عام 2013 لأجهزة البلاي ستيشن 3 وإكس بوكس 360. منذ ذلك الحين، حققت اللعبة نجاحاً هائلاً وأصبحت من أكثر الألعاب مبيعاً حول العالم.</p>
        
        <div class="article-img">
            <img src="images/article1.jpg" alt="صورة لشخصية من GTA 5">
        </div>
        
        <h3>قصة اللعبة وأبطالها</h3>
        <p>تدور أحداث GTA 5 في مدينة لوس سانتوس الخيالية، التي تشبه لوس أنجلوس في الواقع. تتبع اللعبة قصة ثلاثة أبطال رئيسيين: مايكل دي سانتا، المتقاعد الذي يحاول الهروب من ماضيه الإجرامي؛ فرانكلين كلينتون، الشاب الطموح الذي يبحث عن فرصته في الحياة؛ وتريفور فيليبس، المجرم غير المتوقع الذي يعيش على حافة الهاوية.</p>
        
        <!-- باقي محتوى المقال -->
    `;
    
    document.querySelector('.article').innerHTML = articleContent;
});

// Counter animation for statistics
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target, 2000);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});
