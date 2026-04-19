import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatCount(value) {
  return new Intl.NumberFormat().format(value || 0);
}

export function chunk(items = [], size = 4) {
  const output = [];
  for (let i = 0; i < items.length; i += size) output.push(items.slice(i, i + size));
  return output;
}
