import './LiveAnywhere.css';

const LiveAnywhere = ({titleAndPicArray}) => {
    // console.log(titleAndPicArray);

    return (
        <div className="liveAnywhere">
        <p className="liveAnywhere__header">Live Anywhere</p>
        <div className="liveAnywhere__images">
            {titleAndPicArray.map(image => {
                return (
                    <div className="liveAnywhere__images--img">
                        <img src={image.url}></img>
                        <p>{image.title}</p>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default LiveAnywhere;
