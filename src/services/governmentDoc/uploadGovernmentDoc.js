import { handleApiError, httpClient, Result } from "../../utils";

const uploadGovernmentDoc = async (formData, type) => {
  try {
    let response;

    if (type === "book") {
      response = await httpClient.post(
        `/governmentDoc/uploadGovernmentDoc/book`,
        formData
      );
    } else {
      response = await httpClient.post(
        `/governmentDoc/uploadGovernmentDoc/gr`,
        formData
      );
    }
    const { data } = response;
    return Result.success(data);
  } catch (e) {
    return handleApiError(e);
  }
};

export default uploadGovernmentDoc;
