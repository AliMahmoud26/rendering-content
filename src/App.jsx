import { useState } from 'react'
import Portrait from './assets/portrait.jpg'

function App() {
  const [loading, setLoading] = useState(false)
  const [discovered, setDiscovered] = useState(false);
  const [home, setHome] = useState(false);

  const handleDiscoverMore = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDiscovered(true);  
    }, 3000);

  };

  return (
    <>
      <div className="app">
        {discovered ? (
          <>
            <div className="card-holder">
              <div className="card">
                <img src={Portrait} alt="Image" />
                <div className="card-content">
                  <h3>Image Title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus at nostrum maiores ad. Voluptate, excepturi.</p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="card">
                <img src={Portrait} alt="Image" />
                <div className="card-content">
                  <h3>Image Title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus at nostrum maiores ad. Voluptate, excepturi.</p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="card">
                <img src={Portrait} alt="Image" />
                <div className="card-content">
                  <h3>Image Title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus at nostrum maiores ad. Voluptate, excepturi.</p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <button className='back-btn'><a href="/" onClick={handleDiscoverMore} disabled={loading}>{loading ? 'Loading...' : 'Back Home'}</a></button>
          </>
        ) : (
          <>
            <h1>Welcome To My Website</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus porro excepturi 
              beatae architecto quaerat rem rerum nemo quia. Obcaecati soluta deserunt vel voluptatem 
              ad illum laboriosam repellat magnam necessitatibus labore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur labore repudiandae, delectus commodi vero dignissimos tempora autem id eos maiores molestiae perspiciatis explicabo pariatur magnam dolores facere? Ullam, vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sed consequatur laboriosam autem aspernatur sint facere, hic est a quis, doloremque atque quaerat nostrum aut doloribus iure voluptatum nisi fugit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sapiente quibusdam exercitationem repudiandae libero beatae distinctio quidem, harum, quaerat quae totam aliquam aperiam architecto doloribus deserunt hic fuga odio fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus voluptates labore ratione, consequatur porro, earum distinctio eveniet qui omnis sequi incidunt itaque? Dolorum laborum velit consectetur deserunt quod illo.
            </p>
            <button className='btn' onClick={handleDiscoverMore} disabled={loading}>
              {loading ? 'Loading...' : 'Discover More'}
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default App
