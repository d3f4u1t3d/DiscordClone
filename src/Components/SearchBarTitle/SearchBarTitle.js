import React from 'react'
import './SearchBarTitle.css'

function SearchBarTitle({svg,title}) {
  return (
    <>
      <div className="name">
                    <div className="baricons">
                        {svg}
                    </div>
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                </div>
    </>
  )
}

export default SearchBarTitle
