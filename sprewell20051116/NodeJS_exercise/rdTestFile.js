var fs = require('fs');
fs.readFile('testFile.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
})

fs.writeFile('test.txt', 'How are u\n', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Write operation complete.');
  }
})

fs.appendFile('testAppend.txt', 'I am fine\n', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Append operation complete');
  }
});
