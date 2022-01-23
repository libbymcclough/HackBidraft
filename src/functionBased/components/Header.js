import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#ececec", textAlign: "center" }}>Retro Workout Party</h1>
    </header>
  )
}

export default Header