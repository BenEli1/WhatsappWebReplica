import User from "./User";

class DataBase{
    constructor(){
        this.users = [];
    }

    add(userName, password, nickName, image){
        this.users.push(new User(userName, password, nickName, image));
        console.log(userName);
    }

    isUserExist(userName, password){
        for(let u in this.users){
           if(userName === this.users[u].userName && password === this.users[u].password){
               return true;
           }
        }
        return false;
    }

    getUserByUserName(userName){
        for(var u in this.users){
            if(this.users[u].userName === userName){
                return this.users[u];
            }
        }
        return null;
    }

    getUserByNickName(nickName){
        for(var u in this.users){
            if(this.users[u].nickName === nickName){
                return this.users[u];
            }
        }
        return null;
    }

    getUserByPassword(password){
        for(var u in this.users){
            if(this.users[u].password === password){
                return this.users[u];
            }
        }
        return null;
    }
}

export default DataBase;