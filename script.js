document.querySelector('.grid').addEventListener('mouseover', function(e) {
  // console.dir(e.target); // check to see that I clicked on IMG only
  if (e.target.tagName === 'IMG') {
    const zoomedDiv = document.createElement('div');
    zoomedDiv.classList.add('preview');
    e.target.parentNode.appendChild(zoomedDiv);  // Add preview div to IMG parent

    const zoomedImg = document.createElement('img');
    const src = e.target.getAttribute('src');
    const hiresSrc = src.substring(0, src.length - 7) + '.jpg';
    zoomedImg.setAttribute('src', hiresSrc);
    zoomedDiv.appendChild(zoomedImg); // Add IMG to preview div
  } // check to see that I clicked on IMG only
}, false); // click event