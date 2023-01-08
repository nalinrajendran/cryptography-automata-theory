const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const caesarCipher = require(__dirname+"/caesarCipher.js");
const bitFlippingCipher = require(__dirname+"/bitFlippingCipher.js");
const stringMatching = require(__dirname+"/stringMatching.js");
const bitflip_enc = require(__dirname+"/bitflip_enc.js");
const bitflip_dec = require(__dirname+"/bitflip_dec.js");



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




let users = [{"nalin":"adminnalin"}, {"karthikeyan":"adminkeyan"}, 
            {"karthik":"adminkarthik"},{"eswar":"admineswar"},{"pragadishwaran":"adminpd"}];


let encrypt_msg = [""];
let decrypt_msg = [""];



app.post("/", function(req,res){
    let username = req.body.name;
    let userpassword = req.body.password;
    let flag = false;

    // console.log(username);
    // console.log(userpassword);

    var fun = stringMatching("str","str");
    for(let i = 0; i<users.length; i++){
        for (var key in users[i]) {
            if (key === username ) {
                var value = users[i][key];
                if (value === userpassword){
                    flag = true;
                } else {
                    flag = false;
                }
            } 
        }
    }

    // console.log(flag);
    
    if (flag == true) {
        res.redirect("/options");
    } else {
        res.redirect("/failure");
    };

    
});


app.post("/encrypt", function(req,res){
    
    let msg = req.body.message;
    encrypt_msg.push(msg);

    res.redirect("/success");
});


app.post("/bitencrypt", function(req,res){


    let msg = req.body.message;
    encrypt_msg.push(msg);

    res.redirect("/bit");
});







app.get("/options", function(req,res){
    res.render("options")
});

app.get("/bit", function(req,res){

      let key = "100110";
      
      var text = encrypt_msg.slice(-1).toString().toUpperCase();
      
      let encrypted = bitflip_enc(text, "100110");
      let result = encrypted;
      console.log(result);
      let decrypted =bitflip_dec(encrypted, "100110");

      var text = encrypt_msg.slice(-1).toString().toUpperCase();
      
      decrypt_msg.push(encrypted);
    

    res.render("bit", {encrypted : result, decrypted : text});
});

app.get("/bit_client", function(req,res){

      let key = 3003;
      
      var text = decrypt_msg.slice(-1).toString().toUpperCase();
      var texto = encrypt_msg.slice(-1).toString().toUpperCase();

      let decrypted = bitFlippingCipher(text, key);
      

    res.render("bit_client", {orimsg : texto, entext :text});
});

app.get("/client_caeser", function(req,res){

    var text = encrypt_msg.slice(-1).toString().toUpperCase();
    let decrypted_msg = decrypt_msg.slice(-1);
    let ori_msg = caesarCipher(decrypted_msg,-5)
    res.render("client_caeser",{msg : decrypted_msg, enmsg : text });
});

app.get("/", function(req,res){
    res.render("login");
});

app.get("/success", function(req,res){

    var text = encrypt_msg.slice(-1).toString().toUpperCase();
    let now = caesarCipher(text,8);
    let nowt = caesarCipher(now,-8);

    decrypt_msg.push(now);

    res.render("success",{encrypted_msg : now, decrypted_msg: text} );
    
});

app.get("/failure", function(req,res){
    res.render("failure");
});






app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  