export interface Country {
  name: string;
  iso2: string;
  dialCode: string;
  dialCodeWithoutAreaCode?: string;
  priority: number;
  areaCodes?: string[];
  flagClass: string;
  placeHolder: string;
}
