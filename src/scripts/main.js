import { GetBacon } from './utils';

const baconEl = document.querySelector('.bacon');

GetBacon()
  .then((res) => {
    const markup = res.reduce((acc, val) => {
      const result = `${acc}<p>${val}</p>`;
      return result;
    }, '');

    baconEl.innerHTML = markup;
  })
  .catch((err) => { baconEl.innerHTML = err; });
