document.addEventListener('scroll', function() {
    var animatedDivs = document.querySelectorAll('.animated-div');
    
    animatedDivs.forEach(function(animatedDiv) {
        var rect = animatedDiv.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animatedDiv.classList.add('visible');
        }
    });
});
