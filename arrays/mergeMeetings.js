const meetings = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];

const meetings1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]
// STRATEGY
// sort the array of meetings by startTime.  Since they're sorted,
// the next meeting will overlap if the startime is less than the last meeting's endTime
// if they overlap, update OUTPUT's last meeting's endTime
// otherwise, add a new meeting to end of OUTPUT;

const merge = (meetings) => {
  let copy = JSON.parse(JSON.stringify(meetings));
  let sorted = copy.slice().sort( (a,b) => {
    return a.startTime > b.startTime ? 1 : -1;
  });
  
  let output = [sorted[0]];
  
  for (let i = 1; i < sorted.length; i++) {
    let lastMeeting = output[output.length-1];
    if (sorted[i].startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = sorted[i].endTime;
    } else {
      output.push(sorted[i]);
    }
  }
  return output;
}

console.log(
  merge(meetings1)
)
