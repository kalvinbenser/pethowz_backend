module.exports=(sequelize,Sequelize) => {
    const adminLogin=sequelize.define("admin_login",{
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNUll: false
        },
        createdAt:{
            type: Sequelize.DATE,
            allowNUll: true
        },
        updatedAt:{
            type: Sequelize.DATE,
            allowNull: true
        }
    });
    return adminLogin;
};