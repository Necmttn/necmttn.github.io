const child_process = require('child_process')

module.exports = function (answers, config, plop) {
  console.log(
    {
      answers,
      config
    }
  )
  return new Promise((resolve, reject) => {
    const gitStatus = child_process.spawn('git', ['status'], {
      stdio: 'inherit'
    })
    const gitAdd = child_process.spawn('git', ['add', config.path], {
      stdio: 'inherit'
    })
    const commitMessage = `${config.starter} ${answers.title}`
    const gitCommit = child_process.spawn('git', ['commit', '-m', commitMessage], {
      stdio: 'inherit'
    })
    gitCommit.on('exit', (e, code) => {
      console.log(e, code)
      resolve('success')
    })
    // reject('error message');
  })
}
