const Footer = () => {
    const today = new Date();

  return (
    <footer>
        <p>Copyrigh &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer