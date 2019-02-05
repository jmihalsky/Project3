import axios from "axios";

export default {
    createUser: function(NewUser){
        console.log(NewUser);
        return axios.post("/API/signup", NewUser);
    },
    loginUser: function(UserInfo){
        console.log(UserInfo);
        return axios.post("/API/login", UserInfo);
    }
};