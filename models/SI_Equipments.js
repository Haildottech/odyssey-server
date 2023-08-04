module.exports = (sequelize, DataTypes) => {
    const SI_Equipments = sequelize.define("SI_Equipments", {
        size:{
            type:DataTypes.STRING
        },
        qty:{
            type:DataTypes.STRING
        },
        dg:{
            type:DataTypes.STRING
        },
        gross:{
            type:DataTypes.STRING
        },
        teu:{
            type:DataTypes.STRING
        }
    })
    return SI_Equipments;
}