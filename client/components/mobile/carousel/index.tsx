import React from 'react';


interface NormalPadProps {
  img?: string;
  link?: string;
  onClick?: () => void;
}
const NormalPad: React.FC<NormalPadProps> = (props) => {
  console.dir(props)
  const link = () => {
    if (props.onClick) {
      props.onClick();
    } else {
      location.href = props.link;
    }

  }
  return (
    <div onClick={link}>
      <img src={props.img} />
    </div>
  )
}
export default NormalPad;