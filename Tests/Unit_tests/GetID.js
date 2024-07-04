function isNotNull(id) {
  return id != null;
}
function GetCurrID(id, idDB) {
  return id === idDB;
}
module.exports = isNotNull;
module.exports = GetCurrID;
