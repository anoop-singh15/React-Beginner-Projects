import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css'


export default function ImageSlider({ url, limit  }) {
    const [images, setImages] = useState([]);
    const [currSlide, setCurrSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log(url);

    async function fetchImages(geturl) {
        try {
            setLoading(true);
            const res = await fetch(`${geturl}?page=1&limit=${limit}`);
            const data = await res.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }

        }
        catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }


    function handlePrevious() {
        setCurrSlide(currSlide === 0 ? images.length - 1 : currSlide - 1);
    }
    function handleNext() {
        setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1);
    }

    useEffect(() => {
        if (url !== "") {
            fetchImages(url);
        }
    }, [url])

    console.log(images)

    if (loading) {
        return <div>Loading....</div>
    }
    if (errorMsg !== null) {
        return <div>Error occured? {errorMsg}</div>
    }

    return (
        <div className="container">
            {/* {images} */}
            <BsArrowLeftCircleFill
                className="arrow arrow-left"
                onClick={handlePrevious}
            />
            {
                images && images.length ? images.map((image, index) => (
                    <img
                        key={image.id}
                        alt={image.download_url}
                        src={image.download_url}
                        className={currSlide === index ? "curr-image" : "hide-curr-image"}
                    />
                )) : null
            }
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
            <span className="circle-indicators"> {
                images && images.length ?
                    images.map((_, index) => (<button
                        key={index}
                        className={currSlide ===index ? "current-indicator" : "current-indicator hide-current-indicator"}
                        onClick={() => setCurrSlide(index)}>

                    </button>)) : null
            }
            </span>

        </div>
    );
}