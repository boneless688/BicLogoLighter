function currentDate() {
     var currentDate = new Date()
     var date = currentDate.toDateString()
     var date_A = date.split(" ")
     var date_B = date_A[0] + ", " + date_A[1] + " " + date_A[2] + ", " + date_A[3]
     
     var proofDate = app.activeDocument.textFrames.getByName("DateBox")
     proofDate.contents = date_B
}





currentDate()