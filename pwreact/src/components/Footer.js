import logo from '../assets/juanmarin-white.svg'

const Footer = (props) => {
  return (
    <footer className="footer">
      <a href="https://juanmarin.netlify.app/" target="_blank" rel="noopener noreferrer">
        Powered by{' '}
        <span className="logo">
          <img src={logo} alt="Juan Marin Logo" width={950/14} height={333/14} />
        </span>
      </a>
    </footer>
  )
}
export default Footer;
