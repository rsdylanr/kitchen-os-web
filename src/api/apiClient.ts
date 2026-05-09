// Path: src/api/apiClient.ts

import { logger } from '../services/logger';

/**
 * safeFetch: A robust wrapper for the fetch API. 
 * Purpose: Centralizes error boundaries and prevents silent API failures. [cite: 9]
 */
export async function safeFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  logger.debug('API', `Fetching: ${url}`);

  try {
    const response = await fetch(url, options);

    // Strict validation of HTTP status. [cite: 9]
    if (!response.ok) {
      const errorMsg = `HTTP ${response.status}: ${response.statusText}`;
      logger.error('API', errorMsg);
      throw new Error(errorMsg);
    }

    const data = await response.json();
    logger.debug('API', `Success: ${url}`);
    return data as T;
    
  } catch (error) {
    // Graceful failure handling requirement. 
    logger.error('API', `Fetch failed at ${url}`, error);
    throw error;
  }
}