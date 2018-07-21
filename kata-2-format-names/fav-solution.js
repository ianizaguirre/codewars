function runProgram() {
  // const list = [{
  //   name: 'Bart'
  // }, {
  //   name: 'Lisa'
  // }, {
  //   name: 'Maggie'
  // }, {
  //   name: 'Homer'
  // }, {
  //   name: 'Marge'
  // }]



  const list = [{
    name: 'Antho'
  }]

  // const list = [{
  //   name: ''
  // }]

  // const list = [{
  //   name: 'Ian'
  // }, {
  //   name: 'Antho'
  // }]


  console.log(list);




  var newList = list.map(name => name.name);
  var x = newList.pop()
  console.log(x);
  console.log(newList);
  console.log(newList.length);

  return newList.length ? newList.join(", ") + " & " + x : x || ""



  // let test1 = newList.join(", ") + " & " + x;
  // console.log(test1);

}

console.log(runProgram());


// ===== Favorite Solutions ====
// (1)

// https://www.codewars.com/kata/reviews/552fd3b9d04dfa81d4000143/groups/55eeecb9e1606e690f0000ea

// function list(names) {
//   var xs = names.map(p => p.name)
//   var x = xs.pop()
//   return xs.length ? xs.join(", ") + " & " + x : x || ""
// }
// ------------------
// (2)

// https://www.codewars.com/kata/reviews/552fd3b9d04dfa81d4000143/groups/5533eb624a5dd5c151000038

// function list(names) {
//   return names.reduce(function (prev, current, index, array) {
//     if (index === 0) {
//       return current.name;
//     } else if (index === array.length - 1) {
//       return prev + ' & ' + current.name;
//     } else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
// }