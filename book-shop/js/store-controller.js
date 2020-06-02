function onInit() {
    renderTable();
    doTrans();
}

function renderTable() {
    // var tableToDisplay = getTable();
    // $('.table').html(`tableToDisplay`)
    $('.table').html(`<thead>
    <tr>
      <th data-trans="id" scope="col"></th>
      <th data-trans="book-title" scope="col"></th>
      <th data-trans="price" scope="col"></th>
      <th class="text-center" colspan="3" data-trans="actions" scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button data-trans="add-book">Add a book</button></td>
      <td><button data-trans="add-book">Add a book</button></td>
      <td><button data-trans="add-book">Add a book</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button data-trans="add-book">Add a book</button></td>
      <td><button data-trans="add-book">Add a book</button></td>
      <td><button data-trans="add-book">Add a book</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><button data-trans="add-book">Add a book</button></td>
      <td><button data-trans="add-book">Add a book</button></td>
      <td><button data-trans="add-book">Add a book</button></td>
    </tr>
  </tbody>
</table>`)
}

function onSetLang(lang) {
    setLang(lang);
    // if lang is hebrew add RTL class to document.body
    if (lang === 'he') {
      document.body.classList.add('rtl')
        
        
    } else {
      document.body.classList.remove('rtl')

    }
    doTrans();
}