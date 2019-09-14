import React from 'react';

interface IconProps {
  type: string;
  className?: string;
  onClick?: () => void;
}
const Icon:  React.FC<IconProps> = (props: IconProps) =>{
  const { type, className, onClick } = props
  const onIconClick = () => {
    if(onClick)
      onClick()
  }
  return <i className={`iGolaIconFont igola-${type} ${className}`} onClick={onIconClick}/>
}
export default Icon;