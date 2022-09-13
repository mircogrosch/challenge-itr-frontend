import { API_URL } from "./contants";

export const getBranches = async () => {
  const response = await fetch(`${API_URL}/clients?filter=Turismo en Buenos Aires&page=1`);
  const data = await response.json();
  return data;
};

export const getBenefits = async ()=> { 
    const response = await fetch(`${API_URL}/clients?filter=haveVoucher&page=1`);
    const data = await response.json();
    return data;
}
