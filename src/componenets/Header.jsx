import headerImg from "../../public/images/more/15.jpg"

const Header = () => {
      const headerStyle = {
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    return (
         <div style={headerStyle}>
            <img className='h-18 w-18 p-2' src="/images/more/logo1.png" alt="" />
            <h1 className="text-3xl">Espresso Emporium</h1>
        </div>
    );
};

export default Header;