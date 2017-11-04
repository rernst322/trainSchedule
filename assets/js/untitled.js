database.ref().on("child_added", function(childSnapshot){
  	console.log(childSnapshot.val());
  	var trainName = childSnapshot.val().trainName;
  	var destination = childSnapshot.val().destination;
  	var firstTime = childSnapshot.val().firstTime;
  	var frequency = childSnapshot.val().frequency;

  	console.log("Name: " + trainName);
  	console.log("Destination: " + destination);
  	console.log("First Train: "+ firstTime);
  	console.log("Frequency: "+ frequency);

  	var frequency = parseInt(frequency);

  	var currentTime = moment();
  	console.log("Current Time: " + moment().format('HH:mm'));

  	var convertedDate = moment(childSnapshot.val().firstTime, 'hh:mm').subtract(1, 'years');
  	var trainTime = moment(convertedDate).format('HH:mm');
  	var firstTimeConverted = moment(trainTime,'HH:mm').subtract(1, 'years');
  	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  	var tRemainder = diffTime % tFrequency;

  	var tMinutesTillTrain = tFrequency - tRemainder;

  	var nextTrain = moment().add(tMinutesTillTrain, 'minutes').format('HH:mm');

  	$("#currentTime").text(currentTime);
  });

  database.ref().push(){
        $("#tName").text(snapshot.val().trainName);
        $("#tDest").text(snapshot.val().destination);
        $("#tFrequency").text(snapshot.val().frequency);
        
  }