import './LiveAnywhere.css';

const LiveAnywhere = ({titleAndPicArray}) => {
    // console.log(titleAndPicArray);

    return (
        <div className="liveAnywhere">
        <p className="liveAnywhere__header">Live anywhere test</p>
        <div className="liveAnywhere__images">
            {titleAndPicArray.map(image => {
                return (
                    <div>
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
