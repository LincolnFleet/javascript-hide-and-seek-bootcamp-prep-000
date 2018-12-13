function getFirstSelector(selector) {
  var result = document.querySelector(selector)
  return result
}

function nestedTarget() {
  var aim = document.querySelector('div#nested div.target')
  return aim
}

function increaseRankBy(n) {
  var search = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i < search.length; i++) {
    search[i].innerHTML = parseInt(search[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {
  var grand = document.getElementById('app').querySelector('div#grand-node')
  if (grand.querySelector('div') != undefined) {
    var grand = grand + ".querySelector('div')"
  }
  else {
    return grand
  }
}
