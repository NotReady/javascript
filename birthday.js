function getBirthday(){
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;

  return new Date(hear, month-1, day);
}

function getDateDiff(previous, latest){
 let diff = latest.getTime() - previous.getTime();

 const days = Math.floor(diff / (1000*60*60*24);
 diff -= days * (1000*60*60*24);

 const hours = Math.floor(diff / 1000*60*60);
 diff -= hours * (1000*60*60);

 const mins = Math.floor( diff / 1000* 60);
 diff -= mins * (1000*60);

 const seconds = Math.floor(diff / 1000);
 diff -= seconds * 1000;

 return {days:days, hours:hours, seconds:seconds};
}

function calculateBirthday(){
  const now = new Date();
  const birth = getBirthday();

  const diff = getDateDiff(birth, now);
  const message = "あなたが生まれてから" + diff.days + "日になりました";

  const result = documnet.getElementById("result");
  result.textContent = message;
  result.style.display = "";
}
