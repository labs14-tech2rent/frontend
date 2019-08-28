// document.querySelector('.rating') && const rating = document.querySelector('.rating')
function RateUser(props) {
  window.addEventListener('DOMContentLoaded', event => {
    const rating = document.querySelector('.rating').children;

    console.log(rating.length);

    for (let i = 0; i < rating.length; i++) {
      rating[i].addEventListener('click', e => {
        e.target.classList.toggle('selected');
      });
    }
  });
}

export default RateUser;
