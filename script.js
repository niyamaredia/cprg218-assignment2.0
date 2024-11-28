document.addEventListener('DOMContentLoaded', () => {
    const contentBox = document.getElementById('content-box');

    const content = {
        intro: `
            <h2>Introduction</h2>
            <p>
                The evolution of airplanes spans over a century, transforming the way people travel, connect, and explore. 
                From the Wright Brothers' humble beginnings to the advanced commercial and military aircraft of today, 
                the story of aviation is one of innovation and determination.
            </p>
            <p>
                Each decade brought new breakthroughs, from the first powered flight to the advent of jet engines 
                and the emergence of global air travel networks.
            </p>
            <img src="images/intro.jpg" alt="Airplanes flying through clouds">
        `,
        "1900s": `
            <h2>1900s: The First Powered Flight</h2>
            <p>
                In 1903, the Wright Brothers achieved the first powered flight in Kitty Hawk, North Carolina. 
                Their airplane, the Flyer, flew for just 12 seconds but marked a revolutionary moment in aviation history.
            </p>
            <p>
                Their success laid the foundation for the rapid advancement of aviation technology throughout the 20th century.
            </p>
            <img src="images/wright-brothers.jpg" alt="The Wright Brothers' first airplane">
        `,
        "1940s": `
            <h2>1940s: Military Advancements</h2>
            <p>
                World War II drove massive advancements in aircraft technology. The demand for faster, more efficient planes 
                led to the creation of jet engines, radar systems, and long-range bombers.
            </p>
            <p>
                Aircraft like the Spitfire and P-51 Mustang played crucial roles in shaping the outcome of the war.
            </p>
            <img src="images/wwii-planes.jpg" alt="World War II fighter planes">
        `,
        "2000s": `
            <h2>2000s: Modern Aviation</h2>
            <p>
                The 21st century introduced airplanes like the Boeing 787 Dreamliner and Airbus A350, setting new standards 
                for efficiency and passenger comfort.
            </p>
            <p>
                The future of aviation now includes electric planes, autonomous drones, and space tourism.
            </p>
            <img src="images/boeing-787.jpg" alt="A Boeing 787 Dreamliner">
        `
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

