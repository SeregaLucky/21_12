import { objNews } from './newApi';
import { templateItemNew } from './templateItem';

import templateItemHbs from './templateItem.hbs';
import templateList from './templateList.hbs';

const refs = {
  list: document.querySelector('.js_list'),
  form: document.querySelector('.js_form'),
  buttonMore: document.querySelector('.js_button_more'),
};

refs.form.addEventListener('submit', handleSubmitNews);
refs.buttonMore.addEventListener('click', handleClickMoreNews);

function handleSubmitNews(e) {
  e.preventDefault();
  // console.log(e.currentTarget.elements.text1);
  const input = e.currentTarget.elements.text1;

  if (input.value.length === 0) return;

  refs.list.innerHTML = '';

  objNews.setWord(input.value);
  objNews.resetPage();

  makeFetch();

  e.currentTarget.reset();
  // input.value = '';
}

function handleClickMoreNews() {
  // Кнопка не активна но она есть
  // if (objNews.findWord.length === 0) return;
  // makeFetch();
  //
  //

  makeFetch();
}

function makeFetch() {
  objNews
    .makeFetchNews()
    .then(data => {
      console.log(data);
      const allLi = markup(data.articles);
      refs.list.insertAdjacentHTML('beforeend', allLi);

      // Кнопка появляется лишь тогда когда пришел первый запрос
      if (objNews.page > 1) {
        refs.buttonMore.classList.add('button_more--active');
      }
    })
    .catch(err => console.log(err));
}

// function markup(dataList) {
//   return dataList.map(item => `<li>${item.author}</li>`).join('');
// }
function markup(dataList) {
  // return dataList.map(item => templateItemNew(item)).join('');
  // return dataList.map(item => templateItemHbs(item)).join('');
  return templateList(dataList);
}
