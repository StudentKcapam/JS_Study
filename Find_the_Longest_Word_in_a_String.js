function findLongestWordLength(str) {
  var arr = new Array();
  arr = str.split(' ');
  arr.sort();
  var returnvalue = 0;
  for(var a = 0; a < arr.length; a++){
    if(returnvalue < arr[a].length){
      returnvalue = arr[a].length;
    }
  }

  return returnvalue;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
