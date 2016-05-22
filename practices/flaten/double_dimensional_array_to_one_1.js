function isTrueOrFlase(element){
  return element.length;
}

function pushCollection(elements, collection_one){
  elements.forEach(function(element){
    collection_one.push(element);
  });
}

function double_to_one(collection) {
  var collection_one = [];
  collection.forEach(function(element){
    if(isTrueOrFlase(element)){
      pushCollection(element, collection_one);
    }
    else{
      collection_one.push(element);
    }
  });

  return collection_one;
}

module.exports = double_to_one;
