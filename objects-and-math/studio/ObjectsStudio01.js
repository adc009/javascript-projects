let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function selectRandomEntry(array) {
  return array[Math.floor(Math.random()*array.length)];
}

let idArr = [];
let temp;
  for (let i=0; i<3; i++) {
    temp = selectRandomEntry(idNumbers);
    while (idArr.includes(temp)) {
      temp = selectRandomEntry(idNumbers);
    }
    idArr.push(temp);
  }
// console.log(idArr)

// Code your buildCrewArray function here:
function buildCrewArray(id, candidates) {
  let arr = [];
  for (let i=0; i<candidates.length; i++) {
    if (id.includes(candidates[i].astronautID)) {
      arr.push(candidates[i].name)
    }
  }
return arr;
}


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
// console.log(animals);
let crewArray = buildCrewArray(idArr,animals);
console.log(`${crewArray[0]}, ${crewArray[1]}, and ${crewArray[2]} are going to space!`)
