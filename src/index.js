import './css/styles.css';
import _ from 'lodash';
import { fetchCountriesData } from './js/fetchApi';
import { makeMarkup } from './js/makeMarkup';
import { refs } from './js/refs';

const URL = 'https://restcountries.com/v3.1/name/';

const fetchCountries = e => {
  e.preventDefault();
  const searchData = e.target.value.trim();
  fetchCountriesData(searchData)
    .then(data => {
      makeMarkup(data, refs.countryList, refs.countryInfo);
    })
    .catch(err => {
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
    });
};

refs.searchForm.addEventListener(
  'input',
  _.debounce(fetchCountries, refs.DEBOUNCE_DELAY)
);
