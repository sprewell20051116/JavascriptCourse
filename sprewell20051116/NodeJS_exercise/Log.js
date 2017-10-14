var log = {
  info: function(info) {
    console.log('Info: ' + info);
  },
  warning: function(warning) {
    console.log('Warning: ' + warning);
  },
  error: function(error) {
    console.log('Error: ' + error);
  }
}

module.exports = log
// 這一步很重要，只要 modules 要給別的 modules 使用就必須加這個
