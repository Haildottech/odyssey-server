const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require("./models");

const miscProfitLossRoutes = require('./routes/misc/profitLoss');
const homeOperationsRoutes = require('./routes/home/operations');
const notificationRoutes = require('./routes/notifications');
const homeAccountRoutes = require('./routes/home/accounts');
const miscPartiesRoutes = require('./routes/misc/parties');
const commodityRoutes = require('./routes/commodity/');
const seaJobRoutes = require('./routes/jobRoutes/sea');
const employeeRoutes = require('./routes/employees/');
const nonGlParties = require('./routes/nonGlParties');
const assignedTasks = require('./routes/assignTasks');
const companyRoutes = require('./routes/companies/');
const accountRoutes = require('./routes/accounts/');
const historyRoutes = require('./routes/history/');
const clientRoutes = require('./routes/clients/');
const chargesRoutes = require('./routes/charges');
const voucherRoutes = require('./routes/voucher');
const invoiceRoutes = require('./routes/invoice');
const vendorRoutes = require('./routes/vendors');
const vesselRoutes = require('./routes/vessel');
const manifest = require('./routes/manifest');
const authRoutes = require('./routes/auth/');

const { SE_Equipments, SE_Job, Container_Info, Bl, Stamps, Job_notes, Delivery_Order, Item_Details, Manifest, Manifest_Jobs } = require('./functions/Associations/jobAssociations/seaExport');
const { Vendors, Vendor_Associations } = require('./functions/Associations/vendorAssociations');
const {Clients, Client_Associations} = require('./functions/Associations/clientAssociation');
const {Vouchers, Voucher_Heads} = require('./functions/Associations/voucherAssociations');
const { Notifications } = require('./functions/Associations/NotificationAssociation');
const { AssignTask } = require('./functions/Associations/taskAssociation');
const { Voyage } = require('./functions/Associations/vesselAssociations');
const { Non_Gl_Parties } = require('./models');

app.use(morgan('tiny'));
app.use(cors()); 

app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(bodyParser.json({limit: '100mb', extended: true}));
app.use(express.json());
db.sequelize.sync();

app.get("/", (req, res) => { res.json('Welcome To Odyssey Server in Hail Dot Tech') });
//app.get("/getUser", verify, (req, res) => {res.json({isLoggedIn:true,username:req.body.username})});
app.use("/home", homeAccountRoutes, homeOperationsRoutes);
app.use("/employeeRoutes", employeeRoutes);
app.use("/clientRoutes", clientRoutes);
app.use("/commodity", commodityRoutes);
app.use("/companies", companyRoutes);
app.use("/accounts", accountRoutes);
app.use("/authRoutes", authRoutes);
app.use("/history", historyRoutes);
app.use("/charges", chargesRoutes);
app.use("/invoice", invoiceRoutes);
app.use("/vessel", vesselRoutes);
app.use("/vendor", vendorRoutes);
app.use("/seaJob", seaJobRoutes);
app.use("/voucher", voucherRoutes);
app.use("/notifications", notificationRoutes);
app.use("/misc", miscPartiesRoutes, miscProfitLossRoutes);
app.use("/tasks", assignedTasks);
app.use("/nonGlParties", nonGlParties);
app.use("/manifest", manifest );

// abdullah added a new feature
const PORT = process.env.PORT || 8081; 

app.listen(PORT, () => { console.log(`App listenings on port ${PORT}`) });