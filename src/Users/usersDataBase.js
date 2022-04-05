class User{
    constructor(userName, password, nickName, image){
    this.userName = userName;
    this.password = password;
    this.nickName = nickName;
    this.image = image;
    }

    get userName(){
        return this.userName;
    } 

    get password(){
        return this.password;
    }

    get nickName(){
        return this.nickName;
    }

    get image(){
        return this.image;
    }
}

class DataBase{
    constructor(){
        this.users = [];
    }
    add(user){
        users.push(user);
    }

    add(userName, password, nickName, image){
        users.push(User(userName, password, nickName, image));
    }

    isUserExist(userName, password){
        for(u in users){
            if(userName === this.users[u].userName && password === this.users[u].password)
                return true;
        }
        return false;
    }

    isUserExist(user){
        for(var u in users){
            if(user.userName === this.users[u].userName && user.password === this.users[u].password)
                return true;
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

    getUserByPassword(password){
        for(var u in this.users){
            if(this.users[u].password === password){
                return this.users[u];
            }
        }
        return null;
    }
}