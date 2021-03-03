const db = require('./models');
const data = require('./CharacterClasses.json')

db.Character.deleteMany({}, (err, deletedCharacters) => {
  db.Character.create(data.CharacterClass, (err, allCharacters) => {
    if (err) {
      console.log(err)
    }
    console.log(data.CharacterClass.length, 'character classes created successfully');
        process.exit();
  })
})
