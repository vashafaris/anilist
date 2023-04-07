export const safeJSONParse = (jsonString: string | null, fallback: any = null) => {
  if (jsonString === null) {
    return fallback;
  }

  try {
    return JSON.parse(jsonString);
  } catch {
    return fallback;
  }
};
