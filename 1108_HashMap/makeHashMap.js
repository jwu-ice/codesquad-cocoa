function HashMap() {
  this.table = [];

  // HashFunc :>> data -> index
  HashMap.prototype.getHash = (data) => {
    let hash = 0;

    /* charCodeAt()
       UTF-16 코드를 나타내는 0 ~ 65535 중 하나 리턴 */
    for (let i = 0; i < data.length; i++) {
      hash += data.charCodeAt(i);
    }
    console.log("hash", hash);
    return hash;
  };
}

const fruit = new HashMap();
console.log(fruit.getHash(100));

const ran = "123";
console.log("ran.charCodeAt()", ran.charCodeAt(0));
