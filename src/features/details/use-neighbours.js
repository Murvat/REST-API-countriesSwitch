import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadNeighboursByBorder, selectNeighbours } from './details-slice';

export const useNeighbours = (borders=[]) => {
     const dispatch = useDispatch();
  const neighbours = useSelector(selectNeighbours);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighboursByBorder(borders))
    }
  }, [borders, dispatch]);
    
    return neighbours
}