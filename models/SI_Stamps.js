module.exports = (sequelize, DataTypes) => {
    const SI_Stamps = sequelize.define("SI_Stamps", {
        code : {type : DataTypes.STRING},
        stamps : {type : DataTypes.STRING},
        stamp_group : {type : DataTypes.STRING},

    })
    return SI_Stamps;
}