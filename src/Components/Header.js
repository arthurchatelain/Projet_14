// Return the Header component with the logo and the title

export default function Header() {
    return (
        <header>
            <div className='logoContainer'><img src={require('../Assets/Images/LOGO_WEALTH.png')} alt='logo' /><p>HEALTH WEALTH</p></div>
        </header>
    )
}