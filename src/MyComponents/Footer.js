import React from 'react'

const Footer = () => {
  const footerSytle={
    position:"relative",
    top:"10vh",
    width:"100%"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerSytle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
      
    </footer>
  )
}

export default Footer
