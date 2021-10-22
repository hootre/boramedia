import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { actions, RESET_TEXT } from '../reducers/SlideReducer';

const Test = () => {
  const { slideText } = useSelector((state: RootState) => state.SlideReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: RESET_TEXT,
    });
  }, []);

  const addTextHandler = () => {
    const value = 'world';

    dispatch(actions.addText({ slideText: value }));
  };

  return (
    <>
      <p>text: {slideText || ''}</p>
      <div>
        <button onClick={addTextHandler}>버튼</button>
      </div>
    </>
  );
};

export default Test;
