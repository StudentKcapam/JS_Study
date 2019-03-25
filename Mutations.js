function mutation(arr) {
  var arrfirst = arr[0].toLowerCase();
  var arrsecond = arr[1].toLowerCase();
  //alert(arrfirst + " "+arrsecond)
  for(var a = 0; a < arrsecond.length; a++){//right
    if(arrfirst.indexOf(arrsecond[a]) >= 0){

    }
    else{
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);
