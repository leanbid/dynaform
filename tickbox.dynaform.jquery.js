
(function(){
  var type = new DynaformType();
  
  type.name = function(){
    return "tickbox";
  };
  
  type.html = function(){
    return "<input type=\"checkbox\" disabled /> (tickbox)";
  };
  
  Dynaform.addType(type);
})();
