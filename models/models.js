const sequelize = require('../db')
const {INTEGER, STRING} = require('sequelize')

const Employer = sequelize.define('employer',{
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: STRING, defaultValue: "Иван"},
    secname: {type: STRING, defaultValue: "Иванович"},
    thiname: {type: STRING, defaultValue: "Иванов"},
    email: {type: STRING, unique: true},
    password: {type: STRING},
    role: {type: STRING, defaultValue: "USER"},
    competence: {type: STRING, defaultValue: "Крутой сотрудник"},

})

const About = sequelize.define('about', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: STRING},
})

Employer.hasMany(About)
About.belongsTo(Employer)

module.exports = {
    Employer,
    About
}