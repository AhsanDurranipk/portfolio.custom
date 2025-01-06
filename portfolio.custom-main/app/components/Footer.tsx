import '../globals.css'

export default function Footer() {
  return (
    <footer className="slide-in-bottom slide-in-elliptic-bottom-fwd">
        <div className="top-footer-cont">
          <div className="columns">
            <span className="Heading">Contact</span>
            <span>Ahsandurranihr@gmail.com</span>
            <span>+92 3180 598 980</span>
            <span>Address: example road, 123 street, Karachi.</span>
          </div>

          <div className="columns">
            <span className="Heading">Portfolio</span>
            <span>Home</span>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>

          <div className="columns">
            <span className="Heading">Support</span>
            <span>Help Center</span>
            <span>FAQs</span>
            <span>Privacy Policy</span>
            <span>Terms of Services</span>
          </div>

          <div className="columns">
            <span className="Heading">Follow Me</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>

        <div className="line"></div>

        <div className="bottom-footer-cont">
          2024 Ahsan Durrani. All rights reserved.
        </div>
      </footer>
  )
}
