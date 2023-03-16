export default function mapId(object,id="id"){
  const {_id,__v,...newObject} = object
  return {...newObject,[id]:_id}
}
