// Leadership cards. These are placeholders: replace name, role and photo
// with real details. Photos go in public/assets/team/ (about 4:3, WebP or
// JPG, at least 800 px wide); set `photo` to e.g. "/assets/team/name.webp".

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo?: string;
};

export const leadership: TeamMember[] = [
  { id: "leader-1", name: "[Name]", role: "[Role]" },
  { id: "leader-2", name: "[Name]", role: "[Role]" },
  { id: "leader-3", name: "[Name]", role: "[Role]" },
];
