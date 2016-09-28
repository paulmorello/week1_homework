
// PT Planner

var origin = 'Southern Cross';
var destination = 'Glenferrie';

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

// What line am I on

var alameinOrigin = alamein.indexOf(origin);
var glenWaverlyOrigin = glenWaverly.indexOf(origin);
var sandringhamOrigin = sandringham.indexOf(origin);

var alameinDestination = alamein.indexOf(destination);
var glenWaverlyDestination = glenWaverly.indexOf(destination);
var sandringhamDestination = sandringham.indexOf(destination);

// Where is Richmond on the line

if (alameinOrigin !== -1) {
  var toDestinationAlamein = alamein.slice(alameinOrigin, alamein.indexOf('Richmond')+1);
} else if (glenWaverlyOrigin !== -1) {
  var toDestinationGlenWaverly = glenWaverly.slice(glenWaverlyOrigin, glenWaverly.indexOf('Richmond')+1);
} else if (sandringhamOrigin !== -1) {
  var toDestinationSandringham = sandringham.slice(sandringhamOrigin, sandringham.indexOf('Richmond')+1);
}

// Which line is the destination on

if (alameinDestination !== -1) {
  var changeOne = alamein.slice(alamein.indexOf('Richmond')+1, (alameinDestination)+1);
} else if (glenWaverlyDestination !== -1) {
  var changeTwo = glenWaverly.slice(glenWaverly.indexOf('Richmond')+1, (glenWaverlyDestination)+1);
} else if (sandringhamDestination !== -1) {
  var changeThree = sandringham.slice(sandringham.indexOf('Richmond')+1, (sandringhamDestination)+1);
}

var finalDestination = function (origin, destination) {
  if (alameinOrigin !== -1 && alameinDestination !== -1) {
    console.log(toDestinationAlamein + ' ' + changeOne);
  }
  else if (glenWaverlyOrigin !== -1 && glenWaverlyDestination !== -1) {
    console.log(toDestinationGlenWaverly + ' ' + changeTwo);
  }
  else if (sandringhamOrigin !== -1 && sandringhamDestination !== -1) {
    console.log(toDestinationSandringham + ' ' + changeThree);
  }
  else if (alameinOrigin !== -1 && glenWaverlyDestination !== -1) {
    console.log(toDestinationAlamein + ' ' + changeTwo);
  }
  else if (alameinOrigin !== -1 && sandringhamDestination !== -1) {
    console.log(toDestinationAlamein + ' ' + changeThree);
  }
  else if (glenWaverlyOrigin !== -1 && alameinDestination !== -1) {
    console.log(toDestinationGlenWaverly + ' ' + changeOne);
  }
  else if (glenWaverlyOrigin !== -1 && sandringhamDestination !== -1) {
    console.log(toDestinationGlenWaverly + ' ' + changeThree);
  }
  else if (sandringhamOrigin !== -1 && alameinDestination !== -1) {
    console.log(toDestinationSandringham + ' ' + changeOne);
  }
  else if (sandringhamOrigin !== -1 && glenWaverlyDestination !== -1) {
    console.log(toDestinationSandringham + ' ' + changeOne);
  }
}

finalDestination(origin, destination);
