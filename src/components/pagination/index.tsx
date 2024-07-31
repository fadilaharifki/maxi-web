import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { twMerge } from "tailwind-merge";

interface PaginationComponnetInterface {
  totalPages?: number;
  currentPage?: number;
  handlePageChange?: (val: number) => void;
}

export function PaginationComponnet({
  totalPages = 1,
  currentPage = 1,
  handlePageChange = () => {},
}: PaginationComponnetInterface) {
  const maxDisplayPages = 5; // Maximum number of page numbers to display
  const halfDisplayPages = Math.floor(maxDisplayPages / 2);
  let startPage = Math.max(currentPage - halfDisplayPages, 1);
  let endPage = Math.min(currentPage + halfDisplayPages, totalPages);

  if (currentPage <= halfDisplayPages) {
    endPage = Math.min(maxDisplayPages, totalPages);
  } else if (currentPage + halfDisplayPages >= totalPages) {
    startPage = Math.max(totalPages - maxDisplayPages + 1, 1);
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem
          className="cursor-pointer"
          onClick={() => {
            if (currentPage !== 1) handlePageChange(currentPage - 1);
          }}
        >
          <PaginationPrevious
            className={twMerge(
              "cursor-pointer",
              currentPage === 1 ? "text-gray-400 hover:text-gray-400" : ""
            )}
          />
        </PaginationItem>

        {/* Leading Ellipsis */}
        {startPage > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Page Numbers */}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, index) => startPage + index
        ).map((page) => (
          <PaginationItem key={page} onClick={() => handlePageChange(page)}>
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Trailing Ellipsis */}
        {endPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem
          onClick={() => {
            if (currentPage !== totalPages) handlePageChange(currentPage + 1);
          }}
        >
          <PaginationNext
            className={twMerge(
              "cursor-pointer",
              currentPage === totalPages
                ? "text-gray-400 hover:text-gray-400"
                : ""
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
