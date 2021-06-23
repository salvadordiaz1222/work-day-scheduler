
// Date and Time
let currentDay = moment();

const currentTimeInterval = setInterval(function () {
    currentDay = moment();
    $("#currentDay").text(`${currentDay.format("dddd, MMMM Do YYYY")}`);
},)


// event listener
var saveBtn = $(".saveBtn"); 
saveBtn.on("click", function(){
    var saveTask = $(this).siblings("textarea").val()
    var saveId = $(this).attr("id")
    localStorage.setItem(saveId, saveTask);
})
// setting the color of past, present and future. Display the value in local storage.
function loadData() {
    for (let i = 9; i <= 17; i++) {
        let hr = currentDay.format('H');
        if(i < hr){
            document.getElementById("task" + i).classList.add("past")
        }else if(i === hr){
            document.getElementById("task" + i).classList.add("present")
        }else{
            document.getElementById("task" + i).classList.add("future")
        }
        var task = localStorage.getItem("save" + i)
        $("#task" + i).val(task)
        
    }
}


loadData()