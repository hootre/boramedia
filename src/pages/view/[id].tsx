import VideoDetail from '@components/VideoDetail';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { Head } from 'next/document';
import { VFC } from 'react';
import { Loader } from 'semantic-ui-react';
interface Props {
  item: any;
}
const Detail: VFC<Props> = ({ item }) => {
  return <VideoDetail />;
};
export default Detail;

// export async function getStaticPaths() {
//   const playlistId = 'PLpfkvkkwITRlx3Dv0UB0kZC5sDGMlyAFh';
//   const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
//   const res = await axios.get(apiUrl);
//   const data: Object[] = res.data;

//   return {
//     // paths: [{ params: { id: '740' } }, { params: { id: '730' } }, { params: { id: '729' } }],
//     paths: data.map((item: any) => ({
//       params: {
//         id: item.id.toString(),
//       },
//     })),
//     fallback: true,
//   };
// }

// export async function getStaticProps() {
//   const playlistId = 'PLpfkvkkwITRlx3Dv0UB0kZC5sDGMlyAFh';
//   const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
//   const res = await axios.get(apiUrl);
//   const data = res.data;

//   return {
//     props: {
//       item: data,
//     },
//   };
// }
