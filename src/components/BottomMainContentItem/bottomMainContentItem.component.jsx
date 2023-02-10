import './bottomMainContentItem.style.css'

function BottomMainContentItem({ title, paragraph, thumbnail }) {
    return (
        <div className='bottomMainContentItem'>
            <h2>{title}</h2>
            <p>
                <img src={thumbnail} alt="thumbnail" />
                {paragraph}
            </p>
        </div>
    )
}

export default BottomMainContentItem