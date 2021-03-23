import { mockInput, mockResult } from './__fixtures__/mockData';
import { characterMapper } from './characterMapper';

describe('CharacterMapper', () => {

  it('Returns the correct format', () => {
    const result = characterMapper(mockInput)

    expect(result).toStrictEqual(mockResult)
  })

  it('Returns null when receives null or undefined', () => {
    const result = characterMapper(null);
    expect(result).toBeNull();

    const result2 = characterMapper(undefined);
    expect(result2).toBeNull();
  })

  it('Returns null when receiving empty object', () => {
    const result = characterMapper({});
    expect(result).toBeNull();
  })
})