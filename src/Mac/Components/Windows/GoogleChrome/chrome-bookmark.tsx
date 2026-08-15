import "./chrome-bookmark.css"

type ChromeBookmarkProps = {
    title: string;
    icon: string;
    alt: string;
    onClick: () => void;
}


function ChromeBookmark({title, icon, alt, onClick}: ChromeBookmarkProps) {
    return (
        <div className="chrome-bookmark" onClick={onClick}>
            <img className="chrome-bookmark-icon" src={icon} alt={alt}/>
            <label className="chrome-bookmark-title">{title}</label>
        </div>
    )
}

export default ChromeBookmark