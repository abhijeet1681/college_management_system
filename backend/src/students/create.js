const main =async(req,res)=>{
    const {full_name,address,gender,mobile_number,email,roll_no,age,dob,city,state,pincode,branch}=req.body;
const {postgre_sql_connector} = require("../_base/postgre_sql_connector"); 
const client=await postgre_sql_connector();
client.query("INSERT INTO students(full_name,address,gender,mobile_number,email,roll_no,age,dob,city,state,pincode,branch) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[full_name,address,gender,mobile_number,email,roll_no,age,dob,city,state,pincode,branch],async function(error,result){
   if(error){
        res.json({
            success:false,
            error:error.toString(),
            data:[],
            response_message:"Error"
        });
    }  else{
        res.json({
            success:true,
            error:null,
            data:[],
            response_message:"Created successfully"
        });
        // res.send("Created successfully");
    }
await client.end();
});
}
module.exports={
    main
}