import React, { useState } from 'react';
import styles from './index.module.less';
import { Popover } from 'antd';
import { SketchPicker } from 'react-color';
interface ColorProps {
  inintColor?: string;
  onColorChange?: (color) => void;
}
const Color: React.FC<ColorProps> = (props) => {
  const { inintColor, onColorChange } = props
  const [color, setColor] = useState(inintColor || '#333');
  const [visible, setVisible] = useState(false)
  const handleColorChange = (color) => {
    const { hex } = color;
    setColor(hex)
    onColorChange(hex);
    setVisible(false)
  }
  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }
  return (
    <div className={styles['field-image']}>
      <div className={styles['item-image']}>
        <div className={styles['ui-label']}>
          <div className={styles['ui-label-title']}>
            颜色
          </div>
        </div>
        <div className={styles['ui-content']}>
          <div className={styles['swatch']}>
            <Popover content={
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
              />
            }
              placement="bottom"
              trigger="click"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <div className={styles['popover-view']}>
                <div className={styles['color']} style={{ background: color }}></div>
                <div>{color}</div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Color;