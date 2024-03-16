import {useState, useEffect} from 'react';

import {copy, linkIcon, loader, tick} from '../assets';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })

  const handleSubmit = async(e) => {
    alert('Submitted');
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center"
        onSubmit={handleSubmit}>
          <img className="absolute left-0 my-2 ml-3 w-5" src={linkIcon} alt="link-icon"/>
          <input type="url" placeholder="Enter a url" value={article.url}
          onChange={(e) => setArticle({...
            article, url:e.target.value
          })}
          required
          className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn px-8 peer-focu:border-gray-700 peer=focus:text-gray-700">
            Submit
          </button>

        </form>

        {/* Browse URL History */}

      </div>

      {/* Display Results */}

    </section>
  )
}

export default Demo