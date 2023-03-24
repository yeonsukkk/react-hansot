import MainVisual from '../component/MainVisual'
import HansotPromise from '../component/HansotPromise'
import Shortcut from '../component/Shortcut'
import Philosophy from '../component/Philosophy'
import MainNews from '../component/MainNews'

const Home = () => {
    return(
        <div id="mainWrap">
            <MainVisual />
            <HansotPromise />
            <Shortcut />
            <Philosophy />
            <MainNews />
        </div>
    )
}

export default Home;