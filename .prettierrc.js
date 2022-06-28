module.exports = {
  ...require('gts/.prettierrc.json')
  , "overrides": [
    {
      "files": ["src/test/data-*.ts", "CharacterSets.ts"],
      "options": {
        "printWidth": 999
      }
    },
  ]
}
