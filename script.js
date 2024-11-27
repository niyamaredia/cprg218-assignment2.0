document.addEventListener('DOMContentLoaded', () => {
    const contentBox = document.getElementById('content-box');

    const content = {
        intro: `<h2>Introduction</h2><p>The evolution of airplanes spans over a century, transforming the way people travel and connect worldwide.</p><img src="images/intro.jpg" alt="Introduction">`,
        "1900s": `<h2>1900s</h2><p>In 1903, the Wright Brothers achieved the first powered flight, marking the beginning of modern aviation.</p><img src="images/wright-brothers.jpg" alt="Wright Brothers">`,
        "1940s": `<h2>1940s</h2><p>World War II saw massive advancements in aircraft technology, including the development of jet engines.</p><img src="images/wwii-planes.jpg" alt="WWII Planes">`,
        "2000s": `<h2>2000s</h2><p>Modern aviation is defined by efficient, high-capacity aircraft like the Boeing 787 Dreamliner.</p><img src="images/boeing-787.jpg" alt="Boeing 787">`
    };

    document.getElementById('intro-btn').addEventListener('click', () => showContent('intro'));
    document.getElementById('1900s-btn').addEventListener('click', () => showContent('1900s'));
    document.getElementById('1940s-btn').addEventListener('click', () => showContent('1940s'));
    document.getElementById('2000s-btn').addEventListener('click', () => showContent('2000s'));

    function showContent(period) {
        contentBox.innerHTML = content[period];
        contentBox.style.display = 'block';
    }
});
