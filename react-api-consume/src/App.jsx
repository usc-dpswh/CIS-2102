import { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [id, setID] = useState('');
  const [error, setError] = useState(null);
  const [tags, setTags] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [tagPlaceholder, setTagPlaceholder] = useState("")

  const apiUrl = 'https://api.waifu.im/search';
  const params = {
    included_tags: `${id}`,
    height: '>=1000',
  };
  const queryParams = new URLSearchParams(params);
  const requestUrl = `${apiUrl}?${queryParams}`;

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(requestUrl);
      if (!response.ok) {
        setError(<h1 style={{ color: 'red' }}>404</h1>);
        setData([]);
      } else {
        const json = await response.json();
        setData([json]);
        setError(<h1 style={{ color: '#65f067' }}>200</h1>);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while fetching data');
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const clickHandler = (event) => {
    console.log(event.target.innerText);
    setTagPlaceholder(event.target.innerText);
  }

  const inputHandler = (event) => {
    setID(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const apiUrl = 'https://api.waifu.im/tags';

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed with status code: ' + response.status);
        }
      })
      .then((data) => {
        setTags(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('An error occurred:', error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header header="Fourth ReActivity" />
      <input onChange={inputHandler}></input>

      <h1>Available Tags:</h1>

      {isLoading ? (
        <div class="lds-dual-ring"></div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {Object.keys(tags).length > 0 ? (
              <>
                {Object.keys(tags).map((category) => (
                  <div key={category} style={{ cursor: 'pointer'}} onClick={clickHandler}>
                    <h4>{category}</h4>
                    <ul style={{ display: 'flex', gap: '1rem' }}>
                      {tags[category].map((tag) => (
                        <h5 key={tag}>{tag}</h5>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            ) : (
              <h1>None</h1>
            )}
          </div>
        </>
      )}
      <div>
        <button onClick={getData}>Get Data</button>
        {error && <h1 style={{ color: 'red' }}>{error}</h1>}
        {data.length > 0 && <h1 style={{ color: '#65f067' }}>Data fetch successful!</h1>}
        {data.length === 0 ? (
          <h1 style={{ color: 'red' }}>No data yet.</h1>
        ) : (
          data.map((item) => (
            <div style={{ backgroundColor: '#505050', padding: '1rem', borderRadius: '1rem' }}>
              <img style={{ objectFit: 'cover' }} src={item.images[0].url} alt="Waifu" />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
