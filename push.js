$("#push-button").on("click", function(){
    var lottoNumber = "";

    for (var i=0; i < 9; i++){
        var random = Math.floor(Math.random() * 9) +1;
        lottoNumber = random + lottoNumber;
    }
    console.log(lottoNumber);

    $("#randomNumbers").append("<br><hr>" + "<h1>" + lottoNumber + "</h1>")
})