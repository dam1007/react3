import React from 'react'

function PortItem({title, category, link, image}) {
    return(
        <article className="port__item">
            <figure className="img">
                <a href={link}>
                <img src={image} alt={title} />
                </a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont({ports}) {
  return (
    <section className="port__cont">
      <div className="container">
        <div className="port__inner">
            {ports.map((elem) => (
                <PortItem title={elem.title} category={elem.category} link={elem.link} image={elem.image} key={elem.title} />
            ))}
            
        </div>
      </div>
    </section>
  )
}

export default PortCont