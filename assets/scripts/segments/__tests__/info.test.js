/* eslint-env jest */
import module, {
  getSpriteDef,
  getAllSegmentInfo,
  getSegmentInfo,
  getSegmentVariantInfo
} from '../info'

const SPRITE_DEFS = module.__get__('SPRITE_DEFS')

describe('segment info', () => {
  it('gets a sprite definition with a string id', () => {
    const id = 'trees--palm-tree'
    const sprite = getSpriteDef(id)

    expect(sprite).toEqual(SPRITE_DEFS[id])
  })

  it('overwrites sprite definition properties with an object', () => {
    const id = 'bikes--bike-rack-perpendicular-left'
    const ref = {
      id,
      offsetY: 5.25
    }

    const sprite = getSpriteDef(ref)

    expect(sprite).toEqual(Object.assign({}, SPRITE_DEFS[id], ref))
  })

  it('returns a cloned definition that does not allow modification of the original data', () => {
    const id = 'ground--concrete'
    const sprite = getSpriteDef(id)

    sprite.foo = 'bar'

    expect(SPRITE_DEFS[id].foo).toEqual(undefined)
  })

  describe('getAllSegmentInfo()', () => {
    it('returns all segment data', () => {
      const segments = getAllSegmentInfo()
      expect(segments['sidewalk'].name).toEqual('Sidewalk')
    })
  })

  describe('getSegmentInfo()', () => {
    it('returns data for a segment type', () => {
      const segment = getSegmentInfo('sidewalk')
      expect(segment.unknown).toBeFalsy()
    })

    it('returns placeholder data for an unknown segment type', () => {
      const segment = getSegmentInfo('foo')
      expect(segment.unknown).toBe(true)
    })
  })

  describe('getSegmentVariantInfo()', () => {
    it('returns data for a segment variant', () => {
      const variant = getSegmentVariantInfo('sidewalk', 'normal')
      expect(variant.unknown).toBeFalsy()
    })

    it('returns placeholder data for an unknown variant', () => {
      const variant = getSegmentVariantInfo('sidewalk', 'foo')
      expect(variant.unknown).toBe(true)
    })

    it('returns placeholder data for an unknown segment type and variant', () => {
      const variant = getSegmentVariantInfo('foo', 'bar')
      expect(variant.unknown).toBe(true)
    })
  })
})
