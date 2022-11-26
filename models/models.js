const sequelize = require('../db')
const {INTEGER, STRING, DATE} = require('sequelize')

const Employer = sequelize.define('employer',{
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: STRING, defaultValue: "Иванов Иван Иванович"},
    email: {type: STRING, unique: true},
    password: {type: STRING, allowNull: false},
    role: {type: STRING, defaultValue: "USER"},
    competence: {type: STRING, defaultValue: "Крутой сотрудник"},
    grade: {type: STRING, defaultValue: "Джуниор"},
    birthdate: {type: DATE},
    tg: {type: STRING, allowNull: true},
    img: {type: STRING, allowNull: false}
})

const About = sequelize.define('about', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: STRING},
})

const Projects = sequelize.define ('projects', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: STRING, defaultValue: "Пока что не в проекте"}
})

const BlackPage = sequelize.define ('blackpage', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    BPid: {type: INTEGER}
})

Employer.hasMany(About)
About.belongsTo(Employer)

Employer.hasMany(Projects)
Projects.belongsTo(Employer)

Employer.hasMany(BlackPage)
BlackPage.belongsTo(Employer)

module.exports = {
    Employer,
    About,
    Projects,
    BlackPage
}