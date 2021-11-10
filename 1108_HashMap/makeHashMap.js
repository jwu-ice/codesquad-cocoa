/*
  키값을 넣으면, 일정한 크기의 해시값을 받는다.
  그 값을 주소삼아 key - value를 저장하는 해시맵을 만들어보자.

  put(String key, String value) 키-값을 추가한다.
  remove(String key) 해당 키에 있는 값을 삭제한다.
  containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
  get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
  isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
  keys() 전체 키 목록을 [String] 배열로 리턴한다.
  replace(String key, String value) 키-값으로 기존 값을 대체한다.
  size() 전체 아이템 개수를 리턴한다.
  clear() 전체 맵을 초기화한다.
 */

const HashMap = function () {
  this.hashTable = [];
  // HashFunc :>> data -> index
  HashMap.prototype.getHash = function (data) {
    const keyData = data.toString();
    let hash = 0;

    /* codePointAt()
       string -> unicode 값으로 바꿔줌 ( 특수문자나 이모지 O ) */
    for (let i = 0; i < keyData.length; i++) {
      hash += keyData.codePointAt(i);
    }
    // 내가 정한 저장공간 제한 : 20
    const hashIndex = hash % 20;
    console.log("hashIndex :>>", hashIndex);
    return hashIndex;
  };

  HashMap.prototype.put = function (key, value) {
    const hash = this.getHash(key);
    let curValue = this.hashTable[hash];

    // value를 해당하는 해시(인덱스)값에 넣는다.
    // 만약 이미 값이 있을 때 값 :>> [ ], [ ]

    curValue
      ? typeof this.hashTable[hash][0] === "object"
        ? (this.hashTable[hash] = [...curValue, [key, value]])
        : (this.hashTable[hash] = [[...curValue], [key, value]])
      : (this.hashTable[hash] = [key, value]);
  };

  HashMap.prototype.remove = function (key) {
    const hash = this.getHash(key);
    let curValue = this.hashTable[hash];

    if (this.hashTable[hash][0] === key) delete this.hashTable[hash];

    curValue.forEach((value, index) => {
      if (value[0] === key) curValue.splice(index, 1);
    });
  };

  HashMap.prototype.containsKey = function (key) {
    const hash = this.getHash(key);
    let curValue = this.hashTable[hash];
    if (this.hashTable[hash][0] === key) return true;
    if (curValue.some((value) => value[0] === key)) return true;

    return false;
  };
};
const fruit = new HashMap();
fruit.put("사과", "빨간색");
fruit.put("바나나", "노란색");
fruit.put("나나바", "초롱란색");
fruit.put("망고", "노란색");
fruit.put("자두", "빨간색");
//
fruit.remove("바나나");
console.log(fruit.containsKey("자두"));
//
console.log(fruit.hashTable);
