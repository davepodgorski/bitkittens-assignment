document.addEventListener('DOMContentLoaded', function() {
  const catButton = document.querySelector('button.summon-cats');
  const catBoxes = document.querySelectorAll('.cat-box');
  console.log('yay cats')

link.addEventListener('click'), (event) => {
  console.log('Kittens Inbound!')
  axios({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
  }).then(response) => {
      console.log(response.data);
      catBoxes.forEach((imgBox, index) => {
        imgBox.innerHTML = "";
        const catPic = document.createElement('img');
        catPic.src = response.data.cats[index].photo;
        catPic.alt = `Picture of ${response.data.cats[index].name}`;
        imgBox.appendChild(catPic);
      });
    });
  });
});
