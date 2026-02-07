
export const areArrayHaveSameValue = (arr1: (string | number | undefined)[], arr2: (string | number | undefined)[]) => {
  const normalize = (v: string | number | undefined) => {
    if (v === undefined) return undefined;

    return String(v)
      .toLowerCase()
      .trim()          // hapus spasi depan/belakang
      .replace(/\s+/g, ""); // hapus semua spasi
  };

  const norm1 = arr1.map(normalize).sort();
  const norm2 = arr2.map(normalize).sort();

  if (norm1.length !== norm2.length) return false;

  return norm1.every((v, i) => v === norm2[i]);
};
