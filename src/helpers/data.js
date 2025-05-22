import { dataTableRecords, filesData, invoicesData, socialUserData, userData } from "@/assets/data/other";
import { productData } from "@/assets/data/Product";
import { sleep } from "@/utils/promise";

// export const getBrandsList = async (): BrandListType[] => {
//   return brandListData
// }

export const getAllUsers = async () => {
  return userData;
};
export const getUserById = async id => {
  const user = userData.find(user => user.id === id);
  if (user) {
    await sleep();
    return user;
  }
};
export const getAllInvoices = async () => {
  const data = invoicesData.map(item => {
    const users = socialUserData.find(product => product.id === item.userId);
    const products = productData.find(product => product.id === item.productId);
    return {
      ...item,
      users,
      products
    };
  });
  await sleep();
  return data;
};
export const getAllDataTableRecords = async () => {
  await sleep();
  return dataTableRecords;
};
export const getAllFiles = async () => {
  const data = filesData.map(item => {
    const user = socialUserData.find(user => user.id == item.userId);
    return {
      ...item,
      user
    };
  });
  await sleep();
  return data;
};