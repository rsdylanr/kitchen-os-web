// Path: src/types/index.ts

/**
 * Global TypeScript Interfaces for KitchenOS
 * Requirement: Strict typing everywhere, no unsafe 'any' types. [cite: 9]
 */

export type AppStatus = 'idle' | 'loading' | 'error' | 'success';

export interface BaseMetadata {
  id: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Core inventory model for Phase 4. 
 * Includes fields for tracking, nutrition, and expiration. [cite: 3, 5]
 */
export interface InventoryItem extends BaseMetadata {
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expirationDate?: string;
  barcode?: string;
  nutritionData?: Record<string, string | number>;
}

// Logging categories for categorized log tracking. [cite: 4]
export type LogCategory = 'API' | 'SYNC' | 'OCR' | 'BARCODE' | 'THEME' | 'GENERAL';

// Standardized API response format. 
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}