const Url = "https://foo-bar-managers.herokuapp.com/";
export function getData(callback1, callback2) {
  fetch(Url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
      else console.log("GET failed!");
    })
    .then((data) => {
      callback1(data);
      const x = data.taps.map((item) => ({
        name: item.beer,
        amount: 0,
      }));
      console.log(x, "x");
      callback2(x);
    });
}

export function getBeers(callback) {
  fetch(Url + "beertypes", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
      else console.log("GET failed!");
    })
    .then((data) => callback(data));
}

export function postOrder(payload, callback) {
  const postData = JSON.stringify(payload);
  fetch("https://foo-bar-managers.herokuapp.com/order", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((response) => callback());
}
