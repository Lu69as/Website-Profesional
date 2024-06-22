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

// document.querySelectorAll('#experience article > button').forEach((e) => {
//   e.addEventListener('click', () => {
//     document.querySelectorAll('#experience .window').forEach((e) => {
//       e.classList.remove('open');
//     })

//     e.nextElementSibling.classList.add('open');

//     e.nextElementSibling.firstElementChild.addEventListener("click", () => {
//       e.nextElementSibling.classList.remove('open');
//     })

//     document.addEventListener('keydown', function(k) {
//       if (k.key == 'Escape') e.nextElementSibling.classList.remove('open');
//     })
//   })
// })

// document.querySelectorAll('#experience .window section').forEach((e) => {
//   e.lastElementChild.setAttribute('style', 'height: fit-content !important');
//   e.lastElementChild.style.height = e.lastElementChild.offsetHeight + 'px';

//   e.firstElementChild.addEventListener('click', () => {
//     e.classList.toggle('closed');

//     document.querySelectorAll('#experience .window section').forEach((x) => {
//       if (x != e) x.classList.add('closed')
//     })
//   })
// })