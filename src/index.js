import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Image from "./image";

// const p1 = 'https://centralrecorder.com/wp-content/uploads/2021/07/loki_teaser_poster.jpg';
// const img2 = 'https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
// const title={
//   ttl:'hello',
// }

/************************Array of object******************/

/*const Episode = [
  {
    text: 'Episode 1',
    to: 'https://www.hotstar.com/in/tv/loki/1260063451/glorious-purpose/1260063525',
    img: 'https://pyxis.nymag.com/v1/imgs/db6/af1/e69b0d53b0820a71d0b1c971493396c619-loki-.rsquare.w700.jpg',
  },

  {
    text: 'Episode 2',
    to: 'https://www.hotstar.com/in/tv/loki/1260063451/the-variant/1260063789',
    img: 'data:image/jpeg;base64,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',
  },

  {
    text: 'Episode 3',
    to: 'https://www.hotstar.com/in/tv/loki/1260063451/lamentis/1260064078',
    img: 'https://cdn.mos.cms.futurecdn.net/8mr9KxLsPi4HrCEmrvDwPL.jpg',
  },
  {
    text: 'Episode 4',
    to: 'https://www.hotstar.com/in/tv/loki/1260063451/the-nexus-event/1260064464',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/2x/lmt2640_103_comp_v031_20210609_r709.1068_r.jpg',
  },

  {
    text: 'Episode 5',
    to: 'https://www.hotstar.com/in/tv/loki/1260063451/journey-into-mystery/1260064686',
    img: 'https://static.toiimg.com/photo/83308296.cms',
  },

  {
    text: 'Episode 6',
    to: 'https://www.hotstar.com/in/tv/loki/1260063451/for-all-time-always/1260064971',
    img: 'https://images.indianexpress.com/2021/07/loki-ep-6-1200-1.jpg',
  }
]*/


function Name() {
  return (
    <section className="list" >

      {/**************Mapping over array************/}
      {/* {Episode.map((Episode) => {
      const { text, to, img } = Episode;
      return (
        <>
          <h2>{text}</h2>
          <Image img={img}/>
        </>
      )
    })} */}

      {/* <Image text={<h4><a href='https://www.hotstar.com/in/tv/loki/1260063451/glorious-purpose/1260063525' target="_blank">Loki Ep01</a></h4>} img='https://pyxis.nymag.com/v1/imgs/db6/af1/e69b0d53b0820a71d0b1c971493396c619-loki-.rsquare.w700.jpg' /> */}
      
      <Pic />
      <Image text={<h4>Episode 01</h4>} to='https://www.hotstar.com/in/tv/loki/1260063451/glorious-purpose/1260063525' img='https://pyxis.nymag.com/v1/imgs/db6/af1/e69b0d53b0820a71d0b1c971493396c619-loki-.rsquare.w700.jpg' />
      <Image text={<h4>Episode 02</h4>} to='https://www.hotstar.com/in/tv/loki/1260063451/the-variant/1260063789' img='data:image/jpeg;base64,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' />
      <Image text={<h4>Episode 03</h4>} to='https://www.hotstar.com/in/tv/loki/1260063451/lamentis/1260064078' img='https://cdn.mos.cms.futurecdn.net/8mr9KxLsPi4HrCEmrvDwPL.jpg' />
      <Image text={<h4>Episode 04</h4>} to='https://www.hotstar.com/in/tv/loki/1260063451/the-nexus-event/1260064464' img='https://terrigen-cdn-dev.marvel.com/content/prod/2x/lmt2640_103_comp_v031_20210609_r709.1068_r.jpg' />
      <Image text={<h4>Episode 05</h4>} to='https://www.hotstar.com/in/tv/loki/1260063451/journey-into-mystery/1260064686' img='https://static.toiimg.com/photo/83308296.cms' />
      <Image text={<h4>Episode 06</h4>} to='https://www.hotstar.com/in/tv/loki/1260063451/for-all-time-always/1260064971' img='https://images.indianexpress.com/2021/07/loki-ep-6-1200-1.jpg' />

      {/* <Lst /> */}
    </section>
  );
}

const Pic = () => {
  return (
    <div>
      <img className='cover' src="https://cdn.mos.cms.futurecdn.net/d7vgkKkZkNAUwxffyNkt8k-1200-80.jpg" alt=''></img>
      <div className="bottom-left">Watch Season 1 now</div>
    </div>
  )
}

ReactDOM.render(<Name />, document.getElementById("root"));

