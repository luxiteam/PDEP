import axios from 'axios'

export function getbusinessList () {

  const url = 'http://59.202.28.203/PDE/track/report/bscodeMenu'

  axios.get(url).then((news) => {
      this.news = news.data;
    }
  ).catch((err) => {
    console.log(err);
  })
}
