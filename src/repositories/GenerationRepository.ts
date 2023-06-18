import axiosInstance from '@infra/http/axios/api';
import IGenerationData from '@models/IGeneration';

const getGenerationData = async (
  dataType: string
): Promise<IGenerationData> => {
  try {
    const response = await axiosInstance.get(
      `/plant/generation/test-2023?dataType=${dataType}`
    );
    return response.data.data as IGenerationData;
  } catch (error) {
    throw new Error('Failed to fetch generation data');
  }
};

export default {
  getGenerationData,
};
