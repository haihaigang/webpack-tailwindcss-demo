import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Home() {
  return (
    <div className="mx-auto mt-8 bg-white rounded shadow" style={{width: "220px"}}>
      <div className="p-2 md:p-4">
        <img src="http://file06.shouwuapp.com/1/202109/0AC6995B59CBF6698B52DA5A0272B5EA.jpg?x-oss-process=style/middle" alt="轻薄无扣连帽九分袖风衣" />
      </div>
      <div className="p-2 md:p-4 leading-7 text-left font-bold">
        <div class="mb-2 text-base text-yellow-600">Tommy Hilfiger 制造商</div>
        <div class="mb-3 text-base">轻薄无扣连帽九分袖风衣</div>
        <div class="text-sm">
          ￥<span className="text-2xl">299</span>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById("root"));
