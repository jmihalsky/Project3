import axios from "axios";

export default {
    createUser: function(NewUser){
        console.log(NewUser);
        return axios.post("/API/signup", NewUser);
    },
    loginUser: function(UserInfo){
        console.log(UserInfo);
        return axios.post("/API/login", UserInfo);
    },
    UserProfile: function(user_name){
        console.log(user_name);
        return axios.get("/API/userinfo/" + user_name);
    },
    AllResorts: function(){
        return axios.get("/API/resort_all");
    },
    UserResFavs: function(user_name){
        return axios.get("/API/user_resorts/" + user_name);
    }
};