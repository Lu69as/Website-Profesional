let spans = document.querySelectorAll('header .desc .board > span');
function boardAppear() {
  for (let x = 0; x < spans.length; x++) {
    setTimeout(() => {
      spans.forEach((e) => { e.classList.remove('appear') })
      spans[0].parentElement.style.width = spans[x].clientWidth + 'px';
      spans[x].classList.add('appear')
    }, x * 4000);
  }
}

boardAppear();
setInterval(() => { boardAppear() }, spans.length * 4000);

for (let i = 1; i < 5; i++)
  document.querySelector('#employment p').innerHTML += '* EMPLOYMENT NEWS *' + document.querySelector('#employment p').innerHTML;

document.documentElement.style.setProperty('--employment-txt-left',
  document.querySelector('#employment p').style.left = '-' + (document.querySelector('#employment p').clientWidth / 16 + 23.5) + 'px'
);

function ageCalc() {
  let d = new Date();
  if ((d.getMonth() < 7) || (d.getMonth() == 7 && d.getDate() < 15))
    return d.getFullYear() - 2007;
  else if ((d.getMonth() == 7 && d.getDate() >= 15) || (d.getMonth() > 7))
    return d.getFullYear() - 2006;
}

document.querySelectorAll('.age').forEach((e) => {
  e.innerHTML = ageCalc();
})

window.onscroll = () => {
  const currentPosition = window.scrollY;
  let activeArticle = null;
  const articles = document.querySelectorAll('article');
  const firstArticle = articles[0] || 0; // setting default value to avoid errors
  const lastArticle = articles[articles.length - 1] || 0; // setting default value to avoid errors
  const offset = 100;
  
  document.querySelectorAll('article').forEach(article => {
    // Defining the start and end of the article
    const articleStart = article.offsetTop - offset;
    const articleEnd = articleStart + article.offsetHeight;
    
    // Checking if postition of screen is within an article and then setting activeArticle to be equal to article
    if (currentPosition >= articleStart && currentPosition <= articleEnd) {
      activeArticle = article;
    };
  });
  try {
    document.querySelectorAll("nav > div a").forEach(navItem => {
      navItem.classList.remove("active");
      if (activeArticle.id.toLowerCase() == navItem.innerHTML.toLowerCase()) {
        navItem.classList.add("active");
      }
    });
  }
  catch (err) {}
}