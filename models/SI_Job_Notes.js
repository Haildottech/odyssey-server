module.exports = (sequelize, DataTypes) => {
    const SI_Job_Notes = sequelize.define("SI_Job_Notes", {
        recordId:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        type:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        note:{
            type:DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        createdBy:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        editBy :{
        type:DataTypes.STRING
        },
        opened :{
            type : DataTypes.STRING,
            // allowNull: false,
            // validate:{
            //     notEmpty: true
            // }
        } 
    })
    return SI_Job_Notes;
}
