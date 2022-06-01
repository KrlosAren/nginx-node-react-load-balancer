import axios from 'axios';

export const fetchApi = async ({
  url,
  method,
  body,
}: {
  url: string;
  method: string;
  body: Object;
}) => {
  try {
    const response = await axios({
      method,
      url,
      data: body,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
