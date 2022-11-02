module.exports = del_Active_obj_query({
    isActive: true,
    delStatus: false,
  });
  
  module.exports = default_omit_arr(['createdAt', 'updatedAt', 'delStatus', '__v']);
  