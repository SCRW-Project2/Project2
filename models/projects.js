var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


  var Projects = sequelize.define("Projects", {
    position: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    project: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    technology: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    interests: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    difficulty: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Projects.sync();

  module.exports = Projects;
