import React, { useEffect } from "react";
import BeerList from "../components/BeerList";
import Header from "../components/Header";

export default function Shop(props) {
  useEffect(() => {
    props.setShowNav(true);
  });

  return (
    <div className="Shop">
      <Header notificationsCount={props.notificationsCount} />
      <section className="beerListCenter">
        {
          <BeerList
            setShowNav={props.setShowNav}
            updateRating={props.updateRating}
            stars={props.stars}
            beers={props.beers}
            cartItems={props.cartItems}
            editCartItems={props.editCartItems}
          />
        }
      </section>
      <div className="credit">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/kiranshastry"
          title="Kiranshastry"
        >
          Kiranshastry
        </a>{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        and{" "}
        <a
          href="https://www.flaticon.com/authors/gregor-cresnar"
          title="Gregor Cresnar"
        >
          Gregor Cresnar
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
