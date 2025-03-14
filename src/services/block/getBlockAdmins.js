import { handleApiError, httpClient, Result } from "@/utils";

const getBlockAdmins = async () => {
  try {
    const response = await httpClient.get(`/block/getBlockAdmins`);
    const { data } = response;
    return Result.success(data);
  } catch (e) {
    return handleApiError(e);
  }
};

export default getBlockAdmins;
