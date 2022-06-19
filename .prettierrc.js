module.exports = {
  ...require('gts/.prettierrc.json')
  , "overrides": [
    {
      "files": "data-digit-*.ts",
      "options": {
        "printWidth": 999
      }
    },
  ]
}
