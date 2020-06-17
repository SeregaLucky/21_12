import { refs, makeFetch } from './workDom';
import { objNews } from './newApi';

const fnEntries = entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (objNews.page === 1) return;

      makeFetch();
    }
  });
};

const options = {
  rootMargin: '200px',
};

const intObs = new IntersectionObserver(fnEntries, options);
intObs.observe(refs.divForAddMore);
