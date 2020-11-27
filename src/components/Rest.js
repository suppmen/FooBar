const Url = "https://foo-bar-managers.herokuapp.com/"
export function getData(callback) {
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
        .then((data) => callback(data));
}

export function getBeers(callback) {
    fetch(Url+ "beertypes", {
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