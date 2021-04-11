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
  document.getElementById("error-text").innerText = "Date has to be valid"
  }
  else if((month === "April" || month === "June" || month === "September" || month === "November") && (day <= 0 || day > 30)) 
}