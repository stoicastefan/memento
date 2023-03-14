const Card = ({ image, selected, onClick }) => {
    return(
        <div className="card">
            <div className={selected && 'selected'}>
                <img src={image} alt="" className="card-face"/>
                <img 
                    src={'/assets/fireship.png'}
                    className="card-back"
                    onClick={onClick}
                    alt="" 
                />
            </div>
        </div>
    )
}

export default Card;