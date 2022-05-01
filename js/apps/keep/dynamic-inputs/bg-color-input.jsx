

export function BgColorInput({handleStyleChange, togglePalette}){
    const colors = ['#fff', '#f28b82','#fbbc04',' #fff475','#d7aefb','#e8eaed','#a7ffeb']

    return <section className="bg-input-selector flex">
        <div className="items-container flex">
            {colors.map(color=> {
                return <div className="bg-item" key={color} 
                style={{backgroundColor: color}}
                onClick={()=> handleStyleChange('backgroundColor', color)}
                ></div>
            })}
            <button className="btn" onClick={togglePalette} >X</button>
        </div>
    </section>
}