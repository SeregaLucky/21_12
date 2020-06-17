export const templateItemNew = item => {
  return `
    <li>
      <h2>${item.title}</h2>
      <img width="300" src="${item.urlToImage}" alt="">
      <p>Author: ${item.author}</p>
    </li>
  `;
};
