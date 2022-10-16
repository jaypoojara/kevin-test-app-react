import {
  FC,
  useEffect,
  useState
} from 'react';
import './styles.css';

interface Props {
  divHeight: string;
}

function getWindowWidth() {
  const {innerWidth} = window;
  return innerWidth;
}

const MainComponent: FC<Props> = ({divHeight}) => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  // const [divHeight, setDivHeight] = useState<string>('40');

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  return(
    <div id={'mainComponent'} style={{height: `${divHeight}px`}}>
      <span>
        Window Width: {windowWidth}
      </span>
      <input type={'number'} value={divHeight} onKeyPress={(event) => {
        const newHeight = divHeight + event.key;
        (window as any).setDivHeight(newHeight);
      }}
      onKeyDown={event => {
        if (event.key === 'Backspace') {
          // setDivHeight(oldValue => oldValue.slice(0, -1))
          (window as any).setDivHeight(divHeight.slice(0, -1));
        }
      }}
      />
    </div>
  )
}

export default MainComponent;
