const endpoint = "https://danieldb-2683.restdb.io/rest/rating";
const key = "5f959ef84b77c1637d147d90";

export function getRatingArray(callback) {
  fetch(`${endpoint}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}

export function post(payload) {
  fetch(`${endpoint}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
    body: JSON.stringify(payload),
  })
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
    });
}

export function put(id, newRatingList, callback) {
  console.log(id, newRatingList, "in put");
  let data = {
    ratingArray: newRatingList,
  };
  let postData = JSON.stringify(data);

  fetch(`${endpoint}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((e) => e.json())
    .then((t) => {
      callback(t);
    });
}
