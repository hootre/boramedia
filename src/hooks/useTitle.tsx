import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from 'src/module';
import { current_title } from '@store/title';

export default function useTitle() {
  const title = useSelector((state: RootState) => state.title.title);
  const dispatch = useDispatch();

  const onCurrentTitle = useCallback((title: String) => dispatch(current_title(title)), [dispatch]);

  return {
    title,
    onCurrentTitle,
  };
}
