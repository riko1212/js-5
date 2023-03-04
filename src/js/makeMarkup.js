'use strict';
import Notiflix from 'notiflix';

export const makeMarkup = (name, list, info) => {
  if (name.length > 10) {
    throw new Error(
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      )
    );
  } else if (name.length >= 2 && name.length <= 10) {
    const countryNamesList = name.map(el => {
      return `
              <li>
                <img src="${el.flags.svg}" alt="${el.name} flag" width="50" height="30"
                <span>${el.name}</span>
              </li>
              `;
    });
    list.innerHTML = '';
    info.innerHTML = countryNamesList;
  } else if (name.length === 1) {
    const lanArr = name[0].languages.map(el => el.name);
    const markup = `<div>
          <p>${name[0].name}</p>
          <p>Capital:<span>${name[0].capital}</span></p>
          <p>Population:<span>${name[0].population}</span></p>
          <p>Flag:</p><img src="${name[0].flags.svg}" width="100" height="50" alt="${name[0].name.official} flag">
          <p>Languages:<span>${lanArr}</span></p>
          </div>`;
    info.innerHTML = '';
    list.innerHTML = markup;
  } else {
    throw new Error(Notiflix.Notify.info('Fail'));
  }
};
