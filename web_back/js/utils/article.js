var article={
    // 获取文章(文章搜索)
    show:function(param,callback){
        $.get(URLIST.article_show,param,function(res){
            callback(res);
        })
    },
    // 删除文章
    del:function(id,callback){
        $.get(URLIST.article_del,{id:id},function(res){
            callback(res);
        })
    },
    push:function(fd,callback){
        $.ajax({
            url:URLIST.article_push,
            type:'post',
            data:fd,
            contentType:false,
            processData:false,
            success:function(res){
             callback(res);
            }
        })
    }
}