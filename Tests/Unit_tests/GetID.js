const TestsMethods = {
  isNotNull: (isNotNull = (id) => {
    return id != null;
  }),
  GetCurrID: (GetCurrID = (id, idDB) => {
    return id === idDB;
  }),
};
module.exports = TestsMethods;
