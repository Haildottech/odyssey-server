const { SI_Job, SI_Equipments, SI_Bl, SI_Container_Info, SI_Job_Notes, SI_Stamps } = require("../../functions/Associations/jobAssociations/seaImport");
// const {Bl, Stamps} = require("../../functions/Associations/stamps")
const { Employees } = require("../../functions/Associations/employeeAssociations");
const { Vendors } = require("../../functions/Associations/vendorAssociations");
const { Clients }=require("../../functions/Associations/clientAssociation")
const { Commodity, Vessel, Charges }=require("../../models");
const routes = require('express').Router();
const Sequelize = require('sequelize');
const moment = require("moment");
const { Voyage } = require("../../functions/Associations/vesselAssociations");
const Op = Sequelize.Op;

const getJob = (id) => {
    const finalResult = SI_Job.findOne({
        where:{id:id},
        include:[
            { model:SI_Equipments },
            { model:Clients, attributes:['name'] }
        ]
    })
    return finalResult
}

// routes.get("/getValues", async(req, res) => {
//     let makeResult = (result, resultTwo) => {
//         let finalResult = {shipper:[], consignee:[], notify:[], client:[]};
//         result.forEach((x) => {
//             if(x.types.includes('Shipper')){
//                 finalResult.shipper.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//             }
//             if(x.types.includes('Consignee')){
//                 finalResult.consignee.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//             }
//             if(x.types.includes('Notify')){
//                 finalResult.notify.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//             }
//         })
//         finalResult.client = resultTwo.map((x)=>{
//             return {name:`${x.name} (${x.code})`, id:x.id, types:x.types}
//         });
//         return finalResult
//     }
//     let makeResultTwo = (result) => {
//     let finalResult = {transporter:[], forwarder:[], overseasAgent:[], localVendor:[], chaChb:[], sLine:[]};
//     result.forEach((x) => {
//         if(x.types.includes('Transporter')){
//             finalResult.transporter.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//         }
//         if(x.types.includes('Forwarder/Coloader')){
//             finalResult.forwarder.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//         }
//         if(x.types.includes('Overseas Agent')){
//             finalResult.overseasAgent.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//         }
//         if(x.types.includes('CHA/CHB')){
//             finalResult.chaChb.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//         }
//         if(x.types.includes('Local Vendor')){
//             finalResult.localVendor.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//         }
//         if(x.types.includes('Shipping Line')){
//             finalResult.sLine.push({name:`${x.name} (${x.code})`, id:x.id, types:x.types})
//         }
//     })
//     return finalResult
//     }
//     try {
//         const resultOne = await Clients.findAll({ 
//             attributes:['id','name', 'types', 'code'],
//             order: [['createdAt', 'DESC']]
//         })
//         const result = await Clients.findAll({ 
//             where: {
//                 types: {
//                 [Op.or]:[
//                     { [Op.substring]: 'Shipper' },
//                     { [Op.substring]: 'Consignee' },
//                     { [Op.substring]: 'Notify' }]
//             }},
//             attributes:['id','name', 'types', 'code'],
//             order: [['createdAt', 'DESC']]
//         })
//         const resultThree = await Vendors.findAll({ 
//             where: {
//                 types: {
//                 [Op.or]:[
//                     { [Op.substring]: 'Transporter' },
//                     { [Op.substring]: 'Forwarder/Coloader' },
//                     { [Op.substring]: 'Local Vendor' },
//                     { [Op.substring]: 'CHA/CHB' },
//                     { [Op.substring]: 'Overseas Agent' },
//                     { [Op.substring]: 'Shipping Line' }
//                 ]
//             }},
//             attributes:['id','name', 'types', 'code'],
//             order: [['createdAt', 'DESC']]
//         })
//         const resultTwo = await Commodity.findAll({
//             order: [['createdAt', 'DESC']],
//             attributes:['id','name', 'hs'],
//         });

//         const resultFour = await Vessel.findAll({
//             order: [['createdAt', 'DESC']],
//             attributes:['id', 'name', 'code', 'carrier'],
//             include:[{
//                 model:Voyage
//             }]
//         });
//         const Sr = await Employees.findAll({where:{represent: {[Op.substring]: 'sr'} }, attributes:['id', 'name']});
//         const charges = await Charges.findAll();
//         res.json({
//             status:'success',
//             result:{
//                 party:makeResult(result, resultOne),
//                 vendor:makeResultTwo(resultThree),
//                 commodity:resultTwo,
//                 vessel:resultFour,
//                 sr:Sr,
//                 chargeList:charges
//             }
//         });
//     }
//     catch (error) {
//       res.json({status:'error', result:error});
//     }
// });

// routes.post("/getNotes", async(req, res) => {
//     try {
//         console.log(req.body)
//         const result = await Job_notes.findAll({
//             where:{type:"SE", recordId:req.body.id},
//             order:[["createdAt", "DESC"]],
//         });
//         res.json({status:'success', result:result});
//     }
//     catch (error) {
//       res.json({status:'error', result:error});
//     }
// });

// routes.get("/getAllNotes", async(req, res) => {
//     try {
//         console.log(req.body)
//         const result = await Job_notes.findAll({
//             // where:{type:"SE", recordId:req.body.id},
//             order:[["createdAt", "DESC"]],
//         });
//         res.json({status:'success', result:result});
//     }
//     catch (error) {
//       res.json({status:'error', result:error});
//     }
// });

// routes.post('/updateNotes', async(req, res) => {
//     try {
//      const result =  await Job_notes.update({opened : req.body.data.opened}, {where : {recordId : req.body.data.recordId}})
//      res.json({ status: "success", result:result})
//     }
//     catch (err) {
//      res.json({ status: "error", result:err.message})
 
//     }
//  })
// routes.post("/addNote", async(req, res) => {
//     try {
//         console.log(req.body)
//         const result = await Job_notes.create(req.body);
//         res.json({status:'success', result:result});
//     }
//     catch (error) {
//       res.json({status:'error', result:error});
//     }
// });

routes.get("/getSIJobById", async(req, res) => {
    try {
        const result = await SI_Job.findOne({
            where:{id:req.headers.id},
            include:[
                {model:SI_Bl, attributes:['id']},
                {model:Voyage},
                {model:SI_Equipments},
                {
                    model:Clients,
                    attributes:['name']
                }
            ],
            order:[["createdAt", "DESC"]],
        }).catch((x)=>console.log(x))
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.post("/createSiJob", async(req, res) => {
    const createEquip = (list, id) => {
        let result = [];
        list.forEach((x)=>{
            if(x.size!=''&&x.qty!='', x.dg!='', x.teu!=''){
                delete x.id
                result.push({...x, SIJobId:id, teu:`${x.teu}`})
            }
        })
        return result;
    }
    try {
        
        let data = req.body.data;
        delete data.id;
        data.customCheck = data.customCheck.toString();
        data.transportCheck = data.transportCheck.toString();
        const check = await SI_Job.findOne({order: [ [ 'jobId', 'DESC' ]], attributes:["jobId"]});
        const result = await SI_Job.create({
            ...data,
            jobId:check==null?1:parseInt(check.jobId)+1, jobNo:`SNS-SIJ-${check==null?1:parseInt(check.jobId)+1}/${moment().format("YY")}`
        })
        //console.log(result.id)
        await SI_Equipments.bulkCreate(createEquip(data.equipments,  result.id)).catch((x)=>console.log(x))
        res.json({status:'success'});
        //res.json({status:'success', result:"Here!"});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.post("/edit", async(req, res) => {
    const createEquip = (list, id) => {
        let result = [];
        list.forEach((x)=>{
            if(x.size!=''&&x.qty!='', x.dg!='', x.teu!=''){
                delete x.id
                result.push({...x, SIJobId:id, teu:`${x.teu}`})
            }
        })
        return result;
    }
    try {
        let data = req.body.data
        data.customCheck = data.customCheck.toString();
        data.transportCheck = data.transportCheck.toString();
        data.approved = data.approved.toString();
        await SI_Job.update(data,{where:{id:data.id}}).catch((x)=>console.log(1));
        await SI_Equipments.destroy({where:{SIJobId:data.id}}).catch((x)=>console.log(2))
        await SI_Equipments.bulkCreate(createEquip(data.equipments, data.id)).catch((x)=>console.log(x))
        res.json({status:'success', result:await getJob(data.id)});
    }
    catch (error) {
        console.log(error.message)
      res.json({status:'error', result:error.message});
    }
});
  
routes.get("/get", async(req, res) => {
    try {
        const result = await SI_Job.findAll({
            where:{companyId:req.headers.companyid},
            include:[
                {model:Voyage},
                {model:Employees, as:'created_by', attributes:['name'] },
                {model:SI_Equipments},
                {
                    model:Clients,
                    attributes:['name']
                }
            ],
            order:[["createdAt", "DESC"]],
        }).catch((x)=>console.log(x))
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});


module.exports = routes;