const Banner = () => {
  return (
    <>
      <h2 className="text-7xl font-bold text-center m-8">This is carousel</h2>
      <div className="carousel w-full h-[550px] mb-6">
        {/* slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1626721105368-a69248e93b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFkbWludG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-full "
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2c2c2c] to-[rgba(21, 21, 21, 0)]">
            <div className="text-warning space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">Badminton</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-outline btn-secondary">Button</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=993&q=80"
            className="w-full"
          />
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#282828] to-[rgba(21, 21, 21, 0)]">
            <div className="text-error space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">Football</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-outline btn-warning">Warning</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-base-200 space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">Cricket</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-outline btn-error">Error</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
