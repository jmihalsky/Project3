const axios = require("axios");
require("dotenv").config({path: "../keys/apikey.env"});
const api_keys = require("../configuration/api_keys");
const db = require("../smodels");

const api_dev_keys = api_keys.api_dev_key;

console.log(api_dev_keys);

function ResortInfo(req,res){
    return db.resorts.findAll({attributes:["state"],group:["state"]}).then(resST => {
        console.log(JSON.parse(JSON.stringify(resST)));

        var rst = JSON.parse(JSON.stringify(resST));

        rst.forEach(function(rst){
            var api_string = "http://feeds.snocountry.net/conditions.php?apiKey=" + api_dev_keys.api_key + "&states=" + rst.state;

            console.log(api_string);

            const getResortInfo = () => {
                try{
                    return axios.get(api_string);
                }catch(error){
                    console.log(error);
                }
            };

            const ResWeather = async() => {
                const resInfo = getResortInfo().then(response => {
                    for (var i = 0; i < response.data.items.length; i++)
                    {
                        var nsnow = 0;
                        var d_min = 0;
                        var d_max = 0;
                        var s_open = 0;
                        var l_open = 0;

                        if (response.data.items[i].newSnowMin === "")
                        {
                            nsnow = 0;
                        }
                        else
                        {
                            nsnow = parseInt(response.data.items[i].newSnowMin);
                        }

                        if (response.data.items[i].avgBaseDepthMin === "")
                        {
                            d_min = 0;
                        }
                        else
                        {
                            d_min = parseInt(response.data.items[i].avgBaseDepthMin);
                        }

                        if (response.data.items[i].avgBaseDepthMax === "")
                        {
                            d_max = 0;
                        }
                        else
                        {
                            d_max = parseInt(response.data.items[i].avgBaseDepthMax);
                        }

                        if (response.data.items[i].openDownHillTrails === "")
                        {
                            s_open = 0;
                        }
                        else
                        {
                            s_open = parseInt(response.data.items[i].openDownHillTrails);
                        }

                        if (response.data.items[i].openDownHillLifts === "")
                        {
                            l_open = 0;
                        }
                        else
                        {
                            l_open = parseInt(response.data.items[i].openDownHillLifts);
                        }

                        ResInfo = {
                                    report_date: response.data.items[i].reportDateTime,
                                    resort_id: response.data.items[i].id,
                                    new_snow: nsnow,
                                    base_depth_min: d_min,
                                    base_depth_max: d_max,
                                    cond: response.data.items[i].primarySurfaceCondition,
                                    num_slopes_open: s_open,
                                    num_lifts_open: l_open
                                };
                    
                        console.log(ResInfo);
            
                        db.resort_conditions.create(ResInfo).then(function(){
                            console.log("success");
                        }).catch(function(err){
                            console.log(err);
                        });

                    }
                }).catch(error => {
                    console.log(error);
                });
            } 

            ResWeather();
        });

    });
}

module.exports = ResortInfo;