const baseURL = 'https://newsapi.org/v2';
const apiKey = '0d6bdd13a3e242d48d2af39b9df0cb49';

export const objNews = {
  page: 1,
  findWord: '',

  makeFetchNews() {
    const mainUrl = `/everything?q=${this.findWord}&page=${this.page}&apiKey=`;

    return fetch(baseURL + mainUrl + apiKey)
      .then(res => {
        // console.log(res);
        // if (res.articles.length === 0) return;
        // if (res.status >= 400) {};

        this.page += 1;
        return res.json();
      })
      .catch(err => {
        throw err;
      }); // не обезательный если дальше по цепочке есть catch
  },

  setWord(findWord) {
    this.findWord = findWord;
  },

  resetPage() {
    this.page = 1;
  },
};

// export const makeFetchNews = findWord => {
//   const baseURL = 'https://newsapi.org/v2';
//   const mainUrl = `/everything?q=${findWord}&pageSize=22&page=2&apiKey=`;
//   // const mainUrl = `/everything?q=${findWord}&pageSize=22&apiKey=`;
//   const apiKey = '0d6bdd13a3e242d48d2af39b9df0cb49';

//   return fetch(baseURL + mainUrl + apiKey)
//     .then(res => res.json())
//     .catch(err => {
//       throw err;
//     }); // не обезательный если дальше по цепочке есть catch
// };
