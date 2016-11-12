import Mappersmith from 'mappersmith'
import Promise from 'promise'

Mappersmith.Env.USE_PROMISES = true
Mappersmith.Env.Promise = Promise

const manifest = {
  host: '/',
  resources: {
    Failure: {
      count: '/api/failures/count.json',
      overview: '/api/failures.json',
      detail: '/api/failures/{id}.json',
      delete: {path: '/api/failures/delete/{id}', method: 'DELETE'}
    },
    Event: {
      byEntityId: '/api/events/{entityId}.json',
      byId: '/api/events/detail/{id}.json'
    },
    Configurations: {
      configs: '/api/configs.json'
    }
  }
}

export default Mappersmith.forge(manifest)
