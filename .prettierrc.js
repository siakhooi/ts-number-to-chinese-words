module.exports = {
  ...require('gts/.prettierrc.json')
  , "overrides": [
    {
      "files": "data-*9*.ts",
      "options": {
        "printWidth": 999
      }
    },
  ]
}
