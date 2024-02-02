// Code your orbitCircumference function here:
function orbitCircumference(altitude) {
  return Math.round(2 * Math.PI * altitude);
}

// Code your missionDuration function here:
function missionDuration (numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let dist = orbitCircumference(orbitRadius) * numOrbits;
  let rawTime = dist/orbitSpeed;
  let output = Math.round(rawTime*100)/100;
  console.log(`The mission will travel ${dist} km around the planet, and it will take ${output} hours to complete.`);
  return output;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array) {
  return array[Math.floor(Math.random()*array.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000) {
  let walkTime = missionDuration(3, radius, speed);
  let oxygen = Math.round(candidate.o2Used(walkTime)*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${walkTime} hours and require ${oxygen} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 

 console.log(oxygenExpended(selectRandomEntry(crew),2500, 30000));