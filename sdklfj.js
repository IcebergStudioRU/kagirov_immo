const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("vasa");
      reject("Привет МИр")
  }, 2000);
}).catch((res) => res + "Мы ошиблись")
console.log("lkfdsfksowe")

async function test() {
  const testt = await prom;
  console.log("синхронный" + testt);
}

test()
