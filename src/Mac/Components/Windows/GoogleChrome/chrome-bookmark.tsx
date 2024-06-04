import "./chrome-bookmark.css"

type ChromeBookmarkProps = {
    title: string;
    icon: string;
    alt: string;
}


function ChromeBookmark({title, icon, alt}: ChromeBookmarkProps) {
    return (
        <div className="chrome-bookmark">
            <img className="chrome-bookmark-icon" src={icon} alt={alt}/>
            <label className="chrome-bookmark-title">{title}</label>
        </div>
    )
}

export default ChromeBookmark