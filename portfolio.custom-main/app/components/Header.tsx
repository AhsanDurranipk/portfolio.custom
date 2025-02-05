import Link from "next/link"
import '@/app/globals.css'

export default function Header() {
  return (
    <header className="puff-in-center">
    <div className="logo">
      Ahsan<span>Durrani</span>
    </div>
    <nav>
      <Link href={"./"} className="link">
        Home
      </Link>
      <Link href={"./About"} className="link">
        About
      </Link>
      <Link href={"./Projects"} className="link">
        Projects
      </Link>
      <Link href={"./Contact"} className="link">
        Contact
      </Link>
      <Link className="btn-link" href={'https://api.whatsapp.com/send/?phone=03180598980&text=hello-ahsan&type=phone_number&app_absent=0'} target="_blank"> <button className="h-btn">  Appointment </button></Link>
    </nav>
  </header>

  )
}
