
module.exports = function(source) {
  console.log(this.query);
  return source.replace('rick', this.query.name);
}