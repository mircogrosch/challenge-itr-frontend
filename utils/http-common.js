
export const getBranches = async () => {
  const response = await fetch(`${process.env.API_URL}/clients?filter=Turismo en Buenos Aires&page=1`);
  const data = await response.json();
  return data;
};

export const getBenefits = async ()=> { 
    const response = await fetch(`${process.env.API_URL}/clients?filter=haveVoucher&page=1`);
    const data = await response.json();
    return data;
}
