function OverViewContent({data, className, title, content}) {
    return(
        <div className={`overview__container ${className}`}>
            <div className={`overview__header ${className}`}>
                <h1 className = {`overview__header__title ${className}`}>{title}</h1>
                <p className = {`overview__header__content ${className}`}>{content}</p>
            </div>
            <div className={`overview__item ${className}`}>
                {data.map((item,index) => (
                    <div key={index}    className={`overview__item__img ${className}`}>
                        <img src={item.image} alt="" />
                        <p className="overview__item__name"> {item.name} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default OverViewContent