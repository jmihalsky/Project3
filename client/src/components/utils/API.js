import axios from "axios";

export default {
    createUser: function(NewUser){
        console.log(NewUser);
        return axios.post("/API/signup", NewUser);
    }
};