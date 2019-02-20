import axios from "axios";

export default {
    createUser: function(NewUser){
        return axios.post("/API/signup", NewUser);
    },
    loginUser: function(UserInfo){
        return axios.post("/API/login", UserInfo);
    },
    UserProfile: function(user_name){
        return axios.get("/API/userinfo/" + user_name);
    },
    AllResorts: function(){
        return axios.get("/API/resort_all");
    },
    UserResFavs: function(user_name){
        return axios.get("/API/user_resorts/" + user_name);
    },
    UserFavSave: function(newFav){
        return axios.post("/API/user_fav_sav", newFav);
    },
    GetResort: function(resort_id){
        return axios.get("/API/resort/" + resort_id);
    },
    GetUsrRpt: function(resort_id){
        return axios.get("/API/usr_rpt/" + resort_id);
    },
    UserReport: function(UsrCond){
        console.log(UsrCond);
        return axios.post("/API/usr_rpt", UsrCond);
    },
    LogoffUser: function(){
        return axios.post("/API/logout");
    }
};