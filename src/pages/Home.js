import '../style/App.css';
import tools from '../data/tools.json';
import logo from '../assets/hiddentools-logo.png'
import { useState, useEffect } from 'react';
import { Banner, Footer } from '../components'
import { countBy } from 'lodash';

const Home = () => {
  
  // makes a list of just the categories of the tools
  const allCategories = tools.map( tool => tool.category )
  const countCategories = countBy(allCategories)
  const [currCategory, setCurrCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleTools, setVisibleTools] = useState(tools)

  // if searchQuery or currCategory changes, then update visibleTools
  useEffect(() => {
    setVisibleTools(
      filteredTools()
    )
  }, [searchQuery, currCategory])

  // returns an object of tools
  const filteredTools = () => {
    const toolsByCategory = currCategory === "All"
      ? tools // if all
      : tools.filter(tool => tool.category === currCategory) // otherwise apply category

    // query name and description
    const toolsBySearch = toolsByCategory
      .filter(tool => ((tool.name + tool.desc + tool.pricing + tool.category).toLowerCase()).includes(searchQuery.toLowerCase()))
    return toolsBySearch;
  }

  const changeSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const Button = ({ category, count }) => {
    return (
      <button
        className={`filter-button ${category === currCategory ? 'filter-active' : ''}`}
        onClick={() => {setCurrCategory(category)}}
      >
          {category} <span className="filter-count">({count})</span>
      </button>
    )
  }

  return (
    <div>
      <Banner title="We're currently in early release :) 🚀"/>
      <br/><br/><br/><br/>
      
      <header>
        <div className="header-content">
          <img alt="Hidden Tools Logo" className="logo" src={logo}/>
          <h1>Hidden Tools</h1>
          <p className="header-subtitle">Discover a wide collection of tools made by the community - for you. ✨👇🏻</p>
          <div className="search-wrapper">
            <input
              className="search" type="text" autoComplete="off" spellCheck="false" placeholder="Search names, descriptions, or tags..."
              value={searchQuery}
              onChange={changeSearch}
            />
           <div className="filter-wrapper">
            <Button category="All" count={tools.length} />
             { Object.keys(countCategories).map(category =>
              <Button category={category} count={countCategories[category]} />
            )}
           
           </div>
          </div>
        </div>
      </header>


      { (visibleTools.length === 0) && (
          <center><span className="no-results">😥 No results found for <strong>{searchQuery}</strong>.</span></center>

      )}

      <div className="tools">
        {
          visibleTools
          .map( tool => (
          <a href={`${tool.url}/?ref=hiddentools`} target="_blank" rel="noreferrer">
            <div className="tool">
              <img alt={`${tool.name.toLowerCase()}'s logo`} className="display" src={tool.img}/>
              <p>{tool.name}</p>
              <small>{tool.desc}</small>


              <div className="category-wrapper">
                <button className="pricing">💰 {tool.pricing}</button>
                <button className="category">🔥 {tool.category}</button>
              </div>

              <div className="makers-wrapper">
                {tool.makers.map(maker => (
                   <a href={`https://twitter.com/${maker.twitter}`} title={maker.twitter} target="_blank" rel="noreferrer"><img alt={`${maker.twitter.toLowerCase()}'s picture`} className="maker" src={maker.img}/></a>
                ))}
              </div>  
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
