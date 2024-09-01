// Optional JavaScript for additional interactions
// Typewriting effect
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".service p");
    elements.forEach((element) => {
        const text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        const typeEffect = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typeEffect);
            }
        }, 50);
    });
});


// JavaScript for Modal
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('contact-sales-modal');
    var btn = document.getElementById('contact-sales-btn');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});


//RESEARCH RESPONSIVE scrollBehavior: 
<script>
    document.addEventListener('DOMContentLoaded', function () {
        var elements = document.querySelectorAll('.scroll-animation');
        var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        elements.forEach(function (element) {
            observer.observe(element);
        });
    });
</script>
