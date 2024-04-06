import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export function formatBookDate(dateString: string) {
  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const [jour, moisNum, annee] = dateString.split("/");
  const moisTexte = mois[parseInt(moisNum, 10) - 1];

  return `${jour} ${moisTexte} ${annee}`;
}

export function capitalizeFirstLetter(str: string | undefined) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return str.charAt(0).toUpperCase();
}

export function formatDateWithHours(date: Date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as any;
  return date.toLocaleDateString("fr-FR", options);
}

export function initials(str: string | undefined) {
  if (typeof str !== "string" || str.length === 0) {
    return "??";
  }
  const words = str.split(" ");
  const initialsArray = words.map((word) => word.charAt(0).toUpperCase());
  return initialsArray.join("");
}
