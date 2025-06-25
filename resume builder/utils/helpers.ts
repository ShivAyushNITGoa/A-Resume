/**
 * Formats a date string from ISO format (YYYY-MM-DD) to a more readable format (Month Year)
 * 
 * @param dateString - The date string to format (e.g., "2020-01-01")
 * @returns Formatted date string (e.g., "January 2020")
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

/**
 * Creates initials from a full name
 * 
 * @param name - The full name to create initials from
 * @returns The initials (e.g., "John Doe" => "JD")
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
};

/**
 * Gets the correct asset path based on whether the app is running in 
 * production (GitHub Pages) or development
 * 
 * @param path - The relative path to the asset (e.g., "/images/logo.svg")
 * @returns The correct path for the current environment
 */
export const getAssetPath = (path: string): string => {
  if (!path) return '';
  
  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Add the base path for production (GitHub Pages)
  if (process.env.NODE_ENV === 'production') {
    return `/new-resume/${cleanPath}`;
  }
  
  // Return the original path with leading slash for development
  return `/${cleanPath}`;
};

/**
 * Truncates text to a specific length and adds ellipsis if needed
 * 
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns The truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  
  return text.substring(0, maxLength) + '...';
};

/**
 * Joins an array of strings with commas and "and" for the last item
 * 
 * @param items - Array of strings to join
 * @returns A grammatically formatted string
 */
export const formatList = (items: string[]): string => {
  if (!items || items.length === 0) return '';
  if (items.length === 1) return items[0];
  
  const lastItem = items[items.length - 1];
  const allButLast = items.slice(0, -1);
  
  return `${allButLast.join(', ')} and ${lastItem}`;
};

/**
 * Calculates experience duration in years and months
 * 
 * @param startDate - Start date string (YYYY-MM-DD)
 * @param endDate - End date string or null for current date (YYYY-MM-DD)
 * @returns Duration as a string (e.g., "2 years, 3 months")
 */
export const calculateDuration = (startDate: string, endDate?: string): string => {
  if (!startDate) return '';
  
  try {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();
    
    let years = yearsDiff;
    let months = monthsDiff;
    
    if (monthsDiff < 0) {
      years--;
      months += 12;
    }
    
    const yearsText = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
    const monthsText = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '';
    
    if (yearsText && monthsText) {
      return `${yearsText}, ${monthsText}`;
    }
    
    return yearsText || monthsText || 'Less than a month';
  } catch (error) {
    console.error('Error calculating duration:', error);
    return '';
  }
};