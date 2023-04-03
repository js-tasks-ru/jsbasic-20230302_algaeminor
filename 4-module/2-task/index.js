function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].querySelectorAll('td');
    cells[i].style.backgroundColor = 'red';
  }
}
