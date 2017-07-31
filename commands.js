module.exports = {
  pwd: function(){
    return process.env.PWD;
  },

  date: function(){
    return new Date().toString();
  }
}
