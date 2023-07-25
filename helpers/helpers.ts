import { get } from "../functions/object";

// nonAccentVietnameseName
// Khôi nguyễn --> khoi nguyen
export const nonAccentVietnameseName = (
  name: string,
  removeNumber = true,
  transform?: "toUpperCase" | "toLowerCase"
) => {
  if (removeNumber) {
    name = name.replace(/[0-9]/g, "");
  }
  name = name
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
  if (transform == "toUpperCase") name = name?.toUpperCase();
  if (transform == "toLowerCase") name = name?.toLowerCase();
  return name;
};

export const displayName = (
  name: object,
  locale: string = "vi",
  defaultValue = ""
) => {
  return (
    get(name, locale) || get(name, "en") || get(name, "vi") || defaultValue
  );
};
