import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePagination } from '@/hooks/use-pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  baseUrl = '',
}: PaginationProps) => {
  const {
    pages,
    hasNextPage,
    hasPrevPage,
    nextPageUrl,
    prevPageUrl,
    getPageUrl,
  } = usePagination({ currentPage, totalPages, baseUrl });

  return (
    <nav className="flex items-center justify-center gap-2">
      {hasPrevPage && (
        <Link
          href={prevPageUrl}
          className="p-2 rounded-md card-gradient border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      )}

      {pages.map((pageNum, idx) => (
        <div key={idx}>
          {pageNum === '...' ? (
            <span className="px-4 py-2">...</span>
          ) : (
            <Link
              href={getPageUrl(pageNum as number)}
              className={`px-4 py-2 rounded-md border transition-all ${
                currentPage === pageNum
                  ? 'card-gradient border-gray-300 dark:border-gray-700'
                  : 'card-gradient border-transparent hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              {pageNum}
            </Link>
          )}
        </div>
      ))}

      {hasNextPage && (
        <Link
          href={nextPageUrl}
          className="p-2 rounded-md card-gradient border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      )}
    </nav>
  );
};
