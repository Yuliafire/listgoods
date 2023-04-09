const submitButton = document.getElementById('submit');
const articleInput = document.getElementById('article');
const resultTable = document.getElementById('result');

submitButton.addEventListener('click', () => {
  const article = articleInput.value;
  const url = `https://api.forum-auto.ru/listgoods.php?login=493358_stroyzar&password=sAVDkrEbqd&article=${article}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Очищаем таблицу перед добавлением новых данных
      resultTable.innerHTML = '';

      // Добавляем заголовки таблицы
      const headerRow = document.createElement('tr');
      const headers = ['Артикул', 'Наименование', 'Цена', 'Наличие'];
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      resultTable.appendChild(headerRow);

      // Добавляем данные в таблицу
      data.forEach(item => {
        const row = document.createElement('tr');
        const columns = [item.article, item.name, item.price, item.stock];
        columns.forEach(column => {
          const td = document.createElement('td');
          td.textContent = column;
          row.appendChild(td);
        });
        resultTable.appendChild(row);
      });
    })
    .catch(error => console.error(error));
});


