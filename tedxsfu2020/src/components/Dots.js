import React from 'react'

const Dot = ({ active, handleClick, index }) => {
  const mobileWidth = 800;

  const getWidth = ()=>{
    if (typeof window === 'undefined') return 0;    
    return window.innerWidth;
  }

  const mobileDecider = (mobileWidth, desktop, mobile)=>{
      return getWidth() > mobileWidth ? desktop : mobile
  }
  
  return (
    <div data-index={index} onClick={(e)=>{
        handleClick(e);
    }} 
        style={{
        marginBottom: mobileDecider(mobileWidth, "25px", "0"),
        marginRight: mobileDecider(mobileWidth, "0", "10px")
    }}>
        <span
      style={{
        paddingRight: "15px",
        cursor: "pointer",
        borderRadius: "50%",
        background: active ? '#E62b1e' : 'grey'
      }}/>
    </div>
    )
  }

  const Dots = ({ slides, activeIndex, handleClick }) =>{
    const mobileWidth = 800;

    const getWidth = ()=>{
      if (typeof window === 'undefined') return 0;    
      return window.innerWidth;
    }

    const mobileDecider = (mobileWidth, desktop, mobile)=>{
        return getWidth() > mobileWidth ? desktop : mobile
    }
    
    return (
      <div
        style={{
          position: "absolute",
          bottom: mobileDecider(mobileWidth, "0", "initial"),
          top: mobileDecider(mobileWidth, "initial", "70vw"),
          right: mobileDecider(mobileWidth, "32.8vw", "0"),
          height: mobileDecider(mobileWidth, "100%", "auto"),
          width: mobileDecider(mobileWidth, "auto", "100%"),
          display: "flex",
          flexDirection: mobileDecider(mobileWidth, "column", "row"),
          alignItems: "center",
          justifyContent: mobileDecider(mobileWidth, "center", "flex-end") ,
          zIndex: "5"
        }}
      >
        {slides.map((slide, i) => (
            <div>
            <Dot key={slide+ i} active={activeIndex === i} index={i} handleClick={handleClick}/>
          </div>
        ))}
      </div>
    )
  } 

  export default Dots