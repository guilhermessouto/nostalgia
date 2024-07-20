import { useQuery } from '@tanstack/react-query';
import * as api from '../services/api';
import { Categories } from '../types/types';

export const useGetCategories = () => {
  return useQuery<Categories>({
    queryKey: ['categories'],
    queryFn: api.getCategories
  })
}