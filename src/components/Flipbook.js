import "../css/flipbook.css";
import HTMLFlipBook from "react-pageflip";

import BookCouv01 from "../img/Book-couv01.jpg";
import BookCouv02 from "../img/Book-couv02.jpg";
import Book01 from "../img/Book-01.jpg";
import Book02 from "../img/Book-02.jpg";
import Book03 from "../img/Book-03.jpg";
import Book04 from "../img/Book-04.jpg";
import Book05 from "../img/Book-05.jpg";
import Book06 from "../img/Book-06.jpg";
import Book07 from "../img/Book-07.jpg";
import Book08 from "../img/Book-08.jpg";
import Book09 from "../img/Book-09.jpg";
import Book10 from "../img/Book-10.jpg";
import Book11 from "../img/Book-11.jpg";
import Book12 from "../img/Book-12.jpg";
import Book13 from "../img/Book-13.jpg";
import Book14 from "../img/Book-14.jpg";
import Book15 from "../img/Book-15.jpg";
import Book16 from "../img/Book-16.jpg";
import Book17 from "../img/Book-17.jpg";
import Book18 from "../img/Book-18.jpg";
import Book19 from "../img/Book-19.jpg";
import Book20 from "../img/Book-20.jpg";
import Book21 from "../img/Book-21.jpg";
import Book22 from "../img/Book-22.jpg";
import Book23 from "../img/Book-23.jpg";
import Book24 from "../img/Book-24.jpg";
import Book25 from "../img/Book-25.jpg";
import Book26 from "../img/Book-26.jpg";
import Book27 from "../img/Book-27.jpg";
import Book28 from "../img/Book-28.jpg";

const Flipbook = (props) => {
  return (
    <div className="all-book">
      <HTMLFlipBook
        className="flip-book"
        width={550}
        height={550}
        showCover={true}
        size="stretch"
        minWidth={150}
        maxWidth={550}
        minHeight={150}
        maxHeight={550}
        flippingTime={600}
      >
        <div className="book-page">
          <img className="img-page" src={BookCouv01} alt="Couverture" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book01} alt="page 01" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book02} alt="page 02" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book03} alt="page 03" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book04} alt="page 04" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book05} alt="page 05" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book06} alt="page 06" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book07} alt="page 07" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book08} alt="page 08" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book09} alt="page 09" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book10} alt="page 10" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book11} alt="page 11" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book12} alt="page 12" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book13} alt="page 13" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book14} alt="page 14" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book15} alt="page 15" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book16} alt="page 16" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book17} alt="page 17" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book18} alt="page 18" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book19} alt="page 19" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book20} alt="page 20" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book21} alt="page 21" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book22} alt="page 22" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book23} alt="page 23" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book24} alt="page 24" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book25} alt="page 25" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book26} alt="page 026" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book27} alt="page 27" />
        </div>
        <div className="book-page">
          <img className="img-page" src={Book28} alt="page 28" />
        </div>
        <div className="book-page">
          <img
            className="img-page"
            src={BookCouv02}
            alt="Dernière de couverture"
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
