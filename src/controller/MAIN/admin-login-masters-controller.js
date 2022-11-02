const db = require("../../model");
const AdminLogin = db.adminLogin;
const bcrypt = require("bcrypt");


const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

exports.create = async (req,res) => {
    const salt = await bcrypt.genSalt(10);
    const admin_login = {
        name:req.body.name,
        email:req.body.email,
        password : await bcrypt.hash(req.body.password, salt)
    }

    AdminLogin.create(admin_login)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data= { id : data.id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
        RESPONSE.Failure.Message = err.message;
        res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    });
};

exports.getAdminLogin = async (req,res) => {
    
   const  email = req.body.email
   const password=req.body.password
   const getAdminData=  await  AdminLogin.findOne({where:{email:email}})
   const HashPassword=getAdminData.password

   bcrypt.compare(password, HashPassword, function(err, result) {
    if(result){
        RESPONSE.Success.Message = "login successfully";
        RESPONSE.Success.data= { id : getAdminData.id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }
    else{
        RESPONSE.Failure.Message = "your login details is incorrect";
        res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }
});


};
