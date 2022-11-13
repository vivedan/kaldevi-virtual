import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "white",
  backgroundColor: "#006EAE",
  fontFamily: "futura-pt, sans-serif",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const logoStyles={
  width: "200px",
  height: "auto",
  padding: "50px",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
  textAlign: "center",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const linkStyles = {
  color: "yellow",
  fontWeight: "800",

}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <img style={logoStyles} src="/Kaldevi_Icon192.png" alt="logo Kaldevi"/>
      <title>La página no existe</title>
      <h1 style={headingStyles}>La página no existe</h1>
      <h3 style={paragraphStyles}>
        Lo sentimos, al parecer esa página no existe.
        <br/>
        Por favor, vuelve a la entrada del Showroom Kaldevi o a la página de Ortopedia Kaldevi.
      </h3>
      <Link style={linkStyles} to="https://experienciavirtual.kaldevi.com/">Showroom virtual Kaldevi</Link>
      <br/>
      <br/>
      <Link style={linkStyles} to="https://ortopedia.kaldevi.com/">Ortopedia Kaldevi</Link>
    </main>
  )
}

export default NotFoundPage
