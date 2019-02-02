import axios from "axios";

export default {
    createUser: function(NewUser){
        return axios.post("/API/signup", NewUser);
    }
};