import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toCamelCase = (str: string): string => {
  return str
    .split(/[^a-zA-Z0-9]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export const toSnackCase = (str: string): string => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};

export const toTitleCase = (str: string): string => {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
};

export const toPercentages = (num: number) => {
  return (num / 100).toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

export const formatCurrency = (
  value: number,
  locale: string = "id-ID",
  currency: string = "IDR",
  maximumFractionDigits: number = 0
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(value);
};

export const numberToCurrency = (
  value: number,
  locale: string = "id-ID",
  currency: string = "IDR",
  maximumFractionDigits: number = 0
) => {
  return new Intl.NumberFormat(locale, {
    currency,
    maximumFractionDigits,
  }).format(value);
};

export const formatPercentage = (
  value: number,
  decimalPlaces: number = 2
): string => {
  const percentage = (value * 100).toFixed(decimalPlaces);
  return `${percentage}%`;
};

export const getInitials = (sentence: string): string => {
  const cleanSentence = sentence.replace(/[^\w\s]/g, "");
  const words = cleanSentence.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");

  return initials;
};

export const copyTextToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    toast("Clipboard API is not supported in this browser.");
    return false;
  }
  try {
    await navigator.clipboard.writeText(text);
    toast("Text copied to clipboard");
    return true;
  } catch (err) {
    toast("Failed to copy text to clipboard");
    return false;
  }
};

export function formatQueryURL(value: string): string {
  return encodeURIComponent(value.toLowerCase().replace(/\s+/g, "+"));
}
