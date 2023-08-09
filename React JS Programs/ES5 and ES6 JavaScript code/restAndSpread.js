// ...tect is known as rest parameter 
// which can take 0 or 1 or many parameter 
function empInfo(id,name,salary,...tech){
    document.write("<br/> "+id);
    document.write("<br/> "+name);
    document.write("<br/> "+salary);
    document.write("<br/> tech "+tech.length);
}
let technologies = ["C","C++","Java","Python"]
empInfo(1,"Ravi",21)
empInfo(2,"Ramesh",22,"Java")
empInfo(2,"Lokesh",24,"Java","Angular","Python","React JS");
empInfo(3,"mahesh",34,technologies);  
empInfo(3,"mahesh",34,technologies[0],technologies[1],technologies[2],technologies[3]);
empInfo(3,"mahesh",34,...technologies);  //  spread operator or parameter 