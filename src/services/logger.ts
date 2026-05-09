// Path: src/services/logger.ts

import { LogCategory } from '../types';

/**
 * KitchenOS Centralized Logger
 * Requirement: Track API failures, sync errors, and performance timing. [cite: 4]
 * Purpose: Provides verbose logging in development mode to prevent silent failures. [cite: 4, 9]
 */
class KitchenLogger {
  private isDev = import.meta.env.DEV;

  /**
   * Logs debug info to console with custom Apple-inspired styling.
   */
  public debug(category: LogCategory, message: string, data?: unknown) {
    if (this.isDev) {
      console.log(
        `%c[${category}] %c${message}`, 
        'color: #3b82f6; font-weight: bold;', 
        'color: inherit;', 
        data ?? ''
      );
    }
  }

  /**
   * Logs errors to console. Essential for tracking synchronization or API issues. [cite: 4]
   */
  public error(category: LogCategory, message: string, error?: unknown) {
    console.error(
      `%c[${category} ERROR] %c${message}`, 
      'color: #ef4444; font-weight: bold;', 
      'color: inherit;', 
      error ?? ''
    );
  }
}

export const logger = new KitchenLogger();