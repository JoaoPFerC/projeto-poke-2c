import './Menu.css'
const Menu = () => {

    return(
        <div className="Menu">
          <ul className="nav">
            <li classname="nav-item">
                <a className="nav-link active" href="/home">
                Home
                </a>
             </li>
             <li classname="nav-item">
                <a className="nav-link active" href="/Pokeflex">
                PokeFlex
                </a>
             </li>
              <li classname="nav-item">
                <a className="nav-link active" href="/Pokegrid">
                PokeGrid
                </a>
             </li>
              
          </ul>
        </div>
    )
}

export default Menu