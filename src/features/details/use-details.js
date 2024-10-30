import { clearDetails, loadCountryByName,selectDetails } from '../details/details-slice'
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

export const  useDetails = (name) => {
    const dispatch = useDispatch();

  
  const { currentCountry, error, status } = useSelector(selectDetails);
  
    useEffect(() => {
        dispatch(loadCountryByName(name));
        
        return () => {
            dispatch(clearDetails())
        }
    }, [name, dispatch]);

    return [error,status,currentCountry]
}