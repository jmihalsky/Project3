import axios from "axios";

export default {
    createUser: function(NewUser){
        return axios.post("/signup", NewUser);
    }
};