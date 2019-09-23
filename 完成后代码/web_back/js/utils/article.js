var article = {
  getCount: function(callBack) {
    $.getJSON(URLIST.article_count, function(res) {
      callBack(res);
    });
  },

  search: function(params, callBack) {
    $.getJSON(URLIST.article_search, params, function(res) {
      callBack(res);
    });
  },
  getDetail: function(id, callBack) {
    $.getJSON(URLIST.article_search, { id: id }, function(res) {
      callBack(res);
    });
  },
  del: function(id, callBack) {
    $.getJSON(URLIST.article_del, { id: id }, function(res) {
      callBack(res);
    });
  },
  edit: function(fd, callBack) {
    // 2.调接口
    $.ajax({
      type: 'post',
      url: URLIST.url_article_edit,
      data: fd,
      processData: false,
      contentType: false,
      success: function(res) {
        callBack(res);
      }
    });
  },
  publish: function(fd, callBack) {
    $.ajax({
      url: URLIST.article_publish,
      type: 'post',
      data: fd,
      processData: false,
      contentType: false,
      success: function(res) {
        callBack(res);
      }
    });
  }
};
