document.addEventListener("DOMContentLoaded", function() {
    document.body.style.pointerEvents = "none";
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen' || (e.key === 'c' && e.ctrlKey) || (e.key === 'Insert' && e.shiftKey)) {
        e.preventDefault();
        alert('Screenshots are not allowed.');
    }
});
