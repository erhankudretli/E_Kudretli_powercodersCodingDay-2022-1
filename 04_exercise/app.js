let books = [
  {
    title: "BMy Title",
    author: "My Author",
    inStock: true,
    price: 10,
  },
  {
    title: "CMy Title2",
    author: "My Author2",
    inStock: true,
    price: 20,
  },
  {
    title: "AMy Title3",
    author: "My Author3",
    inStock: false,
    price: 5,
  },
];

books = books.sort(function (a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});

let table = "";
const createTable = () => {
  table = `
  <table>
  <tr>
  <th>Name</th>
  <th>Author</th>
  <th>Price</th>
</tr>
${createBodyofTable()}
</table>
`;

  return table;
};
const createBodyofTable = () => {
  table += books
    .map((book) => {
      return `  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${checkStock(book)}</td>   
    </tr>
    `;
    })
    .join("");
  return table;
};
const checkStock = (param) => {
  if (param.inStock === true) {
    return `<td>${param.price}</td>`;
  } else return "<td>OutofStock</td>";
};

createTable();
document.getElementById("display").innerHTML = table;
