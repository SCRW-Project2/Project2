module.exports = function(sequelize,DataTypes) {
  var Projects = sequelize.define("Projects", {
    position: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    project: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    interests: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  return Projects;
};
