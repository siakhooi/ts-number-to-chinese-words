module.exports = {
  ...require('gts/.prettierrc.json')
  , "overrides": [
    {
      "files": ["data-digit-*.ts", "Constants.ts"],
      "options": {
        "printWidth": 999
      }
    },
  ]
}
