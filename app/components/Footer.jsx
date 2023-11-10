

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cyan-green text-white text-center py-4">
      <p>© {year} Your Company Name. All rights reserved.</p>      
    </footer>
  )
}

export default Footer
