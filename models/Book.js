module.exports = (sequelize,DataTypes)=>{
    const Book = sequelize.define("Book",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        createdAt:{
            type:DataTypes.DATE,
            default:Date.now()
        }
    })
    return Book
}