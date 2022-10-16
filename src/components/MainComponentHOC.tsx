import React, {
  FC,
} from 'react';
import { MainComponent } from './index';

interface Props {
  divHeight: string;
}

const MainComponentHOC: FC<Props> = ({divHeight}) => {
  return(
    <MainComponent divHeight={divHeight}/>
  )
}

export default MainComponentHOC;
