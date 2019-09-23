var category = {
  search: function(callBack) {
    $.getJSON(URLIST.category_search, function(res) {
      callBack(res);
    });
  },
  add: function(name, slug, callBack) {
    $.post(
      URLIST.category_add,
      {
        name: name,
        slug: slug
      },
      function(res) {
        callBack(res);
      }
    );
  },
  del: function(id, callBack) {
    $.post(URLIST.category_del, { id: id }, function(res) {
      callBack(res);
    });
  },
  edit: function(param, callBack) {
    var id = param.id;
    var name = param.name;
    var slug = param.slug;
    $.post(
      URLIST.category_edit,
      {
        id: id,
        name: name,
        slug: slug
      },
      function(res) {
        callBack(res);
      }
    );
  }
};
