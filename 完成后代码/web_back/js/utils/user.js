var user = {
  login: function(name, password, callBack) {
    $.ajax({
      url: URLIST.user_login,
      type: 'post',
      data: { user_name: name, password },
      success: function(res) {
        callBack(res);
      }
    });
  },
  logout: function(callBack) {
    $.post(URLIST.user_logout, function(res) {
      callBack(res);
    });
  },
  getInfo: function(callBack) {
    $.get(URLIST.user_getuser, function(res) {
      callBack(res);
    });
  },
  editInfo: function(fd, callBack) {
    $.ajax({
      url: URLIST.user_editInfo,
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
