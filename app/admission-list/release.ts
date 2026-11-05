export const admissionListOpensAt = Date.parse("2026-11-05T12:00:00+08:00");

export function isAdmissionListOpen(now = Date.now()) {
  return now >= admissionListOpensAt;
}
