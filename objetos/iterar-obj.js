const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(prop + ': ' + obj[prop]);
  }
}
// vai imprimir o obj direitinho igual naquele dos array