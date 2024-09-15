import React from 'react'
import Header from '../Components/Header/Header'

const DefaultLayout = (props) => {
  return (
    <>
<Header/>
    <div>{props.children}</div>
    {/* Footer */}
    </>
  )
}

export default DefaultLayout
