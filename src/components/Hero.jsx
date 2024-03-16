import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img className="w-28 object-contain" src={logo} alt="logo"/>
        <button className="black_btn" type="button" onClick={() => window.open('https://github.com/AnushkaM02/Article-Summariser')}>Github</button>
      </nav>

      <h1 className="head_text">
        Summarise articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify reading with Summize - project by Anushka
      </h2>

    </header>
  )
}

export default Hero