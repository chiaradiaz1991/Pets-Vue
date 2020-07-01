import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // same as [[cat1, cat2, cat3], [dog1, dog1, dog3]]
}
