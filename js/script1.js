const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '10px'
    section.style.borderRadius = '20px';
    section.style.paddingLeft = '8px';
    section.style.backgroundColor='gray'
    console.log(sections);
}
// const eudname = document.getElementById('edu-container');
// eudname.style.backgroundColor='yellow'
const placeContainer = document.getElementById('textcenter');
placeContainer.classList.add("yello-bg");