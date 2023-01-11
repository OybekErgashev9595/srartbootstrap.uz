import logo from './logo.svg';
import './App.css';
import rasm2 from './rasm2.jpg';
import rasm3 from './rasm3.jpg';

function App() {
  return (
    <div className="App ">
      <header>
        <nav class="container navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Contact</a>
                <a class="nav-link" href="#">Blog</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className='home'>        
        <div className='blogHome'>
          <h1>Welcome to Blog Home!</h1>
          <p>A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>
        <div className='carsdHome container my-4'>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-img">
                      <img src={rasm2} className="w-100" alt="" />
                    </div>
                    <div className="card-body">
                      <p>January 1, 2022</p>
                      <h2>Featured Post Title</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, 
                         a laboriosam. Dicta expedita corporis animi vero voluptate
                          voluptatibus possimus, veniam magni quis!
                      </p>
                      <button className='btn btn-primary'>Read more</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card my-3">
                    <div className="card-img">
                      <img src={rasm3} className="w-100" alt="" />
                    </div>
                    <div className="card-body">
                      <p>January 1, 2022</p>
                      <h2>Post Title</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className='btn btn-primary'>Read more</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card my-3">
                    <div className="card-img">
                      <img src={rasm3} className="w-100" alt="" />
                    </div>
                    <div className="card-body">
                      <p>January 1, 2022</p>
                      <h2>Post Title</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className='btn btn-primary'>Read more</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card my-3">
                    <div className="card-img">
                      <img src={rasm3} className="w-100" alt="" />
                    </div>
                    <div className="card-body">
                      <p>January 1, 2022</p>
                      <h2>Post Title</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className='btn btn-primary'>Read more</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card my-3">
                    <div className="card-img">
                      <img src={rasm3} className="w-100" alt="" />
                    </div>
                    <div className="card-body">
                      <p>January 1, 2022</p>
                      <h2>Post Title</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className='btn btn-primary'>Read more</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <hr />
                </div>
                
                <div className="col-md-12 home-pagin">
                  
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link">Newer</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">...</a></li>
                      <li class="page-item"><a class="page-link" href="#">15</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Older</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <p>Search</p>
                </div>
                <div className="card-body">
                  <div className='btn-group w-100'>
                    <input className='form-control' placeholder='Enter search term...' type="text" />
                    <button className='btn btn-primary'>GO!</button>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header">
                  <p>Categories</p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <a className='d-block' href="">Web Design</a>
                      <a className='d-block' href="">HTML</a>
                      <a href="">Freebies</a>
                    </div>
                    <div className="col">
                      <a className='d-block' href="">JavaScript</a>
                      <a className='d-block' href="">CSS</a>
                      <a className='d-block' href="">Tutorials</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header">
                  <p>Side Widget</p>
                </div>
                <div className="card-body">
                  <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>

      </section>
      <footer>
        <p>Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;
