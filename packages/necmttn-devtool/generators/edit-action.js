const editor = process.env.EDITOR || 'vi'
const child_process = require('child_process')

module.exports = function (answers, config, plop) {
  return new Promise((resolve, reject) => {
    const vim = child_process.spawn(editor, [config.path], {
      stdio: 'inherit'
    })
    vim.on('exit', (e, code) => {
      console.log(e, code)
      resolve('success')
    })
    // reject('error message');
  })
}
