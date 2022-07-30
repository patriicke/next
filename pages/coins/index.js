import axios from "axios";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return <div>Coins</div>;
};

export const getStaticProps = async () => {
  const request = axios.get(
    "https://api.unsplash.com/photos/?client_id=urlARJVsQcnk28YwxFcW9XnviYfx8YKqZtwIk4_9568"
  );
  const response = (await request).data;

  return {
    props: {
      coinData: response
    }
  };
};

export default CoinList;
