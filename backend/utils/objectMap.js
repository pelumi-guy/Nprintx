const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce(function(result, key) {
        let v = object[key];
        if (typeof v === 'object' && !Array.isArray(v) && v !== null) {
            const temp = objectMap(v, mapFn);
            v = temp;
            // console.log({v});
        }
        // console.log({v});

        result[key] = mapFn(v);
        result.key

      return result;
    }, {});
  };


  // const queryStr = { price: { '$lte': '1000', '$gte': '0' }, ratings: { '$gte': '0' } }
  // const jsonStr = JSON.stringify(queryStr);

  // const finObj = objectMap(JSON.parse(jsonStr), (item) => Number.isNaN(parseInt(item)) ? item : parseInt(item))
  // console.log(finObj);

  module.exports = objectMap;