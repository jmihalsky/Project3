const axios = require("axios");
require("dotenv").config({path: "../keys/apikey.env"});
const api_keys = require("../configuration/api_keys");
const db = require("../smodels");

const api_dev_keys = api_keys.api_dev_key;

const api_string = "http://feeds.snocountry.net/getResortList.php?apiKey=" + api_dev_keys.api_key + "&states=or&output=json";

const getBaseResortInfo = () => {
    try {
        return axios.get(api_string);
    }catch(error){
        console.log(error);
    }
};

const Resort = async() => {
    const rinfo = getBaseResortInfo().then(response => {
        console.log(response.data);

        var ResortInfo = {};

        for (var i = 0; i < response.data.items.length; i++)
        {
            ResortInfo = {
                resort_id: response.data.items[i].id,
                resort_name: response.data.items[i].resortName
            };

            db.resorts.create(ResortInfo).then(function(){
                console.log("success");
            }).catch(function(err){
                console.log(err);
            });
        }
    }).catch(error => {
        console.log(error);
    });
}

module.exports = Resort;