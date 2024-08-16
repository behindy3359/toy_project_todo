module.exports = (sequelize, DataTypes) => {
  // DataTypes : models/index.js 에서의 Sequelize( 대문자 인 녀석 )
  // sequeilize : models/index.js 에서의 sequelize
  const Todo = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    tableName: 'todo',
    freezeTableName :true,
    timestamps: false
  });
  return Todo;
};