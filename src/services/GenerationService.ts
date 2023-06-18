import IGenerationData from '@models/IGeneration';
import GenerationRepository from '../repositories/GenerationRepository';

const getGenerationData = async (
  dataType: string
): Promise<IGenerationData> => {
  const generationData = await GenerationRepository.getGenerationData(dataType);
  return generationData;
};

export default {
  getGenerationData,
};
