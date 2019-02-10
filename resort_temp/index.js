const axios = require("axios");
require("dotenv").config({path: "../keys/apikey.env"});
const api_keys = require("../configuration/api_keys");
const db = require("../smodels");

const api_dev_keys = api_keys.api_dev_key;

function ResortTemp(req,res) {
    return db.resort_temp.findAll({}).then(resortTemp => {   
        console.log(JSON.parse(JSON.stringify(resortTemp)));

        var data = JSON.parse(JSON.stringify(resortTemp));

        data.forEach(function(data){
            var api_string = "https://skimap.org/SkiAreas/view/"+ data.tmp_resort_id + ".json";

            var res_id = data.tmp_resort_id;

            console.log(api_string);

            const getResGPS = () => {
                try{
                    return axios.get(api_string);
                }catch(error){
                    console.log(error);
                }
            };
    
            const resGPS = async() => {
                const rGPS = getResGPS().then(response => {

                    var tmp_name = response.data.name;
                    var tmp_web = response.data.official_website;
                    var tmp_lat = response.data.latitude;
                    var tmp_lon = response.data.longitude;

                    var resInfo = {
                        tmp_name: response.data.name,
                        tmp_web: response.data.official_website,
                        tmp_lat: response.data.latitude,
                        tmp_lon: response.data.longitude,
                    }

                    console.log(res_id, tmp_name, tmp_web, tmp_lat, tmp_lon);

                    db.resort_temp.update(resInfo, {where: {tmp_resort_id: res_id}}).then(function(){ console.log("success");
                }).catch(function(err){
                    console.log(err);
                });

                }).catch(error => {
                    console.log(error);
                })
            }
    
            resGPS();
        });
        

       

        // for (var i = 0; i < data.length; i++)
        // {
        //     console.log(data[i].tmp_resort_id);
        //     var api_string = "https://skimap.org/SkiAreas/view/"+ data[i].tmp_resort_id + ".json"

        //     const getGPS = () => {
        //         try {
        //             return axios.get(api_string);
        //         }catch(error){
        //             console.log(error);
        //         }
        //     };

        //     const resGPS = async() => {
        //         const rGPS = getGPS().then(res => {
        //             console.log(res.data);
        //         }).catch(function(err){
        //             console.log(err);
        //         });
        //     }
        // }

        // data.forEach(function(data){
            
        //     var api_string = "https://skimap.org/SkiAreas/view/"+ data.tmp_resort_id + ".json";

        //     console.log(api_string);

        //     const getGPS = () => {
        //         try {
        //             return axios.get(api_string);
        //         }catch(error){
        //             console.log(error);
        //         }
        //     };

        //     const ResortTemp = async() => {
        //         const rGPS = getGPS().then(res => {
        //             console.log(res.data);
        //         }).catch(function(err){
        //             console.log(err);
        //         });
        //     }
        // });
    });
}

module.exports = ResortTemp;