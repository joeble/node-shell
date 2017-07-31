module.exports = {
  pwd: function(){
    let output = process.env.PWD;
    process.stdout.write(output);
  },

  date: function(){
    let dateBoy = new Date().toString();
    process.stdout.write(dateBoy);
  }
}
