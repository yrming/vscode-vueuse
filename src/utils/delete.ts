import * as fs from 'fs'
import * as path from 'path'

function deleteFile(url: string) {
  let files = []

  if (fs.existsSync(url)) {
    files = fs.readdirSync(url)

    files.forEach(function (file, index) {
      let curPath = path.join(url, file)

      if (fs.statSync(curPath).isDirectory()) {
        deleteFile(curPath)
      } else {
        if (
          file.indexOf('.ts') > -1 ||
          file.indexOf('.cjs') > -1 ||
          file.indexOf('.mjs') > -1 ||
          file.indexOf('package.json') > -1 ||
          file.indexOf('README.md') > -1
        ) {
          fs.unlinkSync(curPath)
          console.log('delete file path：' + curPath)
        }
      }
    })
  }
}
