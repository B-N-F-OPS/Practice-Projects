const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "Assets/vinacc.webp",
        post: "Assets/vincent.webp",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "Assets/gustacc.webp",
        post: "Assets/gustave.webp",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "Assets/joseph.jpg",
        post: "Assets/josacc.webp",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// when user clicks love or dbclick post, likes increase by 1
// when user scrolls, the next object gets rendered.

function addLikes() {
    const likesDisplayEl = document.getElementById('likes-display');
    let likes = Number(likesDisplayEl.innerText);
    likes += 1
    likesDisplayEl.textContent = likes + " "
}

const likesEl = document.getElementById('likes-btn');
const postEl = document.getElementById('post');

likesEl.addEventListener('click', function() {
    addLikes()
});

postEl.addEventListener('dblclick', function() {
    addLikes()
});

// when user scrolls, i want the next slide to render.
const ProfileInfoEl = document.getElementById('ProfileInfo');
const mainPostEl = document.getElementById('mainPost');
const footerEl = document.getElementById('footer');

//the scroll function
function scroll(secprofile, secpost, secfooter) {
    let profile = ''
    let mainpost = ''
    let footer = ''
    // for (let i=0; i<posts.length; i++) - substituted this loop with for of loop
    for (let post of posts) {
        profile = `<img class="avatar" src="${post.avatar}" alt="account of mwenye picha">
        <h2>${post.name}<br><span class="place">${post.location}</span></h2>`

        mainpost = `<img  id="post" class="post" src="${post.post}" alt="this guys image displayed in the page"></img>`

        footer = `<h3><span id="likes-display">${post.likes}</span> likes</h3>
        <h4><strong>${post.username}</strong> ${post.comment}</h4>`
    }
    secprofile.innerHTML = profile
    secpost.innerHTML = mainpost
    secfooter.innerHTML = footer
};


window.addEventListener('scroll', () => {
    scroll(ProfileInfoEl, mainPostEl, footerEl)
});