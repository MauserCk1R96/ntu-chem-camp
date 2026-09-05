export type AdmissionStatus = "正取" | "備取" | "未錄取";

export type PaymentStatus = "已繳費" | "未繳費" | "尚未開放";

export type AdmissionRecord = {
  highSchool: string;
  maskedName: string;
  admissionStatus: AdmissionStatus;
  paymentStatus: PaymentStatus;
};

export const admissionRecords: AdmissionRecord[] = [
  {
    highSchool: "台中八中",
    maskedName: "ちいかわ",
    admissionStatus: "正取",
    paymentStatus: "已繳費",
  },
  {
    highSchool: "咒術高專",
    maskedName: "2.5",
    admissionStatus: "備取",
    paymentStatus: "未繳費",
  },
];

/*
 * 名單維護方式：
 * 1. 請只填入已遮蔽姓名，不要把完整姓名放進專案。
 * 2. 姓名第二個字請以 O 取代，例如「王O明」、「陳O」。
 * 3. 公布正式名單前，請再次確認高中名稱、姓名遮蔽與繳費狀態。
 */
export const admissionRecords: AdmissionRecord[] = [];
