let math = 98
let english = 75
let accounting = 85
let statistics = 92
let economics = 65

document.write(`Mathematics              = ${math}<br>`)
document.write(`Bussiness English        = ${english}<br>`)
document.write(`Principles of Accounting = ${accounting}<br>`)
document.write(`Statistics               = ${statistics}<br>`)
document.write(`Economics                = ${economics}<br><br>`)


let marksObtained = math+english+accounting+statistics+economics
let percentage = marksObtained/500*100 

let grade = percentage >= 80 && percentage <= 100 ? "Grade A+"
: percentage >= 70 && percentage <= 79 ? "Grade A"
: percentage >= 60 && percentage <= 69 ? "Grade B"
: percentage >= 50 && percentage <= 59 ? "Grade C"
: percentage >= 40 && percentage <= 49 ? "Grade D"
: percentage <=39 ? "Fail"
: "invalid Percentage"
  

// let heading = getElementbyID(abc)
// document.write(heading)

document.write(`Marks Obtained = ${marksObtained}<br>`)
document.write(`Total Marks = 500<br>`)
document.write(`Percentage = ${percentage}<br><br>`)



document.write(`Grade =${grade} `)

