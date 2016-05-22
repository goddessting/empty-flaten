function returnCollection(element, collection_one){
  for(var j = 0; j < collection_one.length; j++){
    if(element === collection_one[j]){
      break;
    }
  }
  if(j >= collection_one.length){
    collection_one.push(element);
  }
}

function pushCollection(elements, collection_one){
  elements.forEach(function(element){
    returnCollection(element, collection_one);
  });
}

function double_to_one(collection) {
  var collection_one = [];

  for(var i = 0; i < collection.length; i++){
      pushCollection(collection[i], collection_one);
  }

  return collection_one;
}

module.exports = double_to_one;
