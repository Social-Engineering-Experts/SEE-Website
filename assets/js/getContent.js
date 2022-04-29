const navbar = document.querySelector('#navbar');

const loadContent = (toFetch) => {
    
    removeTwitterScript();

    fetch(toFetch).then(res => res.text()).then(res => {
        document.getElementById('SEETF').innerHTML = res;
        setTime();
        addTwitterScript();
    });
}

const addTwitterScript = () => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.defer = true;
    script.id = 'twitter-wjs';
    document.body.appendChild(script);
}

const removeTwitterScript = () => {
    const script = document.getElementById('twitter-wjs');
    if (script)
        script.remove();
}

for (let i = 0; i < navbar.children.length; i++) {
    navLink = navbar.children[i].children[0];
    navLink.addEventListener('click', (e) => {

        let toFetch;

        switch (e.target.textContent.trim()) {
            case 'Home':
                return;
            case 'About':
                toFetch = 'about.inc.html';
                break;
            case 'Rules':
                toFetch = 'rules.inc.html';
                break;
            case 'FAQ':
                toFetch = 'faq.inc.html';
                break;
            case 'Prizes':
                toFetch = 'prizes.inc.html';
                break;
            case 'Results':
                toFetch = 'results.inc.html';
                break;
        }
        loadContent(toFetch);

        e.target.classList.add('active');
        for (let j = 0; j < navbar.children.length; j++) {
            let navLink = navbar.children[j].children[0];
            if (navLink.textContent.trim() != e.target.textContent.trim()) {
                navLink.classList.remove('active');
            }
        }
    });
}

loadContent('about.inc.html');