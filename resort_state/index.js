const axios = require("axios");
require("dotenv").config({path: "../keys/apikey.env"});
const api_keys = require("../configuration/api_keys");
const db = require("../smodels");

const api_dev_keys = api_keys.api_dev_key;

const api_string = "http://feeds.snocountry.net/getResortList.php?apiKey=" + api_dev_keys.api_key + "&states=wy&output=json";

const getBaseResortInfo = () => {
    try {
        return axios.get(api_string);
    }catch(error){
        console.log(error);
    }
};

const ResState = async() => {
    const rstate = getBaseResortInfo().then(response => {
        for (var i = 0; i < response.data.items.length; i++)
        {
            var res_state = response.data.items[i].state;
            var res_id = response.data.items[i].id;

            db.resorts.update({state: res_state}, {where: {resort_id: res_id}}).then(function(){
                console.log("success");
            }).catch(function(err){
                console.log(err);
            });
        }
    }).catch(error => {
        console.log(error);
    });
}

module.exports = ResState;