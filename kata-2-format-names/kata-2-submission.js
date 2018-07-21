function list(names) {

  const list = names;
  let newList = list.map(name => name.name);

  const lastTwoNames = newList.splice(-2);

  if (list.length <= 1) {
    return lastTwoNames.join(' ')

  } else if (list.length === 2) {
    lastTwoNames.splice(1, 0, '&');
    return lastTwoNames.join(' ')

  } else {
    lastTwoNames.splice(1, 0, '&');
    newList.splice(newList.length, 0, 'X');

    newList = newList
      .join(', ').split(' ');

    newList.pop()
    return [...newList, ...lastTwoNames].join(' ');
  }

}