export const projectStatus: Record<string, { label: string; labelEn: string; cls: string }> = {
  funcional: { label: "Funcional", labelEn: "Functional", cls: "bg-green-500/90 text-green-950" },
  "en-desarrollo": {
    label: "En desarrollo",
    labelEn: "In development",
    cls: "bg-amber-400/90 text-amber-950",
  },
  experimental: {
    label: "Experimental",
    labelEn: "Experimental",
    cls: "bg-purple-500/90 text-purple-950",
  },
};
