var BASE_URL='http://localhost:8000';
var URLIST={
    // 管理员方面接口地址
    user_login:BASE_URL+'/admin/login',
    user_logout:BASE_URL+'/admin/logout',
    user_logInfo:BASE_URL+'/admin/getuser',
    // 文章类别接口地址
    category_show:BASE_URL+'/admin/category_search',
    category_add:BASE_URL+'/admin/category_add',
    category_del:BASE_URL+'/admin/category_delete',
    category_edit:BASE_URL+'/admin/category_edit',
    // 文章列表接口地址
    article_show:BASE_URL+'/admin/search',
    article_del:BASE_URL+'/admin/article_delete',
    // 发布文章接口地址
    article_push:BASE_URL+'/admin/article_publish',
}