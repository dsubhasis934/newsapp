import React from 'react'
//we convert this class  based components to function based components,we just remove render function here and decleare expoer at last of the code.
//erase every "this." from every stuff.
//we write useEffect method in function based components which is similarcomponentDidMount lifecycle method in classbased components.
const Navbar = () => {



    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            {/* i found these category names from newsapi */}
                            <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                            <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                            <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                            <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                            <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar