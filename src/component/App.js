import Nav from './Nav'
import Footer from './Footer'

import '../common.css'

const App = ({children}) => {
    return(
        <>
            <Nav />
            <div id="allWrap">{children}</div>
            <Footer />
        </>
    )
}

export default App;