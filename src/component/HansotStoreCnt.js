import Iframe from 'react-iframe'
import './HansotStoreCnt.css'

const HansotStoreCnt = (props) => {
  let data = [] // 옵션에 따른 데이터 담기
  let allData = [] // 옵션이 전체일 경우 모든 데이터 담기
  if(props.opt === '전체'){
    data = props.data?.map(item => {
      return(
        item.list.forEach(marge => allData.push(marge))
      )
    })
    data = allData
  }else{
    data = props.data[0].list
  }
  return(
    <div className="HansotStoreWrap">
      <div className="map">
        <Iframe url={props.map} />
      </div>
      <ul className="storeList">
        {
          data?.map(item => (
            <li key={item.title}>
              <dl>
                <dt>{item.title}</dt>
                <dd>{item.tel}</dd>
                <dd>{item.address}</dd>
                <dd>
                  <button type="button"
                    onClick={() => props.setMap(item.map)}
                  >지도보기</button>
                </dd>
              </dl>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HansotStoreCnt;