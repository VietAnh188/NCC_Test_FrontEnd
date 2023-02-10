import SideBarOption from '../SideBarOption/sideBarOption.component'
import './leftBar.css'

function LeftBar() {
    const sideBarOptions = ['Home', 'Services', 'News', 'Blog', 'Contact']

    return (
        <div className='leftBar'>
            {
                sideBarOptions.map(content => <SideBarOption content={content}/>)
            }
        </div>
    )
}

export default LeftBar