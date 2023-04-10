function highlight(table) {
  const statusCellIndex = Array.from(table.tHead.rows[0].cells).findIndex((cell) => cell.textContent === 'Status');

  for (let row of table.tBodies[0].rows) {
    const available = row.cells[statusCellIndex].dataset.available;
    if (available === 'true') {
      row.classList.add('available');
    } else if (available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }

    const gender = row.cells[2].textContent;
    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    const age = Number(row.cells[1].textContent);
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
