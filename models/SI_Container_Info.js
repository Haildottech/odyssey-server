module.exports = (sequelize, DataTypes) => {
    const SI_Container_Info = sequelize.define("SI_Container_Info", {
        no:{ type:DataTypes.STRING },
        seal:{ type:DataTypes.STRING },
        size:{ type:DataTypes.STRING },
        rategroup:{ type:DataTypes.STRING },
        gross:{ type:DataTypes.STRING },
        net:{ type:DataTypes.STRING },
        tare:{ type:DataTypes.STRING },
        wtUnit:{ type:DataTypes.STRING },
        cbm:{ type:DataTypes.STRING },
        pkgs:{ type:DataTypes.STRING },
        unit:{ type:DataTypes.STRING },
        temp:{ type:DataTypes.STRING },
        loadType:{ type:DataTypes.STRING },
        remarks:{ type:DataTypes.STRING },
        detention:{ type:DataTypes.STRING },
        demurge:{ type:DataTypes.STRING },
        plugin:{ type:DataTypes.STRING },
        dg:{ type:DataTypes.STRING },
        number:{ type:DataTypes.STRING },
        date:{ type:DataTypes.STRING },
        top:{ type:DataTypes.STRING, defaultValue: "0" },
        right:{ type:DataTypes.STRING, defaultValue: "0" },
        left:{ type:DataTypes.STRING, defaultValue: "0" },
        front:{ type:DataTypes.STRING, defaultValue: "0" },
        back:{ type:DataTypes.STRING, defaultValue: "0" },
    })
    return SI_Container_Info;
}