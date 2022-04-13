import {
  getFullDate,
  makeCountryMapImageURL,
  selectCountryInfo,
} from '../redux/apiCalls/apiCalls';

describe('test for pure function', () => {
  test('return todays date in yyyy-mm-dd format', () => {
    const date = '2022-03-13';
    const returnedDate = getFullDate();
    expect(returnedDate).toMatch(date);
  });

  test('return formatedUrl for image fetching', () => {
    const url = 'https://gadm.org/img/480/gadm/URY/URY_labs.png';
    const returnedUrl = makeCountryMapImageURL('URY');
    expect(returnedUrl).toMatch(url);
  });

  test('return selected country informations', () => {
    const data = [
      {
        name: { common: 'Ethiopa' },
        cca3: 'ETH',
        continents: ['Africa'],
        subregion: 'East Africa',
        maps: 'urlmap',
        flags: { svg: 'urlsvg' },
        borders: 'some value',
        population: '100000000',
      },
    ];

    const selected = selectCountryInfo(data);

    expect(selected).toHaveLength(1);
  });
});
