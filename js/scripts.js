function information(){
  var male=document.getElementById("maleInput").checked;
  var female=document.getElementById("femaleInput").checked;
  var day=document.getElementById("dayInput").value;
  var month=document.getElementById("monthInput").value;
  var year=document.getElementById("yearInput").value;

  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var birthDate = new Date(day+ '/' +month + '/' + year);
  var dayOfWeek = birthDate.getDay();

  if (day <= 0 || day > 31) {
  document.getElementById("false-value").innerText = "Date has to be valid"
  }
  else if((month === "April" || month === "June" || month === "September" || month === "November") && (day <= 0 || day > 30)) {
  document.getElementById("false-value").innerText = "Date has to be valid"  
  }
  else if ((month === "February") && ( day <=0 || day > 29) && (year %4 ==0)) {
    document.getElementById("false-value").innerText = "Date has to be valid"
  }
  else if ((month === "February") && ( day <=0 || day >28) && (year %4 !=0)) {
    document.getElementById("false-value").innerText = "Date has to be valid"
  }

  else if ((male === false) && (female === false)) {
    document.getElementById("false-value").innerText = "add your gender"
  }
  else if (year <= 1900 || year > 2021) {
    document.getElementById("false-vlaue").innerText = "enter valid year"
  } 
  else if (month === "SELECT") {
    document.getElementById("false-value").innerText = "Select a month"
  }



  else if (male === true) {
    document.getElementById("Akan").innerText = "Your birthday was a " + days[dayOfWeek] + " " + " and your Akan name is " + maleNames[dayOfWeek]
  }
  else if (female === true) {
    document.getElementById("Akan").innerText = "Your birthday was a " + days[dayOfWeek] + " " + " and your Akan name is " + femaleNames[dayOfWeek]
  }

}