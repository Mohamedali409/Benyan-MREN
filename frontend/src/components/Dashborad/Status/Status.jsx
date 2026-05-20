import CartStatus from "../../ui/CartStatus";

const Status = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <CartStatus counter="100" title="User" />
          </div>
          <div className="col-12 col-md-3">
            <CartStatus counter="150" title="Developers" />
          </div>
          <div className="col-12 col-md-3">
            <CartStatus counter="80" title="Blogs" />
          </div>
          <div className="col-12 col-md-3">
            <CartStatus counter="120" title="Projects" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
