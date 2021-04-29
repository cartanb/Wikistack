const html = require('html-template-tag');
const layout = require('./layout');

module.exports = (pages) => {
  const pageLis = pages.map((page) => {
    return `<li><a href="/wiki/${page.slug}">${page.title}</li>`;
  });
  return layout(html` <h3>Pages</h3>
    <hr />
    <form method="GET" action="/wiki/search">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
    <hr />
    <ul class="list-unstyled">
      <ul>
        ${pageLis}
      </ul>
    </ul>`);
};
