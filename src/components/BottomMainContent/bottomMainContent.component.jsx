import './bottomMainContent.style.css'
import BottomMainContentItem from '../BottomMainContentItem/bottomMainContentItem.component'
import logoCss from '../../assets/imgs/css-icon1.png'
import logoHtml from '../../assets/imgs/html-icon1.png'
import logoUrl from '../../assets/imgs/url-icon1.png'

function BottomMainContent() {
    const bottomMainContentItems = [
        {
            title: 'Lorem ipsum dolor sit amet',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
            image: logoCss
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
            image: logoHtml
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
            image: logoUrl
        }
    ]

    return (
        <div className='bottomMainContent' style={{display: 'flex', justifyContent: 'space-between'}}>
            {
                bottomMainContentItems.map(item => <BottomMainContentItem title={item.title} paragraph={item.paragraph} thumbnail={item.image}/>)
            }
        </div>
    )
}

export default BottomMainContent