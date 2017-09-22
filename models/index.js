const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/wikidb', {
    logging: false
});

const Page = db.define('page', {
    title: {type: Sequelize.STRING, allowNull: false},
    urlTitle: {type: Sequelize.STRING, allowNull: false},
    content: {type: Sequelize.TEXT, allowNull: false},
    status: Sequelize.ENUM('open', 'closed')
})




const User = db.define('user', {
    name: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, 
            allowNull: false, 
            validate: {
            isEmail: true}
    }

})





module.exports = {
    Page: Page,
    User: User,
    db: db
  };