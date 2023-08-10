import { ReactElement } from 'react';
import classes from './Combobox.module.scss';
import { BoxItem } from '../../../../domain/ui-models/combobox.model';

export function ComboboxItem(props: BoxItem): ReactElement {
  return (
    <div className={classes['option-item']}>
      <img
        src={props.imageUrl}
        alt={props.text}
        className={classes['option-image']}
        style={{ width: '20px', height: '20px', marginRight: '8px' }} // Add margin-right for spacing
      />
      <div className={classes['option-text']}>
        {props.name} ({props.text})
      </div>
    </div>
  );
}
