module.exports = {
  ...require('gts/.prettierrc.json')
  , "overrides": [
    {
      "files": "data-9999*.ts",
      "options": {
        "printWidth": 999
      }
    },
  ]
}
