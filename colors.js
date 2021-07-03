/*querySelector을 사용하면 제일 상위 태그 하나만 불러옴*/
  var links = {
    setColor: function(color) {
      var h1_bg = document.querySelector('h1');
      h1_bg.style.backgroundColor = color;
    }
  }
/*querySelectorAll을 사용하면 관련된 모든 태그를 순위별로 불러오는데,
이때 배열을 사용해서 스타일을 적용하고자 하는 태그만 사용 가능 하다.*/
  var links2 = {
    setColor2: function(color) {
      var alist = document.querySelectorAll('a');
      alist[0].style.color = color;
    }
  }

function nightdayhandler(self) {
  var target = document.querySelector('body');
  if (self.value === '다크모드') {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    document.querySelector('#q1').style.color = 'white';
    document.querySelector('#q2').style.color = 'white';
    self.value = '라이트모드';

    links.setColor('black');
    links2.setColor2('white');
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    document.querySelector('#q1').style.color = 'black';
    document.querySelector('#q2').style.color = 'black';
    self.value = '다크모드';

    links.setColor('#F8D55D');  /*배경색*/
    links2.setColor2('black'); /*글자색*/

  }
}
