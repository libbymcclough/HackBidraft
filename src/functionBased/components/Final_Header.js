import React from "react"

const Final_Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#ececec", textTransform: "lowercase", textAlign: "center" }}>Good job!</h1>
    </header>
  )
}

export default Final_Header;