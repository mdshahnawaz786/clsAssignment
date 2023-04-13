import React from 'react'

const Css = () => {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Css Styling</h2>
        <div style={{display:"flex"}}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" height={250} width={250} />
            </div>
            <div>
                <dl>
                    <dt><b>Styling</b></dt>
                    <dd>CSS</dd>
                    <dt><b>Description</b></dt>
                    <dd><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque harum vero dicta iusto, est at labore facilis? Adipisci corporis quidem dicta ullam repudiandae similique, aliquid odit sed facilis impedit ipsa, est nobis nisi ad ratione sunt molestias non corrupti! Dolores.</p></dd>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Css