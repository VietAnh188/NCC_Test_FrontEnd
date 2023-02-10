import './mainContent.style.css'
import logoNCC from '../../assets/imgs/logoNCC1.png'
import TopMainContent from '../TopMainContent/topMainContent.component'
import BottomMainContent from '../BottomMainContent/bottomMainContent.component'
import Copyright from '../Copyright/copyright.component'

function MainContent() {
    return (
        <div className='mainContent'>
            <div className='contentContainer'>
                <div>
                    <img src={logoNCC} alt="logo" className='logoNCC'/>
                </div>
                <TopMainContent/>
                <BottomMainContent/>
            </div>
            <Copyright/>
        </div>
    )
}

export default MainContent