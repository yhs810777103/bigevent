var user={
    login:function(userName,password,callback){
       $.post(URLIST.user_login,{user_name:userName,password:password},function(res){
           callback(res);
       })
    },
    logout:function(callback){
        $.post(URLIST.user_logout,function(res){
            callback(res);
        })
    }
}