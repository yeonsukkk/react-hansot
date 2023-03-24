import './HansotStoreOpt.css'

const HansotStoreOpt = (props) => {
  return(
    <div className="HansotStoreOptWrap">
      <select
        onChange={(e) => {
          props.getOpt(e.target.value)
          }}
      >
        <option value="전체">전체</option>
        {
          props.data?.map(item => (
            <option key={item.id} value={item.title}>{item.title}</option>
          ))
        }
      </select>
    </div>
  )
}

export default HansotStoreOpt;