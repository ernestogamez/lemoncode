import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (character: apiModel.Character): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  ({
    ...character,
    id: parseInt(character.id),
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
    bestSentences: character.bestSentences,
  } as unknown as apiModel.Character);
