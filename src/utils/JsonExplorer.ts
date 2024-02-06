import { JsonSearchProps, RecursiveSearchProps } from "../interfaces";

export const JsonExplorer = ({ data, criteria }: JsonSearchProps): string => {
  const recursiveSearch = ({
    data,
    actualRoute = "",
    criteria,
  }: RecursiveSearchProps): string => {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const result = recursiveSearch({
          data: data[i],
          actualRoute: `${actualRoute}[${i}]`,
          criteria,
        });
        if (result) return result;
      }
    } else if (typeof data === "object" && data !== null) {
      for (const [key, val] of Object.entries(data)) {
        const newPath = actualRoute ? `${actualRoute}.${key}` : key;
        if (newPath === criteria) {
          if (val === null) {
            return "null";
          } else if (typeof val !== "object") {
            return String(val);
          }
        }
        const result = recursiveSearch({
          data: val,
          actualRoute: newPath,
          criteria,
        });
        if (result) return result;
      }
    }
    return "";
  };

  return recursiveSearch({ data, actualRoute: "", criteria });
};
