
    var config = {
    apiKey: "AIzaSyDkr9B64YO0UGOtG_zhcG9bcyXeepC4xyw",
    authDomain: "trainhomework-f9d24.firebaseapp.com",
    databaseURL: "https://trainhomework-f9d24.firebaseio.com",
    projectId: "trainhomework-f9d24",
    storageBucket: "trainhomework-f9d24.appspot.com",
    messagingSenderId: "1092553660208"
  };

  firebase.initializeApp(config);

  var database = firebase.database();



  $("#add-train").on("click", function() {
  		event.preventDefault();

      //var frequency = parseInt(frequency);

  		var trainName = $("#name-input").val().trim();
  		var destination = $("#dest-input").val().trim();
  		var firstTime = moment($("#time-input").val().trim(), "HH:mm").subtract(10, "years").format("LT");;
  		var frequency = $("#frequency-input").val().trim();

  //    var newTrain = {
  //      trainName: trainName,
  //      destination : destination,
  //      firstTime : firstTimeUnix,
  //      frequency : frequency
  //    }
      
      var currentTime = moment();
      console.log("Current Time: " + moment().format('HH:mm'));
      

      var newTrain = {
                name: trainName,
                place: destination,
                ftTrain : firstTime,
                freq : frequency,
               
            }

            database.ref().push(newTrain);
    console.log(newTrain.name);


        $("#name-input").val("");
        $("#dest-input").val("");
        $("#time-input").val("");
        $("#frequency-input").val("");

        return false;

      
      
  		 });


      
      //database.ref().set({
     //   trainName : trainName
     // })
      //console.log(newTrain);
      //database.ref().set(newTrain);

      database.ref().on("child_added", function(childSnapshot){

        console.log(childSnapshot.val());

          var trainName = childSnapshot.val().name;
          var destination = childSnapshot.val().place;
          var frequency = childSnapshot.val().freq;
          var firstTime = childSnapshot.val().ftTrain;

          var firstTimeConverted = moment(firstTime, "HH:mm");
          var currentTime = moment().format("HH:mm");
          
          var differenceTimes = moment().diff(moment(firstTimeConverted), "minutes");
          var tRemainder = differenceTimes % frequency;

          var tMinutes = frequency - tRemainder;
          //var minutesConverted = moment().endOf('day').fromNow();

          var tArrival = moment().add(tMinutes, "minutes").format("LT");
          

          $(".table-hover > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");







          


      });
    




    
 
  




  //});

  

    
      
//});






  //setInterval(function(){
  	//location.reload();
  //}, 6000)