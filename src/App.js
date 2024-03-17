export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Header() {
  return (
    <header className="header container">
      <img src="images/logo.svg" alt="logo" className="logo" />
      <NavBar />
      <Card />
      <img src="images/image-avatar.png" alt="avatar" className="avatar" />
    </header>
  );
}

function NavBar() {
  return (
    <nav>
      <ul className="nav-bar">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Card() {
  return (
    <div className="card">
      <img src="images/icon-cart.svg" alt="card" />
      <div className="card-items">
        <p>
          <span>Cart</span>
          <span>&times;</span>
        </p>
        <div>Your cart is empty.</div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="main container">
      <Photos />
      <Details />
    </main>
  );
}

function Photos() {
  return (
    <section className="photos">
      <div className="current-pic">
        <img src="images/image-product-1.jpg" alt="pic" />
      </div>
      <ul className="thumbns">
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i}>
            <img
              src={`images/image-product-${i + 1}-thumbnail.jpg`}
              alt={`${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
function Details() {
  return (
    <section className="details">
      <h3>Sneaker company</h3>
      <h1>
        Fall limited edition
        <br /> sneakers
      </h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="offer">
        <p>
          <span>$125.00</span>
          <span>50%</span>
        </p>
        <del>$250.00</del>
      </div>
      <Buy />
    </section>
  );
}
function Buy() {
  return (
    <div className="buy">
      <div>
        <img src="images/icon-minus.svg" alt="minus" />
        <span>0</span>
        <img src="images/icon-plus.svg" alt="plus" />
      </div>
      <button className="btn-add">
        <img src="images/icon-cart-add.svg" alt="card" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
