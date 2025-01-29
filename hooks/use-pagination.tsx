import { getPageNumbers } from '@/lib/pagination';

interface UsePaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string;
}

export function usePagination({
  totalPages,
  currentPage,
  baseUrl,
}: UsePaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  return {
    pages,
    hasNextPage,
    hasPrevPage,
    nextPageUrl: `${baseUrl}?page=${currentPage + 1}`,
    prevPageUrl: `${baseUrl}?page=${currentPage - 1}`,
    getPageUrl: (page: number) => `${baseUrl}?page=${page}`,
  };
}
