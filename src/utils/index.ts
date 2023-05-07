import { Pagination } from '@apptypes/model';

type PaginationOptions = Partial<Pagination>;
export function initPagination(pagination?: PaginationOptions): Pagination {
  const defaultPagination: Pagination = { totalResults: 0, page: 1, pages: 0, limit: 10 };
  return Object.assign(defaultPagination, pagination);
}
