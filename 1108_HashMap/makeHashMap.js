/*
1. 해시맵 구현
해시맵(해시테이블)의 특징에 대해서 미리 학습한다.

해시맵처럼 동작하는 코드를 구현한다.

문자열 키와 문자열 값을 저장하는 해시맵 라이브러리를 구현한다.
고유한 Hash 함수를 정한다.
put(String key, String value) 키-값을 추가한다.
remove(String key) 해당 키에 있는 값을 삭제한다.
containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
keys() 전체 키 목록을 [String] 배열로 리턴한다.
replace(String key, String value) 키-값으로 기존 값을 대체한다.
size() 전체 아이템 개수를 리턴한다.
clear() 전체 맵을 초기화한다.
객체 형태로 만든다.
객체는 JavaScript prototype 속성을 활용한다.
--
function Foo() {..}
Foo.prototype.put = function() {...}
Foo.prototype.remove = function() {...}
....

*/

// fruit : "color"
function HashMap() {
  HashMap.prototype.put = function (key, value) {
    this[key] = value;
  };

  HashMap.prototype.remove = function (key) {
    delete this[key];
  };

  HashMap.prototype.containsKey = function (key) {
    this[key] ? true : false;
  };

  HashMap.prototype.get = function (key) {
    return this[key];
  };

  HashMap.prototype.isEmpty = function () {
    return Object.keys(this).length ? false : true;
  };

  HashMap.prototype.keys = function () {
    return Object.keys(this);
  };

  HashMap.prototype.replace = function (key, value) {
    Object.keys(this).includes(key)
      ? (this[key] = value)
      : console.log(`does not have key: ${key} `);
  };

  HashMap.prototype.size = function () {
    return Object.keys(this).length;
  };

  HashMap.prototype.clear = function () {
    for (let key in this) delete this[key];
  };
}

// test
const foo = new HashMap();
foo.put("apple", "red");
foo.put("banana", "yellow");
foo.put("mango", "yellow");
foo.put("watermelon", "green");
foo.remove("banana");
foo.containsKey("apple");
console.log(foo);
console.log(foo.isEmpty());

// 해시 알고리즘 충돌 종류와 방지 방법 알아보기
